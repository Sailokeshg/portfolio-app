import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { emailjsConfig } from "../config/emailjs";
import { personalInfo } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const contactItems = [
  { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
  { label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, icon: Phone },
  { label: "LinkedIn", value: "linkedin.com/in/sailokeshg", href: personalInfo.linkedin, icon: Linkedin },
  { label: "GitHub", value: "github.com/sailokeshg", href: personalInfo.github, icon: Github },
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
    <section id="contact" className="section-padding">
      <div className="container-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-10 lg:grid-cols-[260px_1fr]"
        >
          <motion.div variants={fadeUp}>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Get in touch</h2>
            <p className="section-copy">
              I’m open to software engineering and AI-focused product work.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div variants={fadeUp} className="space-y-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" || item.label === "Phone" ? undefined : "_blank"}
                  rel={item.label === "Email" || item.label === "Phone" ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-3 rounded-lg border border-ink-900/10 bg-white p-3 text-sm transition-colors hover:bg-ink-100 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
                >
                  <item.icon className="h-4 w-4 text-ink-500 dark:text-ink-400" />
                  <span>
                    <span className="block font-medium text-ink-950 dark:text-white">
                      {item.label}
                    </span>
                    <span className="block text-ink-500 dark:text-ink-400">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
              <div className="flex items-center gap-3 rounded-lg border border-ink-900/10 bg-white p-3 text-sm dark:border-white/10 dark:bg-white/[0.04]">
                <MapPin className="h-4 w-4 text-ink-500 dark:text-ink-400" />
                <span>
                  <span className="block font-medium text-ink-950 dark:text-white">
                    Location
                  </span>
                  <span className="block text-ink-500 dark:text-ink-400">
                    {personalInfo.location}
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="card">
              <h3 className="text-lg font-semibold text-ink-950 dark:text-white">
                Send a message
              </h3>

              {isSubmitted ? (
                <div className="mt-6 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-700 dark:text-green-300">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 size={17} />
                    Message sent
                  </div>
                  <p className="mt-2">Thanks for reaching out. I’ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-300">
                      <AlertCircle size={17} />
                      {error}
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label>
                      <span className="mb-1.5 block text-sm font-medium">Name</span>
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
                    <label>
                      <span className="mb-1.5 block text-sm font-medium">Email</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="you@email.com"
                      />
                    </label>
                  </div>

                  <label>
                    <span className="mb-1.5 block text-sm font-medium">Subject</span>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="How can I help?"
                    />
                  </label>

                  <label>
                    <span className="mb-1.5 block text-sm font-medium">Message</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-field resize-none"
                      placeholder="Write your message..."
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
