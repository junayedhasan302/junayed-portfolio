export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111116] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
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

            <p className="mt-6 leading-8 text-gray-400">
              I&apos;m Junayed Hasan, a Computer Science and Engineering student
              at Bangladesh University of Business & Technology (BUBT). I enjoy
              programming and exploring how modern web applications work.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              My learning journey includes frontend development with React and
              Next.js. I&apos;m also learning backend development and working to
              turn my knowledge into practical projects.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Outside coding, I enjoy photography, chess, and mathematics. I
              believe consistent practice and curiosity help me become a better
              developer.
            </p>
          </div>

          {/* Personal information */}
          <div className="rounded-2xl border border-white/10 bg-[#0b0b0f] p-7 sm:p-9">
            <h3 className="mb-6 text-xl font-semibold">Personal Information</h3>

            <div className="space-y-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="min-w-32 text-gray-500">Name</span>
                <span className="text-gray-200">Junayed Hasan</span>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="min-w-32 text-gray-500">Education</span>
                <span className="text-gray-200">B.Sc. in CSE (Ongoing)</span>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="min-w-32 text-gray-500">University</span>
                <span className="text-gray-200">
                  Bangladesh University of Business & Technology
                </span>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="min-w-32 text-gray-500">Interests</span>
                <span className="text-gray-200">
                  Web Development, Photography, Chess
                </span>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <span className="min-w-32 text-gray-500">GitHub</span>
                <a
                  href="https://github.com/junayedhasan302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-red-400 transition hover:text-red-300"
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
