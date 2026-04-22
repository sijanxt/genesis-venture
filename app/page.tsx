"use client";
import { useState } from "react";
import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/stats";
import InvestmentRiskModal from "@/components/InvestmentRiskFlyer";
import Firm from "@/components/Home/firm";
import UnlistedMarket from "@/components/Home/unlistedmarket";
import ScrollingHeadline from "@/components/Home/ScrollingHeadline";


export default function Home() {
  const [showModal, setShowModal] = useState(true);

  return (
    <main className="w-full font-[PPFONT]">
      {showModal && <InvestmentRiskModal onClose={() => setShowModal(false)} />}
      <Hero />
      <Stats />
      <div className="mt-8 flex flex-col gap-8 sm:mt-10 sm:gap-10 md:mt-12 md:gap-12 pb-20">
        <Firm />
        <UnlistedMarket />
      </div>
   
      <ScrollingHeadline />
    </main>
  );
}
