import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";
import { personal } from "../data/portfolioData";

const roles = ["Data Analyst", "Data Scientist", "AI Trainer"];

export default function Hero() {
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveRole((current) => (current + 1) % roles.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-24 sm:pt-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">Portfolio / 2026</p>
          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.5rem]">
            Hi, I&apos;m <span className="text-gradient">Muhsina CT</span>
          </h1>

          <div className="mt-6 flex min-h-[2.4rem] items-center text-xl font-medium text-slate-300 sm:text-2xl">
            <span className="mr-2 text-slate-500">I’m a</span>
            <motion.span
              key={roles[activeRole]}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-white"
            >
              {roles[activeRole]}
            </motion.span>
          </div>

          <p className="mt-8 text-2xl font-semibold leading-tight text-white sm:text-[2rem]">
            Transforming Data into Business Decisions.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-400">
            I build machine learning models, interactive dashboards and analytics solutions that solve real-world business problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("#projects")}
              className="rounded-full bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2563eb]"
            >
              Explore Projects
            </button>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              <FiDownload size={15} /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {[
              { label: "LinkedIn", href: personal.linkedin, icon: FiLinkedin },
              { label: "GitHub", href: personal.github, icon: FiGithub },
              { label: "Email", href: `mailto:${personal.email}`, icon: FiMail },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-[#3b82f6]/40 hover:text-white"
              >
                <Icon size={15} /> {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
            <img
              src={personal.avatar}
              alt="Portrait of Muhsina CT"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              loading="eager"
            />
          </div>
          <div className="glass-panel absolute -left-6 bottom-8 max-w-[13rem] rounded-2xl border border-white/10 p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">Current focus</p>
            <p className="mt-2 text-sm font-semibold text-white">ML + analytics for business growth</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-[0.28em]">Scroll</span>
        <FiArrowDown />
      </motion.button>
    </section>
  );
}
