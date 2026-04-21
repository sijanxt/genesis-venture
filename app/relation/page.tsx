import Hero from "@/components/InvestorRelations/Hero";
import InvestorDocuments from "@/components/InvestorRelations/form";
import ReportsAndUpdates from "@/components/InvestorRelations/ReportsAndUpdates";
import HeroPage from "@/components/ui/HeroPage";

export default function Home() {
  return (
    <main className="w-full font-[PPFONT]">
      <HeroPage
        title="Investor Relations"
        titleClassName="text-[clamp(1.5rem,4.8vw,3.2rem)]"
      />
      <Hero />
      <ReportsAndUpdates />
      <InvestorDocuments />
      {/* <PartnerCTA /> */}
    </main>
  );
}
