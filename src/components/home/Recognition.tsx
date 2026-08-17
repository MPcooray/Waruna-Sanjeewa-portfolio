"use client";

import { useLanguage } from "@/context/LanguageContext";
import { stats } from "@/data/site";
import { Kicker, Reveal } from "@/components/ui/Editorial";

export function Recognition() {
  const { t, locale } = useLanguage();

  return (
    <section id="recognition" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{t.recognition.kicker}</Kicker>
          <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-6xl">
            {t.recognition.title}
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.value} delay={index * 0.06}>
              <p className="font-display text-6xl tracking-tight text-deep md:text-7xl">
                {stat.value}
              </p>
              <p className="mt-4 max-w-[14rem] text-sm leading-6 text-brown">
                {stat.label[locale]}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="editorial-rule mt-16" />
        <Reveal className="mt-10">
          <p className="kicker">{t.recognition.awardsTitle}</p>
          <ul className="mt-6 max-w-3xl space-y-3 text-base leading-7 text-ink/80">
            {t.recognition.awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
