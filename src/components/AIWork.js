import React from "react";
import { aiWork } from "../data/portfolio";

const Arrow = ({ children = "↓" }) => (
  <span className="self-center text-lg leading-none text-muted">{children}</span>
);

// Drawn diagrams of each system, in place of screenshots of internal tools.
const DocsPipelinePreview = () => (
  <div className="flex flex-col gap-2.5">
    <span className="self-center rounded-full bg-ink px-[18px] py-2.5 text-sm font-medium text-white">
      Git repository
    </span>
    <Arrow />
    <div className="flex flex-col gap-2.5 rounded-xl bg-white p-4 shadow-sm">
      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Static parsing</span>
      <div className="flex flex-wrap gap-1.5 text-[13px]">
        {["Angular · tree-sitter", "C# · Roslyn", "Python · ast", "SQL schema"].map((parser) => (
          <span key={parser} className="rounded-md bg-[#F0F1F5] px-2.5 py-1">
            {parser}
          </span>
        ))}
      </div>
      <span className="text-[13px] text-muted">
        → AST JSON: components, endpoints, tables and UI → API → database flows
      </span>
    </div>
    <Arrow />
    <div className="flex items-stretch gap-2.5">
      <div className="flex flex-[3_1_0] flex-col gap-1.5 rounded-xl bg-cobalt p-4 text-white">
        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-cobalt-soft">
          One-pass generation
        </span>
        <span className="text-sm leading-snug">LLM writes each document directly from the parser ASTs</span>
      </div>
      <Arrow>⇄</Arrow>
      <div className="flex flex-[2_1_0] flex-col gap-1.5 rounded-xl bg-white p-4 shadow-sm">
        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-cobalt">Knowledge graph</span>
        <span className="text-sm leading-snug">Validates every claim against the system</span>
      </div>
    </div>
    <Arrow />
    <div className="flex flex-wrap justify-center gap-2 text-[13px] font-medium">
      {["Architecture (C4)", "Technical", "Functional"].map((doc) => (
        <span key={doc} className="rounded-full border border-ink px-3.5 py-2">
          {doc}
        </span>
      ))}
    </div>
  </div>
);

const sdlcSteps = [
  { label: "Jira change request", note: "+ attachments, notes, 5 products" },
  { label: "Requirements doc (FRD)", badge: "5–10 min" },
  { label: "Test plan", note: "cached by content hash" },
  { label: "Test cases", badge: "≥ 80% coverage" },
  { label: "Automated run", note: "Playwright + MCP agents" },
];

const SdlcChainPreview = () => (
  <div className="flex flex-col">
    {sdlcSteps.map((step, index) => (
      <React.Fragment key={step.label}>
        {index > 0 && <span className="ml-[29px] h-[18px] w-0.5 bg-[#A9AEBB]" />}
        <div className="flex items-center gap-3.5 rounded-xl bg-white px-4 py-3.5 shadow-sm">
          <span
            className={`flex h-7 w-7 flex-none items-center justify-center rounded-full text-[13px] font-semibold text-white ${
              index === 0 ? "bg-ink" : "bg-cobalt"
            }`}
          >
            {index + 1}
          </span>
          <span className="flex-auto text-[15px] font-semibold">{step.label}</span>
          {step.badge ? (
            <span className="rounded-full bg-cobalt-soft px-2.5 py-0.5 text-xs font-medium text-[#1E2BA8]">
              {step.badge}
            </span>
          ) : (
            <span className="text-right text-xs text-muted">{step.note}</span>
          )}
        </div>
      </React.Fragment>
    ))}
    <div className="flex justify-end gap-2 pt-3.5 text-xs font-medium">
      <span className="rounded-full bg-white px-2.5 py-1 text-[#0F6B3E]">Pass</span>
      <span className="rounded-full bg-white px-2.5 py-1 text-[#A1261B]">Fail</span>
      <span className="rounded-full bg-white px-2.5 py-1 text-muted">Timeout</span>
    </div>
  </div>
);

const previews = { "docs-pipeline": DocsPipelinePreview, "sdlc-chain": SdlcChainPreview };

const CaseStudy = ({ study, index }) => {
  const Preview = previews[study.preview];
  const isReversed = index % 2 === 1;

  return (
    <article className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <div
        aria-hidden="true"
        className={`rounded bg-mist p-[clamp(1.25rem,3vw,2.5rem)] ${isReversed ? "lg:order-2" : ""}`}
      >
        {Preview && <Preview />}
      </div>
      <div className="space-y-[18px]">
        <p className="eyebrow">{study.eyebrow}</p>
        <h3 className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.05]">{study.title}</h3>
        <p className="text-lg leading-relaxed">{study.description}</p>
        <dl className="grid grid-cols-2 gap-x-7">
          {study.stats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-1 border-t border-line py-3.5">
              <dt className="font-serif text-[32px] leading-none text-cobalt">{stat.value}</dt>
              <dd className="text-sm leading-snug text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
        {study.proof && (
          <p className="rounded-lg bg-white px-4 py-3.5 text-[15px] leading-normal">
            {study.proof.lead} <strong className="font-semibold">{study.proof.emphasis}</strong>{" "}
            {study.proof.tail}
          </p>
        )}
        <p className="text-[15px] text-muted">{study.technologies.join(", ")}</p>
      </div>
    </article>
  );
};

const AIWork = () => {
  return (
    <section id="ai-work" className="container-page flex flex-col gap-[72px] pb-10 pt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="display-title">
          AI work at <span className="italic text-cobalt">Agadia</span>
        </h2>
        <p className="text-[15px] text-muted">Production systems, used by engineering, BA and QA teams</p>
      </div>
      {aiWork.map((study, index) => (
        <CaseStudy key={study.id} study={study} index={index} />
      ))}
    </section>
  );
};

export default AIWork;
