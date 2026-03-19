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

type Testimonial = {
  id: string;
  name: string;
  image: string;
  quote: string;
};

const testimonialSlides: Testimonial[][] = [
  [
    {
      id: "ravi-1",
      name: "Ravi Gupta",
      image: "/assets/testimonial_ravi.png",
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    },
    {
      id: "mohit-1",
      name: "Mohit Sharma",
      image: "/assets/testimonial_mohit.png",
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    },
  ],
  [
    {
      id: "mohit-2",
      name: "Mohit Sharma",
      image: "/assets/testimonial_mohit.png",
      quote:
        '"The team delivered quality construction and timely handover. The overall buying and support experience was smooth."',
    },
    {
      id: "ravi-2",
      name: "Ravi Gupta",
      image: "/assets/testimonial_ravi.png",
      quote:
        '"Their planning and amenities are impressive. We feel confident about long-term value and community growth."',
    },
  ],
  [
    {
      id: "ravi-3",
      name: "Ravi Gupta",
      image: "/assets/testimonial_ravi.png",
      quote:
        '"Excellent connectivity and thoughtful layout made this project the right choice for my family and investment goals."',
    },
    {
      id: "mohit-3",
      name: "Mohit Sharma",
      image: "/assets/testimonial_mohit.png",
      quote:
        '"Professional site team, clear communication, and strong design quality throughout the entire development process."',
    },
  ],
  [
    {
      id: "mohit-4",
      name: "Mohit Sharma",
      image: "/assets/testimonial_mohit.png",
      quote:
        '"From booking to possession, everything felt transparent and customer-focused. Highly recommended experience."',
    },
    {
      id: "ravi-4",
      name: "Ravi Gupta",
      image: "/assets/testimonial_ravi.png",
      quote:
        '"A reliable developer with premium quality standards. The project has exceeded our expectations in every aspect."',
    },
  ],
];

export function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="bg-[#FFFFFF] py-14">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <p className={`${lato.className} text-center text-[18px] font-normal uppercase tracking-[0.08em] text-[#111111]`}>
          Testimonials
        </p>
        <h2
          className={`${quattrocento.className} mt-3 text-center text-[34px] font-normal uppercase leading-[1.2] text-[#111111] lg:text-[36px]`}
        >
          What Does Our Customer Say?
        </h2>

        <div className="relative mt-10 lg:pr-12">
          <div className="h-[380px] overflow-hidden py-4">
            <div
              className="h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateY(-${activeSlide * 100}%)` }}
            >
              {testimonialSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="flex h-full gap-3 pb-8 justify-center lg:gap-[60px]">
                  {slide.map((item) => (
                    <div
                      key={item.id}
                      className="flex h-[314px] w-[548px] flex-col items-center rounded-[6px] bg-white px-6 text-center shadow-[0px_4px_20px_rgba(0,0,0,0.08)] lg:px-10 opacity-100"
                    >
                      <div className="relative mt-[0px] h-[120px] w-[120px] overflow-hidden rounded-full">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <h3 className={`${quattrocento.className} mt-0 text-[18px] font-bold text-[#111111]`}>{item.name}</h3>
                      <p className={`${lato.className} mt-6 max-w-[387px] text-[16px] leading-[1.55] text-[#5A5A5A]`}>
                        {item.quote}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-2 lg:flex">
            {testimonialSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`relative h-[12px] w-[12px] rounded-full border ${
                  activeSlide === index ? "border-[#1F1F1F] bg-transparent" : "border-transparent bg-[#1F1F1F]"
                }`}
              >
                {activeSlide === index && (
                  <span className="absolute left-1/2 top-1/2 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1F1F1F]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
