import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Building2, Calendar, CheckCircle2, MapPin, TrendingUp } from "lucide-react";
import { experience } from "../data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.62, ease: "easeOut" },
  },
};

const metricFromAchievement = (achievement) => {
  const match = achievement.match(/(\d+(?:,\d+)?\+?%?|\d+K\+?)/);
  return match ? match[0] : null;
};

const Experience = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 35%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"
        >
          <motion.div variants={itemVariants} className="lg:sticky lg:top-32 lg:self-start">
            <p className="section-kicker">Career Rail</p>
            <h2 className="section-title">From product engineering to production AI systems.</h2>
            <p className="section-copy">
              A compact view of the work: shipped interfaces, cloud services,
              AI workflows, data pipelines, and measurable operational gains.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["4", "engineering roles"],
                ["90%+", "benchmark accuracy"],
                ["100%", "citation-backed responses"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-ink-900/10 bg-white/[0.55] p-4 dark:border-white/10 dark:bg-white/[0.045]"
                >
                  <p className="text-2xl font-black tracking-tight">{value}</p>
                  <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-ink-900/10 dark:bg-white/10 md:left-6" />
            <motion.div
              style={{ scaleY }}
              className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-primary-400 via-signal-green to-signal-violet md:left-6"
            />

            <div className="space-y-6">
              {experience.map((exp, index) => {
                const metric = exp.achievements.map(metricFromAchievement).find(Boolean);
                return (
                  <motion.article
                    key={exp.id}
                    variants={itemVariants}
                    className="relative pl-12 md:pl-16"
                  >
                    <div className="absolute left-0 top-7 z-10 grid h-8 w-8 place-items-center rounded-full border border-primary-400/[0.35] bg-ink-50 text-primary-700 shadow-glow dark:bg-ink-950 dark:text-primary-200 md:left-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary-400" />
                    </div>

                    <motion.div
                      className="panel-border p-5 sm:p-6"
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    >
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="pill">
                              <Building2 size={14} />
                              {exp.company}
                            </span>
                            <span className="pill">{exp.type}</span>
                          </div>
                          <h3 className="mt-4 text-2xl font-black tracking-tight">
                            {exp.position}
                          </h3>
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

                        {metric && (
                          <div className="rounded-2xl border border-signal-green/25 bg-signal-green/10 p-4 text-left lg:min-w-36">
                            <TrendingUp className="h-5 w-5 text-signal-green" />
                            <p className="mt-3 text-3xl font-black tracking-tight">{metric}</p>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
                              impact signal
                            </p>
                          </div>
                        )}
                      </div>

                      <p className="mt-5 max-w-3xl text-sm leading-7 text-ink-600 dark:text-ink-300">
                        {exp.description}
                      </p>

                      <ul className="mt-5 grid gap-3">
                        {exp.achievements.slice(0, index < 2 ? 3 : 2).map((achievement) => (
                          <li key={achievement} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary-600 dark:text-primary-300" />
                            <span className="text-sm leading-6 text-ink-700 dark:text-ink-200">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.technologies.slice(0, 8).map((tech) => (
                          <span key={tech} className="pill">
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 8 && (
                          <span className="pill">+{exp.technologies.length - 8}</span>
                        )}
                      </div>
                    </motion.div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
