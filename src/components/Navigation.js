import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const navigationItems = [
  { name: "Work", href: "#work" },
  { name: "AI work", href: "#ai-work" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="container-page flex items-center justify-between gap-4 py-3">
        <a href="#top" className="font-serif text-[26px] leading-none hover:text-cobalt">
          {personalInfo.name}
        </a>
        <span className="hidden text-sm text-muted lg:block">
          {personalInfo.title} · New Jersey
        </span>

        <nav aria-label="Primary" className="hidden items-center gap-1 text-[15px] md:flex">
          {navigationItems.map((item) => (
            <a key={item.name} href={item.href} className="px-2.5 py-3 hover:text-cobalt">
              {item.name}
            </a>
          ))}
          <a href="#contact" className="px-2.5 py-3 font-medium text-cobalt">
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full hover:bg-mist md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line md:hidden">
          <div className="container-page flex flex-col py-2">
            {[...navigationItems, { name: "Contact", href: "#contact" }].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="py-3 font-serif text-2xl hover:text-cobalt"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
