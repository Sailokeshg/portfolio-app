import React from "react";
import { ArrowUpRight } from "lucide-react";
import { research } from "../data/portfolio";

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-medium underline decoration-[#A9AEBB] underline-offset-4 hover:text-cobalt hover:decoration-cobalt"
  >
    {children} <ArrowUpRight size={16} aria-hidden="true" />
  </a>
);

const Entry = ({ entry, isFirst }) => (
  <article className={`border-t py-10 ${isFirst ? "border-ink" : "border-line"}`}>
    <div className="flex flex-wrap gap-x-10 gap-y-4">
      <span className="basis-[150px] pt-2 text-[15px] text-muted">{entry.years}</span>
      <div className="min-w-0 flex-[999_1_560px] space-y-5">
        <div className="space-y-1">
          <h3 className="font-serif text-[clamp(2rem,3.4vw,2.75rem)] leading-tight">{entry.title}</h3>
          <p className="text-base text-muted">{entry.role}</p>
        </div>
        <p className="max-w-3xl text-[17px] leading-relaxed">{entry.description}</p>

        <dl className="grid max-w-3xl grid-cols-3 gap-x-6">
          {entry.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 border-t border-line pt-3">
              <dt className="font-serif text-[clamp(1.75rem,3vw,2.25rem)] leading-none text-cobalt">
                {stat.value}
              </dt>
              <dd className="text-sm leading-snug text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="max-w-3xl space-y-1 rounded-lg bg-white px-4 py-3.5">
          <p className="text-[15px] italic leading-snug">{entry.paper.title}</p>
          <p className="text-sm text-muted">{entry.paper.venue}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6">
          <ExternalLink href={entry.paper.url}>Read paper</ExternalLink>
          {entry.talkUrl && <ExternalLink href={entry.talkUrl}>Watch the talk</ExternalLink>}
          <span className="text-[15px] text-muted">{entry.technologies.join(", ")}</span>
        </div>
      </div>
    </div>
  </article>
);

const Research = () => {
  const { entries, review } = research;

  return (
    <section id="research" className="container-page pb-10 pt-24">
      <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
        <h2 className="display-title">Research</h2>
        <p className="text-[15px] text-muted">Applied software research · CSU East Bay</p>
      </div>
      {entries.map((entry, index) => (
        <Entry key={entry.id} entry={entry} isFirst={index === 0} />
      ))}
      <div className="flex flex-wrap items-baseline gap-x-10 gap-y-2 border-y border-line py-6">
        <span className="basis-[150px] text-[15px] text-muted">{review.years}</span>
        <p className="min-w-0 flex-[999_1_560px] text-[17px]">
          <strong className="font-semibold">{review.title}.</strong>{" "}
          <span className="text-muted">{review.description}</span>
        </p>
      </div>
    </section>
  );
};

export default Research;
