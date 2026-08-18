"use client";

import { useLanguage } from "@/context/LanguageContext";
import { careerPath } from "@/data/site";
import { ArrowIcon, Kicker, Reveal } from "@/components/ui/Editorial";

export function CareerStatement() {
  const { t, locale } = useLanguage();

  return (
    <section id="career" className="relative bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Kicker>{t.career.kicker}</Kicker>
        <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-6xl">
          {t.career.years}
        </h2>
        <ol className="mt-12 md:mt-16">
          {careerPath.map((item, index) => (
            <Reveal key={item.en} delay={index * 0.04} y={20}>
              <li
                className="border-l border-sand"
                style={{
                  marginLeft: `${Math.min(index, 5) * 1.15}rem`,
                  paddingLeft: "1.1rem",
                }}
              >
                <p className="font-display text-[1.85rem] leading-tight text-deep md:text-5xl lg:text-6xl">
                  {item[locale]}
                </p>
                {index < careerPath.length - 1 && (
                  <p className="py-3 text-sand md:py-5" aria-hidden>
                    <ArrowIcon direction="down" className="size-4 text-sand md:size-6" />
                  </p>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
