"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { navLinks } from "@/config/home";
export default function NavItem() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <ul className="hidden lg:flex rounded-full bg-white/90 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navLinks.map((link) => (
          <Link href={link.path} key={link.id}>
            <span
              className={`relative block font-roboto px-4 py-2 transition-all ease-in-out hover:text-teal-500
                ${pathName == link.path ? "text-teal-500 font-semibold" : ""}`}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </ul>
      <div className="lg:hidden z-50">
        <div onClick={handleNav}>
          <HiMenu
            size={29}
            className="text-foreground hover:text-teal-400 cursor-pointer"
          />
        </div>
        <div
          className={`top-0 w-screen h-screen z-50 
            ${
              menuOpen
                ? "fixed left-0 bg-teal-200 dark:bg-gray-800 p-10 ease-in duration-500"
                : "fixed  left-[-100%] p-10 ease-out duration-500"
            }
          
        `}
        >
          <div onClick={handleNav} className="flex justify-end pr-5">
            <MdOutlineClose
              size={29}
              className="text-black hover:text-teal-400 cursor-pointer"
            />
          </div>
          <ul className="flex items-start gap-20 py-16  max-w-3xl mx-auto text-gray-600 capitalize dark:text-gray-300">
            <div className="flex flex-col gap-9">
              {navLinks.map((link) => (
                <Link href={link.path} key={link.id}>
                  <span
                    className={`relative block font-roboto px-4 py-2 transition hover:text-teal-500 
                ${pathName == link.path ? "text-white" : ""}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
