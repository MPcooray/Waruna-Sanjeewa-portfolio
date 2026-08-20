"use client";

import Image from "next/image";
import { songs } from "@/data/site";
import { Kicker, Reveal } from "@/components/ui/Editorial";
import { useLanguage } from "@/context/LanguageContext";
import { PageIntro } from "@/components/layout/PageIntro";

export default function MusicPage() {
  const { t, locale } = useLanguage();
  const featured = songs[0];

  return (
    <>
      <PageIntro kicker={t.music.kicker} title={t.music.title} lede={t.music.lede} titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]" />

      <section className="bg-deep pb-24 pt-12 text-ivory md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="kicker text-sand">{t.music.featuredKicker}</p>
            <p className="mt-8 font-display text-[0.95rem] tracking-[0.28em] uppercase text-sand">
              {featured.number}
            </p>
            <h2 className="font-display mt-3 text-4xl tracking-tight sm:text-5xl md:text-6xl">
              {featured.title[locale]}
            </h2>
            <p className="mt-8 text-sm tracking-[0.16em] uppercase text-sand">
              {t.music.by} {featured.lyrics[locale]}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Kicker>{t.music.songsTitle}</Kicker>
          </Reveal>
          <div className="mt-12 divide-y divide-sand border-y border-sand">
            {songs.map((song) => (
              <Reveal key={song.number}>
                <article className="grid gap-6 py-12 md:grid-cols-12 md:items-end">
                  <p className="kicker md:col-span-2">{song.number}</p>
                  <div className="md:col-span-6">
                    <h3 className="font-display text-4xl text-deep md:text-5xl">
                      {song.title[locale]}
                    </h3>
                  </div>
                  <dl className="grid grid-cols-[6.5rem_1fr] gap-y-2 text-sm md:col-span-4">
                    <dt className="uppercase tracking-[0.16em] text-brown">{t.music.lyrics}</dt>
                    <dd className="text-deep">{song.lyrics[locale]}</dd>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Kicker>{t.music.chorusTitle}</Kicker>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/80">{t.music.chorusBody}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          <Reveal className="md:col-span-7">
            <Kicker>{t.music.kalabhumiKicker}</Kicker>
            <h2 className="font-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-deep">
              {t.music.kalabhumiTitle}
            </h2>
            <p className="mt-8 leading-8 text-ink/80">{t.music.kalabhumiBody}</p>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden bg-sand">
              <Image
                src="/images/kalabhumi-cropped.jpg"
                alt="Kalabhumi"
                fill
                className="portrait-filter object-cover object-top"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
