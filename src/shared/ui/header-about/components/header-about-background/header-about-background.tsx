import Image from "next/image";
import bgImg from "./heder-about-img1.webp";

export const HeaderAboutBackground = () => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <Image src={bgImg} alt="logo" />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <div className="flex items-center w-full h-full bg-[#000000] opacity-40"></div>
      </div>
    </>
  );
};
