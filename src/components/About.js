import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { education, skills } from "../data/portfolio";

const About = () => {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState("all");

  const skillCategories = [
    "all",
    "Frontend",
    "Backend",
    "Database",
    "Cloud",
    "Tools",
  ];

  const filteredSkills =
    selectedSkillCategory === "all"
      ? Object.values(skills).flat()
      : Object.values(skills)
          .flat()
          .filter((skill) => skill.category === selectedSkillCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate about creating innovative solutions and building
              scalable applications
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="card p-6 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">{edu.degree}</h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award size={14} />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium text-sm">
                          Relevant Coursework:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 bg-gray-100 dark:bg-dark-700 rounded text-xs"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Technical Skills
            </h3>

            {/* Skill Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {skillCategories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedSkillCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedSkillCategory === category
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{skill.name}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Info */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Why Work With Me?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-semibold text-center md:text-left">
                    Innovation Driven
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
                    Always exploring new technologies and approaches to solve
                    complex problems efficiently.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-center md:text-left">
                    Results Focused
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
                    Committed to delivering high-quality solutions that meet
                    business objectives and user needs.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-semibold text-center md:text-left">
                    Team Player
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
                    Excellent communication skills and experience working in
                    collaborative environments.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
