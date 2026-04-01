import MarketInsights from "@/components/Perspective/MarketInsights";
import Media from "@/components/Perspective/MediaKeyMessageEvent";
import PerspectiveHero from "@/components/Perspective/PerspectiveHero";

export default function Home() {
  return (
    <main className="w-full font-[PPFONT]">
      <PerspectiveHero />
      <MarketInsights />
      <Media />
    </main>
  );
}
