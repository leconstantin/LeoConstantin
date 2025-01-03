import AboutImage from "@/sections/about/AboutImage";
import AboutMe from "@/sections/about/AboutMe";
import Follow from "@/sections/about/Follow";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};
export default function About() {
  return (
    <main>
      <div className="py-20 mx-auto max-w-2xl lg:max-w-5xl">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto_1fr]">
          <AboutImage />

          <AboutMe />

          <Follow />
        </div>
      </div>
    </main>
  );
}
