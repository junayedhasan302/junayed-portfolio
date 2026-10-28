
"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/components/layout/ThemeProvider";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-background)] text-[var(--foreground)] shadow-sm backdrop-blur-xl transition-colors duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-12">
        <a
          href="#home"
          className="shrink-0 text-xl font-bold tracking-wide"
          aria-label="Junayed Hasan home"
        >
          Junayed<span className="text-[var(--accent)]">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              mounted ? `Switch to ${nextTheme} mode` : "Toggle color theme"
            }
            title={mounted ? `Switch to ${nextTheme} mode` : "Toggle color theme"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--subtle-bg)] text-[var(--accent)] transition duration-300 hover:rotate-12 hover:border-[var(--accent)] hover:bg-[var(--surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            {mounted ? (
              isDark ? <FaSun size={17} /> : <FaMoon size={17} />
            ) : (
              <span className="h-[17px] w-[17px]" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm transition hover:border-[var(--accent)] lg:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-[var(--border)] bg-[var(--background)] px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
