import Firm from "@/components/Home/firm";
import UnlistedMarket from "@/components/Home/unlistedmarket";
import HeroPage from "@/components/ui/HeroPage";

export default function WhoWeAreFirmPage() {
  return (
    <main className="w-full bg-white pb-6 sm:pb-8 md:pb-10">
      <HeroPage title="Firm" />
      <div className="pt-8 sm:pt-10 md:pt-12">
        <Firm />
      </div>
      <UnlistedMarket />
    </main>
  );
}
