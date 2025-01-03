import { uses } from "@/config/uses";
import React from "react";

export default function UsesList() {
  return (
    <div className="pt-16">
      <div className="space-y-20">
        {uses.map((use, index) => (
          <section
            key={index}
            className="md:border-l-2 md:border-zinc-100  md:pl-6 dark:border-zinc-800"
          >
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-sm font-semibold text-teal-600 dark:text-zinc-100">
                {use.category}
              </h2>
              <div className="md:col-span-3">
                <ul className="space-y-16">
                  {use.items.map((item, index) => (
                    <li className="flex flex-col items-start" key={index}>
                      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        {item.title}
                      </h3>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {item.subtitle}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
