import Image from "next/image";

export function PressReleasesSection() {
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
    <section className="bg-[#FAFAFA] py-[100px] px-6">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mb-[60px] text-center font-quattrocento text-[36px] font-normal uppercase leading-[100%] tracking-[0%] text-[#1A1A1A]">
          PRESS RELEASES
        </h2>
        
        <div className="grid grid-cols-1 gap-[32px] md:grid-cols-3">
          {pressReleases.map((release) => (
            <div key={release.id} className="flex flex-col gap-6">
              <div className="relative aspect-[1.5] w-full overflow-hidden">
                <Image
                  src={release.image}
                  alt="Press Release"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="font-lato text-[16px] font-normal leading-[24px] tracking-[0.5px] text-[#555555]">
                {release.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
