"use client";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);
const milestones = [
  {
    year: "1991",
    title: "Founded in Kathmandu",
    description:
      "Established with a focus on early-stage technology companies.",
  },
  {
    year: "1998",
    title: "First Fund Closed",
    description:
      "Raised $120M, backing 14 companies across tech and healthcare.",
  },
  {
    year: "2005",
    title: "Life Sciences Expansion",
    description: "Launched a dedicated biotech and digital health practice.",
  },
  {
    year: "2012",
    title: "Fund III — $500M",
    description: "Largest fund to date, reflecting strong LP confidence.",
  },
  {
    year: "2018",
    title: "Global Reach",
    description: "Portfolio companies operating across 12 countries.",
  },
  {
    year: "2024",
    title: "Fund V Launched",
    description:
      "$800M in commitments, continuing our focus on transformative founders.",
  },
];

export default function Milestone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.clientWidth ?? 260;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    el.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  useGSAP(() => {
    const splitTitle = new SplitText(".milestone-heading", { type: "words" });

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

    return () => {
      splitTitle.revert();
    };
  });

  return (

      <section
        id="our-history"
        ref={containerRef}
        className="h-screen w-full flex flex-col px-8 md:px-16 py-16 md:py-24"
      >
        <div className="flex items-start justify-between border-b border-gray-200 pb-6">
          <span className="milestone-heading text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
            Our History
          </span>
          <span className="milestone-heading text-xs uppercase tracking-widest text-gray-500 font-[GT50]">
            03
          </span>
        </div>

        <div className="flex flex-col gap-10 flex-1 pt-10 justify-between">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="milestone-heading  text-2xl md:text-3xl text-genesis-navy leading-snug max-w-sm">
              Three decades of disciplined investing.
            </h2>

            {/* Arrow controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollBy("left")}
                disabled={!canScrollLeft}
                className={`w-9 h-9 flex items-center justify-center border transition-colors duration-200 ${
                  canScrollLeft
                    ? "border-genesis-navy text-genesis-navy hover:bg-genesis-navy hover:text-white"
                    : "border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => scrollBy("right")}
                disabled={!canScrollRight}
                className={`w-9 h-9 flex items-center justify-center border transition-colors duration-200 ${
                  canScrollRight
                    ? "border-genesis-navy text-genesis-navy hover:bg-genesis-navy hover:text-white"
                    : "border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-px bg-gray-200 overflow-x-auto flex-1 select-none"
            style={{ scrollbarWidth: "none", cursor: "grab" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {milestones.map(({ year, title, description }) => (
              <div
                key={year}
                className="relative bg-white flex flex-col justify-between p-6 md:p-8 min-w-55 md:min-w-65 flex-1 hover:bg-genesis-navy hover:text-white
              group transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.03),transparent)] pointer-events-none" />

                <span className="text-sm text-genesis-red font-[GT50] uppercase tracking-widest group-hover:text-white transition-colors">
                  {year}
                </span>
                <div className="flex flex-col gap-2 mt-auto">
                  <div className="w-4 h-px bg-genesis-navy mb-3 group-hover:bg-white transition-colors" />
                  <span className="text-base text-genesis-navy font-[PPFONT] leading-snug group-hover:text-white transition-colors">
                    {title}
                  </span>
                  <span className="text-sm text-gray-600 font-[GT50] leading-relaxed group-hover:text-white transition-colors">
                    {description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  );
}
