"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ImagePlayer } from "../image-player";
import Image from "next/image";

const IMAGES = [
  "/images/hero/img1.jpg",
  "/images/hero/img2.jpg",
  "/images/hero/img3.jpg",
  "/images/hero/img4.jpg",
  "/images/hero/img5.jpg",
  
];
export default function Hero() {

  useGSAP(() => {
    const splitTitle = new SplitText(".hero-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });
    const splitDesc = new SplitText(".desc", { type: "lines" });

    gsap.from(splitDesc.lines, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    });

    return () => {
      splitTitle.revert();
      splitDesc.revert();
    };
  });

  return (
    <section id="about" className="h-screen w-full  flex flex-col justify-between px-8 md:px-16 pt-32 pb-12">
       <ImagePlayer
              images={IMAGES}
              interval={3000}
              renderImage={(src) => (
                <Image
                  src={src}
                  fill
                  className="size-full object-cover inline-block align-middle -z-30"
                  alt="showcalse"
                />
              )}
            />

      <div className="absolute inset-0 bg-genesis-navy/90 -z-20"></div>

      <div className="hero-heading flex items-start justify-between border-b border-white/10 pb-6">
        <span className="text-xs uppercase tracking-widest text-white/40 font-[GT50]">
          About Us
        </span>
        <span className="text-xs uppercase tracking-widest text-white/40 font-[GT50]">
          01
        </span>
      </div>

      <div className="flex flex-col gap-6 max-w-2xl">
        <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          Built on conviction.
          <br />
          <span className="text-genesis-red">Driven by purpose.</span>
        </h1>
        <p className="desc text-sm text-white/50 font-[GT50] leading-relaxed max-w-md">
          Since 1991, Genesis Ventures has partnered with visionary founders at
          the earliest stages of company building. We bring capital, networks,
          and decades of operational experience to every investment.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 md:gap-16 border-t border-white/10 pt-8">
        {[
          { value: "1991", label: "Founded" },
          { value: "Kathmandu", label: "Headquarters" },
          { value: "$2.4B+", label: "AUM" },
          { value: "80+", label: "Portfolio Companies" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="text-xl md:text-2xl text-white font-[PPFONT]">
              {value}
            </span>
            <span className="text-xs text-white/50 uppercase tracking-widest font-[GT50]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
