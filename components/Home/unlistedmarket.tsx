export default function UnlistedMarket() {
  const cards = [
    {
      label: "Strategic Edge",
      title: "Asymmetric opportunity",
      description:
        "Private companies represent the largest and fastest-growing segment of the economy, yet remain inaccessible to most institutional and retail investors.",
      linkText: "Read the investment rationale",
      bgColor: "#001D3F",
    },
    {
      label: "Risk Discipline",
      title: "Reduced market noise",
      description:
        "Unlisted investments are insulated from the short-term volatility and sentiment swings that affect public markets, enabling a clearer focus on fundamental value.",
      linkText: "See our downside framework",
      bgColor: "#04356A",
    },
    {
      label: "Entry Timing",
      title: "Early entry advantage",
      description:
        "Investing before a public listing means accessing companies at valuations that reflect potential - not yet priced in by the crowd.",
      linkText: "Explore valuation approach",
      bgColor: "#054E98",
    },
    {
      label: "Network Access",
      title: "Relationship-driven deals",
      description:
        "The best private deals are earned through trust and networks, not won through auctions - a discipline at the core of how Genesis Ventures operates.",
      linkText: "Understand our sourcing model",
      bgColor: "#0A6ED3",
    },
  ];

  return (
    <section className="w-full bg-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-8 md:py-8">
      <div className="layout-7xl">
        <div className="flex items-start justify-between border-b border-genesis-red pb-2 sm:pb-3 md:pb-4">
          <span className="firm-heading text-lg sm:text-xl uppercase tracking-widest text-genesis-blue font-poppins font-bold">
            Why Unlisted Markets
          </span>
        </div>

        <div className="mt-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {cards.map((card) => (
              <article
                key={card.title}
                className="flex h-full min-h-[340px] flex-col justify-between p-5 shadow-[0_16px_30px_rgba(2,20,41,0.28)]"
                style={{ backgroundColor: card.bgColor }}
              >
                <div>
                  <span className="mb-3 block h-[2px] w-10 bg-genesis-red" />
                  <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
                    {card.label}
                  </p>
                  <h4 className="mt-3 font-poppins text-[1.9rem] font-semibold leading-[1.15] text-white">
                    {card.title}
                  </h4>
                  <p className="mt-4 font-poppins text-[0.97rem] leading-relaxed text-white/90">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center border-t border-white/30 pt-3">
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center bg-white text-sm font-bold text-[#0a233f]">
                    &gt;
                  </span>
                  <p className="font-poppins text-[12px] sm:text-[13px] font-semibold text-white whitespace-nowrap">
                    {card.linkText}
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
