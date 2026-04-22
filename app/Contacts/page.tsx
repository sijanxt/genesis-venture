import Connect from "@/components/Contact/Connect";
import HeroPage from "@/components/ui/HeroPage";
import Image from "next/image";

export default function Contacts() {
  return (
    <main className="w-full font-[PPFONT]">
      <HeroPage title="Contact" />
    
      <Connect />
        <section className="relative w-full h-screen min-h-screen overflow-hidden">
        <Image
          src="/contact/image.png"
          alt="Contact Genesis Ventures"
          fill
          className="object-cover object-bottom"
          priority
        />
      </section>
    </main>
  );
}
