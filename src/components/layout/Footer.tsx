import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
  FaArrowRight,
  FaCode,
  FaCamera,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/junayedhasan302",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/junayed-hasan-jh",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/junayed.hasan.302",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jhjunayed",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Decorative ambient background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--accent)] opacity-[0.05] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[var(--accent)] opacity-[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-8 md:px-12 md:pt-20">
        {/* Pre-footer Callout Card */}
        <ScrollReveal direction="up" delay={0}>
          <div className="card-hover-glow relative mb-16 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10 md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.08] blur-3xl"
            />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--subtle-bg)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Looking for a Developer?</span>
                </div>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
                  Let&apos;s build something <span className="text-[var(--accent)]">remarkable</span> together.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  Available for frontend development, collaborative projects, internships,
                  and software engineering roles.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold !text-white shadow-lg shadow-red-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/25"
                >
                  <span>Start a Conversation</span>
                  <FaArrowRight
                    size={12}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Main footer grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand section */}
          <div className="sm:col-span-2">
            <a
              href="#home"
              aria-label="Junayed Hasan - Back to home"
              className="group inline-flex items-center text-3xl font-extrabold tracking-tight"
            >
              <span>Junayed</span>
              <span className="text-[var(--accent)] transition-transform duration-300 group-hover:scale-125">
                .
              </span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
              Undergraduate Computer Science &amp; Engineering student at BUBT
              focused on engineering high-performance, user-friendly web
              experiences. Constantly learning, building, and evolving.
            </p>

            {/* Areas of interest pills */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                <FaCode className="text-[var(--accent)]" size={13} />
                <span>Web Development</span>
              </span>

              <span className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                <FaCamera className="text-[var(--accent)]" size={12} />
                <span>Creative Photography</span>
              </span>
            </div>

            {/* Quick Explore Link */}
            <div className="mt-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] transition-all hover:gap-3"
              >
                <span>Explore Featured Projects</span>
                <FaArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Quick navigation links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Quick Navigation
            </h4>

            <div className="mt-3 h-1 w-10 rounded-full bg-[var(--accent)]" />

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] transition-all duration-200 hover:translate-x-1 hover:text-[var(--accent)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] opacity-40 transition-all duration-200 group-hover:scale-125 group-hover:opacity-100" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social connection & contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Connect With Me
            </h4>

            <div className="mt-3 h-1 w-10 rounded-full bg-[var(--accent)]" />

            <p className="mt-6 text-sm leading-relaxed text-[var(--text-secondary)]">
              Let&apos;s talk about web projects, tech stacks, or creative collaborations.
            </p>

            {/* Social media icons grid */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Junayed's ${label} profile`}
                  title={label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:!text-white shadow-sm"
                >
                  <Icon
                    size={17}
                    className="transition-colors duration-200 group-hover:!text-white"
                  />
                </a>
              ))}
            </div>

            {/* Quick Contact links */}
            <div className="mt-6 space-y-2.5 text-xs text-[var(--text-secondary)]">
              <a
                href="mailto:junayedhasan302@gmail.com"
                className="group flex items-center gap-2.5 transition-colors hover:text-[var(--accent)]"
              >
                <FaEnvelope size={13} className="text-[var(--accent)] shrink-0" />
                <span className="truncate">junayedhasan302@gmail.com</span>
              </a>

              <a
                href="tel:+8801789042515"
                className="group flex items-center gap-2.5 transition-colors hover:text-[var(--accent)]"
              >
                <FaPhone size={12} className="text-[var(--accent)] shrink-0" />
                <span>+880 1789-042515</span>
              </a>

              <a
                href="https://wa.me/8801789042515"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 transition-colors hover:text-[var(--accent)]"
              >
                <FaWhatsapp size={14} className="text-[var(--accent)] shrink-0" />
                <span>WhatsApp Message</span>
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-10 border-t border-[var(--border)]" />

        {/* Copyright and back-to-top */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm text-[var(--text-secondary)]">
              © 2026{" "}
              <span className="font-bold text-[var(--foreground)]">
                Junayed Hasan
              </span>
              . All rights reserved.
            </p>

            <p className="mt-1 flex flex-wrap items-center justify-center gap-1.5 text-xs text-[var(--text-tertiary)] sm:justify-start">
              <span>Crafted with</span>
              <FaHeart className="text-[var(--accent)] animate-pulse" size={11} />
              <span>using Next.js 16 &amp; Tailwind CSS</span>
            </p>
          </div>

          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top of page"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-xs font-bold text-[var(--text-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:!text-white shadow-sm"
          >
            <span>Back to top</span>
            <FaArrowUp
              size={12}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
