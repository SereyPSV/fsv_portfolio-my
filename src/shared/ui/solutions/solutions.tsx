import { Mobile, Pineapple, Ring, Seo, Web } from "@/assets";
import Image from "next/image";
import { ServicesList } from "./components/services-list/services-list";

export const Solutions = () => {
  return (
    <section className="w-full pb-52">
      <div className="w-full flex flex-col justify-center items-center py-14 bg-[#a5d9f1]">
        <div className="flex flex-col justify-start items-center w-[400px] h-[460px] relative">
          <div className="w-32 h-32 p-4 bg-white rounded-full shadow-lg">
            <Image src={Ring} alt="ring" />
          </div>
          <h1 className="text-[40px] font-semibold my-3">
            Our
            <span className="text-[var(--primary-btn)] font-bold">
              &nbsp;Sevices
            </span>
          </h1>
          <p className="text-center text-[16px] text-[var(--foreground)]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quos quibusdam vel sed doloribus amet ex ullam est perferendis
            velit!
          </p>
          <ServicesList />
        </div>
      </div>
    </section>
  );
};
