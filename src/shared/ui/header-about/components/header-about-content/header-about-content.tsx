"use client";

import { motion } from "framer-motion";

export const HeaderAboutContent = () => {
  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3, ease: "easeInOut" },
    }),
  };
  return (
    <div id="about" className="flex p-32 max-w-[1240px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        className="flex flex-col items-center text-[var(--app-background)] z-[10]"
      >
        <h1 className="text-4xl font-bold pb-8 text-center">
          <motion.span custom={1} variants={textAnimation}>
            <span className="text-[var(--app-background)]">Experienced </span>
            <span className="text-[var(--secondary-btn)]">mobile and web </span>
          </motion.span>
          <br />
          <motion.span custom={2} variants={textAnimation}>
            applications and website
          </motion.span>
          <br />
          <motion.span custom={3} variants={textAnimation}>
            builders measuring.
          </motion.span>
        </h1>
        <motion.h4
          custom={4}
          variants={textAnimation}
          className="text-2xl pb-8 font-thin text-[var(--primary-input)] text-center"
        >
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </motion.h4>
      </motion.div>
    </div>
  );
};
