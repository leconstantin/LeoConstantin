import { navLinks } from "@/config/home";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div
        className="mt-20 flex-none
        border-t border-zinc-100 pb-20 pt-10 dark:border-zinc-500/70"
      >
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <ul className="flex text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {navLinks.map((link) => (
                <Link key={link.id} href={link.path}>
                  <li className="relative block font-roboto px-2 md:px-4 py-3 transition hover:text-teal-500 cursor-pointer dark:hover:text-teal-400">
                    {link.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <p className="text-sm font-roboto text-zinc-400 dark:text-zinc-500">
            © 2024 Leo Constantin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
