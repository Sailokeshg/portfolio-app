import React from "react";
import { personalInfo } from "../data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-page">
      <div className="flex flex-wrap justify-between gap-3 border-t border-line pb-10 pt-6 text-sm text-muted">
        <p>
          © {currentYear} {personalInfo.name}
        </p>
        <p>
          New Jersey ·{" "}
          <a href={`tel:${personalInfo.phone}`} className="hover:text-cobalt">
            {personalInfo.phone}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
