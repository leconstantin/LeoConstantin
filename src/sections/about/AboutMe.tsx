export default function AboutMe() {
  return (
    <div className="lg:order-first lg:row-span-2">
      <div>
        <h1 className="text-3xl font-medium tracking-tight text-zinc-800 dark:text-zinc-100">
          Hi, I&apos;m{" "}
          <span className="text-teal-400 font-semibold">Leo Constantin !</span>{" "}
          I live in <span className="text-teal-400">Kigali city,</span> where I
          work on all kinds of awesome projects.
        </h1>

        <div className="mt-6 space-y-7 text-base text-zinc-600 font-roboto dark:text-zinc-400">
          <p>
            I&apos;ve been into programming for as long as I can remember. I
            wrote my first program when I was 15! Later, my parents got me a new
            HP ProBook, and I{" "}
            <span className="font-semibold dark:text-zinc-200">
              taught myself
            </span>{" "}
            how to code on it.
          </p>

          <p>
            Back in school, I studied{" "}
            <span className="font-semibold dark:text-zinc-200">
              Mathematics, Physics, and Computer Science,
            </span>{" "}
            which helped me build strong problem-solving skills. I loved
            figuring out how to solve different challenges using programming.
            Even before I had a computer, I was curious about how websites and
            technologies worked, and listening to tech programs on the radio
            kept me motivated.
          </p>

          <p>
            I&apos;m currently working as a{" "}
            <span className="font-semibold dark:text-zinc-200">freelancer</span>{" "}
            and continuously improving my skills. I&apos;m always excited to
            collaborate on new projects or tackle interesting challenges.
          </p>

          <p>
            I&apos;m seeking impactful, purposeful work with a diverse and
            talented team. If you&apos;re interested in{" "}
            <span className="font-semibold dark:text-zinc-200">
              working together
            </span>{" "}
            or have an opportunity, feel free to reach out to me I&apos;d love
            to <span className="font-semibold text-teal-600">connect</span> ! 😊
          </p>
          <p>Let&apos;s build something great together! 🚀</p>
        </div>
      </div>
    </div>
  );
}
