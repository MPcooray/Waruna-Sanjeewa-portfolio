"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { investigations } from "@/data/site";
import { ArrowIcon, Kicker, Reveal, TextLink } from "@/components/ui/Editorial";

export function Investigations({
  limit,
  bgClass,
}: {
  limit?: number;
  bgClass?: string;
}) {
  const { t, locale } = useLanguage();
  const items = limit ? investigations.slice(0, limit) : investigations;

  return (
    <section id="investigations" className={`${bgClass || "bg-beige"} py-24 md:py-32`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{t.investigations.kicker}</Kicker>
          <h2 className="font-display mt-5 max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-deep">
            {t.investigations.title}
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-sand">
          {items.map((item, index) => (
            <Reveal key={item.title.en} delay={index * 0.05}>
              <Link
                href="/journalism"
                className="group grid gap-4 py-8 md:grid-cols-12 md:items-start"
              >
                <p className="kicker md:col-span-3">{item.kicker[locale]}</p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-xl text-deep sm:text-2xl transition-colors group-hover:text-brown">{item.title[locale]}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/75">{item.summary[locale]}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          {limit ? <TextLink href="/journalism">{t.investigations.cta}</TextLink> : null}
        </div>
      </div>
    </section>
  );
}
