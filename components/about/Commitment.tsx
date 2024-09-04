"use client";

import { useState, useEffect } from "react";

function Commitment() {
  const [screenWidth, setScreenWidth] = useState(0);

  const updateWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => (window.onresize = updateWindowSize), []);

  const returnBackgroundImg = () => {
    if (screenWidth >= 1024)
      return `bg-[url('/assets/about/desktop/image-commitment.jpg')]`;
    if (screenWidth >= 768)
      return `bg-[url('/assets/about/tablet/image-commitment.jpg')]`;

    return `bg-[url('/assets/about/mobile/image-commitment.jpg')]`;
  };

  console.log(screenWidth);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center justify-center gap-10 lg:gap-24 lg:px-20">
      <div
        className={`${returnBackgroundImg()} bg-cover bg-center bg-no-repeat h-[400px] md:h-full rounded-lg`}
      />
      <div className="flex flex-col gap-8 md:py-4 lg:py-32 text-center md:text-start">
        <h2 className="text-darkgreyblue">Our commitment</h2>
        <p className="text-darkgreyblue/80">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </div>
  );
}

export default Commitment;
