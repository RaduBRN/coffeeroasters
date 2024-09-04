import questions from "@/public/data/CoffeeSelectionData";

interface selectedAnswersType {
  [index: number]: number;
}

interface PlanSummaryProps {
  selectedAnswers: selectedAnswersType;
}

const PlanSummary: React.FC<PlanSummaryProps> = ({ selectedAnswers }) => {
  const answer_1 = questions[0].answers[selectedAnswers[0]]?.title ?? "______";
  const answer_2 = questions[1].answers[selectedAnswers[1]]?.title ?? "______";
  const answer_3 = questions[2].answers[selectedAnswers[2]]?.title ?? "______";
  const answer_4 =
    "3" in selectedAnswers ? (
      <>
        {" "}
        ground ala{" "}
        <span className="text-darkcyan">
          {questions[3].answers[selectedAnswers[3]]?.title}
        </span>
      </>
    ) : null;
  const answer_5 = questions[4].answers[selectedAnswers[4]]?.title ?? "______";

  return (
    <div className="flex flex-col gap-5 rounded-lg bg-[url('/assets/plan/desktop/bg-order-summary.png')] bg-cover p-12 px-8 md:px-20 bg-[#2C343E]">
      <p className="uppercase text-white opacity-50">Order Summary</p>
      <h4 className="text-white leading-[40px] tracking-[1.1]">
        &quot;I drink my coffee {answer_1 === "Capsules" ? "using" : "as"}{" "}
        <span className="text-darkcyan">{answer_1}</span>, with a{" "}
        <span className="text-darkcyan">{answer_2}</span> type of bean .{" "}
        <span className="text-darkcyan">{answer_3}</span>
        {answer_4}, sent to me <span className="text-darkcyan">{answer_5}</span>
        .&quot;
      </h4>
    </div>
  );
};

export default PlanSummary;
