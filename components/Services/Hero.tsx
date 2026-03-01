import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <Image
        src="/background.png"
        alt="Background"
        fill
        className="object-cover -z-10 opacity-90 [filter:sepia(0.3)_saturate(1.2)_hue-rotate(180deg)_brightness(0.9)]"
        priority
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#1925aa]/70 -z-[5]"></div>
      <h1 className="absolute top-0 tracking-tight right-0 text-[60px] text-white sm:text-[80px] md:text-[120px] lg:text-[170px] font-[PPFONT] leading-tight pb-5 md:pb-10 pl-3 md:pl-5">
        Answering
        <br />
        All of
      </h1>
      <h1 className="absolute bottom-0 tracking-tight left-0 text-[60px] text-white  sm:text-[80px] md:text-[120px] lg:text-[170px] font-[PPFONT] leading-tight pb-5 md:pb-10 pl-3 md:pl-5">
        Your Building
        <br />
        Needs
      </h1>
    </div>
  );
}
