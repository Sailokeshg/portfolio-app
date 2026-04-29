import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, TrendingUp } from "lucide-react";
import { experience } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const metricFromAchievement = (achievement) => {
  const match = achievement.match(/(\d+(?:,\d+)?\+?%?|\d+K\+?)/);
  return match ? match[0] : null;
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-10 lg:grid-cols-[260px_1fr]"
        >
          <motion.div variants={fadeUp}>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Work history</h2>
            <p className="section-copy">
              Roles, responsibilities, and measurable outcomes from recent
              software engineering work.
            </p>
          </motion.div>

          <div className="space-y-6">
            {experience.map((exp) => {
              const impactMetric = exp.achievements
                .map(metricFromAchievement)
                .find(Boolean);

              return (
                <motion.article
                  key={exp.id}
                  variants={fadeUp}
                  className="card"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-ink-950 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-primary-700 dark:text-primary-300">
                        {exp.company}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-ink-500 dark:text-ink-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={14} />
                          {exp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      <span className="pill">{exp.type}</span>
                      {impactMetric && (
                        <span className="pill text-primary-800 dark:text-primary-200">
                          <TrendingUp size={13} />
                          {impactMetric} impact
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-ink-600 dark:text-ink-300">
                    {exp.description}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {exp.achievements.slice(0, 3).map((achievement) => (
                      <div
                        key={achievement}
                        className="rounded-xl border border-ink-900/10 bg-ink-50/80 p-3 text-sm leading-6 text-ink-700 dark:border-white/10 dark:bg-white/[0.035] dark:text-ink-200"
                      >
                        {achievement}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.slice(0, 8).map((tech) => (
                      <span key={tech} className="pill">
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 8 && (
                      <span className="pill">
                        +{exp.technologies.length - 8}
                      </span>
                    )}
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

export default Experience;
