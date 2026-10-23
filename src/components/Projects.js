import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

// Drawn stand-ins for screenshots, so the cards need no image assets.
const ChatPreview = () => (
  <div className="w-full max-w-[420px] space-y-3 rounded-2xl bg-white p-5 shadow-float">
    <div className="flex items-center gap-2.5 border-b border-[#ECEDF1] pb-3">
      <span className="h-7 w-7 rounded-full bg-cobalt" />
      <span className="text-sm font-semibold">CSUEB Assistant</span>
    </div>
    <p className="ml-auto max-w-[75%] rounded-[14px_14px_4px_14px] bg-cobalt px-3.5 py-2.5 text-sm leading-snug text-white">
      How do I add a class after the deadline?
    </p>
    <p className="max-w-[80%] rounded-[14px_14px_14px_4px] bg-[#F0F1F5] px-3.5 py-2.5 text-sm leading-snug">
      Here's the add/drop process for this term and the form you'll need.
    </p>
    <p className="rounded-full border border-line px-3.5 py-2.5 text-[13px] text-muted">
      Type or hold to speak…
    </p>
  </div>
);

const LatexPreview = () => (
  <div className="flex h-full w-full gap-3.5">
    <div className="flex flex-1 flex-col gap-2 overflow-hidden whitespace-nowrap rounded-[10px] bg-ink p-4 font-mono text-xs leading-normal text-[#A9AEBB]">
      <span><span className="text-cobalt-code">\section</span>{"{Experience}"}</span>
      <span><span className="text-cobalt-code">\textbf</span>{"{Agadia Systems}"}</span>
      <span><span className="text-cobalt-code">\item</span> RAG over 170K+ docs</span>
      <span><span className="text-cobalt-code">\item</span> pgvector hybrid search</span>
      <span><span className="text-cobalt-code">\item</span> 45% lower latency</span>
    </div>
    <div className="flex flex-1 flex-col gap-2 rounded-[10px] bg-white p-5 shadow-float">
      <span className="h-3 w-3/5 rounded-sm bg-ink" />
      <span className="h-1.5 w-2/5 rounded-sm bg-[#A9AEBB]" />
      <span className="my-1.5 h-px w-full bg-line" />
      <span className="h-1.5 w-[30%] rounded-sm bg-cobalt" />
      <span className="h-1.5 w-[94%] rounded-sm bg-muted" />
      <span className="h-1.5 w-[86%] rounded-sm bg-muted" />
      <span className="h-1.5 w-[90%] rounded-sm bg-muted" />
      <span className="h-1.5 w-[72%] rounded-sm bg-muted" />
    </div>
  </div>
);

const previews = { chat: ChatPreview, latex: LatexPreview };

const Project = ({ project, index }) => {
  const Preview = previews[project.preview];
  const isReversed = index % 2 === 1;

  return (
    <article className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-2">
      <div
        aria-hidden="true"
        className={`flex aspect-[4/3] items-center justify-center rounded bg-mist p-[clamp(1.25rem,4vw,3rem)] ${
          isReversed ? "lg:order-2" : ""
        }`}
      >
        {Preview && <Preview />}
      </div>
      <div className="space-y-[18px]">
        <p className="eyebrow">
          No. {String(index + 1).padStart(2, "0")} · {project.status}
        </p>
        <h3 className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.05]">{project.title}</h3>
        <p className="text-lg leading-relaxed">{project.description}</p>
        <p className="text-[15px] text-muted">{project.technologies.join(", ")}</p>
        <div className="flex flex-wrap gap-3 pt-1.5">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-solid">
              View live <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={project.liveUrl ? "btn-outline" : "btn-solid"}
            >
              Source code <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="container-page flex flex-col gap-[72px] pb-10 pt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="display-title">Selected projects</h2>
        <p className="text-[15px] text-muted">Side projects, built end to end</p>
      </div>
      {projects.map((project, index) => (
        <Project key={project.id} project={project} index={index} />
      ))}
    </section>
  );
};

export default Projects;
