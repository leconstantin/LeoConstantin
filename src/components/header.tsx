import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import NavItem from "./navItem";
import Image from "next/image";
import { Code } from "lucide-react";

export default function Header({ hasImage }: { hasImage?: boolean }) {
  return (
    <header className="py-10">
      <nav className="flex items-center justify-between">
        <div className="flex">
          <Link href="/">
            {hasImage ? (
              <div className="backdrop-blur rounded-full ring-2 ring-zinc-200 dark:ring-4 dark:ring-zinc-700  inline-block">
                <Image
                  width={48}
                  height={48}
                  src="/me.jpeg"
                  alt="Leo constantin image"
                  title="Muhirwe Leo Constantin"
                  className="h-6 w-6 md:h-12 md:w-12 rounded-full object-cover bg-zinc-300 dark:bg-zinc-800"
                />
              </div>
            ) : (
              <p className="flex items-center justify-center font-bold text-teal-400 text-xl cursor-pointer">
                <span className="text-xl">L</span>
                <Code />
                <span> Constantin</span>
              </p>
            )}
          </Link>
        </div>
        <div>
          <NavItem />
        </div>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
