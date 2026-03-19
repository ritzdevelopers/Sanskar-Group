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

const slides = [
  {
    id: 1,
    title: "Eternia Project",
    image: "/assets/projects_main.png",
  },
  {
    id: 2,
    title: "Eternia Project",
    image: "/assets/projects_main.png",
  },
  {
    id: 3,
    title: "Eternia Project",
    image: "/assets/projects_main.png",
  },
];

export function ProjectsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-[#F8F8F8]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col items-center px-6 py-12">
        <div className="flex h-[229px] w-full max-w-[1004px] flex-col items-center gap-[27px] text-center">
          <p
            className={`${lato.className} text-[18px] font-normal uppercase leading-[100%] tracking-[0.05em] text-[#111111]`}
          >
            Our Projects
          </p>

          <h2
            className={`${quattrocento.className} max-w-[740px] text-[36px] font-normal uppercase leading-[46px] text-[#111111]`}
          >
            Building the Perfect Place for Your Life to Grow.
          </h2>

          <p
            className={`${lato.className} text-[16px] font-normal leading-6 text-[#00000099]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <div className="mt-8 h-[611px] w-full max-w-[1284px]">
          <div className="relative h-[611px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={100}
                  sizes="(max-width: 1284px) 100vw, 1284px"
                />

                <div className="absolute left-[37px] top-[44px] flex h-[40px] w-[167px] items-center justify-center border border-white/25 bg-[rgba(0,0,0,0.10)] backdrop-blur-md">
                  <span
                    className={`${quattrocento.className} text-[18px] font-normal leading-none text-white`}
                  >
                    {slide.title}
                  </span>
                </div>
              </div>
            ))}

            <button
              type="button"
              aria-label="Next project"
              onClick={nextSlide}
              className="absolute right-8 top-8 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#111111]"
            >
              ↗
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2.5">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to project ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-4 w-4 rounded-full transition-colors ${
                  activeSlide === index ? "bg-[#666666]" : "bg-[#E2E2E2]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
