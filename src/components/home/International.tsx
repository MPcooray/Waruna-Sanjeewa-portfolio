"use client";

import { Kicker, Reveal } from "@/components/ui/Editorial";
import { useLanguage } from "@/context/LanguageContext";
import { conferences } from "@/data/site";

export function International() {
  const { t, locale } = useLanguage();

  return (
    <section id="conferences" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{t.international.kicker}</Kicker>
          <h2 className="font-display mt-5 max-w-3xl text-4xl tracking-tight text-deep md:text-6xl">
            {t.international.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-brown">{t.international.lede}</p>
        </Reveal>

        <div className="mt-16 space-y-4 md:mt-20">
          {conferences.map((item, index) => {
            const right = index % 2 === 1;
            return (
              <Reveal key={item.year} delay={index * 0.05}>
                <article
                  className={`border-t border-sand py-12 md:py-16 ${
                    right ? "md:text-right" : ""
                  }`}
                >
                  <p className="kicker">{item.year}</p>
                  <h3
                    className={`font-display mt-5 text-3xl leading-tight text-deep sm:text-4xl md:text-5xl ${
                      right ? "md:ml-auto md:max-w-2xl" : "max-w-2xl"
                    }`}
                  >
                    {item.event[locale]}
                  </h3>
                  <p className="mt-4 text-sm tracking-[0.14em] uppercase text-brown">
                    {item.city[locale]} · {item.country[locale]}
                  </p>
                  <p
                    className={`mt-6 leading-7 text-ink/75 ${
                      right ? "md:ml-auto md:max-w-xl" : "max-w-xl"
                    }`}
                  >
                    {item.note[locale]}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
