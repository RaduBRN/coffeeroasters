"use client";

import Link from "next/link";
import Button from "../shared/Button";
import { useState, useEffect } from "react";
import { useWindowSize } from "@/hooks/window-hooks";

function Hero() {
  const { width: screenWidth } = useWindowSize();
  const [backgroundClass, setBackgroundClass] = useState("");

  useEffect(() => {
    if (screenWidth >= 1024)
      return setBackgroundClass(
        `bg-[url('/assets/home/desktop/image-hero-coffeepress.jpg')]`
      );
    if (screenWidth >= 768)
      return setBackgroundClass(
        `bg-[url('/assets/home/tablet/image-hero-coffeepress.jpg')]`
      );

    return setBackgroundClass(
      `bg-[url('/assets/home/mobile/image-hero-coffeepress.jpg')]`
    );
  }, [screenWidth]);

  return (
    <div
      className={`${backgroundClass} bg-cover bg-no-repeat bg-right-top rounded-md min-h-[500px] md:min-h-[600px] flex flex-col justify-center`}
    >
      <div className="flex flex-col items-center md:items-start md:max-w-[398px] lg:max-w-[500px] gap-10 mx-6 md:mx-16 text-lightcream text-center md:text-start">
        <h1>Great coffee made simple.</h1>
        <p className="text-lightcream/80">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link href={"/plan?#questionnaire"}>
          <Button>Create your plan</Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
