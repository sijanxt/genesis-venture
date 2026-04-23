interface HeroPageProps {
  title: string;
  titleClassName?: string;
}

export default function HeroPage({
  title,
  titleClassName = "text-[clamp(1.5rem,4.8vw,3.2rem)]",
}: HeroPageProps) {
  return (
    <section className="relative h-[50vh] w-full overflow-hidden bg-[#0a1634] text-white">
      <div className="layout-7xl relative flex h-full flex-col">
        <div className="flex flex-1 items-center justify-center">
          <h1 className={`font-[PPFONT] font-normal leading-none tracking-wider text-white/95 ${titleClassName}`}>
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
