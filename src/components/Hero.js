import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const handleScroll = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const metrics = [
  { value: "40K+", label: "docs indexed for RAG" },
  { value: "60%", label: "faster knowledge lookup" },
  { value: "90%+", label: "answer accuracy benchmarks" },
];

const focusAreas = ["AI/RAG", "Full-stack", "Cloud", "Data pipelines"];

const Hero = () => {
  return (
    <section id="home" className="section-padding pt-14 sm:pt-24">
      <div className="container-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-10 border-b border-ink-900/10 pb-16 dark:border-white/10 lg:grid-cols-[1fr_340px]"
        >
          <div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              <span className="pill">Software Engineer</span>
              <span className="pill">AI-focused full-stack developer</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-4xl text-balance text-5xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-6xl"
            >
              I build practical AI and full-stack software for real product
              workflows.
            </motion.h1>
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-xl font-semibold text-ink-800 dark:text-ink-100"
            >
              {personalInfo.name} · {personalInfo.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-3xl text-lg leading-8 text-ink-600 dark:text-ink-300"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="pill">
                  {area}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button
                onClick={() => handleScroll("#projects")}
                className="btn-primary"
              >
                View Projects
                <ArrowRight size={16} />
              </button>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-secondary"
              >
                <Download size={16} />
                Resume
              </a>
              <button
                onClick={() => handleScroll("#contact")}
                className="btn-secondary"
              >
                Contact
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <p className="text-2xl font-bold tracking-tight text-ink-950 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-ink-500 dark:text-ink-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.aside variants={fadeUp} className="card h-fit">
            <div className="accent-line">
              <p className="text-sm leading-6 text-ink-600 dark:text-ink-300">
                Software engineer with AI, product, and cloud experience.
              </p>
            </div>
            <div className="mt-5 space-y-3 border-t border-ink-900/10 pt-5 text-sm text-ink-600 dark:border-white/10 dark:text-ink-300">
              <p className="flex items-center gap-2">
                <Briefcase size={15} />
                Full-stack · AI/RAG · Cloud
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={15} />
                {personalInfo.location}
              </p>
            </div>
            <div className="mt-4 space-y-3 text-sm text-ink-600 dark:text-ink-300">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-ink-950 dark:hover:text-white"
              >
                <Mail size={15} />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-ink-950 dark:hover:text-white"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-ink-950 dark:hover:text-white"
              >
                <Github size={15} />
                GitHub
              </a>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
