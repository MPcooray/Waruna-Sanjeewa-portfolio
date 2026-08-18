"use client";

import Image from "next/image";
import { PageIntro } from "@/components/layout/PageIntro";
import { useLanguage } from "@/context/LanguageContext";
import { links } from "@/data/site";
import { TextLink } from "@/components/ui/Editorial";

export default function PublicationsPage() {
  const { t } = useLanguage();
  const page = t.bookPage;

  return (
    <>
      <PageIntro kicker={page.kicker} title={page.title} lede={page.subtitle} />
      <section className="bg-deep py-16 text-ivory md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <div className="mx-auto flex w-full max-w-md items-end justify-center gap-3 sm:max-w-lg">
              <Image
                src="/images/book-cover.png"
                alt={t.book.coverFront}
                width={752}
                height={1024}
                className="w-[48%] -rotate-[5deg] shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
                priority
              />
              <Image
                src="/images/book-back.png"
                alt={t.book.coverBack}
                width={769}
                height={1024}
                className="w-[48%] rotate-[6deg] shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="font-display text-4xl leading-tight md:text-5xl">{page.sinhalaTitle}</p>
            <p className="mt-4 text-sm tracking-[0.16em] uppercase text-sand">
              {t.book.english} · {t.book.subtitle}
            </p>
            <p className="mt-8 text-beige">{t.book.publisher}</p>
            <div className="mt-10">
              <TextLink href={links.book} external light>
                {t.book.find}
              </TextLink>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-ivory py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="font-display text-2xl leading-snug text-deep md:text-3xl">{page.opening}</p>
          <p className="mt-10 text-lg leading-8 text-ink/90">{page.p1}</p>
          <p className="mt-8 text-lg leading-8 text-ink/90">{page.p2}</p>
          <p className="mt-8 text-lg leading-8 text-ink/90">{page.p3}</p>
          <p className="mt-8 text-lg leading-8 text-ink/90">{page.audience}</p>
          <footer className="mt-14 border-t border-sand pt-8">
            <p className="font-display text-xl text-deep">{page.forewordBy}</p>
            <p className="mt-2 text-sm text-brown">{page.forewordPlace}</p>
            <p className="mt-8 text-sm text-brown">{page.buy}</p>
          </footer>
        </article>
      </section>
    </>
  );
}
