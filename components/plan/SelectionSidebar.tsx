import Link from "next/link";
import questions from "@/public/data/CoffeeSelectionData";

interface selectedAnswersType {
  [index: number]: number;
}

interface SelectionSidebarProps {
  selectedAnswers: selectedAnswersType;
}

const SelectionSidebar: React.FC<SelectionSidebarProps> = ({
  selectedAnswers,
}) => {
  const questionSidebarStyle = (questionId: number) => {
    let style = `flex gap-5 text-grey opacity-40 hover:opacity-100`;

    if (questionId in selectedAnswers) {
      style = `flex gap-5 text-darkgreyblue`;
    }

    return style;
  };

  return (
    <div className="sticky top-10 h-full w-full max-w-[255px] hidden lg:block">
      <div className="flex flex-col gap-5 divide-y">
        {questions?.map((question_item) => (
          <Link
            href={`#question_${question_item.id}`}
            key={question_item.id}
            className="pt-5 first:pt-0 max-w-[235px]"
          >
            <h4 className={questionSidebarStyle(question_item.id)}>
              <span
                className={
                  question_item.id in selectedAnswers ? "text-darkcyan" : ""
                }
              >
                0{question_item.id + 1}
              </span>
              <span>{question_item.title}</span>
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SelectionSidebar;
