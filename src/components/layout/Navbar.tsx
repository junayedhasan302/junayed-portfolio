"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "@/components/layout/ThemeProvider";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "services", label: "Services", href: "#services" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const { theme, toggleTheme } = useTheme();

  // Active section tracking (scrollspy)
  useEffect(() => {
    const sectionIds = ["home", "about", "services", "projects", "resume", "contact"];

    function handleScroll() {
      const scrollPosition = window.scrollY + 180;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Bottom of page: activate contact section
      if (window.scrollY + windowHeight >= documentHeight - 60) {
        setActiveSection("contact");
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(id);
          return;
        }
      }

      setActiveSection("home");
    }

    const rafId = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    if (!menuOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-background)] text-[var(--foreground)] shadow-sm backdrop-blur-xl transition-colors duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 sm:px-8 md:px-12">
        <a
          href="#home"
          onClick={() => setActiveSection("home")}
          className="group flex items-center gap-1 text-xl font-bold tracking-tight text-[var(--foreground)] transition-opacity hover:opacity-90"
          aria-label="Junayed Hasan - Homepage"
        >
          <span>Junayed</span>
          <span className="text-[var(--accent)] transition-transform duration-300 group-hover:scale-125">
            .
          </span>
        </a>

        {/* Desktop navigation with bottom active highlight */}
        <div className="hidden items-center gap-1.5 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`group/link relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
                }`}
              >
                <span>{link.label}</span>

                {/* Bottom highlight bar */}
                <span
                  className={`absolute -bottom-1 left-2.5 right-2.5 h-[2.5px] rounded-full bg-[var(--accent)] transition-all duration-300 ${
                    isActive
                      ? "scale-x-100 opacity-100 shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                      : "scale-x-0 opacity-0 group-hover/link:scale-x-50 group-hover/link:opacity-40"
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>

        {/* Action buttons (Theme toggle & Mobile menu button) */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              mounted ? `Switch to ${nextTheme} mode` : "Toggle color theme"
            }
            title={mounted ? `Switch to ${nextTheme} mode` : "Toggle color theme"}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--subtle-bg)] text-[var(--accent)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--surface-hover)] hover:rotate-12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:h-10 sm:w-10"
          >
            {mounted ? (
              isDark ? <FaSun size={16} /> : <FaMoon size={16} />
            ) : (
              <span className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--subtle-bg)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden sm:h-10 sm:w-10"
          >
            {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation dropdown */}
      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMenuOpen(false);
                  }}
                  className={`relative flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "border-b-2 border-[var(--accent)] bg-[var(--subtle-bg)] font-semibold text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
