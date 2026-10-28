import { FaCode, FaLaptopCode, FaLayerGroup, FaCamera, FaCheck } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building fast, responsive, and accessible user interfaces utilizing modern React, Next.js, and Tailwind CSS.",
    icon: FaCode,
    tags: ["React 19", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    number: "02",
    title: "Responsive Web Design",
    description:
      "Creating seamless experiences across mobile, tablet, and desktop viewports with a focus on clarity and usability.",
    icon: FaLaptopCode,
    tags: ["Mobile First", "Fluid Layouts", "Accessibility", "Aesthetic UI"],
  },
  {
    number: "03",
    title: "Web Applications",
    description:
      "Developing practical web applications that bridge dynamic frontend interfaces with backend APIs and state management.",
    icon: FaLayerGroup,
    tags: ["RESTful APIs", "State Management", "Component Driven", "Clean Code"],
  },
  {
    number: "04",
    title: "Creative Photography",
    description:
      "Capturing visual stories through street photography, creative framing, and thoughtful compositions.",
    icon: FaCamera,
    tags: ["Visual Storytelling", "Composition", "Color Palette", "Street & Nature"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[var(--background)] px-6 py-16 text-[var(--foreground)] transition-colors duration-300 sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <ScrollReveal direction="down">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--accent)] sm:text-sm">
              WHAT I OFFER &amp; EXPLORE
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              My <span className="text-[var(--accent)]">Services</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)]">
              Core domains I focus on and continually refine through academic
              study, hands-on practice, and project development.
            </p>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[var(--accent)]" />
          </div>
        </ScrollReveal>

        {/* Service cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal
                key={service.number}
                direction="up"
                delay={index * 90}
              >
                <article className="card-hover-glow group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300">
                  {/* Watermark number in background */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-3 text-6xl font-black text-[var(--accent)] opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.14]"
                  >
                    {service.number}
                  </span>

                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--subtle-bg)] text-[var(--accent)] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:!text-white">
                        <Icon size={20} />
                      </div>

                      <span className="text-xs font-bold tracking-widest text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--accent)]">
                        FOCUS {service.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights / tags */}
                  <div className="mt-6 border-t border-[var(--border)] pt-4">
                    <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                      {service.tags.map((tag) => (
                        <li key={tag} className="flex items-center gap-2">
                          <FaCheck
                            size={10}
                            className="text-[var(--accent)] shrink-0"
                          />
                          <span>{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
