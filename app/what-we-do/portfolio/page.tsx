"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const sectorTabs = [
  { key: "All", title: "All" },

  {
    key: "Hospitality",
    title: "Hospitality",
  },
  {
    key: "Hydropower",
    title: "Hydropower",
  },
  {
    key: "Manufacturing",
    title: "Manufacturing",
  },
  { key: "Media", title: "Media" },

  {
    key: "Healthcare & Pharma",
    title: "Healthcare & Pharma",
  },
  { key: "Others", title: "Others" },
] as const;

type Sector = (typeof sectorTabs)[number]["key"];

const portfolioItems = [
  {
    name: "Dairy Day",
    sector: "Healthcare & Pharma" as Sector,
    image: "/portfolio/Healthcare & Pharma/divine healthcare.jfif",
  },
  {
    name: "Florid",
    sector: "Healthcare & Pharma" as Sector,
    image: "/portfolio/Healthcare & Pharma/florid.jpg",
  },
  {
    name: "Frontline Hospital",
    sector: "Healthcare & Pharma" as Sector,
    image: "/portfolio/Healthcare & Pharma/frontline hospital.png",
  },
  {
    name: "Annapurna Cable Car",
    sector: "Hospitality" as Sector,
    image: "/portfolio/Hospitality/annapurna cable car.png",
  },
  {
    name: "Bandipur Cable Car",
    sector: "Hospitality" as Sector,
    image: "/portfolio/Hospitality/bandipur cable car.png",
  },
  {
    name: "Forest Inn",
    sector: "Hospitality" as Sector,
    image: "/portfolio/Hospitality/forest inn.webp",
  },
  {
    name: "Ayu Malun Hydro",
    sector: "Hydropower" as Sector,
    image: "/portfolio/Hydropower/ayu malun hydro.jpeg",
  },
  {
    name: "KBNR Iswa Hydropower",
    sector: "Hydropower" as Sector,
    image: "/portfolio/Hydropower/kbnr iswa hydropower.png",
  },
  {
    name: "Mahashakti Cement",
    sector: "Manufacturing" as Sector,
    image: "/portfolio/Manufacturing/mahashakti cement.jpg",
  },
  {
    name: "Maruti Cement",
    sector: "Manufacturing" as Sector,
    image: "/portfolio/Manufacturing/maruti cement.jpg",
  },
  {
    name: "Shubhshree Agni Cement",
    sector: "Manufacturing" as Sector,
    image: "/portfolio/Manufacturing/shubhshree agni cement.jpg",
  },
  {
    name: "Dish Home",
    sector: "Media" as Sector,
    image: "/portfolio/Media/dish home.webp",
  },
  {
    name: "Sopan Multiple",
    sector: "Others" as Sector,
    image: "/portfolio/Others/sopan multiple.png",
  },
];

export default function PortfolioPage() {
  const [activeSector, setActiveSector] = useState<Sector>(
    "Healthcare & Pharma",
  );

  const filteredItems = useMemo(() => {
    if (activeSector === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.sector === activeSector);
  }, [activeSector]);

  return (
    <main className="min-h-screen bg-[#f3f2ef] px-4 pb-20 pt-28 xs:px-6 sm:px-8 md:px-16">
      <section className="mx-auto w-full max-w-[110rem]">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-poppins text-[clamp(2rem,5vw,3.4rem)] font-bold uppercase leading-[1] tracking-tight text-[#303027]">
            Portfolio
          </h1>
        </div>

        <div className="mt-12 border border-[#dbdbdb] bg-[#eeeeee] ">
          <div className="flex items-center gap-3 border-b border-[#e2e2e2] px-5 py-5 sm:px-7">
            <h2 className="text-[1.15rem] font-semibold font-poppins uppercase tracking-[0.08em] text-[#34342e] sm:text-[1.3rem]">
              Sectors: {activeSector}
            </h2>
            <span className="mt-1 inline-block h-3 w-3 rotate-45 border-l-[3px] border-t-[3px] border-[#0f7a82]" />
          </div>

          <div className="px-4 py-8 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              {sectorTabs.map((sector) => {
                const isActive = sector.key === activeSector;

                return (
                  <button
                    key={sector.key}
                    type="button"
                    onClick={() => setActiveSector(sector.key)}
                    className={`flex items-center rounded-full border px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors sm:text-base ${
                      isActive
                        ? "border-genesis-navy text-genesis-red"
                        : "border-[#cdcdcd] text-genesis-navy hover:border-genesis-navy/60"
                    }`}
                  >
                    {sector.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {filteredItems.map((item) => (
            <article key={`${item.name}-${item.sector}`} className="group">
              <div className="relative h-[145px] w-full overflow-hidden border border-[#e1e1e1] bg-white sm:h-[165px] lg:h-[180px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
