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

export default function OurStoriesPage() {
  return (
    <main className="bg-[#fdfbf7] text-[#1a1714] font-poppins">
      <section className="relative overflow-hidden bg-[linear-gradient(90deg,#173053_0%,#d9e6f7_58%,#eef4ff_100%)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_48%)]" />
        <div className="layout-7xl relative py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
            <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
              Our Story
            </span>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-poppins lg:pl-14 lg:text-left">
              Where We Come From
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-start">
              <h2 className="mt-0 sm:mt-1 font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.55] tracking-[-0.01em] text-[#08112a] font-medium">
                <span className="block">Built at the intersection of</span>
                <span className="block italic text-[#8D1E39] font-medium">
                  manufacturing and finance.
                </span>
              </h2>

              <p className="mt-6 sm:mt-9 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#08112a]">
                {storyParagraphs[0]}
              </p>

              <p className="mt-5 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#08112a]">
                {storyParagraphs[1]}
              </p>
            </div>

            <div className="flex flex-col justify-start lg:pl-14">
              <div className="mb-10 border-b border-[#1a2e4a]/15 pb-10">
                <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.45] text-[#08112a]">
                  We do not just read balance sheets. We understand what it
                  takes to build a business and weather a cycle.
                </blockquote>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#173053] px-5 py-6 transition hover:bg-[#173053]"
                  >
                    <p className="font-[PPFONT] text-[1.9rem] sm:text-[2.1rem] leading-none text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-white/85 font-poppins leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="leadership"
        className=" px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
      >
        <div className="layout-7xl">
          <div className="mb-12">
            <p className="mb-4 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-poppins">
              Leadership
            </p>
            <h2 className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.45] tracking-[-0.01em] text-[#08112a]">
              The person behind the firm
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">
            <div className="relative overflow-hidden bg-[#173053] p-10">
              <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_80%_20%,#fff_0%,transparent_55%)]" />
              <div className="relative z-10">
                <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/15 font-[PPFONT] text-3xl text-white/90">
                  AR
                </div>
                <h3 className="font-[PPFONT] text-[1.7rem] leading-[1.2] text-white">
                  Anuj Rathi
                </h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/85 font-poppins">
                  Founder and Managing Director
                </p>
                <div className="my-7 h-px bg-white/20" />
                <div className="space-y-5 text-white/85 font-poppins">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                      Experience
                    </p>
                    <p className="text-[14px] leading-7">20+ years</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                      Sectors
                    </p>
                    <p className="text-[14px] leading-7">Manufacturing and Finance</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                      Role
                    </p>
                    <p className="text-[14px] leading-7">Portfolio Strategy and Management</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[#616877]">
              {leaderParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-5 text-[14px] sm:text-[15px] leading-7 last:mb-0 font-poppins"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 flex flex-wrap gap-2">
                {expertiseTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#8D1E39] px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-[#08112a] font-poppins"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="layout-7xl">
          <div className="mb-12">
            <p className="mb-4 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.28em] text-[#8D1E39] font-poppins">
              What We Stand For
            </p>
            <h2 className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.45] tracking-[-0.01em] text-[#08112a]">
              Our core values
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[#8D1E39] md:grid-cols-2 xl:grid-cols-4">
            {values.map((item, idx) => (
              <article
                key={item.title}
                className="group cursor-pointer bg-white px-8 py-12 transition-colors duration-300 hover:bg-[linear-gradient(90deg,rgba(23,48,83,0.38)_0%,#d9e6f7_58%,#eef4ff_100%)]"
              >
                <p className="mb-6 font-poppins text-5xl font-light leading-none text-[#e8edf5] transition-colors duration-300 group-hover:text-[#8D1E39]">
                  0{idx + 1}
                </p>
                <h3 className="mb-3 font-[PPFONT] text-[1.2rem] sm:text-[1.35rem] leading-[1.2] text-[#08112a] group-hover:text-[#0d1d3a]">
                  {item.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-7 text-[#616877] font-poppins group-hover:text-[#243654]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
