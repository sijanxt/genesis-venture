import React from "react";

const PerspectiveHero = () => {
  return (
    <section className="w-full bg-white flex flex-col px-8 md:px-16 py-10 md:py-20">
      {/* ── Section Header ── */}
      <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          Perspective
        </span>
        <span className="text-xs uppercase tracking-widest text-gray-400 font-[GT50]">
          Genesis Ventures
        </span>
      </div>

      {/* ── Hero Body ── */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-8 md:pt-14">
        {/* Left: large heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-genesis-navy leading-tight font-[PPFONT] max-w-2xl">
          Perspective
        </h1>

        {/* Right: descriptor */}
        <p className="text-sm text-gray-500 font-[GT50] leading-relaxed max-w-xs md:text-right">
          Insights, analysis, and updates from Genesis Ventures.
        </p>
      </div>

      {/* ── Nav Tabs ── */}
      <div className="flex gap-6 md:gap-10 mt-10 md:mt-14 border-b border-gray-200 pb-0">
        <a
          href="#market-insights"
          className="text-xs uppercase tracking-widest font-[GT50] text-genesis-navy border-b-2 border-genesis-navy pb-3 hover:text-genesis-red hover:border-genesis-red transition-colors duration-150"
        >
          Market Insights
        </a>
        <a
          href="#media"
          className="text-xs uppercase tracking-widest font-[GT50] text-gray-400 border-b-2 border-transparent pb-3 hover:text-genesis-navy hover:border-genesis-navy transition-colors duration-150"
        >
          Media
        </a>
      </div>
    </section>
  );
};

export default PerspectiveHero;
