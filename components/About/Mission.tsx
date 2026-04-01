"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const values = [
  {
    title: "Conviction",
    description:
      "We back founders others overlook — early, decisively, and with full commitment.",
  },
  {
    title: "Partnership",
    description:
      "We sit alongside our founders through every stage, not just at the term sheet.",
  },
  {
    title: "Integrity",
    description:
      "Transparent communication and honest counsel, even when it's difficult.",
  },
  {
    title: "Long-term thinking",
    description: "We measure success in decades, not quarters.",
  },
];

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".mission-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    if (!statsRef.current) return;

    const cards = statsRef.current.querySelectorAll(".stats");

    cards.forEach((card) => {
      const paragraph = card.querySelector("p");
      if (!paragraph) return;

      // Split text into words
      const words = paragraph.textContent
        ?.split(" ")
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      if (words) paragraph.innerHTML = words;

      const wordEls = paragraph.querySelectorAll(".word");

      // Animate words
      gsap.fromTo(
        wordEls,
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
    });

    return () => {
      splitTitle.revert();
    };
  });

  return (
    <section
      id="our-values"
      ref={containerRef}
      className="sticky top-0 h-screen w-full overflow-hidden z-0 bg-white flex flex-col px-8 md:px-16 py-16 md:py-24"
    >
      <div className="flex items-start justify-between border-b border-gray-200 pb-6">
        <span className="mission-heading text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          Mission & Values
        </span>
        <span className="mission-heading text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
          02
        </span>
      </div>

      <div className=" flex flex-col md:flex-row gap-12 md:gap-24 flex-1 pt-10">
        <div className="md:w-1/3 flex flex-col justify-between gap-10">
          <h2 className="mission-heading text-2xl md:text-3xl text-genesis-navy leading-snug">
            Our mission is to back the builders who change industries.
          </h2>
          <div className="relative w-full h-64 md:h-full overflow-hidden">
            <Image
              src="/images/about/values.jpg"
              alt="About us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <p className="text-sm text-gray-600 font-[GT50] leading-relaxed">
            We invest at the intersection of ambition and execution — where a
            founder&apos;s vision meets the discipline to see it through.
          </p>
        </div>

        <div
          ref={statsRef}
          className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px  bg-gray-200"
        >
          {values.map(({ title, description }) => (
            <div
              key={title}
              className="stats group bg-white px-6 md:px-8 flex flex-col justify-end gap-3 border border-transparent  hover:border-genesis-navy  transition-all duration-300 "
            >
              <span className="text-xs uppercase tracking-widest text-genesis-red  font-[GT50]">
                {title}
              </span>
              <p className="text-sm text-gray-600 font-[GT50]  leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
