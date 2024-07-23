import Image from "next/image";
import { Service } from "./components/services-list/service";
import { Mobile, Pineapple, Ring, Seo, Web } from "@/assets";

const services = [
  {
    title: "Web development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, beatae.",
    logo: Web,
    bgColor: "#eae2f6",
  },
  {
    title: "Mobile development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, beatae.",
    logo: Mobile,
    bgColor: "#cff8d6",
  },
  {
    title: "Digital design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, beatae.",
    logo: Mobile,
    bgColor: "#e5ffc0",
  },
  {
    title: "Optimization",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, beatae.",
    logo: Seo,
    bgColor: "#d1e5ff",
  },
];

export const Solutions = () => {
  return (
    <section className="w-full pb-52 bg-white">
      <div className="w-full flex flex-col justify-center items-center py-14 bg-[#a5d9f1] relative sm:p-5">
        <div className="flex flex-col justify-start items-center w-[400px] pb-24 sm:p-5">
          <div className="w-32 h-32 p-4 bg-white rounded-full shadow-lg">
            <Image src={Ring} alt="ring" />
          </div>
          <h1 className="text-[40px] sm:text-3xl font-semibold my-3">
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
        </div>
        <div className="p-8 sm:p-5 bg-white absolute bottom-[-112px] sm:static shadow-lg rounded-md grid grid-cols-2 gap-8 sm:grid-cols-1">
          {services.map(({ title, logo, bgColor, description }) => (
            <Service
              key={title}
              title={title}
              logo={logo}
              bgColor={bgColor}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
