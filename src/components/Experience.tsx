import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Journey"
          subtitle="Hands-on experience training future data professionals and delivering real-world machine learning and analytics projects."
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-fuchsia-500 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={exp.role + exp.company} className="relative sm:grid sm:grid-cols-2 sm:gap-10">
                  {/* dot */}
                  <div className="absolute left-[22px] top-1 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30 sm:left-1/2">
                    <FiBriefcase size={16} />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className={`ml-16 rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-xl hover:shadow-indigo-500/10 sm:ml-0 dark:border-white/10 dark:bg-white/[0.03] ${
                      isLeft ? "sm:col-start-1 sm:text-right" : "sm:col-start-2"
                    }`}
                  >
                    <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.duration}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400">
                      {exp.company}
                    </p>
                    <ul className={`mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 ${isLeft ? "sm:list-inside" : ""}`}>
                      {exp.points.map((p) => (
                        <li key={p} className="leading-relaxed">
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className={`mt-4 flex flex-wrap gap-2 ${isLeft ? "sm:justify-end" : ""}`}>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
