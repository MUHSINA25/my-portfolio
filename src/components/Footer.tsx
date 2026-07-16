import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { personal } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }} className="text-lg font-semibold tracking-tight text-white">
          Muhsina <span className="text-gradient">CT</span>
        </a>

        <div className="flex items-center gap-4">
          {[
            { icon: FiLinkedin, href: personal.linkedin, label: "LinkedIn" },
            { icon: FiGithub, href: personal.github, label: "GitHub" },
            { icon: FiMail, href: `mailto:${personal.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-[#3b82f6]/40 hover:text-white">
              <Icon size={16} />
            </a>
          ))}
        </div>

        <div className="text-center text-sm text-slate-400">
          <p>Data Analyst • Data Scientist</p>
          <p className="mt-1">Designed &amp; developed with React + Vite • © {year} Muhsina CT</p>
        </div>
      </div>
    </footer>
  );
}
