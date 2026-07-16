import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { about } from "../data/portfolioData";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Certifications" },
  { value: "Open", label: "to Work" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About" title="Professional, focused, and built for impact" subtitle={about.summary} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="glass-panel rounded-[2rem] p-8"
          >
            <p className="text-lg leading-8 text-slate-400">
              I combine analytical rigor, practical machine learning experience, and a strong communication style to turn data into thoughtful business decisions. My work spans analytics, dashboards, and model development, with a focus on clarity and measurable impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="glass-panel rounded-[1.5rem] p-6"
              >
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
