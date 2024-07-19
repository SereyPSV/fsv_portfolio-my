"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo/logo";
import { Navigation } from "./navigation/navigation";
import classNames from "classnames";

export const HeaderNav = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed max-w-[1240px] w-full top-0 z-10">
      <div
        className={classNames("flex justify-between items-center text-white", {
          "text-black bg-white": isScroll,
        })}
      >
        <Logo />
        <Navigation />
      </div>
    </div>
  );
};
