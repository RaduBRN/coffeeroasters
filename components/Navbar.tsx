"use client";

import IconLogo from "./icons/IconLogo";
import IconHamburger from "./icons/IconHamburger";
import IconClose from "./icons/IconClose";
import Link from "next/link";
import data from "@/public/data/pageLinkData";
import { useState, useEffect } from "react";

const NavbarLinks = ({ toggleMenu }: { toggleMenu?: () => void }) => {
  return data.map((item) => (
    <Link
      onClick={() => toggleMenu && toggleMenu()}
      key={item.id}
      href={item.link}
      className="hover:text-darkgreyblue"
    >
      {item.name}
    </Link>
  ));
};

const MobileMenu = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <div className="block md:hidden h-full bg-gradient-to-b from-lightcream via-[rgb(254,252,247,0.99)] to-lightcream/25">
      <div className="pt-10 flex flex-col gap-5 items-center w-full px-5 text-[24px] leading-[32px] font-black text-[#333D4B] capitalize font-fraunces">
        <NavbarLinks toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

function Navbar() {
  const logoColor = "#333D4B";
  const [showMenu, setShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const updateWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => (window.onresize = updateWindowSize), []);

  const toggleMenu = () => {
    if (screenWidth <= 430) {
      setShowMenu(!showMenu);
      document.body.style.overflow =
        document.body.style.overflow !== "hidden" ? "hidden" : "auto";
    }
  };

  return (
    <>
      <div className="flex justify-between items-center w-full py-10">
        <Link href={"/"}>
          <IconLogo fillColor={logoColor} />
        </Link>
        <div className="hidden md:flex uppercase gap-8 font-bold text-[#83888F] text-[12px] tracking-[0.9px]">
          <NavbarLinks toggleMenu={toggleMenu} />
        </div>
        <div className="block md:hidden" onClick={() => toggleMenu()}>
          {showMenu ? <IconClose /> : <IconHamburger />}
        </div>
      </div>
      {showMenu && (
        <div className="fixed left-0 right-0 bottom-0 top-[106px]">
          <MobileMenu toggleMenu={toggleMenu} />
        </div>
      )}
    </>
  );
}

export default Navbar;
