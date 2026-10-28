
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import ProfilePhoto from "@/components/sections/ProfilePhoto";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        {/* Hero section */}
        <section
          id="home"
          className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 py-10 transition-colors duration-300 md:flex-row md:gap-10 md:px-12 md:py-12"
        >
          {/* Left content */}
          <div className="flex-1 text-center md:text-left">
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-red-500">
              WELCOME TO MY PORTFOLIO
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-red-500">Junayed Hasan</span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-[var(--text-soft)] sm:text-3xl">
              CSE Student &amp; Web Developer
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)] md:mx-0">
              I&apos;m a Computer Science student at BUBT who enjoys programming
              and building modern web applications. I&apos;m continuously
              learning and improving my development skills.
            </p>

            {/* Main action buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-red-500 px-6 py-3 font-semibold !text-white transition-colors duration-300 hover:bg-red-600 hover:!text-white"
              >
                Explore My Projects
              </a>

              <a
                href="#resume"
                className="rounded-lg border border-red-500 bg-red-500 px-6 py-3 font-semibold !text-white transition-colors duration-300 hover:bg-red-600 hover:!text-white"
              >
                View Resume
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex justify-center gap-6 text-sm text-[var(--text-secondary)] md:justify-start">
              <a
                href="https://www.linkedin.com/in/junayed-hasan-jh/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-red-500"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/junayedhasan302"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-red-500"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Interactive profile photo */}
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
