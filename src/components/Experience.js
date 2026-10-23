import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { experience } from "../data/portfolio";

const formatYears = (duration) => {
  const years = duration.match(/\d{4}/g) || [];
  const isCurrent = /present/i.test(duration);
  if (isCurrent) return `${years[0]} — Now`;
  return years[0] === years[1] ? years[0] : `${years[0]} — ${years[1]}`;
};

const shortLocation = (location) => location.split(",")[0];

const Role = ({ job, isFirst }) => {
  const [isOpen, setIsOpen] = useState(false);
  const detailsId = `role-details-${job.id}`;

  return (
    <article className={`border-t py-8 ${isFirst ? "border-ink" : "border-line"}`}>
      <div className="flex flex-wrap items-baseline gap-x-10 gap-y-4">
        <span className="basis-[150px] text-[15px] text-muted">{formatYears(job.duration)}</span>
        <div className="min-w-0 flex-[1_1_260px] space-y-1">
          <h3 className="font-serif text-[34px] leading-tight">{job.company}</h3>
          <p className="text-base text-muted">
            {job.position} · {shortLocation(job.location)}
          </p>
        </div>
        <p className="min-w-0 flex-[2_1_380px] text-[17px] leading-relaxed">{job.summary}</p>
        <div className="flex basis-[180px] flex-col gap-0.5">
          <span className="whitespace-nowrap font-serif text-[44px] leading-none text-cobalt">{job.highlight.value}</span>
          <span className="text-sm text-muted">{job.highlight.label}</span>
        </div>
      </div>

      <div className="mt-4 md:pl-[190px]">
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls={detailsId}
          className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium hover:text-cobalt"
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          {isOpen ? "Hide details" : "Details"}
        </button>
        {isOpen && (
          <div id={detailsId} className="max-w-3xl space-y-5 pb-2 pt-3">
            <ul className="list-disc space-y-2.5 pl-5 text-base leading-relaxed text-ink/85 marker:text-cobalt">
              {job.achievements.map((achievement) =>
                typeof achievement === "string" ? (
                  <li key={achievement}>{achievement}</li>
                ) : (
                  <li key={achievement.title}>
                    <strong className="font-semibold text-ink">{achievement.title}</strong>{" "}
                    {achievement.text}
                  </li>
                )
              )}
            </ul>
            <p className="text-[15px] text-muted">{job.technologies.join(", ")}</p>
          </div>
        )}
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <section id="work" className="container-page pb-10 pt-[clamp(5rem,9vw,7.5rem)]">
      <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
        <h2 className="display-title">Experience</h2>
        <p className="text-[15px] text-muted">Four teams · enterprise, startup &amp; SaaS</p>
      </div>
      <div className="border-b border-line">
        {experience.map((job, index) => (
          <Role key={job.id} job={job} isFirst={index === 0} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
