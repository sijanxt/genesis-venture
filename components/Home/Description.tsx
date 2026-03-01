"use client"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Description() {
    const containerRef = useRef(null)
    const mainTextRef = useRef(null)
    const leftTextRef = useRef(null)
    const rightTextRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(mainTextRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom-=100px",
                        once: true
                    }
                }
            )

            gsap.fromTo(leftTextRef.current,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom-=100px",
                        once: true
                    }
                }
            )

            gsap.fromTo(rightTextRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom-=100px",
                        once: true
                    }
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return(
        <div ref={containerRef} className="w-full min-h-150  bg-[#1925aa] gap-8 md:gap-20 flex flex-col overflow-hidden py-10 md:py-0">
            <p
                ref={mainTextRef}
                className="text-2xl sm:text-3xl md:text-4xl w-full md:w-2/3 pt-10 md:pt-20 px-5 md:pl-5 text-left font-[PPFONT] overflow-hidden">
                Our team of over 50 in-house consultants in New York City helps clients navigate even the toughest building code and zoning challenges. With 33 years of experience across construction regulations, our team supports feasibility reviews, CCD1s, amendments, fire safety, land use matters, landmark coordination, violation resolution, and all the permits, approvals, and sign-offs your project needs.
            </p>
            <div className="flex flex-col mb-10 md:flex-row justify-end gap-3 overflow-hidden px-5 md:pl-10">
                <p
                    ref={leftTextRef}
                    className="text-xs md:text-sm tracking-tighter w-full md:w-100 pr-0 md:pr-5 text-left font-[GT50]">
                    From the first idea to sign-off, Outsource is by your side—helping you navigate code, construction, compliance, and whatever else your project needs.
                </p>
                <p
                    ref={rightTextRef}
                    className="text-xs md:text-sm tracking-tighter w-full md:w-100 pr-0 md:pr-5 text-left font-[GT50]">
                    Partnering with Outsource Special Inspections, Inc., we deliver a streamlined, start-to-finish approach—from permits and approvals to inspections and sign-offs.
                </p>
            </div>
        </div>
    )
}