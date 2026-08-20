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
          <h2 className={`font-display mt-5 max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight ${isDark ? "text-ivory" : "text-deep"}`}>
            {t.international.title}
          </h2>
          <p className={`mt-6 max-w-2xl text-base leading-8 ${isDark ? "text-beige/90" : "text-brown"}`}>{t.international.lede}</p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:mt-20 md:grid-cols-3 md:gap-10">
          {conferences.map((item, index) => {
            return (
              <Reveal key={item.year} delay={index * 0.05}>
                <article className={`border-t pt-8 md:pt-10 ${isDark ? "border-sand/30 text-ivory" : "border-sand"}`}>
                  <p className={`kicker ${isDark ? "text-sand" : ""}`}>{item.year}</p>
                  <h3 className={`font-display mt-5 text-2xl leading-tight sm:text-3xl ${isDark ? "text-ivory" : "text-deep"}`}>
                    {item.event[locale]}
                  </h3>
                  <p className={`mt-4 text-[0.8125rem] tracking-[0.14em] uppercase ${isDark ? "text-sand" : "text-brown"}`}>
                    {item.city[locale]} · {item.country[locale]}
                  </p>
                  <p className={`mt-5 text-sm leading-6 ${isDark ? "text-beige/80" : "text-ink/75"}`}>
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
