export default function UnlistedMarket() {
  const cards = [
    {
      label: "Strategic Edge",
      title: "Asymmetric opportunity",
      description:
        "Private companies represent the largest and fastest-growing segment of the economy, yet remain inaccessible to most institutional and retail investors."
     
    },
    {
      label: "Risk Discipline",
      title: "Reduced market noise",
      description:
        "Unlisted investments are insulated from the short-term volatility and sentiment swings that affect public markets, enabling a clearer focus on fundamental value."
   
    },
    {
      label: "Entry Timing",
      title: "Early entry advantage",
      description:
        "Investing before a public listing means accessing companies at valuations that reflect potential - not yet priced in by the crowd."
    },
    {
      label: "Network Access",
      title: "Relationship-driven deals",
      description:
        "The best private deals are earned through trust and networks, not won through auctions - a discipline at the core of how Genesis Ventures operates."
    },
  ];
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
              Why Unlisted Markets
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <article
                key={card.title}
                className="flex min-h-[430px] flex-col justify-between bg-[#DFE7F0] "
              >
                <div className="px-6 pt-8 pb-6">
                  <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.05em] text-[#2f4268]">
                    {card.label}
                  </p>
                  <span className="mt-2 block h-[2px] w-10 bg-genesis-red" />

                  <h4 className="mt-10 font-poppins text-[2.05rem] font-semibold leading-[1.1] text-[#173053]">
                    {card.title}
                  </h4>
                  <p className="mt-6 font-poppins text-[13px] sm:text-[14px] leading-[1.75] text-[#2f4268]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
