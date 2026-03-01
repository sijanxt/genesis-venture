"use client";
import { image } from "framer-motion/client";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Testomonials() {
  const testomonials = [
    {
      name: "John Doe",
      company: "ABC Corporation",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/walmart.png"
    },
    {
      name: "Jane Smith",
      company: "XYZ Inc.",
      feedback:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:'/gensler.png'
    },
    {
      name: "Michael Johnson",
      company: "123 Solutions",
      feedback:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:'/sakanska.png'
    },

  ];
  const [currTestomonial, setCurrTestomonial] = useState(0);
  const handleNext = () => {
    setCurrTestomonial((prev) => (prev + 1) % testomonials.length);
  };
  const handlePrev = () => {
    setCurrTestomonial(
      (prev) => (prev - 1 + testomonials.length) % testomonials.length,
    );
  };

  return (
    <div className="w-full min-h-screen text-blue-900 pt-10 font-[PPFONT] bg-white">
      <div className="flex px-5 justify-between uppercase">
        <h1>Testomonials</h1>
        <h1>[ 09. oci ]</h1>
      </div>
      <div className="w-full flex h-screen  p-2 pb-0">
        {/* designing the bodrder */}
        <div className="w-100 h-full relative border-r border-blue-900">
            <div className="w-100 absolute  left-20 top-40 bg-white  h-20 px-15 z-1 ">
          
          <Image className="object-cover " src={testomonials[currTestomonial].image} alt={testomonials[currTestomonial].company} fill />
            </div>
          <div className="flex  flex-col absolute bg-white  bottom-30 p-5 gap-3 left-66">
            <button className=" p-4 border border-blue-900 rounded-full" onClick={() => handleNext()}>
              <ArrowUp strokeWidth={1} size={40} />
            </button>
            <button className=" p-4 border border-blue-900 rounded-full" onClick={() => handlePrev()}>
              <ArrowDown strokeWidth={1} size={40} />
            </button>
          </div>
        </div>
        <div className="w-full relative  pl-50 pt-50">
          <h3 className="font-[GT50]  text-[50px] tracking-[-0.5px] leading-none">"{testomonials[currTestomonial].feedback}"</h3>

          <div className="flex gap-10 absolute bottom-50 left-50 text-xl font-[GT50] uppercase"> 
            <p >
              0{currTestomonial + 1}/0{testomonials.length}
            </p>
            <p>
              {testomonials[currTestomonial].name},{" "}
              {testomonials[currTestomonial].company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
