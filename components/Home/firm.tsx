"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Firm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".firm-heading", { type: "words" });

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

    if (!containerRef.current) return;

    const paragraph = containerRef.current.querySelector<HTMLParagraphElement>(
      "#firm-animated-paragraph",
    );

    if (!paragraph) return;

    const words = paragraph.textContent
      ?.split(" ")
      .map((word) => `<span class=\"word\">${word}</span>`)
      .join(" ");

    if (words) paragraph.innerHTML = words;

    const wordEls = paragraph.querySelectorAll(".word");

    gsap.fromTo(
      wordEls,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "top -20%",
          scrub: true,
        },
      },
    );

    return () => {
      splitTitle.revert();
    };
  });

  const focusItems = [
    { label: "Investment Focus", value: "Unlisted shares" },
    { label: "Investment Stage", value: "Growth to pre-IPO" },
    { label: "Horizon", value: "Long-term capital" },
  ];

  const activities = [
    {
      title: "Primary equity investment",
      description:
        "We deploy capital directly into unlisted companies, taking meaningful equity stakes that align our success with the founders and management teams we back.",
      blockClass: "bg-[#dbe8f3]",
      dotClass: "bg-[#2563a6]",
    },
    {
      title: "Secondary market transactions",
      description:
        "We actively participate in the secondary transfer of unlisted shareholdings, providing liquidity to early investors, employees, and shareholders who seek an exit prior to a public listing.",
      blockClass: "bg-[#d7eae6]",
      dotClass: "bg-[#1f7a67]",
    },
    {
      title: "Portfolio stewardship",
      description:
        "Capital is only part of what we offer. We work closely with portfolio companies on strategic planning, governance, talent, and business development, acting as a true growth partner.",
      blockClass: "bg-[#ece1ce]",
      dotClass: "bg-[#946112]",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full bg-white text-white flex flex-col px-4 xs:px-6 sm:px-8 md:px-16 "
    >
      <div className="flex items-start justify-between border-b border-gray-200 pb-3 sm:pb-4 md:pb-6">
        <span className="firm-heading text-xl uppercase tracking-widest text-gray-500 font-poppins font-bold">
          Firm
        </span>
      </div>

      <div className="flex flex-col gap-8  overflow-hidden">
        <p
          id="firm-animated-paragraph"
          className="max-w-5xl font-poppins text-xl sm:text-lg leading-7 text-gray-600"
        >
          Genesis Ventures Ltd. is a dedicated private markets investment
          company focused exclusively on unlisted equity - stakes in businesses
          that operate beyond the reach of public exchanges, where the most
          meaningful value creation often takes place.
        </p>

        <div className="grid grid-cols-1 overflow-hidden border border-[#c5cfda] bg-[#dfe7f0] sm:grid-cols-3">
          {focusItems.map((item) => (
            <div
              key={item.label}
              className="border-b border-[#c5cfda] px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-[#63676b]">
                {item.label}
              </p>
              <p className="mt-1 font-poppins text-sm font-semibold leading-tight text-[#0d3a66] sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-3">
          <h3 className="font-poppins text-lg sm:text-xl font-semibold uppercase tracking-wide text-[#5a5d61]">
            Investment activities
          </h3>
          <div className="mt-2 h-px w-full bg-[#cdd3da]" />

          <div className="mt-8 space-y-9">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="flex items-start gap-4 sm:gap-5"
              >
                <div
                  className={`flex h-16 w-16 shrink-0 items-start justify-center ${activity.blockClass} pt-4`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${activity.dotClass}`}
                  />
                </div>

                <div className="pt-1">
                  <h4 className="font-poppins text-[1.05rem] sm:text-[1.15rem] font-semibold leading-tight text-[#242628]">
                    {activity.title}
                  </h4>
                  <p className="mt-1 max-w-5xl font-poppins text-sm leading-relaxed text-[#5b5f63] sm:text-sm">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
