import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Education" title="Academic Background" />

        <div className="relative ml-4 space-y-10 border-l-2 border-dashed border-indigo-300/60 pl-10 dark:border-indigo-500/30">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[3.1rem] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30">
                <FiBookOpen size={15} />
              </span>
              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]">
                <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  {edu.duration}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {edu.institute}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
