import CoffeeCollection from "@/components/home/CoffeeCollection";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { NextUIProvider } from "@nextui-org/system";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex flex-col gap-20 md:gap-8">
        <Hero />
        <CoffeeCollection />
        <WhyChooseUs />
        <HowItWorks />
      </div>
    </NextUIProvider>
  );
}
