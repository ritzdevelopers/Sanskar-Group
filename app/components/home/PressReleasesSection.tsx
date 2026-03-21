"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollReveal } from "../common/useScrollReveal";

export function PressReleasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const pressReleases = [
    {
      id: 1,
      image: "/assets/2 (1).png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...",
    },
    {
      id: 2,
      image: "/assets/1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...",
    },
    {
      id: 3,
      image: "/assets/3.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#FAFAFA] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-[100px] xl:px-10 2xl:px-16">
      <div className="mx-auto w-full max-w-[1280px] xl:max-w-[1320px]">
        <h2
          data-scroll-reveal
          className="mb-10 text-center font-quattrocento text-[28px] font-normal uppercase leading-[100%] tracking-[0%] text-[#1A1A1A] sm:mb-12 sm:text-[32px] md:mb-14 md:text-[34px] lg:mb-[60px] lg:text-[36px]"
        >
          PRESS RELEASES
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-[32px]">
          {pressReleases.map((release) => (
            <div key={release.id} className="flex flex-col gap-6">
              <div data-scroll-reveal-img className="relative aspect-[1.5] w-full overflow-hidden">
                <Image
                  src={release.image}
                  alt="Press Release"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p
                data-scroll-reveal
                className="font-lato text-[16px] font-normal leading-[24px] tracking-[0.5px] text-[#555555]"
              >
                {release.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
