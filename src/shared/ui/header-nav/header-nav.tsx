"use client";

import { Logo } from "./logo/logo";
import { Navigation } from "./navigation/navigation";
import { LanguageMenu } from "./language-menu/language-menu";
import { motion } from "framer-motion";

export interface Spring {
  type: "spring";
  stiffness: number;
  damping: number;
}

const spring: Spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export interface WHover {
  backgroundColor: string;
  color: string;
  opacity: number;
}

const wHover: WHover = {
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  color: "black",
  opacity: 1,
};

export interface AnimeHeaderNav {
  spring: Spring;
  wHover: WHover;
}
const animeHeaderNav = { spring, wHover };

export const HeaderNav = () => {
  return (
    <motion.div
      initial={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
      whileHover={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
      exit={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
      className={`fixed w-full top-0 z-[100] text-white`}
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-between">
          <Logo />
          <div className="flex items-center">
            <Navigation animeHeaderNav={animeHeaderNav} />
            <LanguageMenu animeHeaderNav={animeHeaderNav} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
