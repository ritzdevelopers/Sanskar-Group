"use client";

import Image from "next/image";
import { useState } from "react";
import { Lato, Quattrocento } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const showcaseSlides = [
  {
    id: 1,
    headline: "Towering at a Trailblazing Pace",
    subtext: "Construction in full swing",
    projectName: "Project One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.",
    image: "/assets/project_slider_banner.png",
  },
  {
    id: 2,
    headline: "Modern Living, Elevated Daily",
    subtext: "Premium lifestyle spaces",
    projectName: "Project Two",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.",
    image: "/assets/project_slider_banner.png",
  },
  {
    id: 3,
    headline: "Built for Tomorrow's Urban Life",
    subtext: "Thoughtfully crafted homes",
    projectName: "Project Three",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.",
    image: "/assets/project_slider_banner.png",
  },
];

export function ProjectShowcaseSliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = showcaseSlides[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseSlides.length);
  };

  return (
    <section className="h-[775px] bg-white">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        <div className="flex items-center justify-end gap-3 px-6 py-4 sm:px-10 lg:px-12">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goPrev}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#E2E2E2] bg-[#EDEDED]"
          >
            <Image src="/assets/left_arrow.svg" alt="" width={13} height={21} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={goNext}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#E2E2E2] bg-[#EDEDED]"
          >
            <Image src="/assets/right_arrow.svg" alt="" width={13} height={21} />
          </button>
        </div>

        <div className="relative h-[691px] overflow-hidden">
          {showcaseSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.projectName}
                fill
                className="object-cover"
                quality={100}
                priority={index === 0}
                sizes="(max-width: 1440px) 100vw, 1440px"
              />
            </div>
          ))}



          <div className="absolute left-6 top-[26%] z-10 -translate-y-1/2 sm:left-10 lg:left-16">
            <h3 className={`${quattrocento.className} text-[36px] font-bold leading-[100%] text-white align-middle tracking-[0%]`}>
              {activeSlide.headline}
            </h3>
            <p className={`${lato.className} mt-2 text-[24px] font-normal leading-[100%] text-white tracking-[0%]`}>
              {activeSlide.subtext}
            </p>
          </div>

        </div>

        <div className="absolute left-1/2 top-[81px] z-20 flex h-auto w-[320px] -translate-x-1/2 flex-col gap-[10px] rounded-[10px] bg-[#F4F4F4] px-6 py-8 sm:w-[380px] lg:left-[858px] lg:h-[613px] lg:w-[448px] lg:translate-x-0 lg:px-[32px] lg:py-[71px] mt-[50px]">
          <p className={`${lato.className} text-center text-[18px] font-normal leading-none text-[#2F2F2F]`}>
            {String(activeIndex + 1).padStart(2, "0")} - {String(showcaseSlides.length).padStart(2, "0")}
          </p>
          <h4 className={`${quattrocento.className} text-center text-[24px] font-normal uppercase leading-[1.1] text-[#1A1A1A] lg:text-[24px]`}>
            {activeSlide.projectName}
          </h4>

          <div className="relative h-[200px] w-full overflow-hidden">
            <Image src={activeSlide.image} alt={activeSlide.projectName} fill className="object-cover" quality={100} />
          </div>

          <p className={`${lato.className} text-center text-[16px] leading-[1.5] text-[#555555]`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s,Lorem Ipsum is
            simply dummy text.
          </p>

          <button
            type="button"
            className="mx-auto flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#8C8C8C]"
            aria-label="Open project"
          >
            <Image src="/assets/diagonal_arrow.png" alt="" width={20} height={20} className="h-[20px] w-[20px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
