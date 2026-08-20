"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { links } from "@/data/site";
import { Kicker, Reveal, TextLink } from "@/components/ui/Editorial";

export function Book() {
  const { t, locale } = useLanguage();

  const bookVideos = [
    {
      title: {
        en: "Ada Derana 24 Program",
        si: "අද දෙරණ 24 සාකච්ඡාව",
      },
      image: "/images/gallery/book-video-thumb-1.jpg",
      link: "#",
    },
    {
      title: {
        en: "ITN Pattaramenthuwa",
        si: "ITN පත්තරමේන්තුව",
      },
      image: "/images/gallery/book-video-thumb-2.png",
      link: "#",
    },
  ];

  return (
    <section id="book" className="overflow-x-hidden bg-deep py-20 text-ivory md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-5 md:grid-cols-12 md:gap-14 md:px-8">
        <Reveal className="md:col-span-5">
          <div className="relative mx-auto flex w-full max-w-md items-end justify-center gap-3 sm:max-w-lg">
            <div className="absolute -inset-8 bg-ink/40 blur-2xl" />
            <Image
              src="/images/book-cover.png"
              alt={t.book.coverFront}
              width={752}
              height={1024}
              className="relative w-[48%] -rotate-[5deg] shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:-rotate-[2deg]"
            />
            <Image
              src="/images/book-back.png"
              alt={t.book.coverBack}
              width={769}
              height={1024}
              className="relative w-[48%] rotate-[6deg] shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:rotate-[3deg]"
            />
          </div>
        </Reveal>
        <Reveal className="md:col-span-7" delay={0.1}>
          <Kicker className="text-sand">{t.book.kicker}</Kicker>
          <h2 className="font-display mt-5 text-[2.35rem] leading-[1.05] tracking-tight md:text-6xl">
            {t.book.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-sm tracking-[0.16em] uppercase text-sand">
            {t.book.english} · {t.book.subtitle}
          </p>
          <p className="mt-8 max-w-xl text-base leading-8 text-beige">{t.book.body}</p>
          <p className="mt-6 text-sm text-sand">{t.book.publisher}</p>
          <div className="mt-10 flex flex-wrap gap-8">
            <TextLink href="/publications" light>
              {t.book.learn}
            </TextLink>
            <TextLink href={links.book} external light>
              {t.book.find}
            </TextLink>
          </div>
        </Reveal>

        {/* Media Coverage Videos Grid */}
        <Reveal className="md:col-span-12 mt-12 border-t border-ivory/10 pt-12" delay={0.2}>
          <h3 className="font-display text-sm uppercase tracking-[0.2em] text-sand mb-8">
            {locale === "en" ? "Media Coverage" : "මාධ්‍ය සාකච්ඡා"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bookVideos.map((video, index) => (
              <div
                key={index}
                className="group relative aspect-[16/9] overflow-hidden bg-ink border border-ivory/10 rounded-xs shadow-md cursor-pointer"
                onClick={() => alert(locale === "en" ? "Video link coming soon!" : "වීඩියෝ සබැඳිය ළඟදීම!")}
              >
                <Image
                  src={video.image}
                  alt={video.title[locale]}
                  fill
                  className="object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(min-width: 768px) 45vw, 90vw"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-ivory text-deep flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" className="size-4.5 fill-deep pl-0.5" stroke="none">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="font-display text-sm font-semibold text-ivory drop-shadow-sm">
                      {video.title[locale]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
