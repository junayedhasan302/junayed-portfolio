
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Temporary project data
const projects = [
  {
    slug: "bazar-dor-bangla",
    title: "Bazar Dor Bangla",
    description:
      "A Bangla-focused web application for exploring product prices and market information.",
    image: "/images/projects/bazar-dor.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://damkoto-sable.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/Assignment-07",
    challenges: [
      "Creating a responsive user interface.",
      "Organizing product information clearly.",
      "Maintaining a consistent design across devices.",
    ],
    improvements: [
      "Add more product and market data.",
      "Improve search and filtering.",
      "Enhance accessibility and performance.",
    ],
  },
  {
    slug: "fitlog",
    title: "FitLog",
    description:
      "A fitness-related web application designed to help users track their fitness journey.",
    image: "/images/projects/fitlog.png",
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "https://jhfitlog.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/Assignment-06",
    challenges: [
      "Designing a clear and usable interface.",
      "Organizing fitness-related information.",
    ],
    improvements: [
      "Add user accounts and saved progress.",
      "Improve fitness tracking features.",
    ],
  },
  {
    slug: "sobsomoy",
    title: "SobSomoy Updated",
    description:
      "A news-focused web application for browsing news and current updates.",
    image: "/images/projects/sobsomoy.png",
    technologies: ["Next.js", "JavaScript", "CSS"],
    liveUrl: "https://sobsomoy-updated.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/sobsomoy-updated",
    challenges: [
      "Presenting news content clearly.",
      "Building a responsive news layout.",
    ],
    improvements: [
      "Improve news search and categories.",
      "Enhance loading and error states.",
    ],
  },
  {
    slug: "jh-book-vibe",
    title: "Book Vibe",
    description:
      "A book-focused web application for exploring book-related content.",
    image: "/images/projects/book-vibe.png",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://jhbook-vibe-vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/book-vibe",
    challenges: [
      "Organizing book information.",
      "Creating an accessible browsing experience.",
    ],
    improvements: [
      "Add book search and filtering.",
      "Improve book details and recommendations.",
    ],
  },
  {
    slug: "photography-portfolio",
    title: "Photography Portfolio",
    description:
      "A photography portfolio showcasing visual stories and creative work.",
    image: "/images/projects/photography.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://jhp-sand.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/photography-portfolio",
    challenges: [
      "Displaying photographs effectively.",
      "Maintaining a responsive gallery layout.",
    ],
    improvements: [
      "Add more photography albums.",
      "Improve image viewing and gallery navigation.",
    ],
  },
];

// Generate a page for each project slug
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
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
        <main className="min-h-screen bg-[var(--background)] px-6 py-16 text-[var(--foreground)]">
          Loading project details...
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
    <main className="min-h-screen bg-[var(--background)] px-6 py-16 text-[var(--foreground)] transition-colors duration-300 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="text-sm text-red-500 transition hover:text-red-600"
        >
          ← Back to Projects
        </Link>

        <p className="mt-10 text-sm font-semibold tracking-[0.25em] text-red-500">
          PROJECT DETAILS
        </p>

        <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-3xl leading-8 text-[var(--text-secondary)]">
          {project.description}
        </p>

        {/* Project screenshot */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--subtle-bg)]">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-auto max-h-[520px] w-full object-cover object-top"
          />
        </div>

        {/* Technologies used */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Technologies Used</h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-[var(--border)] bg-[var(--subtle-bg)] px-4 py-2 text-sm text-[var(--text-soft)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Development challenges */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Challenges</h2>

          <ul className="mt-4 list-inside list-disc space-y-3 text-[var(--text-secondary)]">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </section>

        {/* Future improvements */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Future Improvements</h2>

          <ul className="mt-4 list-inside list-disc space-y-3 text-[var(--text-secondary)]">
            {project.improvements.map((improvement) => (
              <li key={improvement}>{improvement}</li>
            ))}
          </ul>
        </section>

        {/* Project links */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-red-500 px-6 py-3 font-semibold !text-white transition-colors duration-300 hover:bg-red-600 hover:!text-white"
          >
            Visit Live Project ↗
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[var(--border-strong)] px-6 py-3 font-semibold transition-colors duration-300 hover:border-red-500 hover:text-red-500"
          >
            GitHub Repository ↗
          </a>
        </div>
      </div>
    </main>
  );
}
