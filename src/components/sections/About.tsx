import { FaGraduationCap, FaUniversity, FaHeart, FaGithub, FaUser, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[var(--background)] px-6 py-16 text-[var(--foreground)] transition-colors duration-300 sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <ScrollReveal direction="down">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--accent)] sm:text-sm">
              GET TO KNOW ME
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              About <span className="text-[var(--accent)]">Me</span>
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[var(--accent)]" />
          </div>
        </ScrollReveal>

        {/* About content */}
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Biography */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={100}>
              <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
                Learning, building, and solving problems with modern code.
              </h3>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
                <p>
                  I&apos;m Junayed Hasan, an undergraduate Computer Science and
                  Engineering student at Bangladesh University of Business &amp;
                  Technology (BUBT). I have a deep curiosity for how modern web
                  applications are engineered from ground up.
                </p>

                <p>
                  My current focus centers on frontend engineering with React,
                  Next.js, and TypeScript, while steadily expanding my backend
                  proficiencies with REST APIs and databases. I believe in
                  learning through hands-on development and shipping projects
                  that solve real problems.
                </p>

                <p>
                  Beyond programming, I enjoy capturing moments through street
                  photography, playing chess, and exploring mathematical
                  concepts. Consistent practice, attention to detail, and a growth
                  mindset guide everything I build.
                </p>
              </div>

              {/* Quick highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="card-hover-glow rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
                  <span className="block text-2xl font-extrabold text-[var(--accent)] sm:text-3xl">
                    5+
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-[var(--text-secondary)]">
                    Featured Projects
                  </span>
                </div>

                <div className="card-hover-glow rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
                  <span className="block text-2xl font-extrabold text-[var(--accent)] sm:text-3xl">
                    BUBT
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-[var(--text-secondary)]">
                    CSE Undergraduate
                  </span>
                </div>

                <div className="card-hover-glow col-span-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center sm:col-span-1">
                  <span className="block text-2xl font-extrabold text-[var(--accent)] sm:text-3xl">
                    100%
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-[var(--text-secondary)]">
                    Dedication to Craft
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Personal Information Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={150}>
              <div className="card-hover-glow rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-lg shadow-black/5 transition-all duration-300 sm:p-8">
                <div className="flex items-center gap-3 border-b border-[var(--border)] pb-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--subtle-bg)] text-[var(--accent)] border border-[var(--border)]">
                    <FaCode size={18} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--foreground)]">
                      Personal Information
                    </h3>
                    <p className="text-xs text-[var(--text-tertiary)]">
                      Key details &amp; credentials
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="group flex items-start gap-3.5 rounded-xl p-2 transition-colors hover:bg-[var(--subtle-bg)]">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--subtle-bg)] text-[var(--accent)]">
                      <FaUser size={13} />
                    </div>
                    <div className="flex-1">
                      <span className="block text-xs font-medium text-[var(--text-tertiary)]">
                        Full Name
                      </span>
                      <span className="font-semibold text-[var(--text-soft)]">
                        Junayed Hasan
                      </span>
                    </div>
                  </div>

                  <div className="group flex items-start gap-3.5 rounded-xl p-2 transition-colors hover:bg-[var(--subtle-bg)]">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--subtle-bg)] text-[var(--accent)]">
                      <FaGraduationCap size={14} />
                    </div>
                    <div className="flex-1">
                      <span className="block text-xs font-medium text-[var(--text-tertiary)]">
                        Academic Degree
                      </span>
                      <span className="font-semibold text-[var(--text-soft)]">
                        B.Sc. in CSE (Ongoing)
                      </span>
                    </div>
                  </div>

                  <div className="group flex items-start gap-3.5 rounded-xl p-2 transition-colors hover:bg-[var(--subtle-bg)]">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--subtle-bg)] text-[var(--accent)]">
                      <FaUniversity size={13} />
                    </div>
                    <div className="flex-1">
                      <span className="block text-xs font-medium text-[var(--text-tertiary)]">
                        Institution
                      </span>
                      <span className="font-semibold text-[var(--text-soft)]">
                        Bangladesh University of Business &amp; Technology (BUBT)
                      </span>
                    </div>
                  </div>

                  <div className="group flex items-start gap-3.5 rounded-xl p-2 transition-colors hover:bg-[var(--subtle-bg)]">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--subtle-bg)] text-[var(--accent)]">
                      <FaHeart size={13} />
                    </div>
                    <div className="flex-1">
                      <span className="block text-xs font-medium text-[var(--text-tertiary)]">
                        Interests &amp; Hobbies
                      </span>
                      <span className="font-semibold text-[var(--text-soft)]">
                        Web Development, Photography, Chess, Mathematics
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 border-t border-[var(--border)] pt-4 px-2">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--subtle-bg)] text-[var(--accent)]">
                      <FaGithub size={14} />
                    </div>
                    <div className="flex-1">
                      <span className="block text-xs font-medium text-[var(--text-tertiary)]">
                        GitHub Profile
                      </span>
                      <a
                        href="https://github.com/junayedhasan302"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-[var(--accent)] transition-colors hover:underline"
                      >
                        <span>github.com/junayedhasan302</span>
                        <FaExternalLinkAlt size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
