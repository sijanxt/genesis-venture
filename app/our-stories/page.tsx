import Link from "next/link";

const heroStats = [
  { value: "20+", label: "Years of cross-sector experience" },
  { value: "2", label: "Sectors of deep expertise" },
  { value: "Global", label: "Investment perspective and reach" },
  { value: "All", label: "Investor types served" },
];

const storyParagraphs = [
  "Genesis Ventures Ltd was founded on a straightforward but powerful idea: that the best investment decisions are made by those who understand not just financial markets, but the real-world industries that drive them. Too often, capital is managed by those who have only ever known finance - and that is precisely where the gaps in judgment appear.",
  "We are different. Genesis Ventures was built at the intersection of two worlds - manufacturing and finance - bringing to bear a rare combination of operational understanding and market acumen that most investment firms simply cannot offer.",
  "From our founding, Genesis Ventures has been committed to a single purpose: growing and protecting capital with integrity, discipline, and the kind of long-term perspective that comes from having navigated real business challenges firsthand. We serve retail investors, high-net-worth individuals, and institutional partners - each with the same commitment to rigour and transparency.",
  "Today, Genesis Ventures operates across a diversified range of asset classes and geographies, guided by a philosophy built on evidence, patience, and a deep respect for risk. We believe that sustainable returns are earned - not chased - and that the trust our clients place in us is the most valuable asset we manage.",
];

const leaderParagraphs = [
  "Anuj Rathi is the Founder and Managing Director of Genesis Ventures Ltd, bringing over two decades of varied and distinguished experience spanning both the manufacturing sector and financial markets. This rare dual background forms the intellectual core of Genesis Ventures - and sets it apart from conventionally trained investment managers.",
  "Anuj's career began in manufacturing, where he developed a granular, ground-level understanding of industrial operations, supply chains, capital allocation, and the cyclical pressures that shape real businesses. He witnessed firsthand how companies are built, scaled, and stress-tested - insight that cannot be found in a textbook or on a trading floor.",
  "Over time, his career expanded into finance, where he applied that operational knowledge to investment strategy - building a disciplined, research-led approach to capital markets that is informed by an understanding of business fundamentals few peers can match. He has navigated multiple market cycles, managed risk across asset classes, and developed a philosophy of investing that prioritises long-term value over short-term noise.",
  "Today, Anuj leads Genesis Ventures with a hands-on approach - personally overseeing investment strategy, client relationships, and portfolio management. He believes that trust is earned through consistency, transparency, and the courage to take a long-term view even when markets are short-term in their thinking.",
];

const expertiseTags = [
  "Manufacturing",
  "Finance",
  "Portfolio Strategy",
  "Risk Management",
  "Capital Allocation",
  "Wealth Planning",
];

const values = [
  {
    title: "Integrity",
    description:
      "We act in our clients' best interests at all times - with complete transparency about fees, risks, and our reasoning. No exceptions.",
  },
  {
    title: "Patience",
    description:
      "We resist the pull of short-termism. Wealth is built over years, not quarters - and we have the conviction to stay the course.",
  },
  {
    title: "Rigour",
    description:
      "Every decision is grounded in research and evidence. We examine fundamentals deeply and challenge assumptions before committing capital.",
  },
  {
    title: "Partnership",
    description:
      "We see every client as a long-term partner. We succeed when they succeed - that alignment shapes every conversation and every decision.",
  },
];

const differences = [
  {
    title: "Cross-sector insight",
    description:
      "Two decades spanning manufacturing and finance means we understand business cycles, operational risk, and value creation from both sides of the equation.",
  },
  {
    title: "Founder-led decision making",
    description:
      "Anuj Rathi is personally involved in every major investment decision. There is no committee, no delegation to junior analysts. Accountability is direct.",
  },
  {
    title: "Genuine diversification",
    description:
      "We build portfolios that are diversified in the truest sense - across asset classes, sectors, geographies, and risk factors - not just by name.",
  },
  {
    title: "Clients of every kind",
    description:
      "We serve retail investors, high-net-worth individuals, and institutions with equal rigour. The same standards, the same transparency, the same commitment.",
  },
];

export default function OurStoriesPage() {
  return (
    <main className="bg-[#fdfbf7] text-[#1a1714] pt-20 font-poppins">
      <section className="grid grid-cols-1 gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[280px_1fr] lg:gap-24 lg:px-16 lg:py-28">
        <aside className="lg:sticky lg:top-28 h-fit">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#1a2e4a] font-poppins">
            Our Story
          </p>
          <h2 className="font-[PPFONT] text-4xl leading-tight">
            Where we come from
          </h2>
          <div className="mt-6 h-[2px] w-10 bg-[#b08d57]" />
        </aside>

        <div className="text-[#3d3830]">
          {storyParagraphs.slice(0, 2).map((paragraph) => (
            <p key={paragraph} className="mb-7 text-base leading-8 font-poppins">
              {paragraph}
            </p>
          ))}

          <blockquote className="mb-10 border-l-4 border-[#1a2e4a] bg-[#e6edf5] px-8 py-7">
            <p className="font-[PPFONT] text-3xl italic leading-relaxed text-[#1a2e4a]">
              We do not just read balance sheets. We understand what it takes to
              build a business, run an operation, and weather a cycle - because
              we have done it.
            </p>
          </blockquote>

          {storyParagraphs.slice(2).map((paragraph) => (
            <p key={paragraph} className="mb-7 text-base leading-8 last:mb-0 font-poppins">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section
        id="leadership"
        className="bg-[#f8f4ed] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mb-14">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#1a2e4a] font-poppins">
            Leadership
          </p>
          <h2 className="font-[PPFONT] text-5xl leading-tight">
            The person behind the firm
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">
          <div className="relative overflow-hidden bg-[#1a2e4a] p-10">
            <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_80%_20%,#fff_0%,transparent_55%)]" />
            <div className="relative z-10">
              <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/15 font-[PPFONT] text-3xl text-white/90">
                AR
              </div>
              <h3 className="font-[PPFONT] text-4xl text-white">Anuj Rathi</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#b08d57] font-poppins">
                Founder and Managing Director
              </p>
              <div className="my-7 h-px bg-white/20" />
              <div className="space-y-5 text-white/80 font-poppins">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Experience
                  </p>
                  <p className="text-sm">20+ years</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Sectors
                  </p>
                  <p className="text-sm">Manufacturing and Finance</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Role
                  </p>
                  <p className="text-sm">Portfolio Strategy and Management</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[#3d3830]">
            {leaderParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-6 text-[15px] leading-8 last:mb-0 font-poppins"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-9 flex flex-wrap gap-2">
              {expertiseTags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#1a2e4a] px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-[#1a2e4a] font-poppins"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#1a2e4a] font-poppins">
            What We Stand For
          </p>
          <h2 className="font-[PPFONT] text-5xl leading-tight">
            Our core values
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 border border-[#d8d0c4] sm:grid-cols-2 xl:grid-cols-4">
          {values.map((item, idx) => (
            <div
              key={item.title}
              className={`group border-[#d8d0c4] p-8 transition-colors hover:bg-[#e6edf5] ${idx !== values.length - 1 ? "xl:border-r" : ""
                } ${idx < 2 ? "xl:border-b-0 sm:border-b" : ""}`}
            >
              <p className="mb-6 font-poppins text-5xl font-light leading-none text-[#e8edf5] group-hover:text-[#f8dfe2] transition-colors">
                0{idx + 1}
              </p>
              <h3 className="font-[PPFONT] text-3xl leading-tight text-[#1a1714]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#8c8278] font-poppins">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
