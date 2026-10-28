import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactLinks = [
  {
    name: "Email",
    detail: "junayedhasan302@gmail.com",
    href: "mailto:junayedhasan302@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "Phone",
    detail: "+880 1789-042515",
    href: "tel:+8801789042515",
    icon: FaPhone,
  },
  {
    name: "WhatsApp",
    detail: "+880 1789-042515",
    href: "https://wa.me/8801789042515",
    icon: FaWhatsapp,
    external: true,
  },
  {
    name: "LinkedIn",
    detail: "junayed-hasan-jh",
    href: "https://www.linkedin.com/in/junayed-hasan-jh/",
    icon: FaLinkedin,
    external: true,
  },
  {
    name: "GitHub",
    detail: "junayedhasan302",
    href: "https://github.com/junayedhasan302",
    icon: FaGithub,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--background)] px-6 py-16 text-[var(--foreground)] transition-colors duration-300 sm:px-10 md:py-24 lg:px-16"
    >
      {/* Subtle decorative background ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.04] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[var(--accent)] opacity-[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <ScrollReveal direction="down">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--accent)] sm:text-sm">
              GET IN TOUCH
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Let&apos;s Work{" "}
              <span className="text-[var(--accent)]">Together</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)]">
              Whether you have an interesting project idea, an internship opportunity,
              or a question about modern web development, my inbox is always open.
            </p>

            {/* Primary contact CTA */}
            <div className="mt-8">
              <a
                href="mailto:junayedhasan302@gmail.com"
                className="inline-flex items-center gap-3 rounded-xl bg-[var(--accent)] px-8 py-4 text-sm font-semibold !text-white shadow-lg shadow-red-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/25"
              >
                <FaEnvelope size={16} />
                <span>Send Me an Email</span>
                <FaArrowRight size={12} />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact method cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <ScrollReveal
                key={contact.name}
                direction="up"
                delay={index * 70}
              >
                <a
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  aria-label={`${contact.name}: ${contact.detail}`}
                  className="card-hover-glow group flex h-full items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--subtle-bg)] text-[var(--accent)] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:!text-white">
                    <Icon size={19} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-[var(--foreground)]">
                      {contact.name}
                    </span>

                    <span className="mt-0.5 block truncate text-xs text-[var(--text-secondary)] transition-colors group-hover:text-[var(--foreground)]">
                      {contact.detail}
                    </span>
                  </span>

                  <FaArrowRight
                    size={12}
                    className="shrink-0 text-[var(--text-tertiary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                  />
                </a>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Closing status pill */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-14 border-t border-[var(--border)] pt-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-medium text-[var(--text-secondary)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for collaboration, internships &amp; junior frontend opportunities</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
