import React from "react";
import { Clock } from "lucide-react";
import Image from "next/image";

import { BsGithub } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";
import { projects } from "@/config/projects";
import LikeProject from "./LikeProject";
export default function ProjectLists() {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 gap-6 lg:gap-y-7 pt-16 xl:pt-24">
      {projects.map((project) => (
        <div
          className="flex flex-col justify-between gap-3 border border-[#00000014] bg-white py-5 pl-6 pr-4 min-h-44 hover:border-zinc-300 rounded-lg ease-in-out duration-500 hover:bg-zinc-100/75 hover:shadow-sm dark:bg-zinc-900 dark:shadow-2xl dark:ring-1 dark:ring-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          key={project.id}
        >
          <div className="flex justify-start">
            <div className="flex flex-1 justify-start items-center gap-4">
              <div>
                <Image
                  src={project.logo}
                  alt={project.alt}
                  title={project.title}
                  className="h-8 w-8"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 pl-5">
                  {project.title}
                </p>
                <a
                  className="text-zinc-600 dark:text-zinc-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  href={`https://${project.hostlink}`}
                  target="_blank"
                >
                  <span>
                    <IoIosLink />
                  </span>
                  {project.hostlink}
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center h-8 pl-3 pr-3 bg-zinc-100 hover:bg-zinc-200 cursor-pointer rounded-full max-w-60 dark:bg-zinc-800 group">
              <a
                href={`https://github.com/${project.githublink}`}
                target="_blank"
                className="flex items-center gap-3"
              >
                <span>
                  <BsGithub />
                </span>
                <span className="text-sm tracking-tight group-hover:text-teal-200">
                  {project.githublink}
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="relative z-10 pt-2 text-sm text-zinc-600 dark:text-zinc-400 font-roboto max-w-96">
              {" "}
              {project.subtitile}
            </p>
            <div className="flex justify-between">
              <p className="text-zinc-600 dark:text-zinc-500 font-medium font-serif flex items-center gap-2">
                <span>
                  <Clock className="h-5 w-5" />
                </span>
                {project.time}
              </p>
              <LikeProject />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
