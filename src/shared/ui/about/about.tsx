import Image from "next/image";
import { useTranslations } from "next-intl";
import boardImg from "@/assets/photo/board.jpg";
import leadImg from "@/assets/photo/lead.jpg";
import deskImg from "@/assets/photo/desk.jpg";
import contractImg from "@/assets/photo/contract.jpg";
import blueShapeImg from "@/assets/images/blueShape.png";
import greenShapeImg from "@/assets/images/greenShape.png";

export const About = () => {
  const t = useTranslations("About");

  return (
    <section className="bg-white w-full  relative">
      <div className="max-w-[1240px] mx-auto relative">
        <Image
          src={blueShapeImg}
          alt="Blue Shape Image"
          style={{ width: "auto", height: "auto" }}
          className="absolute top-[40%] sm:top-[10%] left-0"
          priority
        />
        <Image
          src={greenShapeImg}
          alt="Green Shape Image"
          style={{ width: "auto", height: "auto" }}
          className="absolute top-[-10%] right-0 sm:top-[-5%] sm:right-0"
          priority
        />
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-row items-end gap-[4%] pt-[12%] pb-[4%] px-[4%] xl:flex-col xl:items-center xl:gap-4">
              <div className="flex flex-row gap-6 w-1/2 lg:w-full lg:justify-center lg:gap-4 sm:flex-col sm:items-center">
                <div className="flex-none self-end sm:self-start">
                  <Image
                    src={boardImg}
                    alt="Board Image"
                    style={{
                      width: "auto",
                      height: "auto",
                      borderRadius: "4%",
                    }}
                    priority
                  />
                </div>
                <div className="flex-none sm:self-end">
                  <Image
                    src={leadImg}
                    alt="Lead Image"
                    style={{
                      width: "auto",
                      height: "auto",
                      borderRadius: "4%",
                    }}
                    priority
                  />
                </div>
              </div>
              <div className="w-1/2 flex flex-col items-start my-auto gap-8 lg:w-full lg:items-center lg:text-center lg:gap-4 lg:mt-4">
                <h2 className="text-2xl font-bold text-blue-600">
                  {t("title")}
                </h2>
                <h2 className="text-2xl font-bold text-gray-700">
                  {t("subtitle")}
                </h2>
                <p className="text-gray-700">{t("description")}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-[10%] px-[31%] lg:px-[10%] xl:flex-col xl:items-center xl:gap-4">
            <Image
              src={deskImg}
              alt="Desk Image"
              style={{ width: "auto", height: "auto", borderRadius: "4%" }}
              priority
            />
            <Image
              src={contractImg}
              alt="Contract Image"
              style={{ width: "auto", height: "auto", borderRadius: "4%" }}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-6 pt-[12%] w-[75%] px-[8%] md:w-full md:px-[4%]">
            <h2 className="text-3xl text-blue-600 font-bold mb-4">
              {t("whyChooseUsTitle")}
            </h2>
            <p className="text-gray-700 mb-[12%]">
              {t("whyChooseUsDescription")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
