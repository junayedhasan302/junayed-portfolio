
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

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
    detail: "Let's chat",
    href: "https://wa.me/8801789042515",
    icon: FaWhatsapp,
    external: true,
  },
  {
    name: "LinkedIn",
    detail: "Connect professionally",
    href: "https://www.linkedin.com/in/junayed-hasan-jh/",
    icon: FaLinkedin,
    external: true,
  },
  {
    name: "GitHub",
    detail: "Explore my projects",
    href: "https://github.com/junayedhasan302",
    icon: FaGithub,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--background)] px-6 py-20 text-[var(--foreground)] transition-colors duration-300 sm:px-10 md:py-24 lg:px-16"
    >
      {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[var(--accent)] opacity-[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-[var(--accent)]">
            GET IN TOUCH
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s Work{" "}
            <span className="text-[var(--accent)]">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            Have a project idea, a question, or simply want to connect?
            I&apos;d love to hear from you. Let&apos;s discuss ideas,
            share knowledge, and explore opportunities to build something
            meaningful.
          </p>

          {/* Main contact button */}
          <a
            href="mailto:junayedhasan302@gmail.com"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[var(--accent)] px-7 py-3.5 font-semibold text-white shadow-lg shadow-red-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/20"
          >
            <FaEnvelope size={17} />
            Send Me an Email
            <FaArrowRight size={14} />
          </a>
        </div>

        {/* Contact information cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.name}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                aria-label={`${contact.name}: ${contact.detail}`}
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface-hover)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--subtle-bg)] text-[var(--accent)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                  <Icon size={20} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-[var(--foreground)]">
                    {contact.name}
                  </span>

                  <span className="mt-1 block break-words text-sm text-[var(--text-secondary)]">
                    {contact.detail}
                  </span>
                </span>

                <FaArrowRight
                  size={13}
                  className="shrink-0 text-[var(--text-tertiary)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                />
              </a>
            );
          })}
        </div>

        {/* Closing message */}
        <div className="mt-12 border-t border-[var(--border)] pt-7 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            Every great collaboration starts with a conversation.
            <span className="ml-1 font-medium text-[var(--foreground)]">
              Let&apos;s start one.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
