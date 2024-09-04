interface InstructionsProps {
  secondary?: boolean;
}

const Instructions: React.FC<InstructionsProps> = ({ secondary }) => {
  const backgroundColor: string = secondary ? "bg-[#2C343E]" : "bg-transparent";
  const textColor: string = secondary ? "text-lightcream" : "text-[#333D4B]";
  const paddingSides: string = secondary ? "px-7 md:px-10 lg:px-20" : "";
  const paddingY: string = secondary ? "py-20 md:pt-0" : "pb-20";
  const columnGaps: string = secondary ? "gap-20 md:gap-6" : "md:gap-14";

  return (
    <div
      className={`w-full ${backgroundColor} ${paddingSides} ${paddingY} rounded-lg text-center md:text-start`}
    >
      <div className="hidden md:block pt-24 pb-16 px-3">
        <div className="relative flex items-center w-full max-w-[75%] border-b border-paleorange">
          <div className="absolute -left-3 w-6 h-6 rounded-full border border-darkcyan" />
          <div className="absolute left-[calc(50%-24px)] w-6 h-6 rounded-full border border-darkcyan" />
          <div className="absolute -right-3 w-6 h-6 rounded-full border border-darkcyan" />
        </div>
      </div>
      <div
        className={`flex flex-col md:flex-row gap-10 [&>*>h1]:text-[72px] ${columnGaps} lg:gap-20 ${textColor}`}
      >
        <div className="w-full md:max-w-[285px] flex flex-col gap-8">
          <h1 className="text-paleorange">01</h1>
          <h3>
            Pick your <br className="hidden md:block" />
            coffee
          </h3>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div className="w-full md:max-w-[285px] flex flex-col gap-8">
          <h1 className="text-paleorange">02</h1>
          <h3>Choose the frequency</h3>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div className="w-full md:max-w-[285px] flex flex-col gap-8">
          <h1 className="text-paleorange">03</h1>
          <h3>Receive and enjoy!</h3>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
