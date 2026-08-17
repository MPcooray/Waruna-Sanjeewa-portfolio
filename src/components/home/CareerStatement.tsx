"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { careerPath } from "@/data/site";
import { Kicker } from "@/components/ui/Editorial";

export function CareerStatement() {
  const { t, locale } = useLanguage();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const track = el.querySelector<HTMLElement>(".career-track");
        if (!track) return;
        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth + 80),
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${Math.max(track.scrollWidth, window.innerWidth)}`,
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
          },
        });
      });
    }, el);
    return () => ctx.revert();
  }, [locale]);

  return (
    <section
      id="career"
      ref={root}
      className="relative bg-ivory py-24 md:h-[100svh] md:overflow-hidden md:py-0"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-5 md:px-8">
        <Kicker>{t.career.kicker}</Kicker>
        <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-6xl">
          {t.career.years}
        </h2>
        <div className="career-track mt-10 flex w-full flex-col items-start gap-3 md:mt-20 md:w-max md:flex-row md:items-baseline md:gap-10">
          {careerPath.map((item, index) => (
            <span key={item.en} className="flex max-w-full items-baseline gap-3 md:gap-10">
              <span className="font-display text-3xl leading-tight text-deep sm:text-4xl md:text-7xl lg:text-8xl">
                {item[locale]}
              </span>
              {index < careerPath.length - 1 && (
                <span className="hidden text-2xl text-sand md:inline md:text-5xl">→</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
