import { Logo } from "./components/logo/logo";
import { Navigation } from "./components/navigation/navigation";
import { HeaderAbout } from "./components/header-about/header-about";
import Image from "next/image";
import bgImg from "./components/heder-about-img1.webp";

export const Header = () => {
  return (
    <header className="relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <div className="flex items-center w-auto">
          <Image src={bgImg} alt="logo" />
        </div>
      </div>
      <div className="flex justify-between items-center z-10 bg-[#fff]">
        <Logo />
        <Navigation />
      </div>
      <HeaderAbout />
    </header>
  );
};
