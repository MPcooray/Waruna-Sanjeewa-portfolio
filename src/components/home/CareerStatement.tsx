"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { careerPath } from "@/data/site";
import { Kicker, Reveal } from "@/components/ui/Editorial";

gsap.registerPlugin(ScrollTrigger);

export function CareerStatement() {
  const { t, locale } = useLanguage();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const track = el.querySelector<HTMLElement>(".career-track");
        if (!track) return;

        const extra = Math.max(track.scrollWidth - window.innerWidth, window.innerHeight * 0.6);
        el.style.height = `${window.innerHeight + extra}px`;

        const tween = gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth + 80),
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          el.style.height = "";
        };
      });
    },
    { scope: root, dependencies: [locale], revertOnUpdate: true },
  );

  return (
    <section id="career" ref={root} className="relative bg-ivory">
      <div className="px-5 py-24 md:hidden">
        <Kicker>{t.career.kicker}</Kicker>
        <h2 className="font-display mt-5 text-4xl tracking-tight text-deep">{t.career.years}</h2>
        <ol className="mt-12">
          {careerPath.map((item, index) => (
            <Reveal key={item.en} delay={index * 0.04} y={20}>
              <li
                className="border-l border-sand"
                style={{ marginLeft: `${Math.min(index, 4) * 0.85}rem`, paddingLeft: "1rem" }}
              >
                <p className="font-display text-[1.85rem] leading-tight text-deep">
                  {item[locale]}
                </p>
                {index < careerPath.length - 1 && (
                  <p className="py-3 text-lg text-sand" aria-hidden>
                    ↓
                  </p>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <div className="hidden md:sticky md:top-0 md:mx-auto md:flex md:h-[100svh] md:flex-col md:justify-center md:overflow-hidden md:px-8">
        <Kicker>{t.career.kicker}</Kicker>
        <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-6xl">
          {t.career.years}
        </h2>
        <div className="career-track mt-20 flex w-max flex-row items-baseline gap-10">
          {careerPath.map((item, index) => (
            <span key={item.en} className="flex items-baseline gap-10">
              <span className="font-display whitespace-nowrap text-7xl leading-tight text-deep lg:text-8xl">
                {item[locale]}
              </span>
              {index < careerPath.length - 1 && <span className="text-5xl text-sand">→</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
