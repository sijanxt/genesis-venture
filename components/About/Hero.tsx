import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full min-h-[100vh]">
      <h1 className="h-[63vh] bg-[#e9e7e0] font-[PPFONT] text-[225px] flex items-end justify-end">
        <span className=" text-[#1925AA] leading-none">A Collective</span>
      </h1>
      <div className="w-full  min-h-[120vh] relative">
        <Image
          src="/image3.png"
          alt="About Hero Image"
          fill
          className="w-full h-full top-0 left-0 right-0 -z-10 absolute object-cover"
        />
        <div className="w-full h-full absolute bg-blue-900/60 -z-9" />
        <h1 className="font-[PPFONT]  pt-50 relative text-[225px] text-white leading-none ">
          of Unique <br />
          Perspectives
        </h1>
        <p className="font-[PPFONT] text-white w-150 absolute right-20 bottom-20 text-3xl">
          What began in 1993 as a bold vision for a full-service, minority-owned
          expediting firm has grown into one of New York City’s largest
          expediting companies. As the city has changed, Outsource Consultants,
          Inc. has continued to evolve—stronger, smarter, and more impactful
          than ever.
        </p>
      </div>
    </div>
  );
}
