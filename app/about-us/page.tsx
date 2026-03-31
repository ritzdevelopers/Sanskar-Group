import { Poppins, Lato, Quattrocento } from "next/font/google";
import { FooterSection } from "../components/home/FooterSection";
import { AboutHeroSection } from "../components/about/AboutHeroSection";
import { WhoWeAre } from "../components/about/WhoWeAre";
import { AboutSanskarGroup } from "../components/about/AboutSanskarGroup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quattrocento",
});

export default function AboutUsPage() {
  return (
    <main className={`${poppins.className} ${lato.variable} ${quattrocento.variable} w-full min-w-0 overflow-x-hidden`}>
      <AboutHeroSection />

      <AboutSanskarGroup />
      <WhoWeAre />
      <FooterSection />
    </main>
  );
}
