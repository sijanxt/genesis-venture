import Hero from "@/components/InvestorRelations/Hero";
import ReportsAndUpdates from "@/components/InvestorRelations/ReportsAndUpdates";
import PartnerCTA from "@/components/InvestorRelations/commitment";
import InvestorDocuments from "@/components/InvestorRelations/form";
import MarketOverlook from "@/components/InvestorRelations/MarketOverlook";

export default function InvestorRelationsPage() {
  return (
    <main className="w-full bg-white text-[#2c2c34] font-poppins overflow-x-hidden">
      <Hero />
      <ReportsAndUpdates />
      <PartnerCTA />
      <InvestorDocuments />
      <MarketOverlook />
    </main>
  );
}
