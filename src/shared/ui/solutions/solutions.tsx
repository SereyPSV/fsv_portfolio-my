import { Ring } from "@/assets";
import Image from "next/image";

export const Solutions = () => {
  return (
    <section className="w-full bg-teal-300">
      <div className="w-full flex flex-col justify-center items-center">
        <header className="flex flex-col justify-center items-center w-80">
          <div className="w-32 h-32 p-4 bg-white rounded-full">
            <Image src={Ring} alt="ring" />
          </div>
          <h1 className="text-[40px] font-semibold">
            Our
            <span className="text-[var(--primary-btn)] font-bold">Sevices</span>
          </h1>
          <p className="text-center text-[18px] text-[var(--foreground)]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quos quibusdam vel sed doloribus amet ex ullam est perferendis
            velit!
          </p>
        </header>
      </div>
    </section>
  );
};
