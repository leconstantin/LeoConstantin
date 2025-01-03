import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

const skills = [
  { name: "HTML", logo: <FaHtml5 size={39} /> },
  { name: "Css", logo: <FaCss3Alt size={39} /> },
  { name: "JavaScript", logo: <IoLogoJavascript size={39} /> },
  { name: "TypeScript", logo: <SiTypescript size={39} /> },
  { name: "React", logo: <FaReact size={39} /> },
  { name: "Next Js", logo: <RiNextjsFill size={39} /> },
  { name: "Tailwind Css", logo: <RiTailwindCssFill size={39} /> },
  { name: "PHP", logo: <SiPhp size={39} /> },
  { name: "Python", logo: <FaPython size={39} /> },
  { name: "Java", logo: <FaJava size={39} /> },
  { name: "Cpp", logo: <TbBrandCpp size={39} /> },
];
export default function Skills() {
  return (
    <div className="py-10 max-w-2xl">
      <div className="pb-6">
        <p className=" text-teal-400 text-xl font-semibold">
          <span className="text-zinc-900 dark:text-zinc-100">Development</span>{" "}
          Proficiencies
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 py-5">
        {skills.map((skill, i) => (
          <div key={i} className="skill" title={skill.name}>
            {skill.logo}
          </div>
        ))}
      </div>
    </div>
  );
}
