import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import NavItem from "./navItem";

export default function Header() {
  return (
    <header className="py-10">
      <nav className="flex items-center justify-between">
        <div className="flex">
          <Link href="/">
            <p className="flex  font-bold  text-teal-400 text-xl cursor-pointer">
              <span className="text-3xl">L</span>
              <span className=""> | Constantin</span>
            </p>
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
