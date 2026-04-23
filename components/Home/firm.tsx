"use client";

export default function Firm() {
  const focusItems = [
    { label: "Investment Focus", value: "Unlisted shares" },
    { label: "Investment Stage", value: "Growth to pre-IPO" },
    { label: "Horizon", value: "Long-term capital" },
  ];

  return (
    <section className="w-full bg-white flex flex-col">
      <div className="layout-7xl">
        <div className="pt-3">
          <div className="mt-3 sm:mt-5 bg-white">
            <div className="grid grid-cols-1 gap-8 border border-genesis-red/20 p-4 sm:p-6 md:grid-cols-2 md:gap-0 md:divide-x md:divide-genesis-red/60 md:p-0">
              <div className="order-1 py-1 md:px-8 md:py-10 lg:px-12">
                <h4 className="font-[PPFONT] text-[clamp(1.75rem,7vw,2.8rem)] leading-[0.95] text-[#0d3a66] text-left">
                  Firm
                </h4>
                <p className="mt-3 sm:mt-4 max-w-xl font-poppins text-sm sm:text-[0.95rem] leading-relaxed text-[#4f6b88] text-left">
                  Genesis Ventures Ltd. is a dedicated private markets
                  investment company focused exclusively on unlisted equity -
                  stakes in businesses that operate beyond the reach of public
                  exchanges, where the most meaningful value creation often
                  takes place.
                </p>
              </div>

              <div className="order-2 py-1 md:py-10 md:pl-8 lg:pl-12">
                <div className="space-y-6 sm:space-y-8">
                  {focusItems.map((item, index) => (
                    <div
                      key={`${item.label}-right`}
                      className="flex items-start gap-3 sm:gap-5"
                    >
                      <span className="font-[PPFONT] text-[1.75rem] sm:text-[2.2rem] lg:text-[2.6rem] leading-none text-[#0d3a66] shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="pt-0.5">
                        <h5 className="font-[PPFONT] text-[clamp(1.1rem,3.8vw,1.7rem)] leading-tight text-[#0d3a66]">
                          {item.label}
                        </h5>
                        <p className="mt-1 max-w-2xl font-poppins text-sm sm:text-[0.95rem] leading-relaxed text-[#5b5f63]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
