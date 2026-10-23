import React from "react";
import { education, toolkit } from "../data/portfolio";

const About = () => {
  return (
    <section id="about" className="container-page pb-10 pt-[clamp(5rem,9vw,7.5rem)]">
      <div className="grid gap-x-20 gap-y-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-7">
          <h2 className="display-title">Toolkit</h2>
          <dl className="grid gap-x-10 sm:grid-cols-2">
            {toolkit.map((group) => (
              <div key={group.label} className="space-y-1.5 border-t border-line py-[18px]">
                <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-cobalt">
                  {group.label}
                </dt>
                <dd className="text-[17px] leading-relaxed">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-7">
          <h2 className="display-title">Education</h2>
          {education.map((school) => (
            <div key={school.id} className="space-y-1.5 border-t border-line pt-[18px]">
              <p className="font-serif text-[28px] leading-tight">
                {school.degree.replace("Master of Science in", "M.S.").replace("Bachelor of Technology in", "B.Tech")}
              </p>
              <p className="text-base">{school.institution}</p>
              <p className="text-[15px] text-muted">
                {school.duration.replace(" - ", " – ")} · GPA {school.gpa.replace("/", " / ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
