"use client";

import { useState } from "react";
import { HeroSection } from "../home/HeroSection";
import { WelcomeGateway } from "./WelcomeGateway";

type HomePageWithGatewayProps = {
  children: React.ReactNode;
};

export function HomePageWithGateway({ children }: HomePageWithGatewayProps) {
  const [gatewayDone, setGatewayDone] = useState(false);

  return (
    <>
      <WelcomeGateway onComplete={() => setGatewayDone(true)} />
      <HeroSection startIntroAnimation={gatewayDone} />
      {children}
    </>
  );
}
