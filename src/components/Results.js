import React from "react";
import { results } from "../data/portfolio";

const Results = () => {
  return (
    <section aria-label="Selected results" className="bg-cobalt text-white">
      <div className="container-page flex flex-col gap-8 py-14">
        <p className="text-sm tracking-[0.04em] text-cobalt-soft">{results.caption}</p>
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {results.items.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5 border-t border-cobalt-rule pt-4">
              <dt className="order-2 text-base text-cobalt-soft">{item.label}</dt>
              <dd className="order-1 font-serif text-[clamp(3rem,6vw,5.25rem)] leading-none">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Results;
