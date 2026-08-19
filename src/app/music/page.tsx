"use client";

import { songs } from "@/data/site";
import { Kicker, Reveal } from "@/components/ui/Editorial";
import { useLanguage } from "@/context/LanguageContext";

export default function MusicPage() {
  const { t, locale } = useLanguage();
  const featured = songs[0];

  return (
    <>
      <header className="bg-deep pt-28 pb-16 text-ivory sm:pt-32 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Kicker className="text-sand">{t.music.kicker}</Kicker>
          <h1 className="font-display mt-5 max-w-4xl text-4xl tracking-tight sm:text-5xl md:text-7xl">
            {t.music.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-beige">{t.music.lede}</p>
        </div>
      </header>

      <section className="bg-deep pb-24 text-ivory md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="kicker text-sand">{t.music.featuredKicker}</p>
            <p className="mt-8 font-display text-[0.95rem] tracking-[0.28em] uppercase text-sand">
              {featured.number}
            </p>
            <h2 className="font-display mt-3 text-5xl tracking-tight md:text-8xl">
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
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Kicker>{t.music.kalabhumiKicker}</Kicker>
            <h2 className="font-display mt-5 max-w-3xl text-4xl tracking-tight text-deep md:text-6xl">
              {t.music.kalabhumiTitle}
            </h2>
            <p className="mt-8 max-w-2xl leading-8 text-ink/80">{t.music.kalabhumiBody}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
