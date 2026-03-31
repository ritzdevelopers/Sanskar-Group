"use client";

import Image from "next/image";
import { Lato, Quattrocento } from "next/font/google";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useScrollReveal } from "../common/useScrollReveal";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
});

const quattrocento = Quattrocento({
    subsets: ["latin"],
    weight: ["400", "700"],
});

function AnimatedNumber({ end, suffix = "", duration = 2.5 }: { end: number, suffix?: string, duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let hasAnimated = false;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                hasAnimated = true;
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: end,
                    duration: duration,
                    ease: "power2.out",
                    onUpdate: () => {
                        if (ref.current) {
                            ref.current.innerText = Math.floor(obj.val) + suffix;
                        }
                    }
                });
            }
        }, { threshold: 0.1 });

        observer.observe(el);
        return () => observer.disconnect();
    }, [end, suffix, duration]);

    return <span ref={ref}>0{suffix}</span>;
}

export function WhoWeAre() {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useScrollReveal(sectionRef);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const handleEnded = () => setIsPlaying(false);
        videoElement.addEventListener("ended", handleEnded);

        return () => {
            videoElement.removeEventListener("ended", handleEnded);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-w-0 overflow-x-hidden pt-16 md:pt-24">
            {/* Subtle two-tone background to match the split look */}
            <div className="absolute inset-x-0 top-0 h-[38%] bg-[#FAFAFA] -z-20" />
            <div className="absolute inset-x-0 bottom-0 h-[50%] lg:h-[45%] bg-white -z-20" />

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
                <div data-scroll-reveal className="text-center mb-6 md:mb-10 w-full">
                    <p className={`${lato.className} text-[#4A4A4A] text-[15px] font-medium sm:text-[16px] mb-3 md:mb-4`}>
                        Who We Are
                    </p>
                    <h2 className={`${quattrocento.className} text-[26px] leading-[1.2] text-[#111111] uppercase sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[42px]`}>
                        HEALTH-FIRST APPROACH TO MODERN LIVING
                    </h2>
                </div>

                {/* Description Paragraphs */}
                <div data-scroll-reveal className={`text-center w-full max-w-[1040px] mx-auto space-y-4 md:space-y-6 ${lato.className} text-[18px] leading-[32px] tracking-normal align-middle text-[#666666] mb-10 md:mb-16`}>
                    <p>
                        Sanskar Realty is not merely another name in the overcrowded Delhi NCR real estate market. We are the real estate venture of <span className="text-[#F7A51D] font-bold">the Yatharth Family Office</span> – which is the strategic investment branch of <span className="text-[#F7A51D] font-bold">Yatharth Group</span> and <span className="text-[#F7A51D] font-bold">North India's third largest public-listed healthcare company</span> founded in 2008 and relied on by millions throughout the area.
                    </p>
                    <p>
                        The same values that built one of India's most respected hospital networks — <span className="text-[#F7A51D] font-bold">care, integrity, transparency,</span> and a <span className="text-[#F7A51D] font-bold">commitment</span> to human wellbeing — now shape every residential community we create. The product of a healthcare pioneer building homes is no ordinary real estate. Security, dignity, and value per square foot are the measured outcomes of the sanctuary.
                    </p>
                    <p className="w-[1000px]">
                        Sanskar Realty has been excelling in delivering top-notch projects in <span className="text-[#F7A51D] font-bold">Noida Extension, Greater Noida West</span>, and <span className="text-[#F7A51D] font-bold">Ghaziabad</span> for over 17 years, constantly reshaping the standards of luxury lifestyle in Delhi NCR, one meticulously designed home at a time.
                    </p>
                </div>

                {/* Video Container */}
                <div data-scroll-reveal className="relative w-full max-w-[1024px] aspect-video  rounded-[12px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.08)] cursor-pointer bg-black/5 mx-auto border border-black/5" onClick={togglePlay}>
                    <video
                        ref={videoRef}
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/assets/who_we_are.mp4"
                        playsInline
                        controls={isPlaying}
                    />

                    {/* Play Button Overlay */}
                    {!isPlaying && (
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-all duration-300 hover:bg-black/20">
                            <div className="flex items-center justify-center w-[96px] h-[96px] rounded-full bg-[rgba(255,255,255,0.8)] drop-shadow-xl transition-transform duration-300 hover:scale-[1.05]">
                                <Image
                                    src="/assets/play_button.svg"
                                    alt="Play Video"
                                    width={40}
                                    height={40}
                                    className="w-[35px] h-[35px] object-contain translate-x-1"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom Subtitle text */}
                <p data-scroll-reveal className={`${lato.className} italic font-normal text-[14px] leading-[21px] tracking-normal text-center align-middle capitalize text-[#00000099] mt-6 md:mt-8 max-w-[600px]`}>
                    Hospital Yatharth Group Support – Yatharth Group of Hospitals – 8 Hospitals and 2,500+ Beds – NABH Accredited – 4 States
                </p>

                {/* --- Stats Section --- */}
                <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-y-12 lg:gap-y-0 w-full mt-24 md:mt-32 lg:mt-[160px] relative">
                    <div data-scroll-reveal className="flex flex-col items-center text-center px-4 w-1/2 lg:w-1/4 lg:mt-0">
                        <span className={`${quattrocento.className} text-[40px] md:text-[50px] lg:text-[56px] font-bold text-[#111111] leading-none mb-3`}>
                            <AnimatedNumber end={17} suffix="+" />
                        </span>
                        <span className={`${lato.className} text-[15px] md:text-[16px] text-[#555555] font-normal`}>Years of Real Estate Excellence</span>
                    </div>
                    <div data-scroll-reveal className="flex flex-col items-center text-center px-4 w-1/2 lg:w-1/4 lg:mt-16">
                        <span className={`${quattrocento.className} text-[40px] md:text-[50px] lg:text-[56px] font-bold text-[#111111] leading-none mb-3`}>
                            <AnimatedNumber end={3} />
                        </span>
                        <span className={`${lato.className} text-[15px] md:text-[16px] text-[#555555] font-normal`}>Landmark Residential<br className="hidden lg:block" /> Projects</span>
                    </div>
                    <div data-scroll-reveal className="flex flex-col items-center text-center px-4 w-1/2 lg:w-1/4 lg:mt-32">
                        <span className={`${quattrocento.className} text-[40px] md:text-[50px] lg:text-[56px] font-bold text-[#111111] leading-none mb-3`}>
                            <AnimatedNumber end={100} suffix="%" />
                        </span>
                        <span className={`${lato.className} text-[15px] md:text-[16px] text-[#555555] font-normal`}>RERA Compliant — Zero<br className="hidden lg:block" /> Compromise</span>
                    </div>
                    <div data-scroll-reveal className="flex flex-col items-center text-center px-4 w-1/2 lg:w-1/4 lg:mt-48">
                        <span className={`${quattrocento.className} text-[40px] md:text-[50px] lg:text-[56px] font-bold text-[#111111] leading-none mb-3`}>
                            <AnimatedNumber end={4} />
                        </span>
                        <span className={`${lato.className} text-[15px] md:text-[16px] text-[#555555] font-normal`}>States Covered</span>
                    </div>
                </div>

                {/* --- Mission & Vision Section --- */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 xl:gap-[90px] items-center w-full mb-10 relative">

                    {/* Left side: Cards */}
                    <div className="flex flex-col gap-10 w-full lg:w-[555px] relative z-10 mx-auto lg:mx-0">

                        {/* Mission Card */}
                        <div data-scroll-reveal className="border border-[#E5E5E5] bg-white p-8 md:p-10 w-full lg:w-[555px] h-auto lg:h-[316px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-center">
                            <span className={`${lato.className} text-[15px] md:text-[16px] font-medium text-[#111111] block mb-4`}>
                                Our Mission
                            </span>
                            <h2 className={`${quattrocento.className} text-[24px] md:text-[28px] lg:text-[32px] font-normal uppercase text-[#111111] leading-[1.3] mb-5`}>
                                BUILDING A LEGACY OF EXCELLENCE
                            </h2>
                            <p className={`${lato.className} text-[15px] md:text-[16px] text-[#666666] leading-[1.8]`}>
                                To deliver exceptional living spaces with a blend of luxury, comfort and sustainable design. Our organization builds residential and commercial properties which deliver enduring worth through innovative solutions that meet customer needs while setting new standards in the real estate industry.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div data-scroll-reveal className="border border-[#E5E5E5] bg-white p-8 md:p-10 w-full lg:w-[555px] h-auto lg:h-[316px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-center">
                            <span className={`${lato.className} text-[15px] md:text-[16px] font-medium text-[#111111] block mb-4`}>
                                Our Vision
                            </span>
                            <h2 className={`${quattrocento.className} text-[24px] md:text-[28px] lg:text-[32px] font-normal uppercase text-[#111111] leading-[1.3] mb-5`}>
                                REDEFINING LIVING, INSPIRING FUTURES
                            </h2>
                            <p className={`${lato.className} text-[15px] md:text-[16px] text-[#666666] leading-[1.8]`}>
                                We aim to be a trusted leader and reliable real estate company creating vibrant communities and modern living spaces for better customer lifestyles. Our goal is to expand across NCR region and beyond, providing premium residential and commercial properties that are quality-driven and timeless.
                            </p>
                        </div>

                    </div>

                    {/* Right side: Image */}
                    <div data-scroll-reveal className="w-full relative min-h-[400px] lg:min-h-0 lg:w-[593.26px] lg:h-[436.51px] mt-10 lg:mt-0">
                        <Image
                            src="/assets/mission.png"
                            alt="Mission & Vision"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}
