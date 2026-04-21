"use client";

export default function Firm() {
  const focusItems = [
    { label: "Investment Focus", value: "Unlisted shares" },
    { label: "Investment Stage", value: "Growth to pre-IPO" },
    { label: "Horizon", value: "Long-term capital" },
  ];

  const activities = [
    {
      title: "Primary equity investment",
      description:
        "We deploy capital directly into unlisted companies, taking meaningful equity stakes that align our success with the founders and management teams we back.",
    },
    {
      title: "Secondary market transactions",
      description:
        "We actively participate in the secondary transfer of unlisted shareholdings, providing liquidity to early investors, employees, and shareholders who seek an exit prior to a public listing.",
    },
    {
      title: "Portfolio stewardship",
      description:
        "Capital is only part of what we offer. We work closely with portfolio companies on strategic planning, governance, talent, and business development, acting as a true growth partner.",
    },
  ];

  return (
    <section className="w-full bg-white flex flex-col">
      <div className="layout-7xl">
        <div className="flex items-start justify-between border-b border-genesis-red pb-2 sm:pb-3 md:pb-4">
        <span className="firm-heading text-lg sm:text-xl uppercase tracking-widest text-genesis-blue font-poppins font-bold">
          Firm
        </span>
        </div>

        <div className="mt-5 flex flex-col gap-7 overflow-hidden">
          <p className="w-full font-poppins text-[1.05rem] sm:text-[1.15rem] leading-relaxed sm:leading-8 text-gray-600">
            Genesis Ventures Ltd. is a dedicated private markets investment
            company focused exclusively on unlisted equity - stakes in businesses
            that operate beyond the reach of public exchanges, where the most
            meaningful value creation often takes place.
          </p>

          <div className="grid grid-cols-1 overflow-hidden border border-[#c5cfda] bg-[#dfe7f0] sm:grid-cols-3">
            {focusItems.map((item) => (
              <div
                key={item.label}
                className="border-b border-[#c5cfda] p-4 sm:p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-[#63676b]">
                  {item.label}
                </p>
                <p className="mt-1 font-poppins text-base font-semibold leading-tight text-[#0d3a66] sm:text-lg">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-3">
            <div className="mt-5 bg-[#f9fbfa]">
              <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-genesis-red">
                <div className="order-2 md:order-1 py-5 sm:py-8 md:py-10 text-center md:text-left md:flex md:flex-col md:justify-center">
                  <h4 className="font-[PPFONT] text-[clamp(2rem,7vw,2.8rem)] leading-[0.95] text-[#0d3a66]">
                    Partnership <em className="not-italic">&amp; Delivery</em>
                  </h4>
                  <p className="mt-4 sm:mt-5 max-w-xl mx-auto md:mx-0 font-poppins text-sm sm:text-[0.95rem] leading-relaxed text-[#4f6b88]">
                    We approach each opportunity as a long-term partnership and
                    focus on disciplined execution that supports sustainable
                    value creation.
                  </p>
                </div>

                <div className="order-1 md:order-2 py-5 sm:py-8 md:py-10 md:pl-10 lg:pl-14">
                  <div className="space-y-8 sm:space-y-10">
                    {activities.map((activity, index) => (
                      <div key={activity.title} className="flex gap-4 sm:gap-5">
                        <span className="font-[PPFONT] text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-none text-[#0d3a66]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="pt-1">
                          <h5 className="font-[PPFONT] text-[clamp(1.25rem,3.5vw,1.75rem)] leading-tight text-[#0d3a66]">
                            {activity.title}
                          </h5>
                          <p className="mt-1.5 max-w-2xl font-poppins text-sm leading-relaxed text-[#5b5f63]">
                            {activity.description}
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
      </div>
    </section>
  );
}
