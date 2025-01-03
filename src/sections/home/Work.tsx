import { works } from "@/config/home";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Work() {
  return (
    <div className="space-y-10 lg:pl-16 xl:pl-24">
      <form className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex gap-2 items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MdOutlineMailOutline
            aria-hidden="true"
            className="h-6 w-6 flex-none text-zinc-400"
          />
          <span className="font-roboto ">Stay up to date</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-roboto max-w-72">
          Get notified when I publish something new, and unsubscribe at any
          time.
        </p>

        <div className="pt-6 flex">
          <input
            placeholder="Email address"
            aria-label="Email address"
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3  shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-z dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-300 dark:ring-0"
            type="email"
          />
          <button
            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70  ml-4 flex-none"
            type="submit"
          >
            Join
          </button>
        </div>
      </form>

      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <IoBriefcaseOutline
            aria-hidden="true"
            className="h-6 w-6 flex-none text-zinc-400"
          />
          <span className="font-roboto font-medium text-teal-400 text-base">
            Work
          </span>
        </h2>

        <ol className="mt-10 space-y-10">
          {works.map((work, index) => (
            <li className="flex gap-4" key={index}>
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 font-bold">
                {work.logo}
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">{work.Place}</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {work.Place}
                </dd>
                <dt className="sr-only">{work.Role}</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {work.Role}
                </dd>
                <dt className="sr-only">{work.Date}</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2019 until Present"
                >
                  <time dateTime={work.Date}>{work.Date}</time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
        <a
          href=""
          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 
              mt-6 w-full dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
        >
          <FaDownload size={15} />
          Download cv
        </a>
      </div>
    </div>
  );
}
