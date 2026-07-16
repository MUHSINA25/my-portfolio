import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Education" title="Academic foundation" subtitle="A strong base in science, business, and data-driven thinking." />

        <div className="space-y-5">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="glass-panel rounded-[1.5rem] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#3b82f6]/20 bg-[#3b82f6]/10 text-[#93c5fd]">
                  <FiBookOpen size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">{edu.duration}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-slate-400">{edu.institute}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
