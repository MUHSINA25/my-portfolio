import { motion } from "framer-motion";
import { FiAward, FiDatabase, FiCpu, FiStar } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/portfolioData";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  award: FiAward,
  sparkles: FiStar,
  database: FiDatabase,
  cpu: FiCpu,
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Certifications" title="Credentials that support the work" subtitle="A focused collection of industry-recognized learning milestones." />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, idx) => {
            const Icon = iconMap[cert.icon] ?? FiAward;
            return (
              <motion.div
                key={cert.title + cert.issuer}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="glass-panel rounded-[1.5rem] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#3b82f6]/20 bg-[#3b82f6]/10 text-[#93c5fd]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{cert.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{cert.issuer}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
