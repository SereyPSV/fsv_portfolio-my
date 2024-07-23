import Link from "next/link";
import { motion } from "framer-motion";
import { AnimeHeaderNav } from "../header-nav";
import { useTranslations } from "next-intl";

const navMenu = [
  {
    name: "home",
    link: "#home",
  },
  {
    name: "aboutUs",
    link: "#aboutUs",
  },
  {
    name: "services",
    link: "#services",
  },
  {
    name: "contactUs",
    link: "#contactUs",
  },
];

export function Navigation({
  animeHeaderNav,
}: {
  animeHeaderNav: AnimeHeaderNav;
}) {
  const t = useTranslations("Navigation");

  return (
    <nav className="flex align-center">
      <ul className="flex gap-1 text-[16px]">
        {navMenu.map(({ name, link }) => (
          <motion.li
            key={name}
            initial={{ opacity: 1 }}
            whileHover={animeHeaderNav.wHover}
            transition={animeHeaderNav.spring}
            className="flex items-center justify-center h-[80px] w-[100px] rounded-md"
          >
            <Link href={link}>{t(name)}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
