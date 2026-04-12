"use client";
import Link from "next/link";

const heroStats = [
  { value: "NPR 1B+", desc: "Assets Under Management" },
  { value: "25+", desc: "Years of Experience" },
  { value: "20+", desc: "Portfolio Companies" },
  { value: "3", desc: "IPO" },
];

const redBandItems = [
  "Conflict-Free and Fiduciary",
  "Client Interests - First, Last and Always",
  "Long-Horizon. No Short-Term Pressure.",
];

const beliefCards = [
  {
    no: "01",
    title: "Your interests are the only interests",
    body: "We earn no commissions, hold no proprietary positions that compete with your portfolio, and accept no payments from third parties for directing your capital. Our only revenue is the fee you pay us. Full stop.",
  },
  {
    no: "02",
    title: "Honesty in difficult moments",
    body: "We will tell you when a market is overvalued even if it means watching the index rally without you. We will flag risk before it materialises, not after. We will never dress up a bad outcome with reassuring language. You deserve the truth - especially when it is uncomfortable.",
  },
  {
    no: "03",
    title: "Discipline over narrative",
    body: "We do not chase themes, trends, or the comfort of consensus. Investment decisions at Genesis Ventures are made through documented, stress-tested process - not conviction built from a compelling story. If the numbers do not support it, neither do we.",
  },
];

const tickerValues = [
  "Integrity Before Returns",
  "Absolute Fiduciary Duty",
  "No Conflicts of Interest",
  "Transparent Fees",
  "Honest in Adversity",
  "Discipline Over Narrative",
  "Long-Horizon Thinking",
  "Client First. Always.",
];

const footerCols = [
  {
    title: "The Firm",
    links: ["Who We Are", "Our Philosophy", "Investment Process", "Careers"],
  },
  {
    title: "Our Work",
    links: ["Equity", "Private Markets", "Structured Credit", "Portfolio"],
  },
  {
    title: "Contact",
    links: ["Get in Touch", "Insights and Research", "Media Enquiries"],
  },
];

export default function InvestmentPhylosophyPage() {
  return (
    <main className="bg-white text-[#2c2c34] font-poppins">
      <section className="relative min-h-[600px] grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Clean White */}
        <div className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28 flex flex-col justify-center">
          <p className="mb-6 inline-flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#8D1E39] font-poppins">
            <span className="h-[1.5px] w-7 bg-[#8D1E39]" />
            Investment Philosophy
          </p>

          <h1 className="font-[PPFONT] text-[clamp(42px,5vw,68px)] leading-[1.1] tracking-[-0.015em] text-[#08112a]">
            Integrity
            <br />
            before <em className="text-[#8D1E39]">returns.</em>
            <br />
            Always.
          </h1>

          <p className="mt-8 max-w-xl text-[15px] font-light leading-[1.9] text-[#6b6b78] font-poppins">
            Genesis Ventree Ltd. is an independent investment firm that places
            your interests above all else - including our own. In a world where
            performance is routinely promised and seldom earned, we have chosen
            a different measure of success: trust.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="#beliefs"
              className="inline-flex items-center bg-[#8D1E39] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#a52344] font-poppins"
            >
              What We Believe
            </Link>
            <Link
              href="/Contacts"
              className="text-xs font-medium uppercase tracking-[0.08em] text-[#6b6b78] transition hover:text-[#08112a] font-poppins"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        {/* Right Column - Blue/Navy */}
        <div className="relative bg-[#162952] px-6 py-20 sm:px-10 lg:px-14 lg:py-28 flex flex-col justify-center">
          <div className="mb-10 border-b border-white/10 pb-10">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8D1E39] font-poppins">
              Our commitment
            </p>
            <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.55] text-white">
              "We will never recommend what is profitable for us over what is
              <span className="not-italic text-[#8D1E39]"> right for you.</span>
              That is not a policy - it is the reason we exist."
            </blockquote>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {heroStats.map((stat) => (
              <div
                key={stat.desc}
                className="bg-[#1e3a6e] px-6 py-7 transition hover:bg-[#2a4a8a]"
              >
                <p className="font-[PPFONT] text-[2.6rem] sm:text-5xl leading-none text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.07em] text-white/55 font-poppins">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 bg-[#8D1E39] px-6 py-6 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        {redBandItems.map((item, idx) => (
          <div
            key={item}
            className="flex items-center gap-3 lg:flex-1 lg:justify-center"
          >
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/90">
              {item}
            </p>
            {idx !== redBandItems.length - 1 && (
              <span className="ml-5 hidden h-7 w-px bg-white/30 lg:block" />
            )}
          </div>
        ))}
      </section>
      <section
        id="beliefs"
        className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-9xl">
          <div className="mb-16 grid grid-cols-1 gap-10 border-b border-[#e4e0db] pb-12 lg:grid-cols-[420px_1fr] lg:gap-24">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#8D1E39] font-poppins">
                <span className="h-[1.5px] w-7 bg-[#8D1E39]" />
                What We Believe
              </p>
              <h2 className="font-[PPFONT] text-[clamp(36px,3.8vw,50px)] leading-[1.12] text-[#08112a]">
                We are not in
                <br />
                the business of
                <br />
                <em className="text-[#8D1E39]">selling confidence.</em>
              </h2>
            </div>

            <div className="pt-2 text-[#6b6b78] font-poppins">
              <p className="mb-5 text-[15px] font-light leading-[1.9]">
                Most firms measure themselves by the returns they generate. We
                measure ourselves by something harder to fake: whether our clients
                can look back a decade from now and say that Genesis Ventree was
                the most honest partner they ever had in financial life.
              </p>
              <p className="text-[15px] font-light leading-[1.9]">
                Performance follows integrity - not the other way around. When
                advice is given free of conflicts, when fees are transparent, and
                when a firm has the discipline to say "we do not know" rather than
                bluff,
                <strong className="font-semibold text-[#08112a]">
                  {" "}
                  better decisions get made
                </strong>
                . That is the foundation of everything we do.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[#e4e0db] lg:grid-cols-3">
            {beliefCards.map((card) => (
              <article
                key={card.no}
                className="group bg-white px-8 py-12 transition hover:bg-[#f5f3ef]"
              >
                <p className="mb-6 font-poppins text-5xl font-light leading-none text-[#e8edf5] group-hover:text-[#f8dfe2]">
                  {card.no}
                </p>
                <h3 className="mb-3 font-poppins text-[1.05rem] sm:text-[1.15rem] font-semibold leading-tight text-[#08112a]">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6b6b78] font-poppins">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
