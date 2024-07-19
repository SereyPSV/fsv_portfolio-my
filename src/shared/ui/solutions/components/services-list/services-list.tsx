import { Mobile, Pineapple, Seo, Web } from "@/assets";
import Image from "next/image";

export const ServicesList = () => {
  return (
    <div className="bg-white h-[300px] w-[1000px] absolute bottom-[-200px] shadow-lg rounded-md flex flex-col justify-center">
      <div className="flex justify-center items-center">
        <div className="flex p-8">
          <div className="mr-7">
            <div className="w-16 h-16 bg-[#eae2f6] flex justify-center items-center rounded-xl">
              <div className="w-10 h-10">
                <Image src={Web} alt="web" />
              </div>
            </div>
          </div>
          <div className="w-72">
            <h3 className="font-semibold">Web development</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              beatae.
            </p>
          </div>
        </div>
        <div className="flex p-8 relative">
          <div className="mr-7">
            <div className="w-16 h-16 bg-[#cff8d6] flex justify-center items-center rounded-xl">
              <div className="w-10 h-10">
                <Image src={Mobile} alt="web" />
              </div>
            </div>
          </div>
          <div className="w-72">
            <h3 className="font-semibold">Mobile development</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              beatae.
            </p>
          </div>
          <div className="absolute bottom-[125px] right-10 rotate-45">
            <Image src={Pineapple} alt="Pineapple" className="h-16 w-16" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex p-8">
          <div className="mr-7">
            <div className="w-16 h-16 bg-[#e5ffc0] flex justify-center items-center rounded-xl">
              <div className="w-10 h-10">
                <Image src={Mobile} alt="web" />
              </div>
            </div>
          </div>
          <div className="w-72">
            <h3 className="font-semibold">Digital design</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              beatae.
            </p>
          </div>
        </div>
        <div className="flex p-8">
          <div className="mr-7">
            <div className="w-16 h-16 bg-[#d1e5ff] flex justify-center items-center rounded-xl">
              <div className="w-10 h-10">
                <Image src={Seo} alt="web" />
              </div>
            </div>
          </div>
          <div className="w-72">
            <h3 className="font-semibold">Optimization</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              beatae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
