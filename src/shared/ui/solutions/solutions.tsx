import { Mobile, Pineapple, Ring, Seo, Web } from "@/assets";
import Image from "next/image";

export const Solutions = () => {
  return (
    <section className="w-full pb-52">
      <div className="w-full flex flex-col justify-center items-center py-14 bg-[#a5d9f1]">
        <header className="flex flex-col justify-start items-center w-[400px] h-[460px] relative">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat, beatae.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat, beatae.
                  </p>
                </div>
                <div className="absolute bottom-[125px] right-10 rotate-45">
                  <Image
                    src={Pineapple}
                    alt="Pineapple"
                    className="h-16 w-16"
                  />
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat, beatae.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat, beatae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};
