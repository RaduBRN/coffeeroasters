import Hero from "@/components/plan/Hero";
import Instructions from "@/components/shared/Instructions";
import CoffeeSelection from "@/components/plan/CoffeeSelection";

function Plan() {
  return (
    <div className="flex flex-col gap-28">
      <Hero />
      <Instructions secondary={true} />
      <CoffeeSelection />
    </div>
  );
}

export default Plan;
