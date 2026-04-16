import Firm from "@/components/Home/firm";
import UnlistedMarket from "@/components/Home/unlistedmarket";

export default function WhoWeAreFirmPage() {
  return (
    <main className="w-full bg-white pb-6 pt-24 sm:pb-8 md:pb-10">
      <Firm />
      <UnlistedMarket />
    </main>
  );
}
