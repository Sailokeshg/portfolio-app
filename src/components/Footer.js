import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { label: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
    { label: "GitHub", href: personalInfo.github, icon: Github },
    { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
  ];

  return (
    <footer className="relative border-t border-ink-900/10 px-4 py-10 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="container-center">
        <div className="flex flex-col gap-8 rounded-3xl border border-ink-900/10 bg-white/50 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.035] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black tracking-tight">{personalInfo.name}</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-ink-500 dark:text-ink-400">
              AI systems, full-stack products, and cloud-native software built
              with clarity and momentum.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="grid h-11 w-11 place-items-center rounded-xl border border-ink-900/10 bg-white/70 text-ink-600 transition-colors hover:border-primary-400/40 hover:text-ink-950 dark:border-white/10 dark:bg-white/[0.06] dark:text-ink-300 dark:hover:text-white"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                aria-label={link.label}
              >
                <link.icon size={19} />
              </motion.a>
            ))}
            <motion.button
              onClick={handleScrollToTop}
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <ArrowUp size={17} />
              Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
