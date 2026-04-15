"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { portfolioItems, sectorTabs, type Sector } from "./data";
import FeaturedPortfolioCard from "@/components/what-we-do/FeaturedPortfolioCard";
import PortfolioCard from "@/components/what-we-do/PorfolioCard";

export default function PortfolioPage() {
  const [activeSector, setActiveSector] = useState<Sector | "All">("All");

  const heroStats = useMemo(() => {
    return sectorTabs
      .filter(tab => tab.key !== "All")
      .map(tab => ({
        value: portfolioItems.filter(item => item.sector === tab.key).length.toString(),
        desc: tab.title
      }));
  }, []);

  const filteredItems = useMemo(() => {
    if (activeSector === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.sector === activeSector);
  }, [activeSector]);

  return (
    <main className="min-h-screen bg-[#fdfcf9] font-poppins">
      {/* Hero Section */}
      <section className="relative min-h-[600px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden border-b">
        {/* Left Section */}
        <div className="absolute -left-20 -top-10 w-[450px] h-[450px] rounded-full bg-genesis-navy/5 pointer-events-none" />
        <div className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28 flex flex-col justify-start">
          <p className="mb-6 inline-flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-genesis-red font-poppins">
            <span className="h-[1.5px] w-7 bg-genesis-red" />
            Investment Portfolio
          </p>

          <h1 className="font-[PPFONT] text-[clamp(42px,5vw,68px)] leading-[1.1] tracking-[-0.015em] text-[#08112a]">
            A disciplined <br />portfolio built on <br />
            <em className="text-genesis-red">conviction, </em>
            not consensus.
          </h1>

          <p className="mt-8 max-w-xl text-[15px] font-light leading-[1.9] text-[#6b6b78] font-poppins">
            Genesis Ventures deploys long-term capital into unlisted businesses across six sectors.
            Every position is the result of independent research, direct engagement with management,
            and a clear view on intrinsic value without the pressure of a fund cycle or the distortion of market noise.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="#beliefs"
              className="inline-flex items-center justify-center gap-3 bg-genesis-red text-white px-6 sm:px-[34px] py-4 sm:py-[18px] font-poppins text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-350 hover:bg-[#a52344]"
            >
              What We Believe
            </Link>
            <Link
              href="/Contacts"
              className="inline-flex items-center justify-center gap-3 bg-transparent text-[#6b6b78] border border-[#e4e0db] px-6 sm:px-[34px] py-4 sm:py-[18px] font-poppins text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-350 hover:border-[#8D1E39] hover:text-[#8D1E39]"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative bg-genesis-navy px-6 py-20 sm:px-10 lg:px-14 lg:py-28 flex flex-col justify-start">
          <div className="mb-10 border-b border-white/10 pb-10">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b1a2e] font-poppins">
              Diversified Exposure
            </p>
            <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.4] text-white">
              &quot;We invest in the real economy - infrastructure, basic industries, and services that Nepal needs to grow.&quot;
            </blockquote>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {heroStats.map((stat) => (
              <div
                key={stat.desc}
                className="bg-[#1E3A6E] px-6 py-7 transition hover:bg-[#2a4a8a]"
              >
                <p className="font-[PPFONT] font-bold text-[2.4rem] leading-none text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] uppercase tracking-[0.07em] text-white/85 font-poppins leading-tight">
                  {stat.desc}
                  <br />
                  <span className="text-[10px] opacity-75">Companies</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section id="portfolio" className="mx-auto w-full max-w-440 px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-dark pb-10">
          <div>
            <h2 className="font-[PPFONT] text-[clamp(36px,3.8vw,50px)] leading-[1.12] text-[#08112a] max-w-sm">
              Portfolio Companies
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {sectorTabs.map((sector) => {
              const isActive = sector.key === activeSector;
              return (
                <button
                  key={sector.key}
                  onClick={() => setActiveSector(sector.key)}
                  className={`px-5 py-2.5 border text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ${isActive
                    ? "bg-genesis-navy text-white border-genesis-navy shadow-lg shadow-genesis-navy/20"
                    : "bg-white text-genesis-navy/75 border-neutral-dark hover:border-genesis-navy hover:text-genesis-navy"
                    }`}
                >
                  {sector.title}
                </button>
              );
            })}
          </div>
        </div>

        <section
          id="portfolio"
          className="mx-auto w-full max-w-440"
        >
          {activeSector === "All" ? (
            //group by company 
            <>
              {sectorTabs
                .filter((sector) => sector.key !== "All")
                .map((sector) => {
                  const sectorItems = portfolioItems.filter(
                    (item) => item.sector === sector.key
                  );

                  if (sectorItems.length === 0) return null;

                  return (
                    <div key={sector.key} className="mb-16">
                      {/* header */}
                      <p className="mb-6 inline-flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-genesis-red font-poppins">
                        <span className="h-[1.5px] w-7 bg-genesis-red" />
                        {sector.title}
                      </p>

                      {/* cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {sectorItems.map((item) =>
                          item.isFeatured ? (
                            <FeaturedPortfolioCard
                              key={item.name}
                              item={item}
                            />
                          ) : (
                            <PortfolioCard
                              key={item.name}
                              item={item}
                            />
                          )
                        )}
                      </div>
                    </div>
                  );
                })}
            </>
          ) : (
            //filtered grouping
            <div>
              <p className="mb-6 inline-flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-genesis-red font-poppins">
                <span className="h-[1.5px] w-7 bg-genesis-red" />
                {sectorTabs.find((s) => s.key === activeSector)?.title}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) =>
                  item.isFeatured ? (
                    <FeaturedPortfolioCard
                      key={item.name}
                      item={item}
                    />
                  ) : (
                    <PortfolioCard
                      key={item.name}
                      item={item}
                    />
                  )
                )}
              </div>
            </div>
          )}
        </section>
      </section>
      {/* CTA Section */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28 border-t border-[#e4e0db]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[PPFONT] text-[clamp(28px,4.5vw,54px)] text-[#08112a] mb-6 leading-[1.1] tracking-[-0.015em]">
            Ready to build something <br /><em className="text-[#8b1a2e]">significant?</em>
          </h2>
          <p className="text-[15px] font-light leading-relaxed text-[#6b6b78] max-w-2xl mx-auto mb-12">
            We review every submission and respond within 5 business days. If there&apos;s a fit, we move quickly.
          </p>
          <Link
            href="/Contacts"
            className="inline-flex items-center justify-center gap-3 bg-genesis-red text-white px-6 sm:px-[34px] py-4 sm:py-[18px] font-poppins text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-350 hover:bg-[#a52344]"
          >
            Get in touch with our team →
          </Link>

        </div>
      </section>

    </main>
  );
}
