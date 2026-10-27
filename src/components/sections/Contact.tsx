
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#111116] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold tracking-[0.3em] text-red-500">
          GET IN TOUCH
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Let&apos;s Work <span className="text-red-500">Together</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
          Have a project idea or want to connect? Feel free to reach out.
          I&apos;m always open to learning, collaboration, and new opportunities.
        </p>

        <a
          href="mailto:junayedhasan302@gmail.com"
          className="mt-8 inline-flex rounded-lg bg-red-500 px-7 py-3 font-semibold transition hover:bg-red-600"
        >
          Contact Me
        </a>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a
            href="mailto:junayedhasan302@gmail.com"
            className="transition hover:text-red-400"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/junayet-hasan-jh/"
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
    </section>
  );
}
