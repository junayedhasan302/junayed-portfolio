
const projects = [
  {
    number: "01",
    title: "Bazar Dor Bangla",
    description:
      "A Bangla-focused project for exploring product prices and market information.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Development",
    liveUrl: "https://damkoto-sable.vercel.app/",
  },
  {
    number: "02",
    title: "FitLog",
    description:
      "A fitness-related web project designed to help users track their fitness journey.",
    technologies: ["React", "Web Development"],
    category: "Development",
    liveUrl: "https://jhfitlog.vercel.app/",
  },
  {
    number: "03",
    title: "SobSomoy",
    description:
      "A news-focused web project for browsing news and current updates.",
    technologies: ["Next.js", "Web Development"],
    category: "Development",
    liveUrl: "https://sobsomoy-updated.vercel.app/",
  },
  {
    number: "04",
    title: "JH Book Vibe",
    description:
      "A book-focused web project for exploring and presenting book-related content.",
    technologies: ["Next.js", "Web Development"],
    category: "Development",
    liveUrl: "https://jhbook-vibe-vercel.app/",
  },
  {
    number: "05",
    title: "Photography Portfolio",
    description:
      "A photography portfolio showcasing visual stories and creative work.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Design",
    liveUrl: "https://jhp-sand.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#111116] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-red-500">
            MY RECENT WORK
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Featured <span className="text-red-500">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            A selection of projects I have worked on while learning
            and building my web development skills.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-500" />
        </div>

        {/* Project cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col rounded-2xl border border-white/10 bg-[#0b0b0f] p-7 transition duration-300 hover:-translate-y-1 hover:border-red-500/50"
            >
              {/* Project number and category */}
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-red-500/80">
                  {project.number}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold transition group-hover:text-red-400">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technology tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Live project link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-red-400 transition hover:text-red-300"
              >
                View Live Project
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/junayedhasan302"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:border-red-500 hover:text-red-400"
          >
            Explore My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
