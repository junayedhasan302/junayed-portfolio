import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import ProfilePhoto from "@/components/sections/ProfilePhoto";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FaGithub, FaLinkedin, FaArrowRight, FaFileAlt } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        {/* Ambient atmospheric glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -left-40 h-[450px] w-[450px] rounded-full bg-[var(--accent)] opacity-[0.03] blur-[140px]"
        />

        {/* Hero section */}
        <section
          id="home"
          className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-12 transition-colors duration-300 sm:px-10 md:flex-row md:gap-14 md:py-20 lg:px-16 lg:py-28"
        >
          {/* Left content */}
          <div className="flex-1 text-center md:text-left">
            <ScrollReveal direction="down" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[var(--text-secondary)] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Hi, I&apos;m{" "}
                <span className="text-[var(--accent)]">Junayed Hasan</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={140}>
              <h2 className="mt-4 text-xl font-semibold text-[var(--text-soft)] sm:text-2xl md:text-3xl">
                CSE Student &amp; Web Developer
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg md:mx-0">
                Undergraduate Computer Science &amp; Engineering student at BUBT
                dedicated to building clean, responsive, and user-centric web
                applications. Driven by continuous learning and pragmatic
                problem solving.
              </p>
            </ScrollReveal>

            {/* Action buttons */}
            <ScrollReveal direction="up" delay={260}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold !text-white shadow-lg shadow-red-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/25 hover:!text-white"
                >
                  <span>Explore My Projects</span>
                  <FaArrowRight
                    size={12}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#resume"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-md"
                >
                  <FaFileAlt size={14} />
                  <span>View Resume</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Social links & quick highlight pills */}
            <ScrollReveal direction="up" delay={320}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--text-secondary)] md:justify-start">
                <a
                  href="https://www.linkedin.com/in/junayed-hasan-jh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-sm"
                >
                  <FaLinkedin size={15} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/junayedhasan302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-sm"
                >
                  <FaGithub size={15} />
                  <span>GitHub</span>
                </a>

                <span className="hidden items-center gap-2 text-xs text-[var(--text-tertiary)] sm:inline-flex">
                  <span className="h-1 w-1 rounded-full bg-[var(--text-tertiary)]" />
                  Dhaka, Bangladesh
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive profile photo with circle animation & click to view */}
          <div className="flex w-full flex-1 justify-center">
            <ProfilePhoto />
          </div>
        </section>

        {/* Main portfolio sections */}
        <About />
        <Services />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
