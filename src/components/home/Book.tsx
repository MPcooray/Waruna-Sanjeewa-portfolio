"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { links } from "@/data/site";
import { Kicker, Reveal, TextLink } from "@/components/ui/Editorial";

export function Book() {
  const { t } = useLanguage();

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
      </div>
    </section>
  );
}
