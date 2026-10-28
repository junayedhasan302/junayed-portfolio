
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Bazar Dor Bangla",
    description:
      "A Bangla-focused project for exploring product prices and market information.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/bazar-dor.png",
    liveUrl: "https://damkoto-sable.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/Assignment-07",
    slug: "bazar-dor-bangla",
  },
  {
    number: "02",
    title: "FitLog",
    description:
      "A fitness-related web project designed to help users track their fitness journey.",
    technologies: ["React", "Web Development"],
    image: "/images/projects/fitlog.png",
    liveUrl: "https://jhfitlog.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/Assignment-06",
    slug: "fitlog",
  },
  {
    number: "03",
    title: "SobSomoy",
    description:
      "A news-focused web project for browsing news and current updates.",
    technologies: ["Next.js", "Web Development"],
    image: "/images/projects/sobsomoy.png",
    liveUrl: "https://sobsomoy-updated.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/sobsomoy-updated",
    slug: "sobsomoy",
  },
  {
    number: "04",
    title: "JH Book Vibe",
    description:
      "A book-focused web project for exploring book-related content.",
    technologies: ["Next.js", "Web Development"],
    image: "/images/projects/book-vibe.png",
    liveUrl: "https://book-vibe-weld-two.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/book-vibe",
    slug: "jh-book-vibe",
  },
  {
    number: "05",
    title: "Photography Portfolio",
    description:
      "A photography portfolio showcasing visual stories and creative work.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/photography.png",
    liveUrl: "https://jhp-sand.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/photography-portfolio",
    slug: "photography-portfolio",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[var(--background)] px-6 py-12 text-[var(--foreground)] transition-colors duration-300 sm:px-10 md:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-red-500">
            MY RECENT WORK
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Featured <span className="text-red-500">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--text-secondary)]">
            A selection of projects I have worked on while learning and
            building my web development skills.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-500" />
        </div>

        {/* Project cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/5"
            >
              {/* Clickable card overlay */}
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View details for ${project.title}`}
                className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              />

              {/* Project preview image */}
              <div className="flex h-48 items-center justify-center overflow-hidden bg-[var(--subtle-bg)]">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-500/80">
                    {project.number}
                  </span>

                  <span className="text-xs tracking-wider text-[var(--text-tertiary)]">
                    PROJECT
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold transition-colors group-hover:text-red-500">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--text-secondary)]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-[var(--subtle-bg)] px-2.5 py-1 text-xs text-[var(--text-soft)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* External links */}
                <div className="relative z-20 mt-7 flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live ${project.title} project`}
                    title="Live Project"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--subtle-bg)] text-[var(--text-soft)] transition-colors hover:border-red-500 hover:bg-red-500/10 hover:text-red-500"
                  >
                    <FaExternalLinkAlt size={15} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    title="GitHub Repository"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--subtle-bg)] text-[var(--text-soft)] transition-colors hover:border-red-500 hover:bg-red-500/10 hover:text-red-500"
                  >
                    <FaGithub size={19} />
                  </a>

                  <span className="ml-auto text-sm font-medium text-[var(--text-secondary)] transition-colors group-hover:text-red-500">
                    View Details <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub profile link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/junayedhasan302"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] px-6 py-3 font-semibold text-[var(--foreground)] transition-colors hover:border-red-500 hover:text-red-500"
          >
            <FaGithub size={18} />
            Explore My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
