import Hero from "@/components/Services/Hero";
import { Intro } from "@/components/Services/Intro";
import { OurServices } from "@/components/Services/OurServices";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Intro />
      <OurServices />
    </div>
  );
}
