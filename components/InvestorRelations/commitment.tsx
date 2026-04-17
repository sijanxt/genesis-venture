const PartnerCTA = () => {
  return (
    <section
      id="commitment"
      className="group relative border-t border-[#e4e0db] bg-[linear-gradient(90deg,rgba(23,48,83,0.72)_0%,#d9e6f7_58%,#eef4ff_100%)] py-16 sm:py-20 md:py-28 lg:py-[140px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/8" />
      <div className="layout-7xl relative z-10">
        <div className="max-w-[960px] mx-auto text-center">
          <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
            The Commitment
          </span>

          <blockquote className="my-8 sm:my-10 font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.55] text-[#08112a] italic font-normal">
            <span className="text-[#8D1E39]">&quot;</span>
            We will share our numbers the same way we make our decisions
            carefully, honestly, and only when we can stand behind every line. If
            that costs us a conversation with an impatient investor, it is a
            conversation we were never going to win anyway.
            <span className="text-[#8D1E39]">&quot;</span>
          </blockquote>

          <div className="flex items-center justify-center gap-4 sm:gap-6 font-poppins text-[14px]">
            <div>
              <span className="text-[#08112a] font-medium tracking-[0.02em]">
                Anuj Rathi
              </span>
              <span className="block text-[#8D1E39] italic text-[13px] mt-0.5">
                Founder &amp; Managing Director
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
