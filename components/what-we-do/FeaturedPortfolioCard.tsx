"use client";

import { PortfolioItem } from "@/app/what-we-do/portfolio/data";
import { FC } from "react";

interface FeaturedPortfolioCardProps {
  item: PortfolioItem;
}

const FeaturedPortfolioCard: FC<FeaturedPortfolioCardProps> = ({ item }) => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
      <article className="group relative flex flex-col rounded-none border border-genesis-navy/10 bg-white p-8 transition-all duration-300 hover:border-[#8D1E39]/45 hover:bg-[linear-gradient(90deg,rgba(23,48,83,0.38)_0%,#d9e6f7_58%,#eef4ff_100%)] lg:p-14">

        {/* Top Meta: Badge & Sector */}
        <div className="flex justify-between items-start mb-16">
          <div className="space-y-1">
            <p className="text-[10px] font-bold tracking-[0.2em] text-genesis-red uppercase">
              {item.sector}
            </p>
            <div className="h-px w-6 bg-genesis-blue/30 group-hover:w-12 transition-all duration-500" />
          </div>

          <span className="text-[9px] font-black tracking-[0.2em] text-genesis-navy/50 uppercase border border-genesis-navy/10 px-3 py-1">
            {item.badge}
          </span>
        </div>

        {/* Main Title & Description */}
        <div className="max-w-4xl mb-12">
          <h4 className="mb-6 font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.3] tracking-tight text-[#08112a] group-hover:text-[#0d1d3a]">
            {item.name}
          </h4>
          <p
            className={`max-w-2xl text-[14px] sm:text-[15px] leading-7 ${
              item.id === "sopan-multiple"
                ? "text-[#08112a] group-hover:text-[#08112a]"
                : "text-[#616877] group-hover:text-[#243654]"
            }`}
          >
            {item.description}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-12 mb-16">

          {/* Subs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {item.subs?.map((sub) => (
              <div key={sub.name} className="border-l border-slate-100 pl-5">
                <p className="text-[9px] uppercase font-bold tracking-widest text-[#8b1a2e]/60 mb-1.5">
                  {sub.label}
                </p>
                <p className="text-sm font-medium text-slate-800">
                  {sub.name}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:flex sm:gap-12 lg:justify-end gap-y-8">
            {item.stats?.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-light text-genesis-blue tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-auto flex flex-wrap items-center gap-y-3 pt-8 border-t border-genesis-navy/10">
          {item.tags.map((tag: string) => (
            <div key={tag} className="flex items-center">
              <span className="text-[10px] text-[#6b6b78] font-medium tracking-widest uppercase">
                {tag}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-genesis-blue/[0.02] to-transparent pointer-events-none" />
      </article>
    </div>
  );
};

export default FeaturedPortfolioCard;
