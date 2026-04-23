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
            <div className="mt-5 bg-[#f9fbfa]">
              <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-genesis-red">
                <div className="order-2 md:order-1 py-5 sm:py-8 md:py-10 text-center md:text-left md:flex md:flex-col md:justify-center">
                  <h4 className="font-[PPFONT] text-[clamp(2rem,7vw,2.8rem)] leading-[0.95] text-[#0d3a66]">
                       Firm
                  </h4>
                  <p className="mt-4 sm:mt-5 max-w-xl mx-auto md:mx-0 font-poppins text-sm sm:text-[0.95rem] leading-relaxed text-[#4f6b88]">
                     Genesis Ventures Ltd. is a dedicated private markets investment
            company focused exclusively on unlisted equity - stakes in businesses
            that operate beyond the reach of public exchanges, where the most
            meaningful value creation often takes place.
                  </p>
                </div>

                <div className="order-1 md:order-2 py-5 sm:py-8 md:py-10 md:pl-10 lg:pl-14">
                  <div className="space-y-8 sm:space-y-10">
                    {focusItems.map((item, index) => (
                      <div key={`${item.label}-right`} className="flex gap-4 sm:gap-5">
                        <span className="font-[PPFONT] text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-none text-[#0d3a66]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="pt-1">
                          <h5 className="font-[PPFONT] text-[clamp(1.25rem,3.5vw,1.75rem)] leading-tight text-[#0d3a66]">
                            {item.label}
                          </h5>
                          <p className="mt-1.5 max-w-2xl font-poppins text-sm leading-relaxed text-[#5b5f63]">
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
