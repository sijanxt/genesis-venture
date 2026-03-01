import Hero from "@/components/About/Hero";
import Milestone from "@/components/About/Milestone";
import { Mission } from "@/components/About/Mission";

export default function About() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <Milestone />
    </div>
  );
}
