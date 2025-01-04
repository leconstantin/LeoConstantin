import ProjectHeader from "@/sections/projects/ProjectHeader";
import ProjectLists from "@/sections/projects/ProjectLists";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};
export default function Projects() {
  return (
    <>
      <main>
        <ProjectHeader />
        <ProjectLists />
      </main>
    </>
  );
}
