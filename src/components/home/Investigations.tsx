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

        <div className="mt-16 grid gap-10 md:grid-cols-12 md:items-start">
          {/* Left column: Award Images Stacked */}
          <Reveal className="space-y-8 md:col-span-4 lg:col-span-5 md:sticky md:top-24">
            <div className="group/image">
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-sand border-[6px] border-beige shadow-[0_8px_24px_rgba(33,28,24,0.05)] rounded-xs">
                <Image
                  src="/images/gallery/award-ceremony.png"
                  alt={locale === "en" ? "An Award Ceremony" : "සම්මාන උළෙලක්"}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 35vw, 100vw"
                />
              </div>
              <p className="font-display text-[0.8125rem] tracking-[0.14em] uppercase text-brown mt-3 pl-1">
                {locale === "en" ? "An Award Ceremony" : "සම්මාන උළෙලක්"}
              </p>
            </div>

            <div className="group/image">
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-sand border-[6px] border-beige shadow-[0_8px_24px_rgba(33,28,24,0.05)] rounded-xs">
                <Image
                  src="/images/gallery/slim-kantar-awards.png"
                  alt={locale === "en" ? "SLIM-Kantar People's Awards" : "SLIM-Kantar මහජන සම්මාන"}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 35vw, 100vw"
                />
              </div>
              <p className="font-display text-[0.8125rem] tracking-[0.14em] uppercase text-brown mt-3 pl-1">
                {locale === "en" ? "SLIM-Kantar People's Awards" : "SLIM-Kantar මහජන සම්මාන"}
              </p>
            </div>
          </Reveal>

          {/* Right column: Content List */}
          <div className="divide-y divide-sand md:col-span-8 lg:col-span-7">
            {items.map((item, index) => (
              <Reveal key={item.title.en} delay={index * 0.05}>
                <Link
                  href="/journalism"
                  className="group grid gap-4 py-8 md:grid-cols-12 md:items-start"
                >
                  <p className="kicker md:col-span-4">{item.kicker[locale]}</p>
                  <div className="md:col-span-8">
                    <h3 className="font-display text-xl text-deep sm:text-2xl transition-colors group-hover:text-brown">{item.title[locale]}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink/75">{item.summary[locale]}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12">
          {limit ? <TextLink href="/journalism">{t.investigations.cta}</TextLink> : null}
        </div>
      </div>
    </section>
  );
}
