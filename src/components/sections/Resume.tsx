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
import { FaGraduationCap, FaRocket, FaDownload, FaFilePdf } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    category: "Tools & Backend",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
    ],
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative bg-[var(--background)] px-6 py-16 text-[var(--foreground)] transition-colors duration-300 sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <ScrollReveal direction="down">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--accent)] sm:text-sm">
              ACADEMIC &amp; TECHNICAL PROFILE
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              My <span className="text-[var(--accent)]">Resume</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)]">
              An overview of my technical capabilities, academic education, and
              ongoing software development journey.
            </p>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[var(--accent)]" />
          </div>
        </ScrollReveal>

        {/* Technical Skills Section */}
        <ScrollReveal direction="up" delay={80}>
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                Technical Skills &amp; Stack
              </h3>
              <span className="text-xs font-medium text-[var(--text-tertiary)]">
                Hover to highlight brand colors
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {skillCategories.map((group) => (
                <div
                  key={group.category}
                  className="card-hover-glow rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300"
                >
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <h4 className="text-sm font-bold text-[var(--foreground)]">
                      {group.category}
                    </h4>
                    <span className="rounded-full bg-[var(--subtle-bg)] px-2 py-0.5 text-xs font-semibold text-[var(--text-tertiary)]">
                      {group.skills.length} skills
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2">
                    {group.skills.map((skill) => {
                      const Icon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="group/skill flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--subtle-bg)] p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--surface-hover)]"
                          style={
                            {
                              "--brand-color": skill.color,
                            } as React.CSSProperties
                          }
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] border border-[var(--border)] transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:border-[var(--brand-color)]">
                            <Icon
                              size={18}
                              className="text-[var(--text-soft)] transition-colors duration-300 group-hover/skill:text-[var(--brand-color)]"
                            />
                          </div>

                          <span className="truncate text-xs font-semibold text-[var(--text-soft)] transition-colors group-hover/skill:text-[var(--foreground)]">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Education & Journey Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <ScrollReveal direction="left" delay={120}>
            <article className="card-hover-glow flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--subtle-bg)] text-[var(--accent)] border border-[var(--border)]">
                    <FaGraduationCap size={22} />
                  </div>

                  <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold text-[var(--accent)] border border-red-500/20">
                    Currently Studying
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight sm:text-2xl">
                  B.Sc. in Computer Science &amp; Engineering
                </h3>

                <p className="mt-2 text-sm font-semibold text-[var(--text-soft)]">
                  Bangladesh University of Business &amp; Technology (BUBT)
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  Pursuing foundational and advanced concepts in computer
                  science, data structures, algorithms, object-oriented
                  programming, database systems, and modern web software
                  engineering.
                </p>
              </div>

              <div className="mt-6 border-t border-[var(--border)] pt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-[var(--text-tertiary)]">
                  Status: Undergraduate Student
                </span>
                <span className="text-xs font-semibold text-[var(--accent)]">
                  Dhaka, Bangladesh
                </span>
              </div>
            </article>
          </ScrollReveal>

          {/* Development Journey */}
          <ScrollReveal direction="right" delay={140}>
            <article className="card-hover-glow flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--subtle-bg)] text-[var(--accent)] border border-[var(--border)]">
                    <FaRocket size={20} />
                  </div>

                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-500 border border-emerald-500/20">
                    Active Growth
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight sm:text-2xl">
                  Web Development Journey
                </h3>

                <p className="mt-2 text-sm font-semibold text-[var(--text-soft)]">
                  Independent Projects &amp; Continuous Learning
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  Deepening core expertise across modern web stacks, including
                  TypeScript, React 19, Next.js App Router, Tailwind CSS, and
                  backend integrations. Building real-world web projects with a
                  focus on performance, responsive design, and clean code
                  architecture.
                </p>
              </div>

              <div className="mt-6 border-t border-[var(--border)] pt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-[var(--text-tertiary)]">
                  Focus: Modern Full-Stack Development
                </span>
                <span className="text-xs font-semibold text-emerald-500">
                  Continuous Learner
                </span>
              </div>
            </article>
          </ScrollReveal>
        </div>

        {/* Resume Download CTA */}
        <ScrollReveal direction="zoom" delay={160}>
          <div className="card-hover-glow mt-14 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center sm:p-10 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[var(--accent)] opacity-[0.06] blur-2xl"
            />

            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-[var(--accent)] mb-4">
              <FaFilePdf size={22} />
            </div>

            <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
              Interested in my complete credentials?
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
              Download my resume to see detailed information regarding my academic
              record, technical skills, coursework, and projects.
            </p>

            <div className="mt-6">
              <a
                href="/resume.pdf"
                download="Junayed_Hasan_Resume.pdf"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold !text-white shadow-lg shadow-red-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/25"
              >
                <FaDownload size={14} />
                <span>Download Resume</span>
              </a>
            </div>

            <p className="mt-3 text-xs text-[var(--text-tertiary)]">
              PDF Format • Accessible upon placing resume.pdf in public folder
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
