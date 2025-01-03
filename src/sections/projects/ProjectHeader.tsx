import React from "react";

export default function ProjectHeader() {
  return (
    <div className="pt-14 sm:pt-18">
      <div className="max-w-2xl px-1">
        <h1 className="text-4xl font-bold font-roboto  tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Things I&apos;ve made trying to put my dent in the universe.
        </h1>
        <p className="mt-6 text-base font-roboto text-zinc-600 dark:text-zinc-400">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </div>
    </div>
  );
}
