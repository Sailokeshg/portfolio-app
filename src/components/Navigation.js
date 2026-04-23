import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import {
  Briefcase,
  Code,
  Home,
  Mail,
  Menu,
  Moon,
  Sun,
  User,
  X,
} from "lucide-react";

const navigationItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Profile", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
];

const sectionIds = navigationItems.map((item) => item.href.replace("#", ""));

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const current = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;
          return {
            id,
            distance: Math.abs(element.getBoundingClientRect().top - 110),
            top: element.getBoundingClientRect().top,
          };
        })
        .filter(Boolean)
        .filter((section) => section.top < window.innerHeight * 0.62)
        .sort((a, b) => a.distance - b.distance)[0];

      if (current) setActiveSection(current.id);
    };

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
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2 backdrop-blur-2xl transition-all duration-300 ${
          isScrolled
            ? "border-ink-900/10 bg-white/[0.82] shadow-panel dark:border-white/10 dark:bg-ink-950/[0.78]"
            : "border-ink-900/5 bg-white/[0.55] dark:border-white/10 dark:bg-white/[0.035]"
        }`}
        aria-label="Primary navigation"
      >
        <motion.button
          onClick={() => handleNavClick("#home")}
          className="group flex items-center gap-3 rounded-xl px-2 py-1.5 text-left"
          whileTap={{ scale: 0.98 }}
          aria-label="Go to home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-primary-400/30 bg-primary-400/[0.12] text-sm font-black text-primary-700 shadow-glow dark:text-primary-200">
            SL
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold tracking-tight text-ink-950 dark:text-white">
              Sai Lokesh Reddy Gayam
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
              Software Engineer
            </span>
          </span>
        </motion.button>

        <div className="hidden items-center rounded-xl border border-ink-900/10 bg-ink-900/[0.035] p-1 dark:border-white/10 dark:bg-white/[0.055] md:flex">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`nav-link relative flex items-center gap-2 rounded-lg px-3 py-2 ${
                  isActive ? "text-ink-950 dark:text-white" : ""
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg border border-primary-400/30 bg-white shadow-sm dark:border-primary-300/25 dark:bg-white/10"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <item.icon className="relative h-4 w-4" />
                <span className="relative">{item.name}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-xl border border-ink-900/10 bg-white/70 text-ink-700 transition-colors hover:text-ink-950 dark:border-white/10 dark:bg-white/[0.06] dark:text-ink-200 dark:hover:text-white"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-ink-900/10 bg-white/70 text-ink-800 dark:border-white/10 dark:bg-white/[0.06] dark:text-white md:hidden"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl rounded-2xl border border-ink-900/10 bg-white/[0.92] p-2 shadow-panel backdrop-blur-2xl dark:border-white/10 dark:bg-ink-950/[0.92] md:hidden"
          >
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-semibold ${
                    isActive
                      ? "bg-primary-400/[0.12] text-primary-800 dark:text-primary-200"
                      : "text-ink-700 hover:bg-ink-900/[0.04] dark:text-ink-200 dark:hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <item.icon size={18} />
                    {item.name}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-ink-400">
                    0{navigationItems.indexOf(item) + 1}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
