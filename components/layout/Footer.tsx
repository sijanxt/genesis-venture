import Link from "next/link";

const nav = [
  { label: "Who We Are", href: "/About" },
  { label: "What We Do", href: "/what-we-do/portfolio" },
  { label: "Investor Relations", href: "/investment-relation" },
  { label: "Contact", href: "/Contacts" },
];



const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

const resources = [
  { label: "Firm", href: "/who-we-are/firm" },
  { label: "Our Story", href: "/our-stories" },
  { label: "Leadership", href: "/our-stories#leadership" },
  { label: "Investment Philosophy", href: "/what-we-do/investment-phylosophy" },
];

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[70vh] overflow-hidden bg-genesis-navy text-white font-poppins">
      <div className="pointer-events-none absolute inset-0 bg-[url('/footer/image.png')] bg-cover bg-center opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex min-h-[70vh] flex-col justify-between">
        <div className="flex flex-col gap-14 px-8 pb-16 pt-20 md:px-16 md:pb-20 md:pt-24">
          <div className="flex flex-col justify-between gap-14 md:flex-row">
            <div className="flex max-w-xl flex-col gap-3">
              <h2 className="font-[PPFONT] text-xl leading-snug text-white sm:text-2xl md:text-3xl lg:text-4xl">
                Ready to build something
                <br />
                significant?
              </h2>
              <p className="hidden max-w-sm font-poppins text-sm leading-relaxed text-white/60 sm:block">
                We review every submission and respond within 5 business days.
                If there's a fit, we move quickly.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
              <div className="flex flex-col gap-3">
                <span className="mb-1 text-xs uppercase tracking-widest text-white/50">
                  Navigation
                </span>
                {nav.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm uppercase tracking-wider text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>

            

              <div className="flex flex-col gap-3">
                <span className="mb-1 text-xs uppercase tracking-widest text-white/50">
                  Contact
                </span>
                <span className="text-sm text-white/80">
                  contact@genesisventures.com
                </span>
                <span className="text-sm text-white/80">+1 (212) 555-0100</span>
                <span className="text-sm text-white/80">
                  350 Fifth Ave, New York, NY
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <span className="mb-1 text-xs uppercase tracking-widest text-white/50">
                  Resources
                </span>
                {resources.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-sm uppercase tracking-wider text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-3 px-8 pb-4 pt-10 text-center md:grid-cols-3 md:px-16 md:pb-6 md:pt-12 md:text-left">
          <span className="text-xs text-white/80 md:justify-self-start">
            Copyright (c) {new Date().getFullYear()} Genesis Ventures, Inc. All
            Rights Reserved.
          </span>
          <div className="flex items-center justify-center gap-6 md:justify-self-center">
            {legal.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs text-white/55 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
          <a
            href="https://www.webxnepal.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs text-white/60 transition-colors hover:text-white md:justify-self-end"
          >
            <span>Designed &amp; Developed by</span>
            <img
              src="https://www.webxnepal.com/logo/logo.svg"
              alt="WebX Nepal"
              className="h-4 w-auto"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
