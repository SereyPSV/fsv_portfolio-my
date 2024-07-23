import { Mobile, Pineapple, Seo, Web } from "@/assets";
import Image, { StaticImageData } from "next/image";

interface ServiceProps {
  title: string;
  bgColor: string;
  logo: StaticImageData;
  description: string;
}

export const Service: React.FC<ServiceProps> = ({
  title,
  bgColor,
  logo,
  description,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mr-7">
        <div
          className={`w-16 h-16 bg-[${bgColor}] flex justify-center items-center rounded-xl`}
        >
          <div className="w-10 h-10">
            <Image src={logo} alt="web" />
          </div>
        </div>
      </div>
      <div className="w-72">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm sm:text-xs">{description}</p>
      </div>
    </div>
  );
};
