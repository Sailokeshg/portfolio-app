import React from "react";
import { personalInfo } from "../data/portfolio";

const elsewhere = [
  { label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { label: "LinkedIn", href: personalInfo.linkedin, external: true },
  { label: "GitHub", href: personalInfo.github, external: true },
  { label: "Résumé (PDF)", href: personalInfo.resumeUrl, external: true },
];

const Hero = () => {
  return (
    <section id="top" className="container-page pb-14 pt-[clamp(3rem,8vw,7rem)]">
      <h1 className="font-serif text-[clamp(3.5rem,10.5vw,10.5rem)] font-normal leading-[0.92] tracking-[-0.02em]">
        Engineering AI
        <br />
        <span className="italic text-cobalt">people can trust.</span>
      </h1>

      <div className="mt-[clamp(2.5rem,6vw,5rem)] grid gap-x-12 gap-y-8 border-t border-ink pt-7 md:grid-cols-3">
        <div className="space-y-2.5">
          <p className="eyebrow">About</p>
          <p className="text-lg leading-relaxed">
            Full-stack engineer focused on RAG, agentic workflows and the backend
            systems that keep them accurate. Shipping software since 2021.
          </p>
        </div>
        <div className="space-y-2.5">
          <p className="eyebrow">Currently</p>
          <p className="text-lg leading-relaxed">
            {personalInfo.title} at <strong className="font-semibold">Agadia Systems</strong>{" "}
            — leading RAG chatbots and AI agents for the engineering lifecycle.
          </p>
        </div>
        <div className="space-y-2.5">
          <p className="eyebrow">Elsewhere</p>
          <ul className="flex flex-col text-lg leading-relaxed">
            {elsewhere.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-link"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
