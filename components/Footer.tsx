import Link from "next/link";
import data from "@/public/data/pageLinkData";
import IconFacebook from "./icons/IconFacebook";
import IconInstagram from "./icons/IconInstagram";
import IconLogo from "./icons/IconLogo";
import IconTwitter from "./icons/IconTwitter";

function Footer() {
  const logoColor = "#fff";

  const footerLinks = data.map((item) => (
    <Link key={item.id} href={item.link} className="hover:text-lightcream">
      {item.name}
    </Link>
  ));

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-[#2C343E] py-10 px-20 my-14 gap-10 md:gap-14 lg:gap-0">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        <Link href={"/"}>
          <IconLogo fillColor={logoColor} />
        </Link>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 uppercase text-[#83888F] font-bold text-[12px] leading-[15px] tracking-[0.9px]">
          {footerLinks}
        </div>
      </div>
      <div className="flex items-center gap-8">
        <IconFacebook />
        <IconTwitter />
        <IconInstagram />
      </div>
    </div>
  );
}

export default Footer;
