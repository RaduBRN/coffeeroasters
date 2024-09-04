"use client";

import { useState, useEffect } from "react";
import questions from "@/public/data/CoffeeSelectionData";
import PlanSummary from "./PlanSummary";
import Button from "../shared/Button";
import IconArrow from "../icons/IconArrow";
import CheckoutModal from "./CheckoutModal";
import { Dispatch, SetStateAction } from "react";
import { useDisclosure } from "@nextui-org/modal";

interface selectedAnswersType {
  [index: number]: number;
}

interface SubscriptionQuestionnaireProps {
  selectedAnswers: selectedAnswersType;
  setSelectedAnswers: Dispatch<SetStateAction<selectedAnswersType>>;
}

interface AnswerItemType {
  id: number;
  disable_question?: number;
}

const SubscriptionQuestionnaire: React.FC<SubscriptionQuestionnaireProps> = ({
  selectedAnswers,
  setSelectedAnswers,
}) => {
  const [answerDisplay, setAnswerDisplay] = useState<any>([]);
  const [totalQuestions, setTotalQuestions] = useState<number>(
    questions.length
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function checkDisable(question_id: number) {
    let disableQuestion: boolean = false;

    questions.map((question_item) => {
      question_item?.answers?.map((answer_item: AnswerItemType) => {
        if (
          answer_item?.disable_question &&
          selectedAnswers[question_item.id] === answer_item.id &&
          answer_item?.disable_question === question_id
        ) {
          disableQuestion = true;
          return;
        }
      });
    });

    return disableQuestion;
  }

  useEffect(() => {
    let tempSelectedAnswers = { ...selectedAnswers };
    let tempAnswerDisplay = { ...answerDisplay };
    let stateChanged = false;
    let totalQuestions = questions.length;

    questions.map((question_item) => {
      question_item?.answers?.map((answer_item: AnswerItemType) => {
        if (
          answer_item?.disable_question &&
          selectedAnswers[question_item.id] === answer_item.id
        ) {
          totalQuestions -= 1;
          if (answer_item?.disable_question in selectedAnswers) {
            delete tempSelectedAnswers[answer_item.disable_question];
            delete tempAnswerDisplay[answer_item.disable_question];
            stateChanged = true;
          } else {
            return;
          }
        }
      });
    });

    if (stateChanged) {
      setSelectedAnswers(tempSelectedAnswers);
      setAnswerDisplay(tempAnswerDisplay);
    }

    setTotalQuestions(totalQuestions);
  }, [selectedAnswers]);

  type AnswerDisplayState = {
    [question_id: string]: boolean;
  };

  function displayAnswers(question_id: number) {
    setAnswerDisplay((prevState: AnswerDisplayState) => ({
      ...prevState,
      [question_id]: !answerDisplay[question_id],
    }));
  }

  function handleAnswerSelection(question_id: number, answer_id: number) {
    setSelectedAnswers((prevState: selectedAnswersType) => ({
      ...prevState,
      [question_id]: answer_id,
    }));
  }

  type answerStyleType = {
    mainDiv: string;
    headerColour: string;
    contentColour: string;
  };

  const answerStyle = (
    question_id: number,
    answer_id: number
  ): answerStyleType => {
    let mainDiv = "bg-[#F4F1EB] hover:bg-paleorange";
    let headerColour = "text-darkgreyblue";
    let contentColour = "text-darkgreyblue";

    if (answer_id === selectedAnswers[question_id]) {
      mainDiv = "bg-darkcyan";
      headerColour = "text-white";
      contentColour = "text-lightcream";
    }

    return {
      mainDiv,
      headerColour,
      contentColour,
    };
  };

  return (
    <div id="questionnaire" className="flex flex-col gap-16 md:gap-20 w-full">
      {questions?.map((question_item) => (
        <div
          key={question_item.id}
          className={`flex flex-col gap-12 ${
            checkDisable(question_item.id) && "opacity-50"
          }`}
        >
          <div
            id={`question_${question_item.id}`}
            className="flex items-center justify-between cursor-pointer gap-5"
            onClick={() =>
              !checkDisable(question_item.id) &&
              displayAnswers(question_item.id)
            }
          >
            <div>
              <h2 className="text-grey">{question_item.question}</h2>
            </div>
            <div>
              <IconArrow
                displayedQuestion={answerDisplay}
                questionId={question_item.id}
                checkDisabled={checkDisable}
              />
            </div>
          </div>
          <div
            className={`${
              answerDisplay[question_item.id] && !checkDisable(question_item.id)
                ? "grid"
                : "hidden"
            } grid-cols-1 md:grid-cols-3 gap-5`}
          >
            {question_item?.answers?.map((answer_item) => (
              <div
                key={answer_item.id}
                className={`flex flex-col gap-5 px-6 lg:px-8 pt-8 pb-8 md:pb-14 cursor-pointer ${
                  answerStyle(question_item.id, answer_item.id)?.mainDiv
                } rounded-lg`}
                onClick={() =>
                  handleAnswerSelection(question_item.id, answer_item.id)
                }
              >
                <h4
                  className={
                    answerStyle(question_item.id, answer_item.id)?.headerColour
                  }
                >
                  {answer_item.title}
                </h4>
                <p
                  className={
                    answerStyle(question_item.id, answer_item.id)?.contentColour
                  }
                >
                  {"&#34;2&#34;" in selectedAnswers &&
                  question_item.id === 4 ? (
                    <>
                      {questions[2]?.answers?.[selectedAnswers[2]]?.prices?.[
                        answer_item.id
                      ]?.description ?? "Default description"}
                    </>
                  ) : (
                    <>{answer_item.answer}</>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <CheckoutModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        selectedAnswers={selectedAnswers}
      />
      <PlanSummary selectedAnswers={selectedAnswers} />
      <div className="flex justify-center lg:justify-end w-full -mb-20 md:-mb-0">
        <Button
          func={onOpen}
          disabled={Object.keys(selectedAnswers).length !== totalQuestions}
        >
          Create my plan!
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionQuestionnaire;
