"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { Logo } from "./logo/logo";
import { Navigation } from "./navigation/navigation";

export const HeaderNav = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const heght = useTransform(scrollYProgress, [0, 1], [0, 100]);
  console.log(heght);

  return (
    <motion.div
      initial={{ color: "white", opacity: 1, backgroundColor: "transparent" }}
      animate={
        scrollY.current > 0
          ? { backgroundColor: "transparent", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
      className={`fixed w-full top-0 z-[100] `}
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex justify-between">
          <Logo />
          <Navigation scrollY={scrollY.current} />
        </div>
      </div>
    </motion.div>
  );
};
