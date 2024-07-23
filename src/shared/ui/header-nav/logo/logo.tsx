import Image from "next/image";
import logoImg from "@/assets/logo/logo.png";
export function Logo() {
  return (
    <div className="flex flex-col items-center pl-8">
      <div className="flex items-center">
        <Image src={logoImg} alt="logo" width={60} height={60} />
        <div className="flex flex-col ">
          <h4 className="text-xl">FSV</h4>
          <h4 className="text-xl">Development</h4>
        </div>
      </div>
      {/* <p className="text-[12px] font-light">Future Success, Visible Today</p> */}
    </div>
  );
}
