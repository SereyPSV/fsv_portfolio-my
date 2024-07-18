import Image from "next/image";
import teamImg from "@/assets/images/team.png";
import boardImg from "@/assets/images/board.png";
import deskImg from "@/assets/images/desk.png";
import laptopImg from "@/assets/images/laptop.png";

export const About = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex flex-row space-x-4 items-end">
            <div className="relative w-[249px] h-[259px]">
              <Image
                src={teamImg}
                alt="Team Image"
                width={249}
                height={259}
                className="rounded-lg w-auto h-auto"
                priority
              />
            </div>
            <div className="relative w-[288px] h-[346px]">
              <Image
                src={boardImg}
                alt="Board Image"
                width={288}
                height={346}
                className="rounded-lg w-auto h-auto"
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-4">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">About Us</h2>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className="text-gray-700">
              Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
              sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
              porta.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-12">
          <div className="md:w-1/2 flex flex-row space-x-12">
            <div className="relative w-[521px] h-[346px]">
              <Image
                src={deskImg}
                alt="Desk Image"
                width={521}
                height={346}
                className="rounded-lg w-auto h-auto"
                priority
              />
            </div>
            <div className="relative w-[542px] h-[346px]">
              <Image
                src={laptopImg}
                alt="Laptop Image"
                width={542}
                height={346}
                className="rounded-lg w-auto h-auto"
                priority
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:mt-0 md:pl-12 mx-auto">
          <h2 className="text-3xl text-blue-600 font-bold mb-4">
            Lorem ipsum is simply dummy text of the printing.
          </h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
      </div>
    </section>
  );
};
