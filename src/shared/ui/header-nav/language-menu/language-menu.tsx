"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { AnimeHeaderNav } from "../header-nav";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const languages = [
  { name: "English", value: "en" },
  { name: "Русский", value: "ru" },
];

export const LanguageMenu = ({
  animeHeaderNav,
}: {
  animeHeaderNav: AnimeHeaderNav;
}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const [language, setLanguage] = useState(localActive);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false);
    startTransition(() => {
      router.replace(`/${lang}`);
    });
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <motion.button
          initial={{ opacity: 1, color: "rgb(255, 255, 255)" }}
          whileHover={animeHeaderNav.wHover}
          transition={animeHeaderNav.spring}
          onClick={() => handleOpenMenu()}
          className="flex justify-center w-10 rounded-md shadow-sm px-4 py-2 ml-8 bg-transparent text-sm font-medium over:bg-gray-50"
          disabled={isPending}
        >
          {language.toUpperCase()}
        </motion.button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map(({ name, value }) => (
              <button
                key={value}
                onClick={() => handleLanguageChange(value)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                disabled={isPending}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
