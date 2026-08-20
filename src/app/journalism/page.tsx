"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { PageIntro } from "@/components/layout/PageIntro";
import { Book } from "@/components/home/Book";
import { PressArchive } from "@/components/home/PressArchive";
import { PhotoArchive } from "@/components/home/PhotoArchive";
import { Investigations } from "@/components/home/Investigations";
import { Awards } from "@/components/home/Awards";
import { ArrowIcon, Kicker, Reveal } from "@/components/ui/Editorial";
import { VideoModal } from "@/components/ui/VideoModal";
import { useLanguage } from "@/context/LanguageContext";
import { videos, sankathanaVideo } from "@/data/site";



export default function JournalismPage() {
  const { t, locale } = useLanguage();
  const page = t.journalismPage;
  const [openSankathana, setOpenSankathana] = useState(false);
  const sankathana = sankathanaVideo;
  const sankathanaScrollRef = useRef<HTMLDivElement>(null);

  const scrollSankathana = (direction: "left" | "right") => {
    if (sankathanaScrollRef.current) {
      const { scrollLeft, clientWidth } = sankathanaScrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75;
      sankathanaScrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className="bg-ivory pt-28 pb-20 text-ink sm:pt-32 md:pt-40 md:pb-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Kicker>{page.kicker}</Kicker>
          <h1 className="font-display mt-5 max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-deep leading-[1.15] md:leading-[1.12]">
            {page.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/80">
            {page.lede}
          </p>
        </div>
      </header>

      <div id="print">
        <Book showVideos />
        <PhotoArchive group="Publication" bgClass="bg-deep" hideHeader />
        
        {/* National Media Journals covers scroll gallery */}
        <section className="bg-ivory py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <Kicker>{t.trainingPage.publicationsKicker}</Kicker>
              <h2 className="font-display mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-deep">
                {t.trainingPage.publicationsTitle}
              </h2>
              <p className="mt-6 max-w-2xl leading-8 text-brown">{t.trainingPage.publicationsBody}</p>
              <div className="mt-6 flex flex-wrap items-center">
                <a
                  href="https://dgi.gov.lk/divisions/research-monitoring-unit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display text-[0.8125rem] tracking-[0.2em] uppercase text-deep hover:text-brown transition duration-300"
                >
                  {locale === "en" ? "Research & Monitoring Unit (DGI)" : "පර්යේෂණ හා නිරීක්ෂණ අංශය (රජයේ ප්‍රවෘත්ති දෙපාර්තමේන්තුව)"}
                  <svg viewBox="0 0 16 16" className="size-[11px]" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M5 11l6-6M5 5h6v6" />
                  </svg>
                </a>
              </div>
            </Reveal>

            {/* Journal Covers Horizontal Scroll with side arrows */}
            <Reveal className="mt-14" delay={0.08}>
              <div className="relative group/sankathana">
                {/* Left side scroll arrow button */}
                <button
                  type="button"
                  onClick={() => scrollSankathana("left")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-sand/20 bg-ink/65 text-ivory hover:bg-ink/85 hover:scale-105 transition duration-300 shadow-md md:opacity-0 md:group-hover/sankathana:opacity-100 opacity-90"
                  aria-label="Previous cover"
                >
                  <ArrowIcon className="rotate-180 size-[14px]" />
                </button>

                {/* Right side scroll arrow button */}
                <button
                  type="button"
                  onClick={() => scrollSankathana("right")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-sand/20 bg-ink/65 text-ivory hover:bg-ink/85 hover:scale-105 transition duration-300 shadow-md md:opacity-0 md:group-hover/sankathana:opacity-100 opacity-90"
                  aria-label="Next cover"
                >
                  <ArrowIcon className="size-[14px]" />
                </button>

                <div 
                  ref={sankathanaScrollRef}
                  className="relative overflow-x-auto pb-6 flex gap-6 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-none"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {[
                    { year: "2024", src: "/images/gallery/sankathana-2024.jpg" },
                    { year: "2023", src: "/images/gallery/sankathana-2023.jpg" },
                    { year: "2022", src: "/images/gallery/sankathana-2022.jpg" },
                    { year: "2021", src: "/images/gallery/sankathana-2021.jpg" },
                  ].map((cover) => (
                    <div key={cover.year} className="group relative aspect-[1.6/1] h-[160px] sm:h-[220px] md:h-[250px] flex-shrink-0 overflow-hidden">
                      <Image
                        src={cover.src}
                        alt={`National Media Sankathana ${cover.year}`}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(min-width: 768px) 400px, 260px"
                      />
                      <div className="absolute inset-0 bg-ink/5 opacity-100 group-hover:opacity-0 transition-opacity" />
                      <div className="absolute bottom-3 left-3 bg-ink/75 px-2 py-0.5 rounded-sm">
                        <span className="font-display text-[0.75rem] text-ivory tracking-widest">{cover.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Integrated Sankathana Lecture video block */}
            <Reveal className="mt-16" delay={0.12}>
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-brown mb-8">
                {locale === "en" ? "Sankathana Lecture" : "සංකථන දේශනය"}
              </h3>
              <button
                type="button"
                onClick={() => setOpenSankathana(true)}
                className="group grid w-full overflow-hidden bg-beige text-left md:grid-cols-12 border border-sand/15 rounded-xs shadow-[0_4px_24px_rgba(33,28,24,0.03)] hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-video md:col-span-7 md:aspect-auto md:min-h-[22rem]">
                  <Image
                    src={sankathana.thumbnail}
                    alt={locale === "en" ? "Sankathana Lecture" : "සංකථන දේශනය"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 58vw, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-end p-7 md:col-span-5 md:p-10">
                  <p className="font-display text-3xl text-deep">
                    {locale === "en" ? "Sankathana Lecture" : "සංකථන දේශනය"}
                  </p>
                  <p className="mt-4 leading-7 text-ink/75">{sankathana.subtitle[locale]}</p>
                  <p className="mt-8 inline-flex items-center gap-3 text-[0.875rem] tracking-[0.22em] uppercase text-deep font-semibold">
                    {locale === "en" ? "Watch Lecture" : "දේශනය නරඹන්න"} <ArrowIcon />
                  </p>
                </div>
              </button>
            </Reveal>
          </div>
        </section>

        <PressArchive bgClass="bg-beige" />
      </div>

      <Investigations bgClass="bg-ivory" />
      <Awards bgClass="bg-beige" />

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
