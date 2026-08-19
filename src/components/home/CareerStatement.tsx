"use client";

import { useLanguage } from "@/context/LanguageContext";
import { disciplines } from "@/data/site";
import { Kicker, Reveal } from "@/components/ui/Editorial";

export function CareerStatement() {
  const { t, locale } = useLanguage();

  return (
    <section id="career" className="relative bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Kicker>{t.career.kicker}</Kicker>
        <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-6xl">
          {t.career.years}
        </h2>
        <Reveal className="mt-12 md:mt-16">
          <p className="font-display max-w-5xl text-[2rem] leading-[1.15] text-deep sm:text-5xl md:text-6xl lg:text-7xl">
            {disciplines.map((item, index) => (
              <span key={item.en}>
                {item[locale]}
                {index < disciplines.length - 1 && (
                  <span className="mx-3 font-sans text-[0.4em] text-sand md:mx-6" aria-hidden>
                    —
                  </span>
                )}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
