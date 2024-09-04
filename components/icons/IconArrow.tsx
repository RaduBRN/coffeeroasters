function IconArrow({
  displayedQuestion,
  questionId,
  checkDisabled,
}: {
  displayedQuestion: [];
  questionId: number;
  checkDisabled: (question_id: number) => boolean;
}) {
  return (
    <svg
      width="19"
      height="13"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform:
          displayedQuestion[questionId] && !checkDisabled(questionId)
            ? "rotate(180deg)"
            : "rotate(0deg)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <path
        d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
        fill="#0E8784"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default IconArrow;
