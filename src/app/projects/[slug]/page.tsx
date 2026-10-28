import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaCheckCircle, FaLightbulb } from "react-icons/fa";
import { projects } from "@/data/projects";

// Generate a page for each project slug
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Junayed Hasan",
    };
  }

  return {
    title: `${project.title} — Project Case Study | Junayed Hasan`,
    description: project.description,
  };
}

// Page entry point
export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6 py-16 text-[var(--foreground)]">
          <p className="text-sm text-[var(--text-secondary)]">Loading project details...</p>
        </main>
      }
    >
      <ProjectDetailsContent slug={slug} />
    </Suspense>
  );
}

// Render the selected project's details
function ProjectDetailsContent({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);

  // Show a 404 page if the project does not exist
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-12 text-[var(--foreground)] transition-colors duration-300 sm:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Navigation back */}
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <FaArrowLeft
            size={12}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          <span>Back to Projects</span>
        </Link>

        {/* Header information */}
        <div className="mt-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--accent)]">
              PROJECT {project.number}
            </span>
            <span className="text-xs text-[var(--text-tertiary)]">•</span>
            <span className="text-xs font-medium text-[var(--text-secondary)]">
              Case Study
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {project.description}
          </p>
        </div>

        {/* Project screenshot */}
        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover object-top"
          />
        </div>

        {/* Technologies used */}
        <section className="mt-12">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Technologies Used
          </h2>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-soft)] shadow-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Two column grid for Challenges and Improvements */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Development challenges */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
            <div className="flex items-center gap-2.5 text-amber-500">
              <FaLightbulb size={18} />
              <h2 className="text-lg font-bold text-[var(--foreground)]">
                Key Challenges
              </h2>
            </div>

            <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Future improvements */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
            <div className="flex items-center gap-2.5 text-[var(--accent)]">
              <FaCheckCircle size={18} />
              <h2 className="text-lg font-bold text-[var(--foreground)]">
                Future Improvements
              </h2>
            </div>

            <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.improvements.map((improvement) => (
                <li key={improvement} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Project links CTA */}
        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-8">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold !text-white shadow-lg shadow-red-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/20"
          >
            <span>Visit Live Project</span>
            <FaExternalLinkAlt size={13} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FaGithub size={16} />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </main>
  );
}
