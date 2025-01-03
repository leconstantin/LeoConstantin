import Hero from "@/sections/home/Hero";
import Projects from "@/sections/home/Projects";
import Skills from "@/sections/home/Skills";
import TicTacToe from "@/sections/home/TicTacToe";
import Work from "@/sections/home/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <div>
        <div className="py-16 sm:mt-20 ">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-10">
            <TicTacToe />
            <Work />
          </div>
        </div>
      </div>
    </main>
  );
}
