import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  MapPin,
  Calendar,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { experience } from "../data/portfolio";

const Experience = () => {
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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My professional journey building innovative solutions and leading
              technical initiatives
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              variants={timelineVariants}
              className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-600 origin-top"
            />

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 z-10" />

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      className="card p-6 hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                            <Building className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl">{exp.company}</h3>
                            <p className="text-primary-600 dark:text-primary-400 font-medium">
                              {exp.position}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === "Full-time"
                              ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                              : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-sm">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement) => (
                            <li
                              key={achievement}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 dark:bg-dark-700 rounded-full text-xs font-medium hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for larger screens */}
                  <div className="hidden md:block md:w-2/12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always excited to take on new challenges and contribute to
                innovative projects.
              </p>
              <motion.button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Connect</span>
                <ExternalLink size={16} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
