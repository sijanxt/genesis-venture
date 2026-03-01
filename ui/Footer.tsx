import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-[83vh] flex justify-between px-5 pt-10 pb-10 bg-[#1925aa]">
      <div className="w-1/2  flex h-full flex-col justify-between ">
        <div className="w-1/2 h-100 mt-1/2 ml-1/2 transform translate-y-1/2 translate-x-1/2 p-10 bg-red-500 relative">
          <Image src="/logo.png" fill alt="logo" />
        </div>
        <p className="text-xl font-[PPFONT] text-white px-10 pb-10">
          &copy; 2024 Genesis Venture, Inc. All rights reserved
        </p>
      </div>
      <div className="grid w-1/2 h-full grid-cols-2  ">
        <div className="w-full flex border-l border-white flex-col p-5 uppercase font-[GT50] text-sm text-white h-full relative">
          <Link href="/about">About</Link>
          <Link href="/contact">Services</Link>
          <Link href="/privacy">Projects</Link>
          <Link href="/terms">Clients</Link>
        </div>
        <div className="w-full flex border-l border-white flex-col p-5 uppercase font-[GT50] text-sm text-white h-full relative">
          <Link href="/about">Culture & Career</Link>
          <Link href="/contact">Blogs</Link>
          <Link href="/terms">Contacts</Link>
        </div>
        <div className="w-full h-full flex flex-col gap-50  relative">
          <h1 className="text-white text-xl font-[GT50] py-2">FAQ</h1>
          <div className="w-full flex border-l border-white flex-col justify-end p-5 uppercase font-[GT50] text-sm text-white h-full relative">
            <Link href="/about">Facebook</Link>
            <Link href="/contact">Instagram</Link>
            <Link href="/terms">LinkedIn</Link>
            <Link href="/terms">X</Link>
          </div>
        </div>
        <div className="w-full h-full relative">
            <div className="flex flex-col px-10 relative -left-20 bg-[#1925aa] z-10 py-10">
                <div className="flex text-white font-[GT50] text-xl py-5">
                        <p>Stay In Touch</p> | <p>1-22-333-444</p>
                </div>
                <input className=" w-80 px-5 py-5 text-white outline-none border border-white" placeholder="Enter your email" />
            </div>
            <div className="w-full flex border-l   flex-col justify-end p-5 pb-10 uppercase font-[GT50] text-sm text-white h-full absolute bottom-0 left-0">
            <Link href="/about">Privacy policy</Link>
            <Link href="/contact">Terms and conditions</Link>
            
            <Link className="mt-5" href="/terms">Made By webX Nepal.</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
