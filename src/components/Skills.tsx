import { motion } from "framer-motion";
import { FiCode, FiLayers, FiCpu, FiBarChart2, FiTool } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolioData";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  code: FiCode,
  layers: FiLayers,
  brain: FiCpu,
  chart: FiBarChart2,
  tools: FiTool,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Toolkit"
          subtitle="A blend of programming, machine learning, and business-intelligence tools I use to turn raw data into clear, actionable insight."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, catIdx) => {
            const Icon = iconMap[cat.icon] ?? FiCode;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-slate-200/70 bg-white/70 p-7 shadow-sm backdrop-blur transition-all hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/30">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.category}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                        <span className="text-xs text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
