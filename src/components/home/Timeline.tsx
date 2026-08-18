"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { timeline } from "@/data/site";
import { Kicker, Reveal } from "@/components/ui/Editorial";

gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const { t, locale } = useLanguage();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".timeline-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-list",
            start: "top 70%",
            end: "bottom 25%",
            scrub: true,
          },
        },
      );
    },
    { scope: root, dependencies: [locale], revertOnUpdate: true },
  );

  return (
    <section id="timeline" ref={root} className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{t.timeline.kicker}</Kicker>
          <h2 className="font-display mt-5 max-w-3xl text-4xl tracking-tight text-deep md:text-6xl">
            {t.timeline.title}
          </h2>
        </Reveal>

        <div className="timeline-list relative mt-16 md:mt-20 md:ml-8">
          <div className="absolute top-0 bottom-0 left-[5.5rem] hidden w-px bg-beige md:block" />
          <div className="timeline-progress absolute top-0 left-[5.5rem] hidden h-full w-px origin-top bg-deep md:block" />
          <ol className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => (
              <Reveal key={`${item.year}-${item.title.en}`} delay={index * 0.03}>
                <li className="grid gap-2 border-l border-sand pl-5 md:border-l-0 md:pl-0 md:grid-cols-[7rem_1fr] md:gap-12">
                  <p className="font-display text-2xl text-brown md:text-right md:text-3xl">
                    {item.year}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl text-deep md:text-3xl">
                      {item.title[locale]}
                    </h3>
                    <p className="mt-2 max-w-2xl leading-7 text-ink/75">{item.detail[locale]}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
