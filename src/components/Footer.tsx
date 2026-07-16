import { FiLinkedin, FiGithub, FiMail, FiHeart } from "react-icons/fi";
import { personal } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-slate-200/70 bg-white/60 py-10 backdrop-blur dark:border-white/10 dark:bg-black/20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-bold text-white shadow-md shadow-indigo-500/30">
            MC
          </span>
          Muhsina<span className="text-gradient"> CT</span>
        </a>

        <div className="flex items-center gap-4">
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <div className="text-center text-sm text-slate-500 dark:text-slate-400">
          <p className="flex items-center justify-center gap-1.5">
            Designed &amp; Developed by <span className="font-semibold text-slate-700 dark:text-slate-200">Muhsina CT</span>
            <FiHeart className="text-fuchsia-500" size={14} />
          </p>
          <p className="mt-1">© {year} Muhsina CT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
