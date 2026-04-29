import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { education, skills } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Databases",
  cloud: "Cloud",
  tools: "Tools",
};

const About = () => {
  const skillGroups = useMemo(() => Object.entries(skills), []);

  return (
    <section id="about" className="section-padding">
      <div className="container-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-10 lg:grid-cols-[260px_1fr]"
        >
          <motion.div variants={fadeUp}>
            <p className="section-kicker">About</p>
            <h2 className="section-title">Profile</h2>
            <p className="section-copy">
              A practical overview of what I work with and where I studied.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div variants={fadeUp} className="card">
              <h3 className="text-lg font-semibold text-ink-950 dark:text-white">
                What I focus on
              </h3>
              <div className="mt-4 grid gap-4 text-sm leading-7 text-ink-600 dark:text-ink-300 md:grid-cols-3">
                <p>
                  Building AI-assisted applications with RAG, LLM workflows, and
                  reliable backend services.
                </p>
                <p>
                  Developing React and full-stack products with clear user
                  flows, maintainable APIs, and production-ready patterns.
                </p>
                <p>
                  Working across cloud, data pipelines, databases, and tools
                  needed to ship stable software.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-lg font-semibold text-ink-950 dark:text-white">
                Technical skills
              </h3>
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                {skillGroups.map(([category, values]) => (
                  <div key={category} className="border-b border-ink-900/10 pb-5 dark:border-white/10">
                    <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">
                      {categoryLabels[category] || category}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {values.map((skill) => (
                        <span key={skill.name} className="pill">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-lg font-semibold text-ink-950 dark:text-white">
                Education
              </h3>
              <div className="mt-4 grid gap-4">
                {education.map((edu) => (
                  <article key={edu.id} className="card">
                    <div className="flex gap-4">
                      <GraduationCap className="mt-1 h-5 w-5 flex-none text-primary-700 dark:text-primary-300" />
                      <div>
                        <h4 className="font-semibold text-ink-950 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="mt-1 text-sm text-ink-700 dark:text-ink-200">
                          {edu.institution}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-ink-500 dark:text-ink-400">
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={14} />
                            {edu.location}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar size={14} />
                            {edu.duration}
                          </span>
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
