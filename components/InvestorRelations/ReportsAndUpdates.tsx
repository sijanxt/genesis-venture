const prepItems = [
  {
    num: "01",
    label: "Quarterly",
    title: "Annual Performance Report",
    desc: "A complete record of portfolio returns, benchmarked against relevant indices and net of all fees. Published once verified by our independent reviewers.",
  },
  {
    num: "02",
    label: "Transparency",
    title: "Portfolio Disclosures",
    desc: "Holdings, stages, sector allocation, and concentration metrics, the things that actually tell you how capital is being deployed.",
  },
  {
    num: "03",
    label: "Outlook",
    title: "Letters to Investors",
    desc: "Our perspective on markets, risk, and the reasoning behind every significant decision. Candid, long-form, and written by the people managing your capital, not a communications team.",
  },
  {
    num: "04",
    label: "Governance",
    title: "Audit & Valuation Notes",
    desc: "Independent verification notes, valuation methodology updates, and key policy disclosures that inform how we report portfolio value.",
  },
];

const ReportsAndUpdates = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-[64%] bg-[#001D3F]" />
        <div className="h-[36%] bg-white" />
      </div>

      <div className="relative py-10 sm:py-14 md:py-16">
        <div className="layout-7xl">
          <div className="flex items-start justify-between border-b border-genesis-red pb-3 sm:pb-4">
            <span className="font-poppins text-lg sm:text-xl font-normal uppercase tracking-[0.12em] text-white">
              In Preparation
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {prepItems.map((item) => (
              <article
                key={item.num}
                className="flex min-h-[430px] flex-col justify-between bg-[#DFE7F0]"
              >
                <div className="px-6 pt-8 pb-6">
                  <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.05em] text-[#2f4268]">
                    {item.label}
                  </p>
                  <span className="mt-2 block h-[2px] w-10 bg-genesis-red" />

                  <h3 className="mt-10 font-poppins text-[2.05rem] font-semibold leading-[1.1] text-[#173053]">
                    {item.title}
                  </h3>
                  <p className="mt-6 font-poppins text-[13px] sm:text-[14px] leading-[1.75] text-[#2f4268]">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsAndUpdates;
