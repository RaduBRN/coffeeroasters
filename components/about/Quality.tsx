"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useWindowSize } from "@/hooks/window-hooks";

function Quality() {
  const { width: screenWidth } = useWindowSize();
  const [backgroundClass, setBackgroundClass] = useState(
    "/assets/about/mobile/image-quality.jpg"
  );

  useEffect(() => {
    if (screenWidth >= 1024)
      return setBackgroundClass("/assets/about/desktop/image-quality.jpg");
    if (screenWidth >= 768)
      return setBackgroundClass("/assets/about/tablet/image-quality.jpg");

    return setBackgroundClass("/assets/about/mobile/image-quality.jpg");
  }, [screenWidth]);

  return (
    <div className=" bg-[#2C343E] text-lightcream px-16 flex flex-col-reverse lg:grid grid-cols-2 items-center gap-14 md:gap-20 lg:gap-40 relative rounded-lg pb-20 mt-20">
      <div className="flex flex-col md:w-[540px] gap-6 md:gap-8 items-center lg:items-start text-center md:text-start">
        <h2>Uncompromising quality</h2>
        <p className="text-lightcream/80 md:text-center lg:text-left">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
      <div className="-mt-20">
        <div className="relative h-[156px] md:h-[320px] lg:h-[475px] w-[279px] md:w-[573px] lg:w-[445px]">
          <Image
            className="object-cover rounded-lg"
            src={backgroundClass}
            alt="Coffee quality"
            fill
          />
        </div>
      </div>
    </div>
  );
}

export default Quality;
