"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from "./logo/logo";
import { Navigation } from "./navigation/navigation";

export const HeaderNav = () => {
  const [scrollY, setScrollY] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ color: "white", opacity: 1, backgroundColor: "transparent" }}
      animate={
        scrollY
          ? { backgroundColor: "transparent", color: "white" }
          : {
              backgroundColor: "white",
              color: "black",
            }
      }
      className={`fixed w-full top-0 z-[100] `}
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex justify-between">
          <Logo />
          <Navigation scrollY={scrollY} />
        </div>
      </div>
    </motion.div>
  );
};
