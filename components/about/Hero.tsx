"use client";

import { useState, useEffect } from "react";
import { useWindowSize } from "@/hooks/window-hooks";

function Hero() {
  const { width: screenWidth } = useWindowSize();
  const [backgroundClass, setBackgroundClass] = useState("");

  useEffect(() => {
    if (screenWidth >= 1024)
      return setBackgroundClass(
        `bg-[url('/assets/about/desktop/image-hero-whitecup.jpg')]`
      );
    if (screenWidth >= 768)
      return setBackgroundClass(
        `bg-[url('/assets/about/tablet/image-hero-whitecup.jpg')]`
      );

    return setBackgroundClass(
      `bg-[url('/assets/about/mobile/image-hero-whitecup.jpg')]`
    );
  }, [screenWidth]);

  return (
    <div
      className={`${backgroundClass} bg-cover bg-no-repeat bg-right-top rounded-md min-h-[450px] flex flex-col justify-center`}
    >
      <div className="flex flex-col text-center md:text-start md:max-w-[400px] lg:max-w-[500px] gap-6 md:gap-10 mx-7 md:mx-16">
        <h1 className="text-lightcream">About Us</h1>
        <p className="text-lightcream/80">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </div>
  );
}

export default Hero;
