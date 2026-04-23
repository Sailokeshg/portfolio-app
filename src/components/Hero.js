import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Database,
  Download,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.18,
    },
  },
};

const capabilityChips = ["RAG", "Agentic AI", "Azure AI", "FastAPI", "React", "pgvector"];

const metrics = [
  { value: "40K+", label: "technical docs indexed" },
  { value: "60%", label: "faster knowledge lookup" },
  { value: "45%", label: "lower response latency" },
];

const handleScroll = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const SystemCockpit = () => (
  <motion.div
    initial={{ opacity: 0, x: 28, scale: 0.98 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
    className="panel-border relative min-h-[520px] p-4 sm:p-5"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(55,243,255,0.16),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(183,255,90,0.12),transparent_26%)]" />
    <div className="relative grid h-full gap-4">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-ink-950/90 p-4 text-white shadow-glow">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-200">
            AI Systems Cockpit
          </p>
          <h3 className="mt-2 text-xl font-black tracking-tight">
            Enterprise RAG runtime
          </h3>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-primary-300/25 bg-primary-300/10">
          <BrainCircuit className="h-6 w-6 text-primary-200" />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl border border-ink-900/10 bg-white/[0.82] p-4 dark:border-white/10 dark:bg-white/[0.075]">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-signal-rose" />
            <span className="h-3 w-3 rounded-full bg-signal-amber" />
            <span className="h-3 w-3 rounded-full bg-signal-green" />
            <span className="ml-auto text-xs font-semibold text-ink-500 dark:text-ink-400">
              retrieval.py
            </span>
          </div>
          <div className="space-y-2 font-mono text-xs leading-6 text-ink-700 dark:text-ink-200">
            <p>
              <span className="text-primary-600 dark:text-primary-300">query</span>
              {" = embed(user_question)"}
            </p>
            <p>
              <span className="text-signal-violet">matches</span>
              {" = hybrid_search(pgvector)"}
            </p>
            <p>
              <span className="text-signal-green">context</span>
              {" = rerank(matches, metadata)"}
            </p>
            <p>
              <span className="text-signal-amber">answer</span>
              {" = cite(llm(context))"}
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-ink-900/10 bg-white/[0.82] p-4 dark:border-white/10 dark:bg-white/[0.075]">
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-primary-600 dark:text-primary-300" />
              <div>
                <p className="text-sm font-bold">Vector index</p>
                <p className="text-xs text-ink-500 dark:text-ink-400">
                  40,000+ docs with citations
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-6 gap-1.5">
              {Array.from({ length: 24 }).map((_, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.25 }}
                  animate={{ opacity: [0.25, 1, 0.35] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: index * 0.04,
                  }}
                  className="h-2 rounded-full bg-primary-400/70"
                />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-ink-900/10 bg-ink-950 p-4 text-white dark:border-white/10">
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-signal-green" />
              <p className="text-sm font-bold">Citation-backed response</p>
            </div>
            <div className="mt-4 rounded-xl bg-white/[0.07] p-3 text-xs leading-6 text-ink-200">
              Answer generated from section-level evidence with version filters
              and strict source grounding.
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: Network, label: "Hybrid retrieval", value: "35% precision lift" },
          { icon: Zap, label: "Cached inference", value: "45% faster" },
          { icon: ShieldCheck, label: "Grounded answers", value: "90%+ accuracy" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-ink-900/10 bg-white/75 p-4 dark:border-white/10 dark:bg-white/[0.06]"
          >
            <item.icon className="h-5 w-5 text-primary-600 dark:text-primary-300" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
              {item.label}
            </p>
            <p className="mt-1 text-lg font-black tracking-tight">{item.value}</p>
          </div>
        ))}
      </div>
    </div>

    <motion.div
      className="pointer-events-none absolute inset-x-5 top-0 h-20 bg-gradient-to-b from-primary-300/[0.18] to-transparent"
      animate={{ y: [0, 360, 0], opacity: [0, 0.7, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36"
    >
      <div className="container-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div>
            <motion.div variants={fadeUp} className="pill">
              <Sparkles className="h-3.5 w-3.5 text-primary-600 dark:text-primary-300" />
              Software Engineer AI
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 max-w-5xl text-balance text-5xl font-black tracking-tight text-ink-950 dark:text-white sm:text-6xl lg:text-7xl"
            >
              Building AI systems that turn complex knowledge into usable
              software.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-ink-600 dark:text-ink-300"
            >
              I design RAG platforms, agentic workflows, cloud-native backends,
              and polished full-stack products that make enterprise knowledge
              faster to find, trust, and use.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
              {capabilityChips.map((chip) => (
                <span key={chip} className="pill">
                  {chip}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <motion.button
                onClick={() => handleScroll("#projects")}
                className="btn-primary inline-flex items-center justify-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                View Projects
                <ArrowRight size={17} />
              </motion.button>
              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="btn-secondary inline-flex items-center justify-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Download size={17} />
                Download Resume
              </motion.a>
              <motion.button
                onClick={() => handleScroll("#contact")}
                className="btn-secondary inline-flex items-center justify-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Mail size={17} />
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-ink-900/10 bg-white/60 p-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.045]"
                >
                  <p className="text-3xl font-black tracking-tight text-ink-950 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-ink-500 dark:text-ink-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <SystemCockpit />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
