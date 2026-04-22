import Hero from "@/components/InvestorRelations/Hero";
import ReportsAndUpdates from "@/components/InvestorRelations/ReportsAndUpdates";
import PartnerCTA from "@/components/InvestorRelations/commitment";
import HeroPage from "@/components/ui/HeroPage";

export default function Home() {
  return (
    <main className="w-full bg-white text-[#2c2c34] font-poppins overflow-x-hidden">
      <HeroPage
        title="Investor Relations"
        titleClassName="text-[clamp(1.5rem,4.8vw,3.2rem)]"
      />
      <Hero />
      <ReportsAndUpdates />
      <PartnerCTA />
    
    </main>
  );
}
