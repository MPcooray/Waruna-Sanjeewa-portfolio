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
          <h2 className="font-display mt-5 max-w-3xl text-4xl tracking-tight text-deep md:text-6xl">
            {t.investigations.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-12 md:items-start">
          {/* Left column: Award Ceremony Image */}
          <Reveal className="md:col-span-4 lg:col-span-5 md:sticky md:top-24">
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-sand border border-sand/10 shadow-[0_8px_24px_rgba(33,28,24,0.05)] rounded-xs">
              <Image
                src="/images/gallery/award-ceremony.png"
                alt="Award Ceremony"
                fill
                className="object-cover object-top"
                sizes="(min-width: 768px) 35vw, 100vw"
              />
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
