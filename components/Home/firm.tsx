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
      blockClass: "bg-[#dbe8f3]",
      dotClass: "bg-[#2563a6]",
    },
    {
      title: "Secondary market transactions",
      description:
        "We actively participate in the secondary transfer of unlisted shareholdings, providing liquidity to early investors, employees, and shareholders who seek an exit prior to a public listing.",
      blockClass: "bg-[#d7eae6]",
      dotClass: "bg-[#1f7a67]",
    },
    {
      title: "Portfolio stewardship",
      description:
        "Capital is only part of what we offer. We work closely with portfolio companies on strategic planning, governance, talent, and business development, acting as a true growth partner.",
      blockClass: "bg-[#ece1ce]",
      dotClass: "bg-[#946112]",
    },
  ];

  return (
    <section className="w-full bg-white text-white flex flex-col">
      <div className="layout-7xl">
        <div className="flex items-start justify-between border-b border-genesis-red pb-2 sm:pb-3 md:pb-4">
        <span className="firm-heading text-lg sm:text-xl uppercase tracking-widest text-gray-500 font-poppins font-bold">
          Firm
        </span>
        </div>

        <div className="mt-5 flex flex-col gap-7 overflow-hidden">
          <p className="w-full font-poppins text-[1.05rem] sm:text-[1.15rem]  leading-8 text-gray-600">
            Genesis Ventures Ltd. is a dedicated private markets investment
            company focused exclusively on unlisted equity - stakes in businesses
            that operate beyond the reach of public exchanges, where the most
            meaningful value creation often takes place.
          </p>

          <div className="grid grid-cols-1 overflow-hidden border border-[#c5cfda] bg-[#dfe7f0] sm:grid-cols-3">
            {focusItems.map((item) => (
              <div
                key={item.label}
                className="border-b border-[#c5cfda] px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
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
            <div className="border-b border-genesis-red pb-2 sm:pb-3 md:pb-4">
              <h3 className="font-poppins text-lg sm:text-xl font-bold uppercase tracking-widest text-gray-500">
                Investment activities
              </h3>
            </div>

            <div className="mt-5 space-y-8">
              {activities.map((activity) => (
                <div
                  key={activity.title}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <div
                    className={`flex h-16 w-16 shrink-0 items-start justify-center ${activity.blockClass} pt-4`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${activity.dotClass}`}
                    />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-poppins text-[1.05rem] sm:text-[1.15rem] font-semibold leading-tight text-[#242628]">
                      {activity.title}
                    </h4>
                    <p className="mt-1 max-w-5xl font-poppins text-sm leading-relaxed text-[#5b5f63] sm:text-sm">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
