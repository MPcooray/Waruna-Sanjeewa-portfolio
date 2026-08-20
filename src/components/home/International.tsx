"use client";

import { Kicker, Reveal } from "@/components/ui/Editorial";
import { useLanguage } from "@/context/LanguageContext";
import { conferences } from "@/data/site";

export function International({ bgClass = "bg-ivory" }: { bgClass?: string }) {
  const { t, locale } = useLanguage();
  const isDark = bgClass.includes("deep");

  return (
    <section id="conferences" className={`${bgClass} py-24 md:py-32`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker className={isDark ? "text-sand" : ""}>{t.international.kicker}</Kicker>
          <h2 className={`font-display mt-5 max-w-3xl text-4xl tracking-tight md:text-6xl ${isDark ? "text-ivory" : "text-deep"}`}>
            {t.international.title}
          </h2>
          <p className={`mt-6 max-w-2xl text-base leading-8 ${isDark ? "text-beige/90" : "text-brown"}`}>{t.international.lede}</p>
        </Reveal>

        <div className="mt-16 space-y-4 md:mt-20">
          {conferences.map((item, index) => {
            const right = index % 2 === 1;
            return (
              <Reveal key={item.year} delay={index * 0.05}>
                <article
                  className={`border-t py-12 md:py-16 ${isDark ? "border-sand/30 text-ivory" : "border-sand"} ${
                    right ? "md:text-right" : ""
                  }`}
                >
                  <p className={`kicker ${isDark ? "text-sand" : ""}`}>{item.year}</p>
                  <h3
                    className={`font-display mt-5 text-3xl leading-tight sm:text-4xl md:text-5xl ${isDark ? "text-ivory" : "text-deep"} ${
                      right ? "md:ml-auto md:max-w-2xl" : "max-w-2xl"
                    }`}
                  >
                    {item.event[locale]}
                  </h3>
                  <p className={`mt-4 text-sm tracking-[0.14em] uppercase ${isDark ? "text-sand" : "text-brown"}`}>
                    {item.city[locale]} · {item.country[locale]}
                  </p>
                  <p
                    className={`mt-6 leading-7 ${isDark ? "text-beige/80" : "text-ink/75"} ${
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
