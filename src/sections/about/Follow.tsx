import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const follows = [
  {
    on: "Follow on X",
    link: "https://x.com/le_con82546",
    logo: <BsTwitterX className="group-hover:text-teal-600 size-6" />,
  },
  {
    on: "Follow on Instagram",
    link: "https://www.instagram.com/lecon_stantin",
    logo: <FaInstagram className="group-hover:text-teal-600 size-6" />,
  },
  {
    on: "Follow on GitHub",
    link: "https://github.com/leconstantin",
    logo: <FaGithub className="group-hover:text-teal-600 size-6" />,
  },
  {
    on: "Follow on LinkedIn",
    link: "https://www.linkedin.com/in/leoconstantin",
    logo: <FaLinkedin className="group-hover:text-teal-600 size-6" />,
  },
];
export default function Follow() {
  return (
    <div className="lg:pl-20">
      <ul>
        {follows.map((follow, i) => (
          <li className=" py-2" key={i}>
            <a
              href={follow.link}
              className="group flex gap-4 text-sm font-medium text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 transition"
            >
              {follow.logo}
              <span>{follow.on}</span>
            </a>
          </li>
        ))}

        <li className="mt-8 border-t border-zinc-100 dark:border-zinc-700 pt-8 flex">
          <a
            href=""
            className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500"
          >
            <SiGmail className="group-hover:text-teal-600 size-5 dark:text-zinc-400" />
            <span className="ml-4 dark:text-zinc-400  dark:hover:text-zinc-100">
              muhirweleoconstantin@gamil.com
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
