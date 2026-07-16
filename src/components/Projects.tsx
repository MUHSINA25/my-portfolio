import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { projects, personal } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          subtitle="A selection of Machine Learning, Data Analysis, and Business Intelligence projects sourced directly from my GitHub repositories."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (idx % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 shadow-sm backdrop-blur transition-all hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {project.featured && (
                  <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-1 text-xs font-semibold text-white shadow">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                  >
                    <FiGithub size={16} /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-fuchsia-600 dark:text-slate-300 dark:hover:text-fuchsia-400"
                    >
                      <FiExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:scale-105 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <FiGithub size={16} /> View All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
