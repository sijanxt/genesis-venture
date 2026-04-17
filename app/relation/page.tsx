import Hero from "@/components/InvestorRelations/Hero";
import InvestorDocuments from "@/components/InvestorRelations/form";
import ReportsAndUpdates from "@/components/InvestorRelations/ReportsAndUpdates";

export default function Home() {
  return (
    <main className="w-full font-[PPFONT]">
      <Hero />
      <ReportsAndUpdates />
      <InvestorDocuments />
      {/* <PartnerCTA /> */}
    </main>
  );
}
