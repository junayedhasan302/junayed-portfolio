import Navbar from "@/components/layout/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0b0b0f] text-white">
        {/* Hero section */}
        <section id="home" className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-24 md:flex-row md:px-12">
          {/* Left content */}
          <div className="flex-1 text-center md:text-left">
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-red-500">
              WELCOME TO MY PORTFOLIO
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Hi, I&apos;m <span className="text-red-500">Junayed Hasan</span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
              CSE Student & Web Developer
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 md:mx-0">
              I&apos;m a Computer Science student at BUBT who enjoys programming
              and building modern web applications. I&apos;m continuously
              learning and improving my development skills.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-red-500 px-6 py-3 font-semibold transition hover:bg-red-600"
              >
                Explore My Projects
              </a>

              <a
                href="https://github.com/junayedhasan302"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-700 px-6 py-3 font-semibold transition hover:border-red-500 hover:text-red-400"
              >
                GitHub Profile
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex justify-center gap-6 text-sm text-gray-400 md:justify-start">
              <a
                href="https://www.linkedin.com/in/junayed-hasan-jh/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-red-400"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/junayedhasan302"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-red-400"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right profile placeholder */}
          <div className="flex flex-1 justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-full border-4 border-red-500/70 bg-gray-900 shadow-[0_0_60px_rgba(239,68,68,0.15)] sm:h-80 sm:w-80">
              <div className="text-center">
                <p className="text-6xl font-bold text-red-500">JH</p>
                <p className="mt-3 text-sm text-gray-400">Profile Photo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section placeholder */}
        <section id="projects" className="px-6 py-20 text-center">
          <p className="text-sm tracking-[0.3em] text-red-500">MY WORK</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-400">
            My projects will appear here soon.
          </p>
        </section>
      </main>
    </>
  );
}
