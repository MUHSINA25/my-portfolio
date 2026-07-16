import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Experience" title="A career built on execution" subtitle="Hands-on experience across AI training, analytics delivery, and real-world product thinking." />

        <div className="relative ml-4 space-y-8 border-l border-white/10 pl-8">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[2.05rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#3b82f6]/30 bg-[#11131a] text-[#3b82f6]">
                <FiBriefcase size={14} />
              </span>
              <div className="glass-panel rounded-[1.5rem] p-6">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">{exp.duration}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{exp.role}</h3>
                <p className="mt-1 text-sm font-medium text-[#93c5fd]">{exp.company}</p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-400">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
