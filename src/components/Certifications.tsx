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
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous Learning"
          subtitle="Industry-recognized certifications that strengthen my expertise in data science, machine learning, and generative AI."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => {
            const Icon = iconMap[cert.icon] ?? FiAward;
            return (
              <motion.div
                key={cert.title + cert.issuer}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, rotate: -0.5 }}
                className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-7 shadow-sm backdrop-blur transition-all hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/[0.03]"
              >
                {/* Ribbon corner */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rotate-45 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md shadow-orange-500/30">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-fuchsia-600 dark:text-fuchsia-400">
                  {cert.issuer}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
