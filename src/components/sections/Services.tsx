
const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces with React, Next.js, and Tailwind CSS.",
    icon: "⌘",
  },
  {
    number: "02",
    title: "Web Design",
    description:
      "Creating clean layouts with a focus on usability, consistency, and responsive design.",
    icon: "✳",
  },
  {
    number: "03",
    title: "Web Applications",
    description:
      "Learning to build practical web applications by connecting interfaces with APIs and backend services.",
    icon: "⌘",
  },
  {
    number: "04",
    title: "Photography",
    description:
      "Capturing visual stories through street photography, nature, and creative compositions.",
    icon: "◎",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[var(--background)] px-6 py-12 text-[var(--foreground)] transition-colors duration-300 sm:px-10 md:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-red-500">
            WHAT I EXPLORE
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            My <span className="text-red-500">Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--text-secondary)]">
            Areas I work on and continue to develop through learning and
            practical projects.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-500" />
        </div>

        {/* Service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl text-red-500">
                  {service.icon}
                </span>

                <span className="text-sm text-[var(--text-tertiary)]">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-semibold transition group-hover:text-red-500">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
