"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { investigations } from "@/data/site";
import { ArrowIcon, Kicker, Reveal, TextLink } from "@/components/ui/Editorial";

export function Investigations({
  limit,
}: {
  limit?: number;
}) {
  const { t, locale } = useLanguage();
  const items = limit ? investigations.slice(0, limit) : investigations;

  return (
    <section id="investigations" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{t.investigations.kicker}</Kicker>
          <h2 className="font-display mt-5 max-w-3xl text-4xl tracking-tight text-deep md:text-6xl">
            {t.investigations.title}
          </h2>
        </Reveal>
        <div className="mt-16 divide-y divide-sand">
          {items.map((item, index) => (
            <Reveal key={item.title.en} delay={index * 0.05}>
              <Link
                href="/journalism"
                className="group grid gap-4 py-10 md:grid-cols-12 md:items-start"
              >
                <p className="kicker md:col-span-3">{item.kicker[locale]}</p>
                <div className="md:col-span-8">
                  <h3 className="font-display text-2xl text-deep sm:text-3xl md:text-4xl">{item.title[locale]}</h3>
                  <p className="mt-4 max-w-2xl leading-7 text-ink/75">{item.summary[locale]}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.875rem] tracking-[0.2em] uppercase text-brown transition-transform group-hover:translate-x-1">
                    {t.investigations.cta} <ArrowIcon />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-6">
          {limit ? <TextLink href="/journalism">{t.investigations.cta}</TextLink> : null}
        </div>
      </div>
    </section>
  );
}
