import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
    { label: "GitHub", href: personalInfo.github, icon: Github },
    { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
  ];

  return (
    <footer className="border-t border-ink-900/10 py-8 dark:border-white/10">
      <div className="container-center flex flex-col gap-4 text-sm text-ink-500 dark:text-ink-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {currentYear} {personalInfo.name}
        </p>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ink-950 dark:hover:text-white"
            >
              <link.icon size={15} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
