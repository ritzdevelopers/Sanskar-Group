"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const VENTURE_LINE = "A VENTURE OF YATHARTH GROUP";

type WelcomeGatewayProps = {
  onComplete?: () => void;
};

export function WelcomeGateway({ onComplete }: WelcomeGatewayProps) {
  const [typedText, setTypedText] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLParagraphElement | null>(null);
  const topGoldRef = useRef<HTMLSpanElement | null>(null);
  const bottomGoldRef = useRef<HTMLSpanElement | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const line = lineRef.current;
    const topGold = topGoldRef.current;
    const bottomGold = bottomGoldRef.current;

    if (!overlay || !logo || !line || !topGold || !bottomGold) return;

    let typingTimeout: ReturnType<typeof setTimeout> | undefined;
    let hideTimeout: ReturnType<typeof setTimeout> | undefined;
    let charIndex = 0;

    const typeNextChar = () => {
      if (charIndex >= VENTURE_LINE.length) {
        gsap.to(bottomGold, {
          scaleX: 1,
          duration: 1.05,
          ease: "power2.inOut",
        });
        hideTimeout = setTimeout(() => {
          gsap.to(overlay, {
            autoAlpha: 0,
            duration: 1.15,
            ease: "power2.out",
            onComplete: () => {
              setIsVisible(false);
              onCompleteRef.current?.();
            },
          });
        }, 750);
        return;
      }

      charIndex += 1;
      setTypedText(VENTURE_LINE.slice(0, charIndex));
      typingTimeout = setTimeout(typeNextChar, 78);
    };

    const ctx = gsap.context(() => {
      gsap.set(line, { autoAlpha: 0, y: 8 });
      gsap.set([topGold, bottomGold], {
        scaleX: 0,
        transformOrigin: "50% 50%",
        force3D: true,
      });

      const tl = gsap.timeline();

      tl.fromTo(
        logo,
        { autoAlpha: 0, y: 32, scale: 0.95 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      )
        .to(
          topGold,
          {
            scaleX: 1,
            duration: 1.05,
            ease: "power2.inOut",
          },
          "-=0.15"
        )
        .to(
          line,
          { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" },
          "<0.45"
        )
        .call(
          () => {
            typingTimeout = setTimeout(typeNextChar, 220);
          },
          undefined,
          "<0.55"
        );
    });

    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
      if (hideTimeout) clearTimeout(hideTimeout);
      ctx.revert();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[120] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <div ref={logoRef}>
          <Image
            src="/assets/sanskar_logo_white.png"
            alt="Sanskar Realty"
            width={520}
            height={158}
            priority
            className="h-auto w-[320px] sm:w-[420px] lg:w-[520px]"
          />
        </div>

        {/* Golden lines match full sentence width (invisible layer reserves width while typing) */}
        <div className="grid w-max max-w-[min(100%,calc(100vw-3rem))] [grid-template-areas:'stack'] place-items-stretch">
          <div
            className="invisible pointer-events-none flex flex-col gap-3 [grid-area:stack]"
            aria-hidden
          >
            <span className="block h-px w-full shrink-0 bg-transparent" />
            <p className="whitespace-nowrap text-center font-['Lato'] text-[12px] tracking-[0.18em] sm:text-[13px] lg:text-[14px]">
              {VENTURE_LINE}
              <span className="ml-1 inline-block h-[14px] w-[1px]" />
            </p>
            <span className="block h-px w-full shrink-0 bg-transparent" />
          </div>
          <div className="flex flex-col gap-3 [grid-area:stack]">
            <span
              ref={topGoldRef}
              className="block h-px w-full origin-center bg-[#D4AF37] will-change-transform"
              aria-hidden
            />
            <p
              ref={lineRef}
              className="whitespace-nowrap text-center font-['Lato'] text-[12px] tracking-[0.18em] text-white sm:text-[13px] lg:text-[14px]"
            >
              {typedText}
              <span className="ml-1 inline-block h-[14px] w-[1px] animate-pulse bg-white align-[-2px]" />
            </p>
            <span
              ref={bottomGoldRef}
              className="block h-px w-full origin-center bg-[#D4AF37] will-change-transform"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}
