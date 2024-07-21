import Link from "next/link";
// import { motion } from "framer-motion";

const navMenu = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About Us",
    link: "#aboutUs",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Contact Us",
    link: "#contactUs",
  },
];

export function Navigation({ scrollY }: { scrollY: boolean }) {
  return (
    <nav className="flex align-center">
      <ul className="flex gap-1 text-[16px]">
        {navMenu.map((navMenuItem) => (
          <li
            // initial={{ opacity: 1, color: scrollY ? "black" : "black" }}
            // whileHover={{
            //   color: "black",
            //   backgroundColor: "rgba(0, 0, 0, 0.7)",
            //   opacity: 1,
            // }}
            // exit={{ opacity: 1, color: scrollY ? "black" : "black" }}
            className="flex items-center justify-center h-[80px] w-[100px]"
          >
            <Link href={navMenuItem.link}>{navMenuItem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
