
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
} from "react-icons/fa";

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
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[var(--accent)] opacity-[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-6 pt-14 sm:px-8 md:px-12 md:pt-16">
        {/* Main footer grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand section */}
          <div className="sm:col-span-2">
            <a
              href="#home"
              aria-label="Junayed Hasan - Back to home"
              className="inline-flex items-center text-3xl font-extrabold tracking-tight"
            >
              Junayed<span className="text-[var(--accent)]">.</span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
              CSE student and web developer focused on building useful,
              user-friendly digital experiences. Learning, creating, and
              improving one project at a time.
            </p>

            {/* Areas of interest */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--text-soft)] transition-colors hover:border-[var(--accent)]">
                <FaCode className="text-[var(--accent)]" />
                Web Development
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--text-soft)] transition-colors hover:border-[var(--accent)]">
                <FaCamera className="text-[var(--accent)]" />
                Photography
              </span>
            </div>

            {/* Explore projects */}
            <a
              href="#projects"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
            >
              Explore my work
              <FaArrowRight
                size={12}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Quick navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em]">
              Quick Links
            </h3>

            <div className="mt-4 h-1 w-10 rounded-full bg-[var(--accent)]" />

            <ul className="mt-6 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accent)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] opacity-60 transition-all group-hover:scale-125 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em]">
              Let&apos;s Connect
            </h3>

            <div className="mt-4 h-1 w-10 rounded-full bg-[var(--accent)]" />

            <p className="mt-6 text-sm leading-7 text-[var(--text-secondary)]">
              Have an idea or want to collaborate? Feel free to reach out
              through my social platforms.
            </p>

            {/* Social media icons */}
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${label} profile`}
                  title={label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  <Icon
                    size={17}
                    className="text-current transition-colors duration-200 group-hover:!text-white"
                  />
                </a>
              ))}
            </div>

            {/* Email contact */}
            <a
              href="mailto:junayedhasan302@gmail.com"
              className="group mt-6 flex items-start gap-3 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              <FaEnvelope
                size={15}
                className="mt-0.5 shrink-0 text-[var(--accent)]"
              />
              <span className="break-all">
                junayedhasan302@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Closing message */}
        <div className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-6 text-center transition-colors duration-300 sm:px-8">
          <p className="text-sm font-medium text-[var(--foreground)] sm:text-base">
            Building today. Learning every day. Creating for tomorrow.
          </p>

          <p className="mt-2 text-xs leading-6 text-[var(--text-secondary)] sm:text-sm">
            Always open to meaningful conversations, creative ideas, and
            opportunities to grow.
          </p>
        </div>

        {/* Bottom divider */}
        <div className="my-8 border-t border-[var(--border)]" />

        {/* Copyright and back-to-top */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm text-[var(--text-secondary)]">
              © 2026{" "}
              <span className="font-semibold text-[var(--foreground)]">
                Junayed Hasan
              </span>
              . All rights reserved.
            </p>

            <p className="mt-2 flex flex-wrap items-center justify-center gap-1.5 text-xs text-[var(--text-tertiary)] sm:justify-start">
              Crafted with
              <FaHeart className="text-[var(--accent)]" size={11} />
              using Next.js &amp; Tailwind CSS.
            </p>
          </div>

          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:!text-white"
          >
            Back to top
            <FaArrowUp
              size={13}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:!text-white"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
