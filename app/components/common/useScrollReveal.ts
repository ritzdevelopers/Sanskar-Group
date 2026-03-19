"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


let scrollRevealResizeRaf = 0;
function scheduleGlobalScrollTriggerRefresh() {
  if (typeof window === "undefined") return;
  if (scrollRevealResizeRaf) cancelAnimationFrame(scrollRevealResizeRaf);
  scrollRevealResizeRaf = requestAnimationFrame(() => {
    scrollRevealResizeRaf = 0;
    ScrollTrigger.refresh();
  });
}

let scrollRevealResizeSubscribers = 0;

export const SCROLL_REVEAL_ATTR = "data-scroll-reveal";
export const SCROLL_REVEAL_POP_ATTR = "data-scroll-reveal-pop";

const revealSelector = `[${SCROLL_REVEAL_ATTR}], [${SCROLL_REVEAL_POP_ATTR}]`;

export type UseScrollRevealOptions = {
  start?: string;
  end?: string;
  y?: number;
  duration?: number;
  stagger?: number;
};

const defaultOptions: Required<UseScrollRevealOptions> = {
  start: "top 88%",
  end: "bottom 12%",
  y: 32,
  duration: 0.75,
  stagger: 0.12,
};

function isPopEl(el: HTMLElement) {
  return el.hasAttribute(SCROLL_REVEAL_POP_ATTR);
}

export function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  options?: UseScrollRevealOptions
) {
  const optsRef = useRef(options);
  optsRef.current = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const o = { ...defaultOptions, ...optsRef.current };

    const ctx = gsap.context(() => {
      const targets = Array.from(container.querySelectorAll<HTMLElement>(revealSelector));
      if (!targets.length) return;

      const rect = container.getBoundingClientRect();
      const viewportThreshold = window.innerHeight * 0.85;
      const isInView = rect.top < viewportThreshold;

      if (isInView) {
        targets.forEach((el) => {
          if (isPopEl(el)) {
            gsap.set(el, {
              opacity: 1,
              y: 0,
              scale: 1,
              transformOrigin: "50% 100%",
              clearProps: "transform",
            });
          } else {
            gsap.set(el, { opacity: 1, y: 0, clearProps: "transform" });
          }
        });
      } else {
        targets.forEach((el) => {
          if (isPopEl(el)) {
            gsap.set(el, {
              opacity: 0,
              y: o.y + 12,
              scale: 0.72,
              transformOrigin: "50% 100%",
            });
          } else {
            gsap.set(el, { opacity: 0, y: o.y });
          }
        });
      }

      const showText = () => {
        gsap.killTweensOf(targets);
        const tl = gsap.timeline({ defaults: { overwrite: "auto" } });
        targets.forEach((el, i) => {
          const at = i * o.stagger;
          if (isPopEl(el)) {
            tl.fromTo(
              el,
              { opacity: 0, y: o.y + 16, scale: 0.72, transformOrigin: "50% 100%" },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.58,
                ease: "back.out(1.45)",
              },
              at
            );
          } else {
            tl.fromTo(
              el,
              { opacity: 0, y: o.y },
              {
                opacity: 1,
                y: 0,
                duration: o.duration,
                ease: "power2.out",
              },
              at
            );
          }
        });
        tl.eventCallback("onComplete", () => {
          targets.forEach((el) => {
            if (isPopEl(el)) gsap.set(el, { clearProps: "transform" });
          });
        });
      };

      const hideText = () => {
        gsap.killTweensOf(targets);
        targets.forEach((el, i) => {
          const delay = (targets.length - 1 - i) * 0.05;
          if (isPopEl(el)) {
            gsap.to(el, {
              opacity: 0,
              y: 28,
              scale: 0.82,
              duration: 0.4,
              ease: "power2.in",
              delay,
            });
          } else {
            gsap.to(el, {
              opacity: 0,
              y: Math.min(24, o.y * 0.75),
              duration: 0.45,
              ease: "power2.in",
              delay,
            });
          }
        });
      };

      ScrollTrigger.create({
        trigger: container,
        start: o.start,
        end: o.end,
        onEnter: showText,
        onEnterBack: showText,
        onLeaveBack: hideText,
        onLeave: hideText,
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, containerRef);

    scrollRevealResizeSubscribers += 1;
    if (scrollRevealResizeSubscribers === 1) {
      window.addEventListener("resize", scheduleGlobalScrollTriggerRefresh, { passive: true });
    }

    return () => {
      ctx.revert();
      scrollRevealResizeSubscribers -= 1;
      if (scrollRevealResizeSubscribers <= 0) {
        scrollRevealResizeSubscribers = 0;
        window.removeEventListener("resize", scheduleGlobalScrollTriggerRefresh);
      }
    };
  }, [containerRef]);
}
