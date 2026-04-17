"use client";

import { PortfolioItem } from "@/app/what-we-do/portfolio/data";
import { FC } from "react";

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ item }) => {
  return (
    <article className="group relative flex h-full flex-col rounded-none border border-genesis-navy/10 bg-white p-8 transition-all duration-300 hover:border-[#8D1E39]/45 hover:bg-[linear-gradient(90deg,rgba(23,48,83,0.38)_0%,#d9e6f7_58%,#eef4ff_100%)]">

      {/* Top Metadata Row */}
      <div className="flex justify-between items-start mb-12">
        <div className="space-y-1">
          <p className="text-[10px] font-bold tracking-[0.2em] text-genesis-red uppercase">
            {item.sector}
          </p>
          <div className="h-px w-4 bg-genesis-navy/30 group-hover:w-8 transition-all duration-500" />
        </div>

        <span className="text-[8px] font-medium tracking-widest text-genesis-navy/50 uppercase border border-genesis-navy/10 px-2 py-0.5">
          {item.badge}
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-4">
        <h4 className="font-[PPFONT] text-[1.2rem] tracking-tight leading-[1.2] text-[#08112a] group-hover:text-[#0d1d3a]">
          {item.name}
        </h4>

        <p className="max-w-[90%] text-[14px] leading-7 text-[#616877] group-hover:text-[#243654]">
          {item.description}
        </p>
      </div>

      {/* Bottom Functional Area */}
      <div className="mt-8">
        {item.progress !== undefined && (
          <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-genesis-navy/50">
                Phase Progress
              </span>
              <span className="text-[10px] tabular-nums font-medium text-slate-900">
                {item.progress}%
              </span>
            </div>
            {/* Ultra-thin bluish track */}
            <div className="h-px w-full bg-genesis-navy/10">
              <div
                className="h-px bg-genesis-navy transition-all duration-1000 ease-out"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-y-2 pt-6 border-t border-genesis-navy/10">
          {item.tags.map((tag: string, index: number) => (
            <div key={tag} className="flex items-center">
              <span className="text-[10px] text-genesis-navy/50 font-medium tracking-wider uppercase">
                {tag}
              </span>
              {index < item.tags.length - 1 && (
                <span className="mx-3 h-3 w-px bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>

    </article>
  );
};

export default PortfolioCard;
