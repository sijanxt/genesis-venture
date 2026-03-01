import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function MostRecent() {
  const mostRecent = [
    {
      title: "Dolce & Gabbana Boutique",
      type: "Retail",
      image: "/image4.png",
    },
    {
      title: "Tiffany Flagship",
      type: "Retail",
      image: "/image5.png",
    },
    {
      title: "Dream Hotel",
      type: "Hotel",
      image: "/image6.png",
    },
  ];
  return (
    <div className="w-full min-h-screen px-5 py-5 border-t border-blue-900 flex flex-col lg:gap-50 md:gap-20 bg-[#e9e7e0] pt-20">
      <h1 className="lg:text-[200px] text-[50px] md:text-[100px] text-center font-[PPFONT] font-bold leading-none text-blue-900">
        Most Recent <br /> Projects
      </h1>
      <div className="md:grid md:grid-cols-3  flex flex-col relative min-h-200">
        {mostRecent.map((item, index) => (
          <div key={index} className="w-full flex flex-col md:gap-30 lg:gap-2 md:border-l p-2 md:border-blue-900">
            <div className="flex justify-between font-[PPFONT] text-blue-900 text-sm lg:text-base lg:text-lg pr-2 lg:pr-10 lg:pr-50">
              <p>0{index + 1}.</p>
              <p>{item.type}</p>
            </div>
            <div className={`lg:mt-4 ml-5  bg-[#e9e7e0] relative md:-left-10 md:pt-1 md:pl-2 lg:top-1/2 lg:px-10 lg:py-5 transform lg:-translate-y-1/2 lg:${index===1? 'mb-50' : ''}`}>
              <h1 className="font-[PPFONT] text-blue-900 text-lg  lg:text-5xl pr-5 mb-3">
                {item.title}
              </h1>
              <div className="w-50 group h-50 md:w-60 md:h-60 lg:w-100 lg:h-100 relative overflow-hidden ">
                <div className="w-full cursor-pointer h-full group-hover:opacity-0 transition-opacity duration-300 absolute z-10 bg-[#1925aa]/70" />
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover absolute" 
                />
                <div className="scale-0 group-hover:scale-100 p-5 origin-bottom-right absolute z-11 bg-white bottom-0 border border-blue-900 right-0 transition-transform duration-300">
                  <ArrowUp size={40} strokeWidth={1} className="text-blue-900 rotate-45" />
                </div>
              </div>
            </div>
          </div>
        ))}
       <div className="md:absolute md:bottom-6  md:left-[70%] lg:left-[45%] md:-translate-x-1/2 bg-[#e9e7e0] md:w-150 w-full py-2  ">
         <button className="uppercase  font-[GT50] px-10 py-5 bg-[#1925aa] md:ml-25   w-full md:w-80">
            View ALL Products
        </button>
       </div>
      </div>
    </div>
  );
}
