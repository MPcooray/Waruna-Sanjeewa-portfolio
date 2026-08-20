"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { songs, chorusSongs } from "@/data/site";
import { Kicker, Reveal } from "@/components/ui/Editorial";
import { VideoModal } from "@/components/ui/VideoModal";
import { useLanguage } from "@/context/LanguageContext";
import { PageIntro } from "@/components/layout/PageIntro";

export default function MusicPage() {
  const { t, locale } = useLanguage();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState<string>("");

  return (
    <>
      <PageIntro kicker={t.music.kicker} title={t.music.title} lede={t.music.lede} titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]" />

      <section className="bg-beige py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Kicker>{t.music.songsTitle}</Kicker>
          </Reveal>
          <div className="mt-12 divide-y divide-sand border-y border-sand">
            {songs.map((song) => (
              <Reveal key={song.number}>
                <article className="grid gap-6 py-10 md:grid-cols-12 md:items-center text-left">
                  <p className="kicker md:col-span-1">{song.number}</p>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-3xl text-deep md:text-4xl">
                      {song.title[locale]}
                    </h3>
                  </div>
                  <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="block text-[0.75rem] uppercase tracking-wider text-brown">{t.music.artist}</span>
                      <span className="text-deep font-medium mt-1 block">{song.artist[locale]}</span>
                    </div>
                    <div>
                      <span className="block text-[0.75rem] uppercase tracking-wider text-brown">{t.music.composer}</span>
                      <span className="text-deep font-medium mt-1 block">{song.music[locale]}</span>
                    </div>
                    <div>
                      <span className="block text-[0.75rem] uppercase tracking-wider text-brown">{t.music.lyrics}</span>
                      <span className="text-deep font-medium mt-1 block">{song.lyrics[locale]}</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 md:justify-self-end">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveVideoId(song.youtubeId);
                        setActiveVideoTitle(song.title[locale]);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-deep text-ivory rounded-xs text-xs uppercase tracking-widest hover:bg-brown transition duration-300 shadow-sm"
                    >
                      <svg viewBox="0 0 24 24" className="size-3.5 fill-current" stroke="none">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      {t.music.play}
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
 
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Kicker>{t.music.chorusTitle}</Kicker>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/80">{t.music.chorusBody}</p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {chorusSongs.map((song, index) => (
              <Reveal key={index} delay={index * 0.05} className="h-full">
                <div className="bg-beige/40 p-6 border border-sand/10 rounded-xs flex flex-col justify-between h-full hover:bg-beige/60 transition duration-300">
                  <h4 className="font-display text-xl text-deep leading-snug">
                    "{song.title[locale]}"
                  </h4>
                  <div className="mt-4 pt-4 border-t border-sand/20 flex items-center justify-between gap-4">
                    <div className="text-xs">
                      <span className="block uppercase tracking-wider text-brown/70">{song.label[locale]}</span>
                      <span className="text-deep font-semibold mt-1 block">{song.leadArtist[locale]}</span>
                    </div>
                    {song.youtubeId && (
                      <button
                        type="button"
                        onClick={() => {
                          setActiveVideoId(song.youtubeId);
                          setActiveVideoTitle(song.title[locale]);
                        }}
                        className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-deep text-ivory hover:bg-brown transition duration-300 shadow-sm"
                        title={t.music.play}
                      >
                        <svg viewBox="0 0 24 24" className="size-3.5 fill-current" stroke="none">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
 
      <section className="bg-beige py-24 md:py-32">
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
                className="object-cover object-top"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <AnimatePresence>
        {activeVideoId && (
          <VideoModal
            videoId={activeVideoId}
            title={activeVideoTitle}
            onClose={() => {
              setActiveVideoId(null);
              setActiveVideoTitle("");
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
