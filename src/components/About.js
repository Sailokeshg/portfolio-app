import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  BrainCircuit,
  Calendar,
  GraduationCap,
  Layers,
  MapPin,
  ServerCog,
} from "lucide-react";
import { education, skills } from "../data/portfolio";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

const capabilityBlocks = [
  {
    title: "AI Knowledge Systems",
    icon: BrainCircuit,
    copy: "RAG chatbots, semantic retrieval, grounded answers, vector search, and LLM workflows built for enterprise reliability.",
    tags: ["RAG", "Agentic AI", "pgvector", "Azure AI"],
  },
  {
    title: "Product Engineering",
    icon: Layers,
    copy: "Full-stack applications with fast React interfaces, API architecture, product polish, and measurable user impact.",
    tags: ["React", "FastAPI", "Node.js", "Flutter"],
  },
  {
    title: "Cloud & Data Infrastructure",
    icon: ServerCog,
    copy: "Production pipelines, CI/CD, cloud deployments, analytics systems, and scalable data services.",
    tags: ["AWS", "Docker", "PostgreSQL", "ETL"],
  },
];

const categoryLabels = {
  frontend: "Interface",
  backend: "Services",
  database: "Data",
  cloud: "Cloud",
  tools: "Workflow",
};

const About = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillGroups = useMemo(
    () =>
      Object.entries(skills).map(([key, values]) => ({
        key,
        label: categoryLabels[key] || key,
        values,
      })),
    []
  );

  const visibleGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((group) => group.key === activeCategory);

  return (
    <section id="about" className="section-padding relative">
      <div className="container-center">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]"
        >
          <motion.div variants={itemVariants} className="lg:sticky lg:top-32 lg:self-start">
            <p className="section-kicker">Engineering Profile</p>
            <h2 className="section-title">What I build when the system needs to be smart.</h2>
            <p className="section-copy">
              My work sits where AI capability becomes real software: retrieval
              systems, product workflows, cloud services, and interfaces that
              make complex tools feel direct.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-3">
              {capabilityBlocks.map((block) => (
                <motion.article
                  key={block.title}
                  className="panel-border p-5"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-primary-400/25 bg-primary-400/10 text-primary-700 dark:text-primary-200">
                    <block.icon size={23} />
                  </div>
                  <h3 className="mt-6 text-xl font-black tracking-tight">{block.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-300">
                    {block.copy}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {block.tags.map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="panel-border p-5 sm:p-6">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <Boxes className="h-5 w-5 text-primary-600 dark:text-primary-300" />
                    <h3 className="text-2xl font-black tracking-tight">AI Engineering Stack</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">
                    Grouped by how the work actually ships: interfaces, services,
                    data, infrastructure, and team workflow.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["all", ...skillGroups.map((group) => group.key)].map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full px-3 py-2 text-xs font-bold transition-all ${
                        activeCategory === category
                          ? "bg-ink-950 text-white dark:bg-white dark:text-ink-950"
                          : "border border-ink-900/10 bg-white/[0.55] text-ink-600 hover:text-ink-950 dark:border-white/10 dark:bg-white/[0.045] dark:text-ink-300 dark:hover:text-white"
                      }`}
                    >
                      {category === "all" ? "All" : categoryLabels[category] || category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {visibleGroups.map((group) => (
                  <motion.div
                    key={group.key}
                    layout
                    className="rounded-2xl border border-ink-900/10 bg-ink-900/[0.025] p-4 dark:border-white/10 dark:bg-white/[0.035]"
                  >
                    <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.values.map((skill) => (
                        <span
                          key={skill.name}
                          className="rounded-xl border border-ink-900/10 bg-white px-3 py-2 text-sm font-semibold text-ink-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-ink-200"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-2">
              {education.map((edu) => (
                <article
                  key={edu.id}
                  className="rounded-3xl border border-ink-900/10 bg-white/[0.55] p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.045]"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 flex-none place-items-center rounded-2xl border border-signal-violet/25 bg-signal-violet/10 text-signal-violet">
                      <GraduationCap size={21} />
                    </div>
                    <div>
                      <p className="text-lg font-black tracking-tight">{edu.degree}</p>
                      <p className="mt-1 font-semibold text-primary-700 dark:text-primary-300">
                        {edu.institution}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-3 text-sm text-ink-500 dark:text-ink-400">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={14} />
                          {edu.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={14} />
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
