import React from "react";
import { motion } from "framer-motion";
import { Bot, ExternalLink, FileText, Github } from "lucide-react";
import { projects } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const projectMeta = {
  1: {
    label: "AI student support",
    icon: Bot,
    accent: "from-primary-500 to-cyan-300",
  },
  2: {
    label: "AI resume tooling",
    icon: FileText,
    accent: "from-violet-500 to-primary-300",
  },
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-10 lg:grid-cols-[260px_1fr]"
        >
          <motion.div variants={fadeUp}>
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Selected work</h2>
            <p className="section-copy">
              Projects that show how I think about AI products, developer
              tooling, and full-stack implementation.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {projects.map((project) => {
              const meta = projectMeta[project.id] || projectMeta[1];
              const Icon = meta.icon;

              return (
                <motion.article
                  key={project.id}
                  variants={fadeUp}
                  className="card overflow-hidden !p-0"
                >
                  <div className="grid md:grid-cols-[190px_1fr]">
                    <div className="relative min-h-44 bg-ink-950 p-5 text-white">
                      <div
                        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${meta.accent}`}
                      />
                      <Icon className="h-7 w-7 text-primary-200" />
                      <p className="mt-5 text-sm font-semibold">{meta.label}</p>
                      <p className="mt-2 text-xs leading-5 text-ink-300">
                        {project.technologies.slice(0, 3).join(" · ")}
                      </p>
                    </div>

                    <div className="p-5">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-xl font-semibold text-ink-950 dark:text-white">
                              {project.title}
                            </h3>
                            <span className="pill">{project.status}</span>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex shrink-0 gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary px-3"
                              aria-label={`${project.title} source code`}
                            >
                              <Github size={16} />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary px-3"
                              aria-label={`${project.title} live demo`}
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {project.features.slice(0, 3).map((feature) => (
                          <div
                            key={feature}
                            className="rounded-xl border border-ink-900/10 bg-ink-50/80 p-3 text-xs leading-5 text-ink-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-ink-300"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
