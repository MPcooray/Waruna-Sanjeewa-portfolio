"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PageIntro } from "@/components/layout/PageIntro";
import { Book } from "@/components/home/Book";
import { PressArchive } from "@/components/home/PressArchive";
import { PhotoArchive } from "@/components/home/PhotoArchive";
import { Investigations } from "@/components/home/Investigations";
import { ArrowIcon, Kicker, Reveal } from "@/components/ui/Editorial";
import { VideoModal } from "@/components/ui/VideoModal";
import { useLanguage } from "@/context/LanguageContext";
import { videos } from "@/data/site";

export default function JournalismPage() {
  const { t, locale } = useLanguage();
  const page = t.journalismPage;
  const [openSankathana, setOpenSankathana] = useState(false);
  const sankathana = videos.find((video) => video.slug === "sankathana") ?? videos[0];

  return (
    <>
      <PageIntro kicker={page.kicker} title={page.title} lede={page.lede} />

      <section className="bg-ivory pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <a href="#print" className="group block overflow-hidden bg-beige">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gallery/book-presentation-02.png"
                  alt=""
                  fill
                  className="object-cover object-[50%_18%] transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-ink/25" />
              </div>
              <div className="p-7 md:p-9">
                <p className="kicker">{page.printIndex}</p>
                <h2 className="font-display mt-4 text-3xl text-deep md:text-4xl">{page.printTitle}</h2>
                <p className="mt-3 text-sm tracking-wide text-brown">{page.printLede}</p>
                <p className="mt-8 inline-flex items-center gap-3 text-[0.875rem] tracking-[0.2em] uppercase text-deep">
                  {page.printCta}
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <a href="#electronic" className="group block overflow-hidden bg-beige">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/videos/conversation-1.jpg"
                  alt=""
                  fill
                  className="object-cover object-[50%_18%] transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-ink/25" />
              </div>
              <div className="p-7 md:p-9">
                <p className="kicker">{page.electronicIndex}</p>
                <h2 className="font-display mt-4 text-3xl text-deep md:text-4xl">
                  {page.electronicTitle}
                </h2>
                <p className="mt-3 text-sm tracking-wide text-brown">{page.electronicLede}</p>
                <p className="mt-8 inline-flex items-center gap-3 text-[0.875rem] tracking-[0.2em] uppercase text-deep">
                  {page.electronicCta}
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <div id="print">
        <Book />
        <PhotoArchive group="Publication" heading={page.aroundBook} />
        <PressArchive />

        <section className="bg-ivory py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <Kicker>{page.sankathanaKicker}</Kicker>
              <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-6xl">
                {page.sankathanaTitle}
              </h2>
              <p className="mt-6 max-w-2xl leading-8 text-brown">{page.sankathanaBody}</p>
            </Reveal>
            <Reveal className="mt-12" delay={0.08}>
              <button
                type="button"
                onClick={() => setOpenSankathana(true)}
                className="group grid w-full overflow-hidden bg-beige text-left md:grid-cols-12"
              >
                <div className="relative aspect-video md:col-span-7 md:aspect-auto md:min-h-[22rem]">
                  <Image
                    src={sankathana.thumbnail}
                    alt={sankathana.title[locale]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 58vw, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-end p-7 md:col-span-5 md:p-10">
                  <p className="font-display text-3xl text-deep">{sankathana.title[locale]}</p>
                  <p className="mt-4 leading-7 text-ink/75">{sankathana.subtitle[locale]}</p>
                  <p className="mt-8 inline-flex items-center gap-3 text-[0.875rem] tracking-[0.22em] uppercase text-deep">
                    {page.sankathanaCta} <ArrowIcon />
                  </p>
                </div>
              </button>
            </Reveal>
          </div>
        </section>
      </div>

      <section id="electronic" className="bg-deep py-24 text-ivory md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:items-center md:px-8">
          <Reveal className="md:col-span-5">
            <Kicker className="text-sand">{page.deranaKicker}</Kicker>
            <h2 className="font-display mt-5 text-4xl tracking-tight md:text-6xl">{page.deranaTitle}</h2>
            <p className="mt-8 max-w-md leading-8 text-beige">{page.deranaBody}</p>
          </Reveal>
          <Reveal className="md:col-span-7" delay={0.08}>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/videos/sankathana.jpg"
                alt=""
                fill
                className="object-cover object-[50%_18%]"
                sizes="(min-width: 768px) 58vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Investigations />

      <AnimatePresence>
        {openSankathana && (
          <VideoModal
            videoId={sankathana.id}
            title={sankathana.title[locale]}
            onClose={() => setOpenSankathana(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
