import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { projects, personal } from "../data/portfolioData";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with measurable impact"
          subtitle="A refined set of analytics and machine learning solutions built to solve real business problems."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group glass-panel overflow-hidden rounded-[1.75rem] p-2"
            >
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
                    <FiGithub size={15} /> GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-3.5 py-2 text-sm font-semibold text-[#bfdbfe] transition hover:bg-[#3b82f6]/20">
                      <FiExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
