import { motion } from "framer-motion";
import { FiBookOpen, FiTrendingUp, FiUsers, FiCpu, FiBarChart2 } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { about } from "../data/portfolioData";

const icons = [FiBookOpen, FiTrendingUp, FiCpu, FiBarChart2, FiUsers];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Bridging Science, Data & Business"
          subtitle={about.summary}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.highlights.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-7 shadow-sm backdrop-blur transition-all hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-400/20 to-fuchsia-400/20 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/30">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

          {/* Stat card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex flex-col justify-center gap-5 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-pink-600 p-7 text-white shadow-xl shadow-indigo-500/30"
          >
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div>
              <p className="text-4xl font-extrabold">1.5+</p>
              <p className="text-sm text-white/80">Years in Data Science & Training</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold">10+</p>
              <p className="text-sm text-white/80">Data Analytics & ML Projects</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold">5</p>
              <p className="text-sm text-white/80">Professional Certifications</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
