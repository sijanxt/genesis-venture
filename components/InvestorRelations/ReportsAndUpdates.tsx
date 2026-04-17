const prepItems = [
  {
    num: "01",
    title: "Annual Performance Report",
    desc: "A complete record of portfolio returns, benchmarked against relevant indices and net of all fees. Published once verified by our independent reviewers.",
  },
  {
    num: "02",
    title: "Portfolio Disclosures",
    desc: "Holdings, stages, sector allocation, and concentration metrics, the things that actually tell you how capital is being deployed.",
  },
  {
    num: "03",
    title: "Letters to Investors",
    desc: "Our perspective on markets, risk, and the reasoning behind every significant decision. Candid, long-form, and written by the people managing your capital, not a communications team.",
  },
];

const ReportsAndUpdates = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#fafaf9] border-t border-[#e4e0db]">
      <div className="layout-7xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:gap-8">
          <div>
            <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
              In Preparation
            </span>
            <h2 className="mt-3 max-w-[620px] font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.45] tracking-[-0.01em] text-[#08112a]">
              What&apos;s coming to this page.
            </h2>
          </div>
          <div className="flex flex-col gap-1 font-poppins text-[11px] uppercase tracking-[0.22em] text-[#6b6b78] leading-none">
            <span className="block">Release cadence</span>
            <span className="block text-[#8D1E39]">Quarterly</span>
          </div>
        </div>

        <div className="grid gap-0">
          {prepItems.map((item, idx, arr) => (
            <div
              key={item.num}
              className={`group grid items-center cursor-pointer grid-cols-[56px_1fr] gap-5 border-t border-[#e4e0db] py-6 transition-colors duration-300 hover:bg-[linear-gradient(90deg,rgba(23,48,83,0.68)_0%,#d9e6f7_58%,#eef4ff_100%)] sm:grid-cols-[76px_1fr] sm:gap-7 sm:py-7 lg:grid-cols-[90px_1.15fr_2fr] lg:gap-10 lg:py-8 ${idx === arr.length - 1 ? "border-b" : ""}`}
            >
              <div className="pl-2 sm:pl-3 lg:pl-4 font-poppins text-[2rem] font-light leading-none text-[#d7e2f0] transition-colors duration-300 group-hover:text-[#8D1E39] sm:text-[2.6rem] lg:text-[3rem]">
                {item.num}
              </div>
              <h3 className="font-[PPFONT] text-[1.2rem] leading-[1.2] text-[#08112a] sm:text-[1.35rem]">
                {item.title}
              </h3>
              <p className="col-span-2 max-w-[560px] pl-[56px] font-poppins text-[14px] leading-7 text-[#616877] sm:col-span-2 sm:pl-[76px] sm:text-[15px] lg:col-span-1 lg:pl-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportsAndUpdates;
