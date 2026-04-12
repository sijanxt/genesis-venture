"use client";

export default function InvestorRelationsPage() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submitBtn = e.currentTarget.querySelector('.submit-btn') as HTMLButtonElement;
        if (submitBtn) {
            submitBtn.innerHTML = 'Request received — we will be in touch.';
            submitBtn.style.background = '#e8d5a3';
        }
    };

    return (
        <main className="w-full bg-[#050e24] text-[#cadcfc] font-[Geist] overflow-x-hidden">
            {/* Grain overlay */}
            <div className="fixed inset-0 pointer-events-none z-100 opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27200%27 height=%27200%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />

            {/* HERO */}
            <section className="relative flex min-h-screen w-full items-center overflow-hidden border-b border-[rgba(202,220,252,0.12)] px-6 py-[140px] pb-20 md:px-16">
                {/* Ornamental circles */}
                <div className="absolute right-[-280px] top-[-200px] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(30,46,90,0.55),transparent_70%)] pointer-events-none" />
                <div className="absolute right-[-120px] bottom-[-160px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,169,97,0.08),transparent_70%)] pointer-events-none" />

                {/* Left gold bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c9a961]" />

                <div className="relative z-10 w-full">
                    <div className="max-w-[900px]">
                        <span className="inline-flex items-center gap-3.5 font-[Geist] text-[11px] font-medium tracking-[0.28em] uppercase text-[#c9a961]">
                            <span className="w-7 h-px bg-[#c9a961]" />
                            Investor Relations
                        </span>

                        <h1 className="mt-8 font-[CormorantGaramond] text-[clamp(48px,7vw,96px)] leading-[1.05] tracking-[-0.01em] text-white font-medium">
                            <span className="block">Good data takes time.</span>
                            <span className="block italic text-[#c9a961] font-medium">Great data takes discipline.</span>
                        </h1>

                        <p className="mt-9 max-w-[560px] text-[19px] leading-[1.55] text-[#cadcfc]">
                            Ours is almost ready — and worth the wait. Performance materials,
                            portfolio disclosures, and investor letters are released only when they
                            meet the standards we hold ourselves to, not the standards the market
                            is willing to accept.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-5">
                            <a href="#access" className="inline-flex items-center gap-3 bg-[#c9a961] text-[#050e24] px-[34px] py-[18px] font-[Geist] text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-350 hover:bg-[#e8d5a3] hover:-translate-y-0.5">
                                Request Materials <span className="transition-transform duration-350 group-hover:translate-x-1">→</span>
                            </a>
                            <a href="#commitment" className="inline-flex items-center gap-3 bg-transparent text-[#cadcfc] border border-[rgba(202,220,252,0.12)] px-[34px] py-[18px] font-[Geist] text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-350 hover:border-[#c9a961] hover:text-[#c9a961]">
                                Our Commitment <span className="transition-transform duration-350 group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-[140px] md:py-[140px] sm:py-[90px]">
                <div className="w-full px-6 md:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[100px] md:gap-[100px] sm:gap-12">
                        <div>
                            <span className="inline-flex items-center gap-3.5 font-[Geist] text-[11px] font-medium tracking-[0.28em] uppercase text-[#c9a961]">
                                <span className="w-7 h-px bg-[#c9a961]" />
                                Why You're Seeing This Page
                            </span>
                            <h2 className="mt-8 font-[CormorantGaramond] text-[clamp(36px,4.5vw,60px)] leading-[1.05] tracking-[-0.01em] text-white font-medium">
                                We'd rather show you <span className="italic text-[#c9a961] font-medium">nothing</span> than show you something half-built.
                            </h2>
                        </div>
                        <div className="max-w-[560px]">
                            <p className="text-[17px] text-[rgba(202,220,252,0.82)] mb-6">
                                Most firms publish performance the moment it flatters them. We have
                                chosen a different path: to release figures only when they have been
                                audited, stress-tested, and reviewed against the standards we hold
                                ourselves to.
                            </p>
                            <p className="text-[22px] text-[#c9a961] italic font-[CormorantGaramond] leading-normal">
                                That takes a little longer. We think you will understand why.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IN PREPARATION */}
            <section className="py-[140px] md:py-[140px] sm:py-[90px] border-t border-[rgba(202,220,252,0.12)]">
                <div className="w-full px-6 md:px-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
                        <div>
                            <span className="inline-flex items-center gap-3.5 font-[Geist] text-[11px] font-medium tracking-[0.28em] uppercase text-[#c9a961]">
                                <span className="w-7 h-px bg-[#c9a961]" />
                                In Preparation
                            </span>
                            <h2 className="mt-7 font-[CormorantGaramond] text-[clamp(36px,4.5vw,60px)] leading-[1.05] tracking-[-0.01em] text-white font-medium max-w-[620px]">
                                What's coming to this page.
                            </h2>
                        </div>
                        <div className="text-[12px] tracking-[0.22em] uppercase text-[#8b97b5] leading-8 text-right md:text-right sm:text-left">
                            Release cadence<br />
                            <span className="text-[#c9a961]">Quarterly</span>
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
                                className={`grid grid-cols-[100px_1fr_2fr] md:grid-cols-[100px_1fr_2fr] sm:grid-cols-[80px_1fr] gap-12 md:gap-12 sm:gap-6 py-12 border-t border-[rgba(202,220,252,0.12)] transition-all duration-400 hover:pl-6 hover:bg-[linear-gradient(90deg,rgba(201,169,97,0.04),transparent)] ${idx === arr.length - 1 ? 'border-b' : ''}`}
                            >
                                <div className="font-[CormorantGaramond] text-[56px] md:text-[56px] sm:text-[40px] italic text-[#8b97b5] leading-none transition-colors duration-400 group-hover:text-[#c9a961]">
                                    {item.num}
                                </div>
                                <h3 className="font-[CormorantGaramond] text-[26px] leading-[1.2] text-white font-medium">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] text-[rgba(202,220,252,0.75)] max-w-[560px] md:col-auto sm:col-span-2 sm:pl-[128px]">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMMITMENT BLOCK */}
            <section id="commitment" className="relative bg-[#0a1a3f] py-[140px] overflow-hidden border-t border-b border-[rgba(202,220,252,0.12)]">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c9a961]" />
                <div className="absolute right-[8%] top-[-80px] font-[CormorantGaramond] text-[480px] leading-none text-[#c9a961] opacity-[0.07] pointer-events-none">"</div>

                <div className="relative z-10 w-full px-6 md:px-16">
                    <div className="max-w-[960px]">
                        <span className="inline-flex items-center gap-3.5 font-[Geist] text-[11px] font-medium tracking-[0.28em] uppercase text-[#c9a961]">
                            <span className="w-7 h-px bg-[#c9a961]" />
                            The Commitment
                        </span>

                        <blockquote className="my-10 font-[CormorantGaramond] text-[clamp(26px,3.2vw,40px)] leading-[1.35] text-white italic font-normal">
                            <span className="text-[#c9a961]">"</span>
                            We will share our numbers the same way we make our decisions —
                            carefully, honestly, and only when we can stand behind every line. If
                            that costs us a conversation with an impatient investor, it is a
                            conversation we were never going to win anyway.
                            <span className="text-[#c9a961]">"</span>
                        </blockquote>

                        <div className="flex items-center gap-6 font-[Geist] text-[14px]">
                            <div className="w-12 h-px bg-[#c9a961]" />
                            <div>
                                <span className="text-white font-medium tracking-[0.02em]">Anuj Rathi</span>
                                <span className="block text-[#8b97b5] italic text-[13px] mt-0.5">Founder &amp; Managing Director</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACCESS FORM */}
            <section id="access" className="py-[140px] md:py-[140px] sm:py-[90px]">
                <div className="w-full px-6 md:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[100px] md:gap-[100px] sm:gap-[60px]">
                        <div>
                            <span className="inline-flex items-center gap-3.5 font-[Geist] text-[11px] font-medium tracking-[0.28em] uppercase text-[#c9a961]">
                                <span className="w-7 h-px bg-[#c9a961]" />
                                Early Access
                            </span>
                            <h2 className="mt-7 font-[CormorantGaramond] text-[clamp(36px,4.5vw,54px)] leading-[1.05] tracking-[-0.01em] text-white font-medium max-w-[440px]">
                                First look, <span className="block italic text-[#c9a961] font-medium">when the numbers are ready.</span>
                            </h2>
                            <p className="mt-7 text-[16px] text-[rgba(202,220,252,0.72)] max-w-[440px]">
                                Qualified investors can register to receive our performance materials,
                                portfolio disclosures, and investor letters the moment they are released.
                            </p>
                            <ul className="mt-9 flex flex-col gap-3.5 list-none">
                                {["No marketing drip", "No newsletters", "No third-party sharing"].map(item => (
                                    <li key={item} className="text-[14px] text-[#8b97b5] pl-7 relative">
                                        <span className="absolute left-0 text-[#c9a961] text-[18px] leading-none">×</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <form onSubmit={handleSubmit} className="relative bg-[rgba(255,255,255,0.02)] border border-[rgba(202,220,252,0.12)] p-12">
                            <div className="absolute left-0 top-0 w-full h-[3px] bg-[#c9a961]" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-[10px] font-medium tracking-[0.22em] uppercase text-[#c9a961] mb-2.5">
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                        className="w-full bg-transparent border-none border-b border-[rgba(202,220,252,0.12)] text-white font-[Geist] text-[16px] py-2.5 transition-colors focus:outline-none focus:border-[#c9a961] placeholder:text-[rgba(202,220,252,0.3)]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-[10px] font-medium tracking-[0.22em] uppercase text-[#c9a961] mb-2.5">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                        className="w-full bg-transparent border-none border-b border-[rgba(202,220,252,0.12)] text-white font-[Geist] text-[16px] py-2.5 transition-colors focus:outline-none focus:border-[#c9a961] placeholder:text-[rgba(202,220,252,0.3)]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="type" className="block text-[10px] font-medium tracking-[0.22em] uppercase text-[#c9a961] mb-2.5">
                                        Investor Type
                                    </label>
                                    <select
                                        id="type"
                                        required
                                        className="w-full bg-transparent border-none border-b border-[rgba(202,220,252,0.12)] text-white font-[Geist] text-[16px] py-2.5 pr-6 appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%276%27 viewBox=%270 0 10 6%27%3E%3Cpath d=%27M1 1l4 4 4-4%27 stroke=%27%23c9a961%27 stroke-width=%271.5%27 fill=%27none%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_4px_center] transition-colors focus:outline-none focus:border-[#c9a961]"
                                    >
                                        <option value="" disabled>Select one</option>
                                        <option>Individual</option>
                                        <option>High Net Worth</option>
                                        <option>Institutional</option>
                                        <option>Family Office</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="jur" className="block text-[10px] font-medium tracking-[0.22em] uppercase text-[#c9a961] mb-2.5">
                                        Jurisdiction
                                    </label>
                                    <input
                                        id="jur"
                                        type="text"
                                        placeholder="Country / Region"
                                        className="w-full bg-transparent border-none border-b border-[rgba(202,220,252,0.12)] text-white font-[Geist] text-[16px] py-2.5 transition-colors focus:outline-none focus:border-[#c9a961] placeholder:text-[rgba(202,220,252,0.3)]"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="note" className="block text-[10px] font-medium tracking-[0.22em] uppercase text-[#c9a961] mb-2.5">
                                    A Note (Optional)
                                </label>
                                <textarea
                                    id="note"
                                    placeholder="Anything you'd like us to know"
                                    className="w-full bg-transparent border-none border-b border-[rgba(202,220,252,0.12)] text-white font-[Geist] text-[16px] py-2.5 min-h-[80px] resize-y transition-colors focus:outline-none focus:border-[#c9a961] placeholder:text-[rgba(202,220,252,0.3)]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="submit-btn w-full inline-flex items-center justify-center gap-3 bg-[#c9a961] text-[#050e24] px-[34px] py-[18px] font-[Geist] text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-350 hover:bg-[#e8d5a3] hover:-translate-y-0.5 mt-3"
                            >
                                Submit Request <span className="transition-transform duration-350">→</span>
                            </button>

                            <p className="mt-7 text-[12px] leading-[1.6] text-[#8b97b5]">
                                We review every submission personally and respond within 5 business days.
                                Your information is held in strict confidence and used only to share
                                investor materials.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* SECONDARY CTA */}
            <section className="border-t border-[rgba(202,220,252,0.12)] py-[100px] text-center">
                <div className="w-full px-6 md:px-16">
                    <h3 className="font-[CormorantGaramond] text-[clamp(32px,4vw,48px)] leading-[1.05] text-white font-medium mb-4">
                        Would rather just <span className="italic text-[#c9a961]">talk?</span>
                    </h3>
                    <p className="text-[#8b97b5] text-[16px] mb-10">
                        Sometimes a conversation is faster than a form.
                    </p>
                    <div className="inline-flex gap-10 flex-wrap justify-center">
                        <a href="mailto:contact@genesisventures.com" className="text-[#cadcfc] text-[14px] tracking-[0.08em] border-b border-[#c9a961] pb-1 transition-colors hover:text-[#c9a961]">
                            contact@genesisventures.com
                        </a>
                        <a href="/Contacts" className="text-[#cadcfc] text-[14px] tracking-[0.08em] border-b border-[#c9a961] pb-1 transition-colors hover:text-[#c9a961]">
                            Schedule a Call →
                        </a>
                    </div>
                </div>
            </section>

            {/* FOOTER DISCLAIMER */}
            <footer className="bg-[#050e24] py-[60px] pb-10 border-t border-[rgba(202,220,252,0.12)]">
                <div className="w-full px-6 md:px-16">
                    <p className="text-[11px] leading-[1.7] text-[#8b97b5] italic max-w-[900px]">
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
