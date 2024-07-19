import Image from "next/image";
import teamImg from "@/assets/images/team.png";
import boardImg from "@/assets/images/board.png";
import deskImg from "@/assets/images/desk.png";
import laptopImg from "@/assets/images/laptop.png";
import blueShapeImg from "@/assets/images/blueShape.png";
import greenShapeImg from "@/assets/images/greenShape.png";

export const About = () => {
  return (
    <section className="bg-white w-full max-w-[1240px] mx-auto relative">
      <Image
        src={blueShapeImg}
        alt="Blue Shape Image"
        style={{ width: "auto", height: "auto" }}
        className="absolute top-[40%] sm:top-[10%]"
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
                  src={teamImg}
                  alt="Team Image"
                  style={{ width: "auto", height: "auto" }}
                  priority
                />
              </div>
              <div className="flex-none sm:self-end">
                <Image
                  src={boardImg}
                  alt="Board Image"
                  style={{ width: "auto", height: "auto" }}
                  priority
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-start my-auto gap-8 lg:w-full lg:items-center lg:text-center lg:gap-4 lg:mt-4">
              <h2 className="text-2xl font-bold text-blue-600">About US</h2>
              <h2 className="text-2xl font-bold text-gray-700">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <p className="text-gray-700">
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[10%] px-[31%] lg:px-[10%] xl:flex-col xl:items-center xl:gap-4">
          <Image
            src={deskImg}
            alt="Desk Image"
            style={{ width: "auto", height: "auto" }}
            priority
          />
          <Image
            src={laptopImg}
            alt="Laptop Image"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
        <div className="flex flex-col items-start gap-6 pt-[12%] w-[75%] px-[8%] md:w-full md:px-[4%]">
          <h2 className="text-3xl text-blue-600 font-bold mb-4">
            Lorem ipsum is simply dummy text of the printing.
          </h2>
          <p className="text-gray-700 mb-[12%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur, explicabo distinctio
            alias, voluptatibus, quo voluptate eum odit voluptas doloremque
            deleniti nostrum incidunt aspernatur corrupti blanditiis modi aut
            omnis nesciunt veniam!
          </p>
        </div>
      </div>
    </section>
  );
};
