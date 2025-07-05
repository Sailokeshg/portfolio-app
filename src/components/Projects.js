import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Play } from "lucide-react";
import { projects } from "../data/portfolio";
import PropTypes from "prop-types";

const ProjectCard = ({ project, index, onProjectClick }) => (
  <motion.div
    variants={{
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }}
    className="card overflow-hidden group cursor-pointer"
    whileHover={{ y: -8, scale: 1.02 }}
    onClick={() => onProjectClick(project)}
    layout
  >
    {/* Project Image */}
    <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
        >
          <Play className="w-8 h-8 text-white" />
        </motion.div>
      </div>
      <div className="absolute top-4 right-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            project.status === "Completed"
              ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
              : "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
          }`}
        >
          {project.status}
        </span>
      </div>
    </div>

    {/* Project Info */}
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-100 dark:bg-dark-700 rounded text-xs font-medium"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 rounded text-xs font-medium">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={16} />
          <span>Code</span>
        </motion.a>
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={16} />
          <span>Live</span>
        </motion.a>
      </div>
    </div>
  </motion.div>
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

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        },
        exit: {
          opacity: 0,
          scale: 0.8,
          transition: {
            duration: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-white dark:bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-700">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Status and Links */}
        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === "Completed"
                ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                : "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
            }`}
          >
            {project.status}
          </span>
          <div className="flex gap-3">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              <span>View Code</span>
            </motion.a>
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </motion.a>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-semibold mb-2">About This Project</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-2 bg-gray-100 dark:bg-dark-700 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

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

  const allTechnologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ];
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-dark-800"
    >
      <div className="container-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and the technologies I've mastered
            </p>
          </motion.div>

          {/* Technology Filter */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <motion.button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === "all"
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Projects
              </motion.button>
              {allTechnologies.slice(0, 8).map((tech) => (
                <motion.button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === tech
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="wait">
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

      {/* Project Modal */}
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
