"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { songs } from "@/data/site";
import { ArrowIcon, Kicker, Reveal } from "@/components/ui/Editorial";

export function MusicFeature() {
  const { t, locale } = useLanguage();
  const song = songs[0];

  return (
    <section id="music-feature" className="bg-deep py-24 text-ivory md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker className="text-sand">{t.music.featuredKicker}</Kicker>
          <p className="mt-6 font-display text-[0.95rem] tracking-[0.28em] uppercase text-sand">
            {song.number}
          </p>
          <h2 className="font-display mt-3 text-5xl tracking-tight md:text-7xl lg:text-8xl">
            {song.title[locale]}
          </h2>
        </Reveal>
        <Reveal className="mt-12 max-w-xl border-t border-brown/40 pt-8" delay={0.08}>
          <dl className="grid grid-cols-[7.5rem_1fr] gap-y-3 text-sm tracking-wide">
            <dt className="uppercase tracking-[0.18em] text-sand">{t.music.lyrics}</dt>
            <dd className="text-beige">{song.lyrics[locale]}</dd>
          </dl>
          <Link
            href="/music"
            className="group mt-10 inline-flex items-center gap-3 text-[0.875rem] tracking-[0.22em] uppercase text-ivory"
          >
            <span className="border-b border-current pb-1 transition-opacity group-hover:opacity-60">
              {t.music.play}
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
