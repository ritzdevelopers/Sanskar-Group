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

const investCards = [
  {
    title: "World-Class Infrastructure",
    description: "Seamless metro networks and expressways connecting you to the future",
    image: "/assets/invest_infra.png",
  },
  {
    title: "High ROI Potential",
    description: "Seamless metro networks and expressways connecting you to the future",
    image: "/assets/invest_roi.png",
  },
  {
    title: "Strategic Location",
    description: "Seamless metro networks and expressways connecting you to the future",
    image: "/assets/invest_location.png",
  },
];

export function WhyInvestSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.1 });

  return (
    <section ref={sectionRef} className="bg-[#FFFFFF/95] py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <h2
          data-scroll-reveal
          className={`${quattrocento.className} text-center text-[32px] font-normal leading-[1.1] text-[#111111] sm:text-[38px] md:text-[44px] lg:text-left lg:text-[48px] xl:text-[52px] 2xl:text-[56px]`}
        >
          Why Invest With Us
        </h2>

        <p
          data-scroll-reveal
          className={`${lato.className} mx-auto mt-4 max-w-[1054px] text-center text-[15px] font-normal leading-[1.65] text-[#4B4B4B] sm:mt-5 sm:text-[16px] md:mt-6 md:text-[17px] md:leading-[1.75] lg:text-left lg:text-[18px]`}
        >
          Noida has emerged as one of India&apos;s most progressive cities, driven by world-class infrastructure. With
          seamless metro networks, expressways, and the upcoming Jewar International Airport, the city is transforming
          into a global hub. Its rapid growth makes it a hotspot for business, lifestyle, and real estate investment.
        </p>

        <div className="mt-8 grid grid-cols-1 justify-items-center gap-5 sm:mt-10 sm:grid-cols-2 sm:justify-items-stretch lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {investCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full w-full max-w-[384px] flex-col items-center rounded-2xl border border-[#E7E7E7] bg-[#FFFFFF] p-5 text-center sm:max-w-none sm:p-6 lg:items-stretch lg:text-left"
            >
              <h3
                data-scroll-reveal
                className={`${lato.className} text-lg font-semibold leading-[1.25] text-[#222222] sm:text-xl md:text-[22px]`}
              >
                {card.title}
              </h3>
              <p
                data-scroll-reveal
                className={`${lato.className} mt-2 max-w-none text-[14px] font-normal leading-[1.45] text-[#626262] sm:mt-3 sm:text-[15px] md:max-w-[288px] md:text-[16px]`}
              >
                {card.description}
              </p>

              <div className="relative mt-4 aspect-[333/174] w-full overflow-hidden sm:mt-5">
                <Image src={card.image} alt={card.title} fill className="object-cover" quality={100} sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 384px" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
