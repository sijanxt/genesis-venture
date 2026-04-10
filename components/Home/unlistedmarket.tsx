export default function UnlistedMarket() {
  const cards = [
    {
      title: "Asymmetric opportunity",
      description:
        "Private companies represent the largest and fastest-growing segment of the economy, yet remain inaccessible to most institutional and retail investors.",
      accent: "bg-[#1f65aa]",
    },
    {
      title: "Reduced market noise",
      description:
        "Unlisted investments are insulated from the short-term volatility and sentiment swings that affect public markets, enabling a clearer focus on fundamental value.",
      accent: "bg-[#1f8d7a]",
    },
    {
      title: "Early entry advantage",
      description:
        "Investing before a public listing means accessing companies at valuations that reflect potential - not yet priced in by the crowd.",
      accent: "bg-[#b47a1b]",
    },
    {
      title: "Relationship-driven deals",
      description:
        "The best private deals are earned through trust and networks, not won through auctions - a discipline at the core of how Genesis Ventures operates.",
      accent: "bg-[#4746d8]",
    },
  ];

  return (
    <section className="w-full bg-white text-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-8 md:py-8">
      <div className="mx-auto w-full max-w-9xl">
        <div className="flex items-start justify-between border-b border-gray-200 pb-3 ">
          <span className="firm-heading text-lg sm:text-xl uppercase tracking-widest text-gray-500 font-poppins font-bold">
            Why Unlisted Markets
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
          {cards.map((card) => (
            <article key={card.title} className="flex bg-[#f1f2f4]">
              <span className={`w-[2px] shrink-0 ${card.accent}`} />
              <div className="px-4 py-3 sm:px-5 sm:py-4">
                <h4 className="font-poppins text-[1.05rem] sm:text-[1.15rem] font-semibold leading-tight text-[#242628]">
                  {card.title}
                </h4>
                <p className="mt-1 font-poppins text-sm leading-relaxed text-[#5b5f63] sm:text-sm">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
