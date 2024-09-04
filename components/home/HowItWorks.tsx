import Button from "../shared/Button";
import Instructions from "../shared/Instructions";
import Link from "next/link";

function HowItWorks() {
  return (
    <div className="flex flex-col my-16 text-center md:text-left lg:px-24">
      <h4 className="text-grey mb-16 md:mb-0">How it works</h4>
      <Instructions />
      <Link
        className="flex justify-center md:justify-start"
        href={"/plan?#questionnaire"}
      >
        <Button>Create your plan</Button>
      </Link>
    </div>
  );
}

export default HowItWorks;
