"use client";

import { Kicker, Reveal } from "@/components/ui/Editorial";
import { useLanguage } from "@/context/LanguageContext";
import { conferences } from "@/data/site";

export function International() {
  const { t, locale } = useLanguage();

  return (
    <section id="international" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{t.international.kicker}</Kicker>
          <h2 className="font-display mt-5 max-w-3xl text-4xl tracking-tight text-deep md:text-6xl">
            {t.international.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-brown">{t.international.lede}</p>
        </Reveal>

        <div className="mt-16 divide-y divide-sand border-t border-sand">
          {conferences.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.05}>
              <article className="grid gap-3 py-10 md:grid-cols-12 md:items-start md:gap-4">
                <p className="kicker md:col-span-3">
                  {item.year} · {t.international.series}
                </p>
                <div className="md:col-span-8">
                  <h3 className="font-display text-2xl text-deep sm:text-3xl md:text-4xl">
                    {item.event[locale]}
                  </h3>
                  <p className="mt-3 text-sm tracking-wide text-brown">
                    {item.city[locale]}, {item.country[locale]}
                  </p>
                  <p className="mt-4 max-w-2xl leading-7 text-ink/75">{item.note[locale]}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
