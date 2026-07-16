import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone, FiInstagram } from "react-icons/fi";
import { personal } from "../data/portfolioData";

const actions = [
  { label: "Email Me", href: `mailto:${personal.email}`, icon: FiMail },
  { label: "LinkedIn", href: personal.linkedin, icon: FiLinkedin },
  { label: "GitHub", href: personal.github, icon: FiGithub },
  { label: "Resume", href: personal.resumeUrl, icon: FiDownload },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="glass-panel rounded-[2rem] p-8 text-center sm:p-10 lg:p-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            Let&apos;s Build Something Great Together.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            Open to thoughtful roles, product-minded teams, and ambitious data work that needs clarity and execution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {actions.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                <Icon size={15} /> {label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <a href={`mailto:${personal.email}`} className="hover:text-white">{personal.email}</a>
            <a href={personal.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
            <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          </div>

          <a href={`mailto:${personal.email}`} className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2563eb]">
            Start a Conversation <FiArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
