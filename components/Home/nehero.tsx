"use client";

const heroStats = [
  { value: "NPR 1B+", label: "Assets Under Management" },
  { value: "25+", label: "Years of Experience" },
  { value: "20+", label: "Portfolio Companies" },
  { value: "3", label: "IPO" },
];

export default function NewHero() {
  return (
    <section className="relative h-screen min-h-[760px] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/night-sky.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 h-full w-full">
        <div className="layout-7xl flex h-full w-full flex-col pt-28">
        <div className="mt-6 flex w-full flex-col items-center text-center text-white">
          <p className="font-poppins text-[10px] uppercase tracking-[0.45em] text-white/85">
            Early-Stage Venture Capital
          </p>
          <h1 className="mt-7 font-[PPFONT] text-[clamp(2.1rem,7vw,5rem)] leading-[1.03] tracking-[0.01em]">
            Creating Long Term
            <br />
            Sustainable Wealth
          </h1>

        </div>

        <div className="mt-auto w-full pb-9">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {heroStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`py-4 text-center text-white ${
                  idx !== heroStats.length - 1 ? "lg:border-r lg:border-genesis-red/75" : ""
                }`}
              >
                <p className="whitespace-nowrap text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[PPFONT] text-white leading-none">
                  {stat.value}
                </p>
                <p className="mt-4 text-xs text-white uppercase tracking-widest font-montserrat leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
