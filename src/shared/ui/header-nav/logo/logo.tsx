import Image from "next/image";
import logoImg from "@/assets/logo/logo2.png";
export function Logo() {
  return (
    <div className="flex items-center w-[102px] h-[102px]">
      <Image src={logoImg} alt="logo" width={102} height={102} />
    </div>
  );
}
