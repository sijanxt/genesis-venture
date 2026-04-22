"use client";

export default function ScrollingHeadline() {
  const headline = "Create wealth with Genesis";
  return (
    <section className="relative w-full overflow-hidden bg-white pb-20">
      <div className="marquee-track">
        <p className="marquee-text">{headline}</p>
        <p aria-hidden className="marquee-text">
          {headline}
        </p>
      </div>
      <div className="layout-7xl mt-5">
        <p className="font-poppins text-[13px] sm:text-[14px] text-left text-[#0d3a66]/75">
          Investing involves risks, including loss of capital.
        </p>
      </div>
      <style jsx>{`
        .marquee-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          animation: marquee 24s linear infinite;
        }

        .marquee-text {
          padding-right: 6rem;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(3rem, 12vw, 10rem);
          line-height: 0.95;
          color: #0d3a66;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
