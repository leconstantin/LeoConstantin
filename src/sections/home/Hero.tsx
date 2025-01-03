import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
export default function Hero() {
  return (
    <main>
      <div className="pt-12">
        <div className="backdrop-blur rounded-full ring-2 ring-zinc-200 dark:ring-4 dark:ring-zinc-200  inline-block">
          <Image
            width={500}
            height={500}
            src="/me.jpeg"
            alt="Leo constantin image"
            title="Muhirwe Leo Constantin"
            loading="lazy"
            className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover bg-zinc-300 dark:bg-zinc-800"
          />
        </div>
      </div>
      <div className="max-w-2xl">
        <div className="pt-12 pb-2">
          <h1 className="text-4xl font-roboto font-semibold text-zinc-800 dark:text-zinc-100 sm:text-3xl flex flex-col justify-center gap-2">
            👋 Hello! I&apos;m Constantin,{" "}
            <mark className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-500 to-teal-400 dark:from-white dark:via-teal-400 dark:to-teal-600 w-80">
              FrontEnd developer
            </mark>{" "}
            <span className="text-lg text-zinc-700 dark:text-zinc-100">
              based in Kigali , Rwanda.
            </span>
          </h1>
          <p className="pt-6 font-roboto text-base text-zinc-600 dark:text-zinc-400">
            I love building tools that are user-friendly, simple and delightful.
            I was student at coursera learning FrontEnd Development course
            provided by meta where i have gained different modern skills about
            FrontEnd development.
          </p>
          <p className="py-6 font-roboto text-base text-zinc-600 dark:text-zinc-200">
            I&apos;m currently looking for a new role as developer.{" "}
            <mark
              id="hire"
              className="bg-gradient-to-r from-teal-400 to-teal-700 text-transparent bg-clip-text "
            >
              Contact me ?
            </mark>
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="h-10 w-10 text-zinc-500 hover:text-zinc-600 flex items-center justify-center rounded-full shadow shadow-teal-400/15 dark:shadow-none hover:scale-110  ease-in duration-300 cursor-pointer dark:bg-transparent dark:text-zinc-400 dark:hover:text-zinc-300 dark:ring-white/5">
          <BsTwitterX size={20} />
        </div>
        <div className="h-10 w-10 text-zinc-500 hover:text-zinc-600 flex items-center justify-center rounded-full shadow shadow-teal-400/15 dark:shadow-none hover:scale-110  ease-in duration-300 cursor-pointer dark:bg-transparent dark:text-zinc-400 dark:hover:text-zinc-300 dark:ring-white/5">
          <FaYoutube size={20} />
        </div>
        <div className="h-10 w-10 text-zinc-500 hover:text-zinc-600 flex items-center justify-center rounded-full shadow shadow-teal-400/15 dark:shadow-none hover:scale-110  ease-in duration-300 cursor-pointer dark:bg-transparent dark:text-zinc-400 dark:hover:text-zinc-300 dark:ring-white/5">
          <FaFacebookF size={20} />
        </div>
        <div className="h-10 w-10 text-zinc-500 hover:text-zinc-600 flex items-center justify-center rounded-full shadow shadow-teal-400/15 dark:shadow-none hover:scale-110  ease-in duration-300 cursor-pointer dark:bg-transparent dark:text-zinc-400 dark:hover:text-zinc-300 dark:ring-white/5">
          <FaInstagram size={20} />
        </div>
        <div className="h-10 w-10 text-zinc-500 hover:text-zinc-600 flex items-center justify-center rounded-full shadow shadow-teal-400/15 dark:shadow-none hover:scale-110  ease-in duration-300 cursor-pointer dark:bg-transparent dark:text-zinc-400 dark:hover:text-zinc-300 dark:ring-white/5">
          <FaWhatsapp size={20} />
        </div>
      </div>
    </main>
  );
}
