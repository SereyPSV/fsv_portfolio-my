import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex align-center">
      <ul className="flex gap-6 text-[20px]">
        <li className="flex items-center h-[102px] w-[102px]">
          <Link href="#home">Home</Link>
        </li>
        <li className="flex items-center h-[102px] w-[102px]">
          <Link href="#aboutUs">About us</Link>
        </li>
        <li className="flex items-center h-[102px] w-[102px]">
          <Link href="#services">Services</Link>
        </li>
        <li className="flex items-center h-[102px] w-[102px]">
          <Link href="#blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
