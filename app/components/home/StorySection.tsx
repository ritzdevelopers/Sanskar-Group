import Image from "next/image";
import { Lato, Quattrocento } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function StorySection() {
  return (
    <section className="bg-[radial-gradient(#ebebeb_1px,transparent_1px)] [background-size:16px_16px] py-14 lg:py-30">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-14 px-6 sm:px-10 lg:gap-16 lg:px-12">
        <div className="flex flex-col gap-11 lg:flex-row lg:items-center lg:justify-center">
          <div className="relative h-[260px] w-full overflow-hidden sm:h-[360px] lg:h-[450px] lg:w-[641px]">
            <Image
              src="/assets/creating_communities.png"
              alt="Building trust visual"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 1024px) 100vw, 641px"
            />
          </div>

          <div className="flex h-auto w-full flex-col gap-[18px] lg:h-[167px] lg:w-[507px]">
            <h3
              className={`${quattrocento.className} text-[26px] font-normal uppercase leading-[1.08] tracking-[0.01em] text-[#202020]`}
            >
              Building Trust, Creating Homes
            </h3>
            <p
              className={`${lato.className} text-[16px] font-normal leading-[1.45] text-[#555555] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden`}
            >
              Our journey began with a simple vision - to create spaces where
              people can truly feel at home. With a passion for quality
              construction and thoughtful design, we set out to redefine modern
              living.
            </p>
            <button
              type="button"
              className={`${lato.className} inline-flex w-fit items-center gap-2 text-[20px] font-bold uppercase leading-none text-[#3A3A3A]`}
            >
              <span className="border-b border-[#3A3A3A] pb-1">Our Story</span>
              <span aria-hidden>›</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-11 lg:flex-row lg:items-center lg:justify-center">
          <div className="flex h-auto w-full flex-col gap-[18px] lg:h-[167px] lg:w-[507px]">
            <h3
              className={`${quattrocento.className} text-[26px] font-normal uppercase leading-[1.08] tracking-[0.01em] text-[#202020]`}
            >
              Creating Communities That Last
            </h3>
            <p
              className={`${lato.className} text-[16px] font-normal leading-[1.45] text-[#555555] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden`}
            >
              Our impact goes beyond building properties - we focus on shaping
              vibrant communities and improving lifestyles. Through our
              developments, we have helped many families find their dream home.
            </p>
            <button
              type="button"
              className={`${lato.className} inline-flex w-fit items-center gap-2 text-[20px] font-bold uppercase leading-none text-[#3A3A3A]`}
            >
              <span className="border-b border-[#3A3A3A] pb-1">Our Impact</span>
              <span aria-hidden>›</span>
            </button>
          </div>

          <div className="relative h-[260px] w-full overflow-hidden sm:h-[360px] lg:h-[450px] lg:w-[641px]">
            <Image
              src="/assets/building_trust.png"
              alt="Creating communities visual"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 1024px) 100vw, 641px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
