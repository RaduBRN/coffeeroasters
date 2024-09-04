"use client";

import { useState } from "react";
import SelectionSidebar from "./SelectionSidebar";
import SubscriptionQuestionnaire from "./SubscriptionQuestionnaire";

interface selectedAnswersType {
  [index: number]: number;
}

function CoffeeSelection() {
  const [selectedAnswers, setSelectedAnswers] = useState<selectedAnswersType>(
    []
  );

  return (
    <div className="flex gap-10 mb-40 lg:px-12 h-full">
      <SelectionSidebar selectedAnswers={selectedAnswers} />
      <SubscriptionQuestionnaire
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
      />
    </div>
  );
}

export default CoffeeSelection;
