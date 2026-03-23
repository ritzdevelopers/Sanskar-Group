"use client";

import Image from "next/image";
import { useRef } from "react";
import { Lato, Quattrocento } from "next/font/google";
import { useScrollReveal } from "../common/useScrollReveal";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type LocationImage = {
  id: string;
  image: string;
  caption: string;

  width: number;
  height: number;
};

const leftColumn: LocationImage[] = [
  {
    id: "metro",
    image: "/assets/Rectangle 45088.png",
    caption:
      "Metro Connectivity, Proximity To Delhi & Noida Expressway",
    width: 522,
    height: 365,
  },
  {
    id: "highways",
    image: "/assets/Rectangle 45210 (1).png",
    caption: "Easy Connectivity To Major Highways And City Centers",
    width: 451,
    height: 379,
  },
];

const rightColumn: LocationImage[] = [
  {
    id: "amenities",
    image: "/assets/Rectangle 45210.png",
    caption:
      "Close To Reputed Schools, Hospitals, And Shopping Malls",
    width: 451,
    height: 536,
  },
  {
    id: "lifestyle",
    image: "/assets/Rectangle 45210 (2).png",
    caption:
      "Surrounded By Parks, Restaurants, And Entertainment Hubs",
    width: 576,
    height: 576,
  },
];

export function LocationAdvantageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.08, duration: 0.6 });

  return (
    <section
      id="location-advantage"
      ref={sectionRef}
      className="relative overflow-hidden py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24"
      style={{
        background:
          "radial-gradient(150% 150% at 0% 0%, #FEFCF8 0%, #F5F5F5 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute right-[-100px] top-[-160px] z-0 h-[720px] w-[720px] rounded-[720px] opacity-80"
        style={{
          background: "#FFF9E4",
          filter: "blur(400px)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10 xl:max-w-[1320px] xl:px-12 2xl:px-16">
        <div className="mx-auto mb-10 max-w-[920px] text-center sm:mb-12 md:mb-14">
          <h2
            data-scroll-reveal
            className={`${quattrocento.className} text-[26px] font-normal uppercase leading-[1.2] tracking-[0.02em] text-[#1A1A1A] sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[38px]`}
          >
            Location Advantage
          </h2>
          <p
            data-scroll-reveal
            className={`${lato.className} mx-auto mt-4 max-w-[780px] text-[14px] font-normal leading-[1.65] text-[#555555] sm:mt-5 sm:text-[15px] md:text-[16px]`}
          >
            Seamlessly linked to essentials, lifestyle, and opportunities — a
            thriving hub where families, jobs, and businesses converge.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-x-12 xl:gap-x-16">
          {/* Left column — vertical gap between cards matches Figma (~64–72px) */}
          <div className="flex min-w-0 basis-0 grow flex-col gap-10 sm:gap-12 lg:gap-16 xl:gap-[72px]">
            {leftColumn.map((item) => (
              <article
                key={item.id}
                data-scroll-reveal
                className="flex w-full max-w-full flex-col gap-4 self-start"
              >
                <div
                  className="relative w-full overflow-hidden rounded-none"
                  style={{
                    maxWidth: item.width,
                    aspectRatio: `${item.width} / ${item.height}`,
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover"
                    sizes={`(max-width: 1024px) 100vw, ${item.width}px`}
                    quality={85}
                  />
                </div>
                <p
                  className={`${lato.className} text-left text-[14px] font-bold uppercase leading-snug tracking-[0.02em] text-[#1A1A1A] sm:text-[15px] md:text-[16px]`}
                  style={{ maxWidth: item.width }}
                >
                  {item.caption}
                </p>
              </article>
            ))}
          </div>

          {/* Right column — same stack gap as left; offset down on large screens */}
          <div className="flex min-w-0 basis-0 grow flex-col gap-10 sm:gap-12 lg:gap-16 xl:gap-[72px] lg:pt-16 xl:pt-24 2xl:pt-28">
            {rightColumn.map((item) => (
              <article
                key={item.id}
                data-scroll-reveal
                className="flex w-full max-w-full flex-col gap-4 self-start"
              >
                <div
                  className="relative w-full overflow-hidden rounded-none"
                  style={{
                    maxWidth: item.width,
                    aspectRatio: `${item.width} / ${item.height}`,
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover"
                    sizes={`(max-width: 1024px) 100vw, ${item.width}px`}
                    quality={85}
                  />
                </div>
                <p
                  className={`${lato.className} text-left text-[14px] font-bold uppercase leading-snug tracking-[0.02em] text-[#1A1A1A] sm:text-[15px] md:text-[16px]`}
                  style={{ maxWidth: item.width }}
                >
                  {item.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
