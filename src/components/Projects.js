import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  Bot,
  Code2,
  ExternalLink,
  FileText,
  Github,
  MessageSquare,
  Mic,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { projects } from "../data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ChatbotVisual = () => (
  <div className="relative h-full min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-ink-950 p-5 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(55,243,255,0.18),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(183,255,90,0.12),transparent_28%)]" />
    <div className="relative flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-300/[0.12] text-primary-200">
          <Bot size={22} />
        </span>
        <div>
          <p className="text-sm font-black">CSUEB Support AI</p>
          <p className="text-xs text-ink-400">Student query assistant</p>
        </div>
      </div>
      <span className="pill border-signal-green/25 bg-signal-green/10 text-signal-green">
        Live AI
      </span>
    </div>

    <div className="relative mt-6 space-y-3">
      <div className="ml-auto max-w-[78%] rounded-2xl rounded-tr-md bg-primary-300/[0.15] p-3 text-sm text-primary-50">
        What courses satisfy graduate ML requirements?
      </div>
      <div className="max-w-[86%] rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.07] p-4">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-signal-green">
          <Sparkles size={14} />
          Grounded answer
        </div>
        <p className="text-sm leading-6 text-ink-200">
          Based on CSUEB catalog context, eligible courses include Machine
          Learning, Advanced Algorithms, and Database Systems.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Voice input", "Memory", "Share chat"].map((tag) => (
            <span key={tag} className="rounded-full bg-white/[0.08] px-2.5 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="relative mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3">
      <Mic size={18} className="text-primary-200" />
      <div className="h-2 flex-1 rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary-300 to-signal-green"
          animate={{ width: ["22%", "82%", "36%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <MessageSquare size={18} className="text-ink-400" />
    </div>
  </div>
);

const ResumeVisual = () => (
  <div className="relative h-full min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-ink-950 p-5 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(167,139,250,0.2),transparent_28%),radial-gradient(circle_at_78%_70%,rgba(55,243,255,0.13),transparent_28%)]" />
    <div className="relative flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-signal-violet/[0.15] text-signal-violet">
          <FileText size={22} />
        </span>
        <div>
          <p className="text-sm font-black">LaTeX Resume Tailor</p>
          <p className="text-xs text-ink-400">Code and PDF workflow</p>
        </div>
      </div>
      <span className="pill border-primary-300/25 bg-primary-300/10 text-primary-200">
        Model select
      </span>
    </div>

    <div className="relative mt-6 grid gap-3 sm:grid-cols-[1fr_0.78fr]">
      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
        <div className="mb-3 flex items-center gap-2 text-xs text-ink-400">
          <Code2 size={14} />
          resume.tex
        </div>
        <div className="space-y-2 font-mono text-xs leading-5">
          <p><span className="text-primary-200">{"\\section"}</span>{"{AI Systems}"}</p>
          <p><span className="text-signal-green">{"\\item"}</span>{" RAG chatbot over 40K docs"}</p>
          <p><span className="text-signal-violet">{"\\item"}</span>{" Reduced lookup time by 60%"}</p>
          <p><span className="text-signal-amber">{"\\skill"}</span>{"{FastAPI, Azure, pgvector}"}</p>
        </div>
      </div>
      <div className="rounded-2xl bg-ink-50 p-3 text-ink-950">
        <div className="h-4 w-24 rounded bg-ink-900/20" />
        <div className="mt-4 space-y-2">
          <div className="h-2 rounded bg-ink-900/[0.18]" />
          <div className="h-2 w-4/5 rounded bg-ink-900/[0.18]" />
          <div className="h-2 w-5/6 rounded bg-primary-500/[0.35]" />
          <div className="h-2 w-2/3 rounded bg-ink-900/[0.18]" />
        </div>
        <div className="mt-5 rounded-xl border border-ink-900/10 p-3 text-xs font-bold">
          ATS score 94
        </div>
      </div>
    </div>

    <div className="relative mt-4 grid grid-cols-3 gap-2">
      {["Tone", "Length", "Export"].map((item) => (
        <div key={item} className="rounded-xl border border-white/10 bg-white/[0.06] p-3 text-center text-xs font-bold">
          {item}
        </div>
      ))}
    </div>
  </div>
);

const ProjectVisual = ({ project }) => {
  if (project.title.toLowerCase().includes("latex")) return <ResumeVisual />;
  return <ChatbotVisual />;
};

ProjectVisual.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const ProjectCard = ({ project, index, onProjectClick }) => (
  <motion.article
    variants={itemVariants}
    className={`group grid gap-5 ${index === 0 ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}
  >
    <motion.button
      onClick={() => onProjectClick(project)}
      className="block text-left"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      <ProjectVisual project={project} />
    </motion.button>

    <div className="panel-border flex flex-col justify-between p-5 sm:p-6">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="pill">{project.status}</span>
          <span className="pill">
            <Search size={14} />
            Case study
          </span>
        </div>
        <h3 className="mt-5 text-3xl font-black tracking-tight text-ink-950 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-ink-600 dark:text-ink-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 7).map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            onClick={(event) => event.stopPropagation()}
          >
            <Github size={17} />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            onClick={(event) => event.stopPropagation()}
          >
            <ExternalLink size={17} />
            Live
          </a>
        )}
        <button
          onClick={() => onProjectClick(project)}
          className="btn-secondary inline-flex items-center gap-2"
        >
          Open Detail
        </button>
      </div>
    </div>
  </motion.article>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired,
    liveUrl: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onProjectClick: PropTypes.func.isRequired,
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink-950/70 p-3 backdrop-blur-md sm:items-center sm:p-6"
      onMouseDown={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-ink-50 shadow-panel dark:bg-ink-950"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink-900/10 bg-ink-50/90 p-5 backdrop-blur dark:border-white/10 dark:bg-ink-950/90">
          <div>
            <p className="section-kicker">Project Detail</p>
            <h2 id="project-title" className="text-2xl font-black tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-xl border border-ink-900/10 bg-white text-ink-700 transition-colors hover:text-ink-950 dark:border-white/10 dark:bg-white/[0.06] dark:text-ink-200 dark:hover:text-white"
            aria-label="Close project detail"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-6 p-5 lg:grid-cols-[0.95fr_1.05fr] lg:p-6">
          <ProjectVisual project={project} />
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-black">Problem and solution</h3>
              <p className="mt-3 leading-8 text-ink-600 dark:text-ink-300">
                {project.longDescription}
              </p>
            </section>

            <section>
              <h3 className="text-lg font-black">Key features</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-ink-900/10 bg-white/60 p-4 dark:border-white/10 dark:bg-white/[0.045]"
                  >
                    <Sparkles className="h-4 w-4 text-primary-600 dark:text-primary-300" />
                    <p className="mt-3 text-sm leading-6 text-ink-700 dark:text-ink-200">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-black">Technology stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="pill">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Github size={17} />
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
    liveUrl: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const featuredTech = useMemo(
    () => ["all", ...new Set(projects.flatMap((project) => project.technologies).slice(0, 10))],
    []
  );

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <div>
              <p className="section-kicker">Project Lab</p>
              <h2 className="section-title">Case studies with product-level visuals.</h2>
              <p className="section-copy">
                The projects now show the actual product idea through crafted
                interface mockups instead of blank gradient placeholders.
              </p>
            </div>
            <div className="flex max-w-3xl flex-wrap gap-2">
              {featuredTech.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`rounded-full px-3 py-2 text-xs font-bold transition-all ${
                    filter === tech
                      ? "bg-ink-950 text-white dark:bg-white dark:text-ink-950"
                      : "border border-ink-900/10 bg-white/[0.55] text-ink-600 hover:text-ink-950 dark:border-white/10 dark:bg-white/[0.045] dark:text-ink-300 dark:hover:text-white"
                  }`}
                >
                  {tech === "all" ? "All" : tech}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 grid gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onProjectClick={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
