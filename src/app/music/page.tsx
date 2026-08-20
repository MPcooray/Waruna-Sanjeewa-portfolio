"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { songs, chorusSongs, otherChorusSongs } from "@/data/site";
import { Kicker, Reveal } from "@/components/ui/Editorial";
import { VideoModal } from "@/components/ui/VideoModal";
import { useLanguage } from "@/context/LanguageContext";
import { PageIntro } from "@/components/layout/PageIntro";

export default function MusicPage() {
  const { t, locale } = useLanguage();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState<string>("");
  const [activeImage, setActiveImage] = useState<string | null>(null);

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
                      <svg viewBox="0 0 24 24" className="size-3.5 fill-ivory" stroke="none">
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
                    {song.youtubeId ? (
                      <button
                        type="button"
                        onClick={() => {
                          setActiveVideoId(song.youtubeId);
                          setActiveVideoTitle(song.title[locale]);
                        }}
                        className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-deep text-ivory hover:bg-brown transition duration-300 shadow-sm"
                        title={t.music.play}
                      >
                        <svg viewBox="0 0 24 24" className="size-3.5 fill-ivory" stroke="none">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    ) : song.playUrl ? (
                      <a
                        href={song.playUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-deep text-ivory hover:bg-brown transition duration-300 shadow-sm"
                        title={t.music.play}
                      >
                        <svg viewBox="0 0 24 24" className="size-3.5 fill-ivory" stroke="none">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </a>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Other Chorus Contributions List */}
          <div className="mt-20 pt-16 border-t border-sand">
            <Reveal>
              <h3 className="font-display text-2xl text-deep tracking-tight mb-8">
                {locale === "en" ? "Other Chorus Contributions" : "වෙනත් ගායන දායකත්වයන්"}
              </h3>
            </Reveal>
            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-3 text-left">
              {otherChorusSongs.map((song, index) => (
                <Reveal key={index} delay={(index % 6) * 0.03} className="h-full">
                  <div className="text-sm py-2.5 border-b border-sand/20 flex flex-col justify-center">
                    <span className="font-semibold text-deep text-[0.9375rem] leading-snug">
                      "{song.title[locale]}"
                    </span>
                    <span className="text-xs text-brown/80 mt-1">
                      {song.source[locale]}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      <section className="bg-beige py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          {/* Left Column: Heading and body text (Narrower to make right thumbnails larger) */}
          <Reveal className="md:col-span-5 flex flex-col justify-center">
            <div>
              <Kicker>{t.music.kalabhumiKicker}</Kicker>
              <h2 className="font-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-deep">
                {t.music.kalabhumiTitle}
              </h2>
              <p className="mt-8 leading-8 text-ink/80 text-[1.0625rem]">{t.music.kalabhumiBody}</p>
            </div>
          </Reveal>

          {/* Right Column: Two video thumbnails side-by-side, larger size */}
          <Reveal className="md:col-span-7 flex flex-col justify-center gap-4" delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  image: "/images/gallery/kalabhumi-thumb-1.png",
                  alt: "Kalabhumi Document Link 1",
                  link: "https://drive.google.com/file/d/1_fOXjPnJa99895bg3AjKIjOLcpVhjEhp/view?usp=drive_link",
                },
                {
                  image: "/images/gallery/kalabhumi-thumb-2.png",
                  alt: "Kalabhumi Document Link 2",
                  link: "https://drive.google.com/file/d/1UOkPrvMCJU-LAd7LEzcowq4vXBWtc9mP/view?usp=sharing",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[16/9] overflow-hidden bg-sand border border-sand/20 block group hover:border-brown transition duration-300 shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 35vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-deep/15 flex items-center justify-center transition duration-300">
                    <div className="h-10 w-10 rounded-full bg-ivory text-deep flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" className="size-4.5 fill-deep pl-0.5" stroke="none">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Row 2: The three landscape images (3-people, student list, and black cover), smaller bounds */}
          <Reveal className="md:col-span-12 mt-12" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  image: "/images/kalabhumi-cropped.jpg",
                  alt: "Kalabhumi Group Photo",
                },
                {
                  image: "/images/gallery/kalabhumi-extra-2.png",
                  alt: "Pahasara Mathakaya Cover",
                },
                {
                  image: "/images/gallery/kalabhumi-extra-1.png",
                  alt: "Music Archive Document 1",
                },
              ].map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(item.image)}
                  className="relative aspect-[4/3] overflow-hidden bg-sand border border-sand/15 rounded-xs shadow-2xs hover:shadow-md transition duration-300 w-full text-left cursor-zoom-in group"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                </button>
              ))}
            </div>
          </Reveal>

          {/* Row 3: The four portrait brochure book pages, smaller bounds */}
          <Reveal className="md:col-span-12 mt-6" delay={0.3}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                {
                  image: "/images/gallery/kalabhumi-extra-6.jpg",
                  alt: "Kalabhumi Document 6",
                },
                {
                  image: "/images/gallery/kalabhumi-extra-4.jpg",
                  alt: "Kalabhumi Document 4",
                },
                {
                  image: "/images/gallery/kalabhumi-extra-5.jpg",
                  alt: "Kalabhumi Document 5",
                },
                {
                  image: "/images/gallery/kalabhumi-extra-3.jpg",
                  alt: "Kalabhumi Document 3",
                },
              ].map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(item.image)}
                  className="relative aspect-[3/4] overflow-hidden bg-sand border border-sand/15 rounded-xs shadow-2xs hover:shadow-md transition duration-300 w-full text-left cursor-zoom-in group"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                    sizes="(min-width: 768px) 12vw, 25vw"
                  />
                </button>
              ))}
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

        {/* Image Lightbox Modal Popup */}
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-deep/90 p-4 md:p-10 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-ivory/80 hover:text-white transition duration-300 z-50 bg-black/25 hover:bg-black/50 p-2 rounded-full"
            >
              <svg viewBox="0 0 24 24" className="size-6 stroke-current stroke-2 fill-none">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-full max-w-full aspect-auto bg-sand border border-sand/10 rounded-xs shadow-2xl overflow-hidden cursor-default"
            >
              <img
                src={activeImage}
                alt="Enlarged view"
                className="max-h-[85vh] max-w-[90vw] md:max-h-[90vh] md:max-w-[80vw] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
