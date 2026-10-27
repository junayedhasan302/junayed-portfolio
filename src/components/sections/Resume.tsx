
const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "Tailwind CSS", "React.js", "Next.js"],
  },
  {
    title: "Tools & Backend",
    skills: ["Git", "GitHub", "REST APIs", "MongoDB", "Bash"],
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-[#0b0b0f] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-red-500">
            MY BACKGROUND
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            My <span className="text-red-500">Resume</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-500" />
        </div>

        {/* Skills */}
        <h3 className="mb-7 text-2xl font-semibold">Technical Skills</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-[#111116] p-6"
            >
              <h4 className="mb-5 font-semibold text-red-400">
                {group.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="mb-7 text-2xl font-semibold">Education</h3>

          <article className="rounded-2xl border border-white/10 bg-[#111116] p-7">
            <p className="text-sm text-red-400">Currently Studying</p>

            <h4 className="mt-3 text-xl font-semibold">
              B.Sc. in Computer Science & Engineering
            </h4>

            <p className="mt-2 text-gray-300">
              Bangladesh University of Business & Technology (BUBT)
            </p>

            <p className="mt-3 leading-7 text-gray-400">
              Currently pursuing my undergraduate degree while developing
              practical programming and web development skills.
            </p>
          </article>
        </div>

        {/* Development journey */}
        <div className="mt-12">
          <h3 className="mb-7 text-2xl font-semibold">
            Development Journey
          </h3>

          <article className="rounded-2xl border border-white/10 bg-[#111116] p-7">
            <h4 className="text-xl font-semibold">
              Web Development Learning & Projects
            </h4>

            <p className="mt-2 text-sm text-red-400">
              Ongoing
            </p>

            <p className="mt-4 leading-7 text-gray-400">
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
            className="inline-flex rounded-lg bg-red-500 px-6 py-3 font-semibold transition hover:bg-red-600"
          >
            Download Resume
          </a>

          <p className="mt-3 text-sm text-gray-500">
            Add your PDF resume to the public folder to enable downloading.
          </p>
        </div>
      </div>
    </section>
  );
}
