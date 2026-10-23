import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { emailjsConfig } from "../config/emailjs";
import { personalInfo } from "../data/portfolio";

const links = [
  { label: "LinkedIn", href: personalInfo.linkedin },
  { label: "GitHub", href: personalInfo.github },
  { label: "Résumé", href: personalInfo.resumeUrl },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
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
          to_name: personalInfo.name,
          to_email: personalInfo.email,
        },
        publicKey
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(emptyForm);
      }, 3000);
    } catch (sendError) {
      console.error("Error sending email:", sendError);
      setError("Message failed to send. Please email me directly instead.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container-page flex flex-col gap-10 pb-24 pt-[clamp(6rem,11vw,8.75rem)]">
      <h2 className="font-serif text-[clamp(3.5rem,9vw,8.75rem)] font-normal leading-[0.95] tracking-[-0.02em]">
        Let's build something <span className="italic text-cobalt">useful.</span>
      </h2>

      <div className="grid gap-x-16 gap-y-12 border-t border-ink pt-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="break-all text-[clamp(1.375rem,3vw,2.25rem)] underline decoration-cobalt decoration-2 underline-offset-8 hover:text-cobalt"
          >
            {personalInfo.email}
          </a>
          <p className="max-w-md text-lg leading-relaxed text-muted">
            Open to software engineering and AI-focused product work: roles,
            collaborations or a quick chat.
          </p>
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="chip-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">Or send a note</p>
          {isSubmitted ? (
            <div role="status" className="mt-5 rounded-lg border border-line bg-white p-5">
              <p className="flex items-center gap-2 font-medium text-cobalt">
                <CheckCircle2 size={18} aria-hidden="true" />
                Message sent
              </p>
              <p className="mt-2 text-muted">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {error && (
                <p role="alert" className="flex items-center gap-2 rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-800">
                  <AlertCircle size={17} aria-hidden="true" />
                  {error}
                </p>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Name</span>
                  <input type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required className="field" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Email</span>
                  <input type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required className="field" />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Subject</span>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="field" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Message</span>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} required className="field resize-y" />
              </label>
              <button type="submit" disabled={isSubmitting} className="btn-solid w-full sm:w-auto">
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
