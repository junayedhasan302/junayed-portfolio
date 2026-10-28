import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaCodeBranch } from "react-icons/fa";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[var(--background)] px-6 py-16 text-[var(--foreground)] transition-colors duration-300 sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <ScrollReveal direction="down">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--accent)] sm:text-sm">
              PORTFOLIO SHOWCASE
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Featured <span className="text-[var(--accent)]">Projects</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)]">
              A curated selection of web applications and projects built to
              solve practical problems and demonstrate continuous learning.
            </p>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[var(--accent)]" />
          </div>
        </ScrollReveal>

        {/* Project cards grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              direction="up"
              delay={index * 90}
            >
              <article className="card-hover-glow group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300">
                {/* Project preview image with link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-[var(--subtle-bg)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                  aria-label={`View ${project.title} details`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Floating badge over image */}
                  <div className="absolute top-3 left-3 rounded-lg bg-[var(--nav-background)]/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold tracking-wider text-[var(--accent)] border border-[var(--border)]">
                    #{project.number}
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--text-tertiary)] flex items-center gap-1.5">
                      <FaCodeBranch size={11} className="text-[var(--accent)]" />
                      Web Application
                    </span>

                    <span className="rounded-full bg-[var(--subtle-bg)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--text-tertiary)]">
                      Case Study Available
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.description}
                  </p>

                  {/* Technology badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-[var(--border)] bg-[var(--subtle-bg)] px-2.5 py-1 text-xs font-medium text-[var(--text-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live site for ${project.title}`}
                        title="Live Demo"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--subtle-bg)] text-[var(--text-soft)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:!text-white shadow-sm"
                      >
                        <FaExternalLinkAlt size={13} />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${project.title} on GitHub`}
                        title="GitHub Repository"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--subtle-bg)] text-[var(--text-soft)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:!text-white shadow-sm"
                      >
                        <FaGithub size={16} />
                      </a>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
                    >
                      <span>Explore Details</span>
                      <FaArrowRight
                        size={11}
                        className="transition-transform duration-200 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* GitHub profile CTA */}
        <ScrollReveal direction="up" delay={150}>
          <div className="mt-14 text-center">
            <a
              href="https://github.com/junayedhasan302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-7 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-lg hover:shadow-red-500/10"
            >
              <FaGithub size={18} />
              <span>Explore More Repositories on GitHub</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
