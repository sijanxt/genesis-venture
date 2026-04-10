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
    <main className="bg-white pt-20 text-[#2c2c34]">
      <section className="relative grid min-h-[600px] grid-cols-1 overflow-hidden lg:grid-cols-2">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <svg
            viewBox="0 0 800 600"
            preserveAspectRatio="xMaxYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <line
              x1="0"
              y1="600"
              x2="800"
              y2="0"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="100"
              y1="600"
              x2="900"
              y2="0"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="200"
              y1="600"
              x2="1000"
              y2="0"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="300"
              y1="600"
              x2="1100"
              y2="0"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="400"
              y1="600"
              x2="1200"
              y2="0"
              stroke="white"
              strokeWidth="0.5"
            />
            <rect
              x="580"
              y="80"
              width="220"
              height="220"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
            <rect
              x="630"
              y="130"
              width="120"
              height="120"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="relative z-10 border-white/10 bg-[#08112a] px-6 py-16 sm:px-10 lg:border-r lg:px-16 lg:py-24">
          <p className="mb-5 inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#c0192b]">
            <span className="h-[1.5px] w-7 bg-[#c0192b]" />
            Who We Are
          </p>

          <h1 className="font-[PPFONT] text-[clamp(42px,5vw,68px)] leading-[1.1] tracking-[-0.015em] text-white">
            Integrity
            <br />
            before <em className="text-[#e0202f]">returns.</em>
            <br />
            Always.
          </h1>
          <p className="mt-8 max-w-xl text-[15px] font-light leading-[1.9] text-white/60">
            Genesis Ventures Ltd. is an independent investment firm that places
            your interests above all else - including our own. In a world where
            performance is routinely promised and seldom earned, we have chosen
            a different measure of success: trust.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="#beliefs"
              className="inline-flex items-center bg-[#c0192b] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#e0202f]"
            >
              What We Believe
            </Link>
            <Link
              href="/Contacts"
              className="text-xs font-medium uppercase tracking-[0.08em] text-white/50 transition hover:text-white/85"
            >
              Get in touch -&gt;
            </Link>
          </div>
        </div>

        <div className="relative z-10 bg-[#162952] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="mb-10 border-b border-white/10 pb-10">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e0202f]">
              Our commitment
            </p>
            <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.55] text-white">
              "We will never recommend what is profitable for us over what is
              <span className="not-italic text-[#e0202f]"> right for you.</span>
              That is not a policy - it is the reason we exist."
            </blockquote>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/10">
            {heroStats.map((stat) => (
              <div
                key={stat.desc}
                className="bg-[#162952] px-6 py-7 hover:bg-[#1e3a6e]"
              >
                <p className="font-[PPFONT] text-[2.6rem] sm:text-5xl leading-none text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.07em] text-white/55">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 bg-[#c0192b] px-6 py-6 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        {redBandItems.map((item, idx) => (
          <div
            key={item}
            className="flex items-center gap-3 lg:flex-1 lg:justify-center"
          >
            <span className="h-5 w-5 rounded-full border border-white/60" />
            <p className="text-[11.5px] font-medium uppercase tracking-[0.1em] text-white/90">
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
        <div className="mb-16 grid grid-cols-1 gap-10 border-b border-[#e4e0db] pb-12 lg:grid-cols-[420px_1fr] lg:gap-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#c0192b]">
              <span className="h-[1.5px] w-7 bg-[#c0192b]" />
              What We Believe
            </p>
            <h2 className="font-[PPFONT] text-[clamp(36px,3.8vw,50px)] leading-[1.12] text-[#08112a]">
              We are not in
              <br />
              the business of
              <br />
              <em className="text-[#c0192b]">selling confidence.</em>
            </h2>
          </div>

          <div className="pt-2 text-[#6b6b78]">
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

        <div className="grid grid-cols-1 gap-px bg-[#e4ez0db] lg:grid-cols-3">
          {beliefCards.map((card) => (
            <article
              key={card.no}
              className="group bg-white px-8 py-12 transition hover:bg-[#f5f3ef]"
            >
              <p className="mb-6 font-[PPFONT] text-7xl font-bold leading-none text-[#e8edf5] group-hover:text-[#f8dfe2]">
                {card.no}
              </p>
              <h3 className="mb-3 font-[PPFONT] text-[21px] leading-[1.25] text-[#08112a]">
                {card.title}
              </h3>
              <p className="text-[13.5px] font-light leading-[1.88] text-[#6b6b78]">
                {card.body}
              </p>
            </article>
          ))}
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
