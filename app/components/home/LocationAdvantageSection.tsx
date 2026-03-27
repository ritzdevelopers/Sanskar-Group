"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Lato, Quattrocento } from "next/font/google";
import { useScrollReveal } from "../common/useScrollReveal";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const quattrocento = Quattrocento({ subsets: ["latin"], weight: ["400", "700"] });

const MAP_SRC = "/assets/City%20Map%20Infrastructure.png";

/** Public assets with spaces — encoded for reliable loading */
const icon = (n: 1 | 2 | 3 | 4) => `/assets/Icon%20(${n}).svg`;

const features = [
  {
    id: "institutions",
    icon: icon(1),
    iconW: 22,
    iconH: 20,
    title: "Elite Institutions",
    description:
      "Walk to world-class educational centers and heritage libraries.",
  },
  {
    id: "landmarks",
    icon: icon(2),
    iconW: 22,
    iconH: 22,
    title: "Iconic Landmarks",
    description:
      "A stone's throw from the city's most photographed historical architecture.",
  },
  {
    id: "shopping",
    icon: icon(4),
    iconW: 18,
    iconH: 22,
    title: "Premier Shopping",
    description:
      "High-end boutiques and artisanal galleries define your neighborhood.",
  },
  {
    id: "hubs",
    icon: icon(3),
    iconW: 22,
    iconH: 22,
    title: "International Hubs",
    description:
      "Strategic proximity to the international airport and diplomatic zones.",
  },
] as const;

/** Decorative map pins */
const mapPins = [
  { left: "58%", top: "34%" },
  { left: "44%", top: "52%" },
] as const;

function MapPin() {
  return (
    <span className="relative flex h-4 w-4 items-center justify-center">
      <span
        className="absolute h-[22px] w-[22px] rounded-full bg-[#F7A51D]/25"
        aria-hidden
      />
      <span
        className="relative z-[1] h-2 w-2 rounded-full bg-[#C9A227] shadow-sm ring-2 ring-white/90"
        aria-hidden
      />
    </span>
  );
}

export function LocationAdvantageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.06, duration: 0.55 });

  return (
    <section
      id="location-advantage"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
    >
      {/* ── Header strip ─────────────────────────────────────────── */}
      <div className="flex w-full items-center gap-10 border-b border-[#E5E2DC] bg-white px-6 py-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
        <h2
          data-scroll-reveal
          className={`${quattrocento.className} shrink-0 text-[22px] font-normal leading-snug tracking-[0.01em] text-[#1A1A1A] sm:text-[26px] md:text-[30px] lg:text-[34px]`}
        >
          Location Advantage
        </h2>

        {/* Vertical divider */}
        <div className="hidden h-10 w-px shrink-0 bg-[#D0CCC4] sm:block" />

        {/* Descriptor */}
        <p
          data-scroll-reveal
          className={`${lato.className} hidden text-[13px] font-normal leading-[1.65] text-[#6B6B6B] sm:block sm:max-w-[460px] md:text-[14px] lg:text-[15px]`}
        >
          Seamlessly Linked To Essentials, Lifestyle, And Opportunities, A
          Thriving Hub Where Families, Jobs, And Businesses Converge.
        </p>
      </div>

      {/* ── Map + floating card ───────────────────────────────────── */}
      <div className="relative min-h-[560px] w-full md:h-[78vh] lg:h-[82vh]">
        {/* Full-bleed map */}
        <div className="absolute inset-0">
          <Image
            src={MAP_SRC}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
            priority={false}
          />
        </div>

        {/* Map markers */}
        <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
          {mapPins.map((pos, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: pos.left, top: pos.top }}
            >
              <MapPin />
            </div>
          ))}
        </div>

        {/* Floating card */}
        <div className="relative z-10 flex h-full w-full items-stretch justify-start">
          <div
            data-scroll-reveal
            className="
              flex flex-col justify-between
              bg-[#F2F0EB]
              rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.12)]
              /* mobile: centered, takes most width */
              mx-auto mt-6 mb-6 w-[min(88%,380px)]
              px-8 py-10
              /* desktop: pinned left, fills height */
              md:mx-0 md:my-8 md:ml-14 md:w-[360px] md:rounded-2xl md:px-10 md:py-10
              lg:ml-20 lg:w-[400px] lg:px-12 lg:py-12
            "
          >
            {/* Heading */}
            <div>
              <h3
                className={`${quattrocento.className} text-[32px] font-normal leading-[1.15] tracking-[0.01em] text-[#1A1A1A]
                  sm:text-[36px] md:text-[38px] lg:text-[42px]`}
              >
                In the Heart of
                <br />
                Luxury
              </h3>

              {/* Feature list */}
              <ul className="mt-8 flex flex-col gap-7 md:mt-9 md:gap-7 lg:gap-8">
                {features.map((item) => (
                  <li key={item.id} className="flex items-start gap-5" data-scroll-reveal>
                    {/* Icon — bare, no background circle */}
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                      <Image
                        src={item.icon}
                        alt=""
                        width={item.iconW}
                        height={item.iconH}
                        className="object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="min-w-0">
                      <p
                        className={`${quattrocento.className} text-[15px] font-bold leading-snug text-[#1A1A1A] md:text-[16px]`}
                      >
                        {item.title}
                      </p>
                      <p
                        className={`${lato.className} mt-1 text-[12px] font-normal leading-[1.6] text-[#6B6B6B] md:text-[13px]`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA — full-width underline below text */}
            <div className="mt-10 md:mt-10">
              <Link
                href="/#projects"
                className={`${lato.className} group flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em] text-[#1A1A1A] transition-colors hover:text-[#555] sm:text-[11px]`}
                data-scroll-reveal
              >
                <span>Explore the neighborhood</span>
                <Image
                  src="/assets/right_arrow.svg"
                  alt=""
                  width={12}
                  height={18}
                  className="opacity-90 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
              {/* Full-width underline */}
              <div className="mt-2 h-px w-full bg-[#1A1A1A]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
