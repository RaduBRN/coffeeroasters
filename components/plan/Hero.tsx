"use client";

import { useState, useEffect } from "react";
import { useWindowSize } from "@/hooks/window-hooks";

function Hero() {
  const { width: screenWidth } = useWindowSize();
  const [backgroundClass, setBackgroundClass] = useState("");

  useEffect(() => {
    if (screenWidth >= 1024)
      return setBackgroundClass(
        `bg-[url('/assets/plan/desktop/image-hero-blackcup.jpg')]`
      );
    if (screenWidth >= 768)
      return setBackgroundClass(
        `bg-[url('/assets/plan/tablet/image-hero-blackcup.jpg')]`
      );

    return setBackgroundClass(
      `bg-[url('/assets/plan/mobile/image-hero-blackcup.jpg')]`
    );
  }, [screenWidth]);

  return (
    <div
      className={`${backgroundClass} bg-cover bg-no-repeat h-[400px] lg:min-h-[450px] flex flex-col justify-center rounded-lg`}
    >
      <div className="flex flex-col max-w-[398px] lg:max-w-[486px] gap-6 md:gap-10 mx-6 md:mx-16 text-center md:text-start">
        <h1 className="text-[#FEFCF7]">Create a plan</h1>
        <p className="text-[#FEFCF7]/80">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
    </div>
  );
}

export default Hero;
