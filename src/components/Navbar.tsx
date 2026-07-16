import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { personal } from "../data/portfolioData";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter((el): el is Element => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${scrolled ? "glass shadow-[0_20px_55px_rgba(0,0,0,0.28)]" : "bg-transparent"}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }} className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3b82f6] text-sm font-semibold text-white">MC</span>
            <span className="hidden sm:inline">Muhsina <span className="text-slate-400">CT</span></span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }} className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition ${active === link.href ? "text-white" : "text-slate-400 hover:text-white"}`}>
                {active === link.href && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10" transition={{ type: "spring", stiffness: 320, damping: 30 }} />}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:inline-flex">
              <FiDownload size={14} /> Resume
            </a>
            <button aria-label="Toggle menu" onClick={() => setOpen((value) => !value)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 lg:hidden">
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="mt-2 overflow-hidden rounded-[1.25rem] lg:hidden">
              <div className="glass-panel flex flex-col gap-1 p-3">
                {NAV_LINKS.map((link) => (
                  <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }} className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${active === link.href ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
