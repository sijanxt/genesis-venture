import ScrollAnimated from "./ScrollAnimated";

export default function Process() {
  return (
    <div className="w-full relative bg-[#e9e7e0]">
      <div className="absolute inset-0 font-[PPFONT] md:grid hidden grid-cols-3 w-full pointer-events-none">
        <div className="h-full uppercase text-blue-900 p-2 border-r border-blue-900 text-xs md:text-sm lg:text-base">
          process
        </div>
        <div className="h-full border-r border-blue-900 hidden md:block"></div>
        <div className="h-full text-right text-blue-900 uppercase p-2 text-xs md:text-sm lg:text-base">
          [0CT. 09]
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-8 md:gap-16 lg:gap-30 py-10 md:py-0 md:w-1/2 flex-shrink-0">
          <div className="flex md:hidden justify-between text-blue-900 px-3 font-[PPFONT]">
            <p>PROCESS</p>
            <p>[OCT. 09]</p>
          </div>
          <h1 className="font-[PPFONT] leading-none md:top-16 lg:top-20 relative pl-3 md:pl-4 lg:pl-5 text-blue-900 text-[60px] sm:text-[100px] md:text-[80px] lg:text-[190px] md:leading-25 lg:leading-45">
            Here <br />{" "}
            <span className="bg-[#e9e7e0] leading-none">at every</span> <br />{" "}
            step
          </h1>
          <div className="w-full md:w-80 md:mt-10 lg:w-100 relative left-0 md:left-10 lg:left-20 px-3 md:px-0">
            <p className="text-blue-900 md:bg-[#e9e7e0] font-[GT50] text-sm md:text-base lg:text-[18px] uppercase tracking-[1px]">
              Navigating regulatory agencies can seem like an insurmountable
              task for architects, engineers, owners and contractors.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 py-10 md:py-20 lg:py-30 relative px-3 md:px-4">
          <ScrollAnimated />
        </div>
      </div>
    </div>
  );
}
