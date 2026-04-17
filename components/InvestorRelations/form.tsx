"use client";

import Button from "../ui/Button2";

const InvestorDocuments = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitBtn = e.currentTarget.querySelector(
      ".submit-btn",
    ) as HTMLButtonElement | null;
    if (!submitBtn) return;

    submitBtn.innerHTML = "Request received. We will be in touch.";
    submitBtn.style.background = "#a52344";
  };

  return (
    <section id="access" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#fafaf9]">
      <div className="layout-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 sm:gap-16 lg:gap-[100px]">
          <div>
            <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
              Early Access
            </span>
            <h2 className="mt-3 max-w-[460px] font-[PPFONT] text-[1.7rem] sm:text-[2rem] leading-[1.45] tracking-[-0.01em] text-[#08112a]">
              First look,{" "}
              <span className="block italic text-[#8D1E39] font-medium">
                when the numbers are ready.
              </span>
            </h2>
            <p className="mt-6 sm:mt-7 text-[15px] sm:text-[16px] text-[#6b6b78] max-w-3xl leading-[1.9]">
              Qualified investors can register to receive our performance
              materials, portfolio disclosures, and investor letters the moment
              they are released.
            </p>
            <ul className="mt-7 sm:mt-9 flex flex-col gap-3.5 list-none">
              {[
                "No marketing drip",
                "No newsletters",
                "No third-party sharing",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[14px] text-[#6b6b78]"
                >
                  <svg
                    className="h-4 w-4 text-[#8D1E39]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative bg-white border border-[#e4e0db] p-6 sm:p-8 lg:p-10"
          >
            <div className="absolute left-0 top-0 w-full h-[3px] bg-[#8D1E39]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[11px] font-medium tracking-[0.2em] uppercase text-[#8D1E39]"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full bg-transparent border-none border-b border-[#e4e0db] text-[#08112a] font-poppins text-[15px] py-2.5 transition-colors focus:outline-none focus:border-[#8D1E39] placeholder:text-[#6b6b78]/30"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-medium tracking-[0.2em] uppercase text-[#8D1E39]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full bg-transparent border-none border-b border-[#e4e0db] text-[#08112a] font-poppins text-[15px] py-2.5 transition-colors focus:outline-none focus:border-[#8D1E39] placeholder:text-[#6b6b78]/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="type"
                  className="mb-2 block text-[11px] font-medium tracking-[0.2em] uppercase text-[#8D1E39]"
                >
                  Investor Type
                </label>
                <select
                  id="type"
                  required
                  className="w-full bg-transparent border-none border-b border-[#e4e0db] text-[#08112a] font-poppins text-[15px] py-2.5 pr-6 appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%276%27 viewBox=%270 0 10 6%27%3E%3Cpath d=%27M1 1l4 4 4-4%27 stroke=%27%238D1E39%27 stroke-width=%271.5%27 fill=%27none%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_4px_center] transition-colors focus:outline-none focus:border-[#8D1E39]"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Individual</option>
                  <option>High Net Worth</option>
                  <option>Institutional</option>
                  <option>Family Office</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="jur"
                  className="mb-2 block text-[11px] font-medium tracking-[0.2em] uppercase text-[#8D1E39]"
                >
                  Jurisdiction
                </label>
                <input
                  id="jur"
                  type="text"
                  placeholder="Country / Region"
                  className="w-full bg-transparent border-none border-b border-[#e4e0db] text-[#08112a] font-poppins text-[15px] py-2.5 transition-colors focus:outline-none focus:border-[#8D1E39] placeholder:text-[#6b6b78]/30"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="note"
                className="mb-2 block text-[11px] font-medium tracking-[0.2em] uppercase text-[#8D1E39]"
              >
                A Note (Optional)
              </label>
              <textarea
                id="note"
                placeholder="Anything you'd like us to know"
                className="w-full bg-transparent border-none border-b border-[#e4e0db] text-[#08112a] font-poppins text-[15px] py-2.5 min-h-[80px] resize-y transition-colors focus:outline-none focus:border-[#8D1E39] placeholder:text-[#6b6b78]/30"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="submit-btn mt-3 w-full bg-[#173053] px-6 py-3 font-poppins text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-350 hover:bg-[#173053] sm:px-8 sm:py-3.5"
            >
              Submit Request
            </Button>

            <p className="mt-6 sm:mt-7 text-[12px] leading-[1.6] text-[#6b6b78]">
              We review every submission personally and respond within 5 business
              days. Your information is held in strict confidence and used only
              to share investor materials.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InvestorDocuments;
