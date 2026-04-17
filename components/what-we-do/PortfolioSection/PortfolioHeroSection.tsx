"use client";

import Link from "next/link";
import Button from "@/components/ui/Button2";

type HeroStat = {
  value: string;
  desc: string;
};

interface PortfolioHeroSectionProps {
  heroStats: HeroStat[];
}

export default function PortfolioHeroSection({
  heroStats,
}: PortfolioHeroSectionProps) {
  return (
    <section className="relative min-h-[82vh] overflow-hidden bg-[linear-gradient(90deg,#173053_0%,#d9e6f7_58%,#eef4ff_100%)] lg:min-h-screen">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_48%)]" />
      <div className="layout-7xl relative py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-genesis-red">
            Investment Portfolio
          </span>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-poppins lg:pl-14 lg:text-left">
            Diversified Exposure
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-start">
            <h1 className="mt-0 sm:mt-1 font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.55] tracking-[-0.01em] text-[#08112a] font-medium">
              <span className="block">A disciplined portfolio built on</span>
              <span className="block italic text-genesis-red font-medium">
                conviction, not consensus.
              </span>
            </h1>

            <p className="mt-6 sm:mt-9 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#08112a]">
              Genesis Ventures deploys long-term capital into unlisted
              businesses across six sectors. Every position is the result of
              independent research, direct engagement with management, and a
              clear view on intrinsic value without the pressure of a fund cycle
              or the distortion of market noise.
            </p>

            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
              <Link href="#beliefs">
                <Button
                  variant="primary"
                  size="md"
                  className="inline-flex items-center justify-center gap-2 bg-genesis-red px-4 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-350 hover:bg-[#a52344] sm:px-6 sm:py-3"
                >
                  What We Believe
                </Button>
              </Link>
              <Link href="/Contacts">
                <Button
                  variant="primary"
                  size="md"
                  className="inline-flex items-center justify-center gap-2 border-[#173053] bg-[#173053] px-4 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.12em] !text-white transition-all duration-350 hover:!bg-[#173053] sm:px-6 sm:py-3"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-start lg:pl-14">
            <div className="mb-10 border-b border-[#1a2e4a]/15 pb-10">
              <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.55] text-[#102347]">
                &quot;We invest in the real economy - infrastructure, basic
                industries, and services that Nepal needs to grow.&quot;
              </blockquote>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.desc}
                  className="bg-[#173053] px-5 py-6 transition hover:bg-[#173053]"
                >
                  <p className="font-[PPFONT] text-[1.9rem] sm:text-[2.1rem] leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-white/85 font-poppins leading-tight">
                    {stat.desc}
                    <br />
                    <span className="text-[10px] opacity-75">Companies</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
