"use client";

import Image from "next/image";
import { Lato, Quattrocento } from "next/font/google";
import { useRef, useState } from "react";
import { useScrollReveal } from "../common/useScrollReveal";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"]
});

const quattrocento = Quattrocento({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const timelineData = [
  {
    year: "2008",
    label: "2008",
    title: "The Yatharth Group foundation",
    description: "Yatharth Group was founded with a vision to transform the healthcare sector in North India. The first super speciality hospital in this group was opened with a values-based approach characterised by care, integrity, and impact on community which is what will drive everything going forward.",
    image: "/assets/footer.png"
  },
  {
    year: "2013-2019",
    label: "2013-2019",
    title: "Healthcare Expansion",
    description: "Our core values propelled us to expand our footprint significantly across North India, bringing world-class healthcare facilities and an unwavering commitment to patient well-being.",
    image: "/assets/footer.png" 
  },
  {
    year: "2023",
    label: "2023",
    title: "Entering Real Estate",
    description: "Carrying our legacy of care and integrity forward, we officially ventured into real estate, creating Sanskar Realty to construct landmark homes that mirror our established healthcare standards.",
    image: "/assets/footer.png"
  },
  {
    year: "2025",
    label: "2025",
    title: "Landmark Deliveries",
    description: "A monumental year witnessing the delivery of state-of-the-art living spaces. Our projects set new benchmarks for luxury, safety, and community integration across the NCR region.",
    image: "/assets/footer.png"
  },
  {
    year: "Ongoing",
    label: "Ongoing",
    title: "A Vision For The Future",
    description: "We continue to redefine the NCR skyline, heavily investing in sustainable homes, meticulous urban planning, and developing properties that deliver enduring worth to modern families.",
    image: "/assets/footer.png"
  }
];

export function OurJourney() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useScrollReveal(sectionRef);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % timelineData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
    };

    return (
        <section ref={sectionRef} className="relative w-full min-w-0 overflow-x-hidden pt-16 md:pt-24 pb-20 lg:pb-32 bg-[#FAFAFA]">
            {/* Background vertical line grid */}
            <div className="absolute inset-0 -z-10 pointer-events-none hidden xl:block">
                <div className="absolute left-1/2 top-0 h-full w-full max-w-[1500px] -translate-x-1/2 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                    <div className="flex h-full w-full justify-evenly">
                        <span className="h-full w-px shrink-0 bg-[#F1F1F1]" />
                        <span className="h-full w-px shrink-0 bg-[#F1F1F1]" />
                        <span className="h-full w-px shrink-0 bg-[#F1F1F1]" />
                        <span className="h-full w-px shrink-0 bg-[#F1F1F1]" />
                        <span className="h-full w-px shrink-0 bg-[#F1F1F1]" />
                    </div>
                </div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col items-center">

                {/* Header Text */}
                <div data-scroll-reveal className="text-center mb-12 md:mb-20 w-full flex flex-col items-center">
                    <p className={`${lato.className} text-[#4A4A4A] text-[15px] font-medium sm:text-[16px] mb-3 md:mb-5`}>
                        Our Journey
                    </p>
                    <h2 className={`${quattrocento.className} text-[26px] leading-[1.2] text-[#111111] uppercase sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[42px] mb-4 md:mb-5`}>
                        A LEGACY CRAFTED OVER 17 YEARS
                    </h2>
                    <p className={`${lato.className} text-[#666666] text-[15px] md:text-[16px] leading-[1.6] max-w-[800px]`}>
                        From a healthcare vision to a Delhi NCR real estate force, here's how Sanskar Realty came to be.
                    </p>
                </div>

                {/* Timeline Dots */}
                <div data-scroll-reveal className="w-full max-w-[1000px] mx-auto mb-16 md:mb-24 relative px-[5%] sm:px-10">
                    <div className="relative w-full">
                        {/* The background Track */}
                        <div className="absolute left-0 right-0 bottom-[7px] md:bottom-[8px] h-[2px] bg-[#E5E5E5] -z-10" />
                        
                        {/* The Active Track filling */}
                        <div 
                            className="absolute left-0 bottom-[7px] md:bottom-[8px] h-[2px] bg-[#111111] -z-10 transition-all duration-500 ease-out"
                            style={{ width: `${(activeIndex / (timelineData.length - 1)) * 100}%` }}
                        />

                        {/* Nodes */}
                        <div className="flex items-end justify-between w-full relative z-10">
                            {timelineData.map((item, idx) => (
                                <div 
                                    key={item.year} 
                                    className="flex flex-col items-center cursor-pointer group"
                                    onClick={() => setActiveIndex(idx)}
                                >
                                    <div className={`border transition-colors duration-300 px-3 sm:px-4 md:px-6 py-1.5 md:py-2 mb-4 md:mb-6 bg-[#FAFAFA] shrink-0 ${idx === activeIndex ? 'border-[#111111] text-[#111111]' : 'border-[#CCCCCC] text-[#666666]'}`}>
                                        <span className={`${lato.className} text-[11px] sm:text-[13px] md:text-[15px] whitespace-nowrap`}>{item.label}</span>
                                    </div>
                                    <div className={`w-[14px] h-[14px] md:w-[16px] md:h-[16px] rounded-full transition-colors duration-500 ${idx <= activeIndex ? 'bg-[#111111]' : 'bg-[#E5E5E5]'}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Slider Content */}
                <div data-scroll-reveal className="relative w-full max-w-[1100px] mx-auto flex items-center justify-center">
                    
                    {/* Left Nav */}
                    <button 
                        onClick={handlePrev} 
                        className="absolute -left-2 sm:-left-4 md:-left-12 lg:-left-20 xl:-left-24 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-[#CCCCCC] rounded-full bg-[#FAFAFA] hover:bg-gray-100 transition-colors"
                    >
                        <Image src="/assets/left_slider.svg" alt="Previous" width={24} height={24} className="w-4 h-4 md:w-6 md:h-6 object-contain" />
                    </button>

                    {/* Active Slide Wrapper */}
                    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 md:gap-14 lg:gap-16 xl:gap-20 overflow-hidden px-10 sm:px-12 lg:px-0 transition-opacity duration-300" key={activeIndex}>
                        {/* Left side Image */}
                        <div className="w-full lg:w-1/2 relative bg-white border border-[#E5E5E5] p-2">
                            {/* Force an aspect ratio for the image container */}
                            <div className="w-full aspect-4/3 lg:aspect-[1.1] relative overflow-hidden bg-gray-100">
                                <Image 
                                    src={timelineData[activeIndex].image}
                                    alt={`Timeline ${timelineData[activeIndex].year}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right side Text */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center pt-2 md:pt-4">
                            <h3 className={`${quattrocento.className} text-[48px] md:text-[60px] lg:text-[72px] xl:text-[84px] leading-none mb-4 md:mb-6 text-[#111111]`}>
                                {timelineData[activeIndex].year}
                            </h3>
                            <h4 className={`${quattrocento.className} text-[22px] md:text-[26px] lg:text-[30px] leading-[1.3] text-[#111111] mb-5 md:mb-6`}>
                                {timelineData[activeIndex].title}
                            </h4>
                            <p className={`${lato.className} text-[#666666] text-[15px] md:text-[16px] leading-[1.8] max-w-[500px]`}>
                                {timelineData[activeIndex].description}
                            </p>
                        </div>
                    </div>

                    {/* Right Nav */}
                    <button 
                        onClick={handleNext} 
                        className="absolute -right-2 sm:-right-4 md:-right-12 lg:-right-20 xl:-right-24 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-[#CCCCCC] rounded-full bg-[#FAFAFA] hover:bg-gray-100 transition-colors"
                    >
                        <Image src="/assets/right_slider.svg" alt="Next" width={24} height={24} className="w-4 h-4 md:w-6 md:h-6 object-contain" />
                    </button>

                </div>

            </div>
        </section>
    );
}
