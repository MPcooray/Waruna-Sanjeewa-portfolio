"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Kicker, Reveal, TextLink } from "@/components/ui/Editorial";

export function AboutPreview() {
  const { t, locale } = useLanguage();

  return (
    <section id="about" className="bg-beige pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
        <Reveal className="md:col-span-7">
          <Kicker>{t.about.kicker}</Kicker>
          <blockquote
            className={`font-display mt-6 text-3xl tracking-tight text-deep md:text-5xl ${
              locale === "si" ? "leading-[1.55]" : "leading-[1.25]"
            }`}
          >
            {t.about.heading}
          </blockquote>
          <p className="mt-5 text-sm tracking-wide text-brown">{t.about.attribution}</p>
          <p className="mt-10 max-w-xl text-[1.05rem] leading-8 text-ink/85">{t.about.body}</p>
          <div className="mt-10">
            <TextLink href="/about">{t.about.cta}</TextLink>
          </div>
        </Reveal>
        <Reveal className="md:col-span-5" delay={0.12}>
          <Link href="/about" className="group block">
            <div className="relative aspect-[3/4] overflow-hidden bg-sand">
              <Image
                src="/images/portrait.jpg"
                alt="Waruna Sanjeewa Liyanage"
                fill
                className="portrait-filter object-cover object-[58%_12%] transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            <p className="mt-4 text-sm text-brown">{t.hero.lines.join(" ")}</p>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
