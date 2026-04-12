"use client";

export default function InvestorRelationsPage() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submitBtn = e.currentTarget.querySelector('.submit-btn') as HTMLButtonElement;
        if (submitBtn) {
            submitBtn.innerHTML = 'Request received — we will be in touch.';
            submitBtn.style.background = '#a52344';
        }
    };

    return (
        <main className="w-full bg-white text-[#2c2c34] font-poppins overflow-x-hidden pt-20">
            {/* HERO */}
            <section className="relative min-h-[600px] grid grid-cols-1 lg:grid-cols-2">
                {/* Left Column - Clean White */}
                <div className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28 flex flex-col justify-center">
                    <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
                        <span className="w-7 h-px bg-[#8D1E39]" />
                        Investor Relations
                    </span>

                    <h1 className="mt-6 sm:mt-8 font-[PPFONT] text-[clamp(32px,7vw,68px)] leading-[1.05] tracking-[-0.01em] text-[#08112a] font-medium">
                        <span className="block">Good data takes time.</span>
                        <span className="block italic text-[#8D1E39] font-medium">Great data takes discipline.</span>
                    </h1>

                    <p className="mt-6 sm:mt-9 max-w-[560px] text-[16px] sm:text-[17px] leading-[1.55] text-[#6b6b78]">
                        Ours is almost ready — and worth the wait. Performance materials,
                        portfolio disclosures, and investor letters are released only when they
                        meet the standards we hold ourselves to, not the standards the market
                        is willing to accept.
                    </p>

                    <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
                        <a href="#access" className="inline-flex items-center justify-center gap-3 bg-[#8D1E39] text-white px-6 sm:px-[34px] py-4 sm:py-[18px] font-poppins text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-[350ms] hover:bg-[#a52344]">
                            Request Materials <span className="transition-transform duration-[350ms]">→</span>
                        </a>
                        <a href="#commitment" className="inline-flex items-center justify-center gap-3 bg-transparent text-[#6b6b78] border border-[#e4e0db] px-6 sm:px-[34px] py-4 sm:py-[18px] font-poppins text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-[350ms] hover:border-[#8D1E39] hover:text-[#8D1E39]">
                            Our Commitment <span className="transition-transform duration-[350ms]">→</span>
                        </a>
                    </div>
                </div>

                {/* Right Column - Blue/Navy */}
                <div className="relative bg-[#162952] px-6 py-20 sm:px-10 lg:px-14 lg:py-28 flex flex-col justify-center">
                    <div className="mb-10 border-b border-white/10 pb-10">
                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8D1E39] font-poppins">
                            Why You're Seeing This Page
                        </p>
                        <blockquote className="font-[PPFONT] text-[1.7rem] sm:text-[2rem] italic leading-[1.55] text-white">
                            "We'd rather show you <span className="not-italic text-[#8D1E39]">nothing</span> than show you something half-built."
                        </blockquote>
                    </div>

                    <p className="text-[15px] sm:text-[16px] text-white/70 leading-[1.9] font-poppins">
                        Most firms publish performance the moment it flatters them. We have
                        chosen a different path: to release figures only when they have been
                        audited, stress-tested, and reviewed against the standards we hold
                        ourselves to.
                    </p>
                </div>
            </section>

            {/* IN PREPARATION */}
            <section className="py-16 sm:py-20 md:py-28 lg:py-[140px] bg-[#fafaf9] border-t border-[#e4e0db]">
                <div className="container mx-auto max-w-9xl px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-10 mb-16 sm:mb-20">
                        <div>
                            <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
                                <span className="w-7 h-px bg-[#8D1E39]" />
                                In Preparation
                            </span>
                            <h2 className="mt-6 sm:mt-7 font-[PPFONT] text-[clamp(28px,4.5vw,60px)] leading-[1.05] tracking-[-0.01em] text-[#08112a] font-medium max-w-[620px]">
                                What's coming to this page.
                            </h2>
                        </div>
                        <div className="text-[12px] tracking-[0.22em] uppercase text-[#6b6b78] leading-8 font-poppins">
                            Release cadence<br />
                            <span className="text-[#8D1E39]">Quarterly</span>
                        </div>
                    </div>

                    <div className="grid gap-0">
                        {[
                            {
                                num: "01",
                                title: "Annual Performance Report",
                                desc: "A complete record of portfolio returns, benchmarked against relevant indices and net of all fees. Published once verified by our independent reviewers."
                            },
                            {
                                num: "02",
                                title: "Portfolio Disclosures",
                                desc: "Holdings, stages, sector allocation, and concentration metrics — the things that actually tell you how capital is being deployed."
                            },
                            {
                                num: "03",
                                title: "Letters to Investors",
                                desc: "Our perspective on markets, risk, and the reasoning behind every significant decision. Candid, long-form, and written by the people managing your capital — not a communications team."
                            }
                        ].map((item, idx, arr) => (
                            <div
                                key={item.num}
                                className={`group grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr] lg:grid-cols-[100px_1fr_2fr] gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-10 lg:py-12 border-t border-[#e4e0db] transition-all duration-400 hover:pl-4 sm:hover:pl-6 hover:bg-white ${idx === arr.length - 1 ? 'border-b' : ''}`}
                            >
                                <div className="font-poppins text-[36px] sm:text-[48px] lg:text-[56px] font-light leading-none text-[#e8edf5] group-hover:text-[#f8dfe2] transition-colors duration-400">
                                    {item.num}
                                </div>
                                <h3 className="font-poppins text-[1.05rem] sm:text-[1.15rem] font-semibold leading-tight text-[#08112a]">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-[#6b6b78] max-w-[560px] col-span-2 sm:col-span-2 lg:col-auto lg:col-span-1 pl-[76px] sm:pl-[96px] lg:pl-0 font-poppins">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMMITMENT BLOCK */}
            <section id="commitment" className="relative bg-white py-16 sm:py-20 md:py-28 lg:py-[140px] border-t border-[#e4e0db]">
                <div className="container mx-auto max-w-9xl px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="max-w-[960px] mx-auto text-center">
                        <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
                          
                            The Commitment
                        </span>

                        <blockquote className="my-8 sm:my-10 font-[PPFONT] text-[clamp(22px,3.2vw,40px)] leading-[1.35] text-[#08112a] italic font-normal">
                            <span className="text-[#8D1E39]">"</span>
                            We will share our numbers the same way we make our decisions 
                            carefully, honestly, and only when we can stand behind every line. If
                            that costs us a conversation with an impatient investor, it is a
                            conversation we were never going to win anyway.
                            <span className="text-[#8D1E39]">"</span>
                        </blockquote>

                        <div className="flex items-center justify-center gap-4 sm:gap-6 font-poppins text-[14px]">
                          
                            <div>
                                <span className="text-[#08112a] font-medium tracking-[0.02em]">Anuj Rathi</span>
                                <span className="block text-[#6b6b78] italic text-[13px] mt-0.5">Founder &amp; Managing Director</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACCESS FORM */}
            <section id="access" className="py-16 sm:py-20 md:py-28 lg:py-[140px] bg-[#fafaf9]">
                <div className="container mx-auto max-w-9xl px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 sm:gap-16 lg:gap-[100px]">
                        <div>
                            <span className="inline-flex items-center gap-3 font-poppins text-[11px] font-medium tracking-[0.28em] uppercase text-[#8D1E39]">
                                <span className="w-7 h-px bg-[#8D1E39]" />
                                Early Access
                            </span>
                            <h2 className="mt-6 sm:mt-7 font-[PPFONT] text-[clamp(28px,4.5vw,54px)] leading-[1.05] tracking-[-0.01em] text-[#08112a] font-medium max-w-[440px]">
                                First look, <span className="block italic text-[#8D1E39] font-medium">when the numbers are ready.</span>
                            </h2>
                            <p className="mt-6 sm:mt-7 text-[15px] sm:text-[16px] text-[#6b6b78] max-w-[440px] leading-[1.9]">
                                Qualified investors can register to receive our performance materials,
                                portfolio disclosures, and investor letters the moment they are released.
                            </p>
                            <ul className="mt-7 sm:mt-9 flex flex-col gap-3.5 list-none">
                                {["No marketing drip", "No newsletters", "No third-party sharing"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-[14px] text-[#6b6b78]">
                                        <svg className="h-4 w-4 text-[#8D1E39]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <form onSubmit={handleSubmit} className="relative bg-white border border-[#e4e0db] p-6 sm:p-8 lg:p-12">
                            <div className="absolute left-0 top-0 w-full h-[3px] bg-[#8D1E39]" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-[10px] font-medium tracking-[0.22em] uppercase text-[#8D1E39] mb-2.5">
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                        className="w-full bg-transparent border-none border-b border-[#e4e0db] text-[#08112a] font-poppins text-[16px] py-2.5 transition-colors focus:outline-none focus:border-[#8D1E39] placeholder:text-[#6b6b78]/30"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-[10px] font-medium tracking-[0.22em] uppercase text-[#8D1E39] mb-2.5">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                        className="w-full bg-transparent border-none border-b border-[#e4e0db] text-[#08112a] font-poppins text-[16px] py-2.5 transition-colors focus:outline-none focus:border-[#8D1E39] placeholder:text-[#6b6b78]/30"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="type" className="block text-[10px] font-medium tracking-[0.22em] uppercase text-[#8D1E39] mb-2.5">
                                        Investor Type
                                    </label>
                                    <select
                                        id="type"
                                        required
                                        className="w-full bg-transparent border-none border-b border-[#e4e0db] text-[#08112a] font-poppins text-[16px] py-2.5 pr-6 appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%276%27 viewBox=%270 0 10 6%27%3E%3Cpath d=%27M1 1l4 4 4-4%27 stroke=%27%238D1E39%27 stroke-width=%271.5%27 fill=%27none%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_4px_center] transition-colors focus:outline-none focus:border-[#8D1E39]"
                                    >
                                        <option value="" disabled>Select one</option>
                                        <option>Individual</option>
                                        <option>High Net Worth</option>
                                        <option>Institutional</option>
                                        <option>Family Office</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="jur" className="block text-[10px] font-medium tracking-[0.22em] uppercase text-[#8D1E39] mb-2.5">
                                        Jurisdiction
                                    </label>
                                    <input
                                        id="jur"
                                        type="text"
                                        placeholder="Country / Region"
                                        className="w-full bg-transparent border-none border-b border-[#e4e0db] text-[#08112a] font-poppins text-[16px] py-2.5 transition-colors focus:outline-none focus:border-[#8D1E39] placeholder:text-[#6b6b78]/30"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="note" className="block text-[10px] font-medium tracking-[0.22em] uppercase text-[#8D1E39] mb-2.5">
                                    A Note (Optional)
                                </label>
                                <textarea
                                    id="note"
                                    placeholder="Anything you'd like us to know"
                                    className="w-full bg-transparent border-none border-b border-[#e4e0db] text-[#08112a] font-poppins text-[16px] py-2.5 min-h-[80px] resize-y transition-colors focus:outline-none focus:border-[#8D1E39] placeholder:text-[#6b6b78]/30"
                                />
                            </div>

                            <button
                                type="submit"
                                className="submit-btn w-full inline-flex items-center justify-center gap-3 bg-[#8D1E39] text-white px-6 sm:px-[34px] py-4 sm:py-[18px] font-poppins text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-[350ms] hover:bg-[#a52344] mt-3"
                            >
                                Submit Request <span className="transition-transform duration-[350ms]">→</span>
                            </button>

                            <p className="mt-6 sm:mt-7 text-[12px] leading-[1.6] text-[#6b6b78]">
                                We review every submission personally and respond within 5 business days.
                                Your information is held in strict confidence and used only to share
                                investor materials.
                            </p>
                        </form>
                    </div>
                </div>
            </section>



            {/* FOOTER DISCLAIMER */}
            <footer className="bg-[#fafaf9] py-12 sm:py-14 md:py-16 lg:py-[60px] pb-10 border-t border-[#e4e0db]">
                <div className="container mx-auto max-w-9xl px-4 sm:px-6 md:px-8 lg:px-12">
                    <p className="text-[11px] leading-[1.7] text-[#6b6b78] italic max-w-[900px] mx-auto text-center">
                        Investor Relations materials are made available to qualified investors
                        only and do not constitute an offer to sell or a solicitation of an offer
                        to buy any security. Past performance is not a reliable indicator of future
                        results. All investments carry risk, including possible loss of capital.
                        Please review our full Risk Disclosure before making any investment decision.
                    </p>
                </div>
            </footer>
        </main>
    );
}
