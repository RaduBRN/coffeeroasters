"use client";

import { Modal, ModalContent } from "@nextui-org/modal";
import questions from "@/public/data/CoffeeSelectionData";
import Button from "../shared/Button";
import { useState } from "react";

interface selectedAnswersType {
  [index: number]: number;
}

function CheckoutModal({
  isOpen,
  onOpenChange,
  selectedAnswers,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  selectedAnswers: selectedAnswersType;
}) {
  const [process, setProcess] = useState(false);

  const answer_1 = questions[0]?.answers[selectedAnswers[0]]?.title ?? "______";
  const answer_2 = questions[1]?.answers[selectedAnswers[1]]?.title ?? "______";
  const answer_3 = questions[2]?.answers[selectedAnswers[2]]?.title ?? "______";
  const answer_4 =
    "3" in selectedAnswers ? (
      <>
        &nbsp;ground ala&nbsp;
        <span className="text-darkcyan">
          {questions[3].answers[selectedAnswers[3]]?.title}
        </span>
      </>
    ) : null;
  const answer_5 = questions[4]?.answers[selectedAnswers[4]]?.title ?? "______";

  const price: number =
    questions[2]?.answers?.[selectedAnswers[2]]?.prices?.[selectedAnswers[4]]
      ?.price ?? 0;

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size={"xl"}
      classNames={{
        wrapper: "items-center",
        base: "mx-6 md:mx-0 max-w-[540px]",
      }}
      onClose={() => setProcess(false)}
    >
      <ModalContent>
        <div className="flex flex-col">
          <div className="bg-darkgreyblue">
            <h2 className="flex items-center text-white px-6 md:px-14 h-[88px] md:h-auto md:py-10">
              {process ? "Order Complete" : "Order Summary"}
            </h2>
          </div>
          <div className="flex flex-col gap-10 bg-lightcream">
            <div>
              <div className="flex flex-col gap-2 md:gap-4 px-6 md:px-14 py-5 md:py-10">
                {process ? (
                  <p>
                    We appreciate your business with Coffee Roasters. Our
                    commitment is to deliver exceptional coffee and service to
                    meet all your needs.
                  </p>
                ) : (
                  <>
                    <h4 className="leading-[40px] tracking-[1.1] text-grey">
                      &quot;I drink my coffee{" "}
                      {answer_1 === "Capsules" ? "using" : "as"}{" "}
                      <span className="text-darkcyan">{answer_1}</span>, with a{" "}
                      <span className="text-darkcyan">{answer_2}</span> type of
                      bean . <span className="text-darkcyan">{answer_3}</span>
                      {answer_4}, sent to me{" "}
                      <span className="text-darkcyan">{answer_5}</span>
                      .&quot;
                    </h4>
                    <p className="text-darkgreyblue/80">
                      Is this correct? You can proceed to checkout or go back to
                      plan selection if something is off. Subscription discount
                      codes can also be redeemed at the checkout.{" "}
                    </p>
                  </>
                )}
              </div>
              {!process && (
                <div className="flex items-center px-6 md:px-14 justify-between w-full">
                  <h3 className="hidden md:block">
                    {USDollar.format(price)}/mo
                  </h3>
                  <Button
                    className="flex gap-2 w-full md:w-56"
                    func={() => setProcess(true)}
                  >
                    <span>Checkout</span>
                    <span className="block md:hidden">-</span>
                    <span className="block md:hidden">
                      {USDollar.format(price)}/mo
                    </span>
                  </Button>
                </div>
              )}
            </div>
            <div></div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}

export default CheckoutModal;
