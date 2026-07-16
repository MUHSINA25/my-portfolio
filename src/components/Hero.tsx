import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";
import { personal } from "../data/portfolioData";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* Animated gradient blobs background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-400/30 blur-3xl animate-blob dark:bg-indigo-600/20" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-fuchsia-400/30 blur-3xl animate-blob animation-delay-2000 dark:bg-fuchsia-600/20" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl animate-blob animation-delay-4000 dark:bg-pink-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,100,120,0.15)_1px,transparent_0)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Text content */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Available for opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Hi, I'm <span className="text-gradient">Muhsina CT</span>
          </motion.h1>

          <motion.div variants={item} className="mt-4 flex flex-wrap gap-2 text-lg font-semibold text-slate-700 sm:text-xl dark:text-slate-200">
            {personal.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-2">
                {role}
                {i < personal.roles.length - 1 && <span className="text-indigo-400">•</span>}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
          >
            {personal.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("#projects")}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
            >
              View Projects
            </button>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:scale-105 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <FiDownload size={15} /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-700 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              Contact Me →
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[
              { icon: FiLinkedin, href: personal.linkedin, label: "LinkedIn" },
              { icon: FiGithub, href: personal.github, label: "GitHub" },
              { icon: FiMail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-600 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-indigo-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-500 opacity-30 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-3 shadow-2xl">
            <img
              src={personal.avatar}
              alt="Muhsina CT - Data Analyst and Data Scientist"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
              loading="eager"
            />
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="glass absolute -left-6 top-8 hidden rounded-2xl px-4 py-3 shadow-lg sm:block"
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">Trainer at</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">IQJITA Innovative LLP</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="glass absolute -right-4 bottom-10 hidden rounded-2xl px-4 py-3 shadow-lg sm:block"
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">Focused on</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">ML & Business Intelligence</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <FiArrowDown />
      </motion.button>
    </section>
  );
}
