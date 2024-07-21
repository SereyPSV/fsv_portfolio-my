import Link from "next/link";
import { motion } from "framer-motion";

export function Navigation({ scrollY }: { scrollY: boolean }) {
  return (
    <nav className="flex align-center">
      <ul className="flex gap-1 text-[20px]">
        <motion.li
          initial={{ opacity: 1, color: scrollY ? "white" : "black" }}
          whileHover={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            opacity: 1,
          }}
          className="flex items-center justify-center h-[80px] w-[100px]"
        >
          <Link href="#home">Home</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 1 }}
          whileHover={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            opacity: 1,
          }}
          className="flex items-center justify-center h-[80px] w-[100px]"
        >
          <Link href="#aboutUs">About us</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 1 }}
          whileHover={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            opacity: 1,
          }}
          className="flex items-center justify-center h-[80px] w-[100px]"
        >
          <Link href="#services">Services</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 1 }}
          whileHover={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            opacity: 1,
          }}
          className="flex items-center justify-center h-[80px] w-[100px]"
        >
          <Link href="#blog">Blog</Link>
        </motion.li>
      </ul>
    </nav>
  );
}
