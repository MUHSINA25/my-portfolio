import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Data Analytics",
    skills: ["Pandas", "NumPy", "Excel", "Power BI"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "Streamlit", "ML Pipelines"],
  },
  {
    title: "Visualization",
    skills: ["Tableau", "Power BI", "Dashboards", "Data Storytelling"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A premium toolkit for modern analytics"
          subtitle="Focused on building useful products, insightful dashboards, and reliable models."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="glass-panel rounded-[1.5rem] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
