
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiPostman,
  SiMongodb,
  SiGnubash,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    title: "Tools & Backend",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
    ],
  },
];

// Combine all skills into one horizontal list.
const allSkills = skillGroups.flatMap((group) => group.skills);

export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-[var(--background)] px-6 py-24 text-[var(--foreground)] transition-colors duration-300 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-red-500">
            MY BACKGROUND
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            My <span className="text-red-500">Resume</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-500" />
        </div>

        {/* Technical Skills */}
        <h3 className="mb-7 text-2xl font-semibold">Technical Skills</h3>

        <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 transition-colors duration-300 sm:p-4">
          <div className="flex w-max min-w-full items-center gap-2 sm:gap-3">
            {allSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  title={skill.name}
                  className="group flex w-[54px] shrink-0 flex-col items-center gap-1.5 rounded-xl px-1 py-2 transition-all duration-300 hover:-translate-y-1 sm:w-[66px] sm:gap-2 sm:px-2 sm:py-3"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--subtle-bg)] transition-all duration-300 group-hover:border-transparent group-hover:shadow-md sm:h-12 sm:w-12"
                    style={
                      {
                        "--skill-color": skill.color,
                      } as React.CSSProperties
                    }
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-[var(--text-soft)] transition-colors duration-300 group-hover:text-[var(--skill-color)] sm:h-6 sm:w-6"
                    />
                  </div>

                  <span className="whitespace-nowrap text-[9px] leading-tight text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--foreground)] sm:text-[10px]">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="mb-7 text-2xl font-semibold">Education</h3>

          <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-colors duration-300">
            <p className="text-sm text-red-500">Currently Studying</p>

            <h4 className="mt-3 text-xl font-semibold">
              B.Sc. in Computer Science &amp; Engineering
            </h4>

            <p className="mt-2 text-[var(--text-soft)]">
              Bangladesh University of Business &amp; Technology (BUBT)
            </p>

            <p className="mt-3 leading-7 text-[var(--text-secondary)]">
              Currently pursuing my undergraduate degree while developing
              practical programming and web development skills.
            </p>
          </article>
        </div>

        {/* Development Journey */}
        <div className="mt-12">
          <h3 className="mb-7 text-2xl font-semibold">
            Development Journey
          </h3>

          <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-colors duration-300">
            <h4 className="text-xl font-semibold">
              Web Development Learning &amp; Projects
            </h4>

            <p className="mt-2 text-sm text-red-500">Ongoing</p>

            <p className="mt-4 leading-7 text-[var(--text-secondary)]">
              Learning modern web technologies and applying that knowledge
              through personal projects. Currently strengthening frontend
              development fundamentals and learning backend development.
            </p>
          </article>
        </div>

        {/* Resume download */}
        <div className="mt-12 text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex rounded-lg bg-red-500 px-6 py-3 font-semibold !text-white transition-colors duration-300 hover:bg-red-600 hover:!text-white"
          >
            Download Resume
          </a>

          <p className="mt-3 text-sm text-[var(--text-tertiary)]">
            Add your PDF resume to the public folder to enable downloading.
          </p>
        </div>
      </div>
    </section>
  );
}
