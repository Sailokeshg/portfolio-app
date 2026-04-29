import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { personalInfo } from "../data/portfolio";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        isScrolled
          ? "border-ink-900/10 bg-ink-50/90 backdrop-blur dark:border-white/10 dark:bg-ink-950/90"
          : "border-transparent bg-ink-50 dark:bg-ink-950"
      }`}
    >
      <nav className="container-center flex h-16 items-center justify-between">
        <button
          onClick={() => handleNavClick("#home")}
          className="text-left"
          aria-label="Go to home"
        >
          <span className="block text-sm font-bold tracking-tight text-ink-950 dark:text-white">
            {personalInfo.name}
          </span>
          <span className="block text-xs text-ink-500 dark:text-ink-400">
            Software Engineer
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="nav-link"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-ink-900/10 p-2 text-ink-600 transition-colors hover:text-ink-950 dark:border-white/10 dark:text-ink-300 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="rounded-lg border border-ink-900/10 p-2 text-ink-600 transition-colors hover:text-ink-950 dark:border-white/10 dark:text-ink-300 dark:hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-ink-900/10 bg-ink-50 dark:border-white/10 dark:bg-ink-950 md:hidden"
          >
            <div className="container-center py-3">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full rounded-lg px-1 py-2 text-left text-sm font-medium text-ink-700 dark:text-ink-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
