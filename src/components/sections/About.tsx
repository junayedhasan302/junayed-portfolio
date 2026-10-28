
export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--background)] px-6 py-12 text-[var(--foreground)] transition-colors duration-300 sm:px-10 md:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-red-500">
            GET TO KNOW ME
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            About <span className="text-red-500">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-500" />
        </div>

        {/* About content */}
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold leading-relaxed sm:text-3xl">
              Learning, building, and growing as a developer.
            </h3>

            <p className="mt-6 leading-8 text-[var(--text-secondary)]">
              I&apos;m Junayed Hasan, a Computer Science and Engineering
              student at Bangladesh University of Business & Technology
              (BUBT). I enjoy programming and exploring how modern web
              applications work.
            </p>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              My learning journey includes frontend development with React
              and Next.js. I&apos;m also learning backend development and
              working to turn my knowledge into practical projects.
            </p>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              Outside coding, I enjoy photography, chess, and mathematics.
              I believe consistent practice and curiosity help me become
              a better developer.
            </p>
          </div>

          {/* Personal information */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-colors duration-300 sm:p-9">
            <h3 className="mb-6 text-xl font-semibold">
              Personal Information
            </h3>

            <div className="space-y-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="min-w-32 text-[var(--text-tertiary)]">
                  Name
                </span>
                <span className="text-[var(--text-soft)]">
                  Junayed Hasan
                </span>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="min-w-32 text-[var(--text-tertiary)]">
                  Education
                </span>
                <span className="text-[var(--text-soft)]">
                  B.Sc. in CSE (Ongoing)
                </span>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="min-w-32 text-[var(--text-tertiary)]">
                  University
                </span>
                <span className="text-[var(--text-soft)]">
                  Bangladesh University of Business & Technology
                </span>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="min-w-32 text-[var(--text-tertiary)]">
                  Interests
                </span>
                <span className="text-[var(--text-soft)]">
                  Web Development, Photography, Chess
                </span>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="min-w-32 text-[var(--text-tertiary)]">
                  GitHub
                </span>
                <a
                  href="https://github.com/junayedhasan302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-red-500 transition hover:text-red-400"
                >
                  junayedhasan302
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
