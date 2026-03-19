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
  return (
    <section className="bg-[#FFFFFF/95] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        <h2 className={`${quattrocento.className} text-[48px] font-normal leading-[1.1] text-[#111111] lg:text-[56px]`}>
          Why Invest With Us
        </h2>

        <p
          className={`${lato.className} mt-6 max-w-[1054px] text-[18px] font-normal leading-[1.75] text-[#4B4B4B] mx-auto`}
        >
          Noida has emerged as one of India&apos;s most progressive cities, driven by world-class infrastructure. With
          seamless metro networks, expressways, and the upcoming Jewar International Airport, the city is transforming
          into a global hub. Its rapid growth makes it a hotspot for business, lifestyle, and real estate investment.
        </p>

        <div className="mt-10 flex flex-wrap items-start justify-center gap-5">
          {investCards.map((card) => (
            <article
              key={card.title}
              className="h-[384px] w-[384px] min-w-[384px] shrink-0 snap-start rounded-2xl border border-[#E7E7E7] bg-[#FFFFFF] p-6"
            >
              <h3 className={`${lato.className} text-[22px] font-semibold leading-[1.25] text-[#222222]`}>{card.title}</h3>
              <p className={`${lato.className} mt-3 max-w-[288px] text-[16px] font-normal leading-[1.45] text-[#626262]`}>
                {card.description}
              </p>

              <div className="relative mt-5 h-[174px] w-full overflow-hidden w-[333px]">
                <Image src={card.image} alt={card.title} fill className="object-cover" quality={100} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
