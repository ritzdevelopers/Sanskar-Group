import { Lato, Quattrocento } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function OverviewSection() {
  return (
    <section className="relative overflow-x-hidden bg-white pt-[12px]">
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-1/2 top-0 h-[551px] w-[1440px] -translate-x-1/2">
          <span className="absolute left-[429px] top-0 h-[551px] w-px bg-[#F1F1F1]" />
          <span className="absolute left-[643px] top-0 h-[551px] w-px bg-[#F1F1F1]" />
          <span className="absolute left-[857px] top-0 h-[551px] w-px bg-[#F1F1F1]" />
          <span className="absolute left-[1071px] top-0 h-[551px] w-px bg-[#F1F1F1]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1268px] flex-col gap-[35px] px-6 py-[56px] sm:px-10 lg:h-[551px] lg:px-0">
        <p className={`${lato.className} text-[16px] font-normal leading-7 text-[#111111] uppercase`}>
          OVERVIEW
        </p>

        <h2
          className={`${quattrocento.className} max-w-[995px] align-middle text-[36px] font-normal leading-[46px] text-[#111111] uppercase`}
        >
          The future belongs to those who believe in the beauty of their dreams.
        </h2>

        <p className={`${lato.className} max-w-[1180px] text-[16px] font-normal leading-6 text-[#3b3b3b]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <button
          type="button"
          className={`${lato.className} inline-flex h-[46px] w-[184px] items-center gap-[10px] rounded-[50px] border border-[#111111] px-[12px] py-[11px] text-[14px] font-semibold leading-[100%] text-[#111111] capitalize`}
        >
          Discover Our Story
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#111111] text-[12px] leading-none">
            ↗
          </span>
        </button>
      </div>
    </section>
  );
}
