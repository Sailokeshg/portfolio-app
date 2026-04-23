import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { emailjsConfig } from "../config/emailjs";
import { personalInfo } from "../data/portfolio";

const containerVariants = {
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

const contactRoutes = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sailokeshg",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/sailokeshg",
    href: personalInfo.github,
    icon: Github,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { serviceID, templateID, publicKey } = emailjsConfig;
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Sai Lokesh Reddy",
          to_email: personalInfo.email,
        },
        publicKey
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (sendError) {
      console.error("Error sending email:", sendError);
      setError("Message failed to send. Please email me directly instead.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <motion.div variants={itemVariants} className="lg:sticky lg:top-32 lg:self-start">
            <span className="pill border-signal-green/25 bg-signal-green/10 text-signal-green">
              Available for AI and full-stack roles
            </span>
            <p className="section-kicker mt-7">Contact</p>
            <h2 className="section-title">Have a hard AI product problem? Let’s make it usable.</h2>
            <p className="section-copy">
              I’m best at turning fuzzy knowledge workflows into shippable
              systems: retrieval, APIs, product interfaces, evaluation, and
              cloud deployment.
            </p>

            <div className="mt-8 grid gap-3">
              {contactRoutes.map((route) => (
                <motion.a
                  key={route.label}
                  href={route.href}
                  target={route.label === "Email" || route.label === "Phone" ? undefined : "_blank"}
                  rel={route.label === "Email" || route.label === "Phone" ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-4 rounded-2xl border border-ink-900/10 bg-white/[0.55] p-4 backdrop-blur transition-colors hover:border-primary-400/40 dark:border-white/10 dark:bg-white/[0.045]"
                  whileHover={{ x: 3 }}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-primary-400/25 bg-primary-400/10 text-primary-700 dark:text-primary-200">
                    <route.icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-black">{route.label}</span>
                    <span className="block truncate text-sm text-ink-500 group-hover:text-ink-900 dark:text-ink-400 dark:group-hover:text-white">
                      {route.value}
                    </span>
                  </span>
                </motion.a>
              ))}

              <div className="flex items-center gap-4 rounded-2xl border border-ink-900/10 bg-white/[0.55] p-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.045]">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-signal-violet/25 bg-signal-violet/10 text-signal-violet">
                  <MapPin size={20} />
                </span>
                <span>
                  <span className="block text-sm font-black">Location</span>
                  <span className="block text-sm text-ink-500 dark:text-ink-400">
                    {personalInfo.location}
                  </span>
                </span>
              </div>
            </div>

            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-secondary mt-6 inline-flex items-center gap-2"
            >
              <Download size={17} />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="panel-border p-5 sm:p-6 lg:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">
                  Message Pipeline
                </p>
                <h3 className="mt-2 text-3xl font-black tracking-tight">Send a message</h3>
              </div>
              <div className="hidden rounded-2xl border border-primary-400/25 bg-primary-400/10 p-4 text-primary-700 dark:text-primary-200 sm:block">
                <Send size={24} />
              </div>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-3xl border border-signal-green/25 bg-signal-green/10 p-8 text-center"
              >
                <CheckCircle2 className="mx-auto h-12 w-12 text-signal-green" />
                <h4 className="mt-4 text-2xl font-black">Message sent</h4>
                <p className="mt-2 text-ink-600 dark:text-ink-300">
                  Thanks for reaching out. I’ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-red-700 dark:text-red-200"
                  >
                    <AlertCircle className="h-5 w-5 flex-none" />
                    <p className="text-sm">{error}</p>
                  </motion.div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="AI system, product role, collaboration..."
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-field resize-none"
                    placeholder="Tell me what you are building..."
                  />
                </label>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary inline-flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
                  whileHover={{ y: isSubmitting ? 0 : -2 }}
                  whileTap={{ y: 0 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
