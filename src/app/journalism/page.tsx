"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { PageIntro } from "@/components/layout/PageIntro";
import { Book } from "@/components/home/Book";
import { PressArchive } from "@/components/home/PressArchive";
import { PhotoArchive } from "@/components/home/PhotoArchive";
import { Investigations } from "@/components/home/Investigations";
import { ArrowIcon, Kicker, Reveal } from "@/components/ui/Editorial";
import { VideoModal } from "@/components/ui/VideoModal";
import { useLanguage } from "@/context/LanguageContext";
import { videos, sankathanaVideo } from "@/data/site";

const digitalJournalismTimeline = [
  {
    year: "1997 - 2001",
    title: {
      en: "Features Writer",
      si: "විශේෂාංග ලේඛක"
    },
    detail: {
      en: "Sunday Lankadeepa Newspaper. Formed the foundation of his print journalism career writing features.",
      si: "ඉරිදා ලංකාදීප පුවත්පත. විශේෂාංග ලිපි ලේඛනයෙන් ඔහුගේ මුද්‍රිත මාධ්‍ය ජීවිතයේ අඩිතාලම දමන ලදී."
    }
  },
  {
    year: "2001 - 2005",
    title: {
      en: "Sub Editor",
      si: "උප කතුවරයා"
    },
    detail: {
      en: "Aratuwa Business Newspaper. Gained extensive editing and newsroom operations experience.",
      si: "අරටුව ව්‍යාපාරික පුවත්පත. පුළුල් සංස්කරණ සහ ප්‍රවෘත්ති කාමර මෙහෙයුම් අත්දැකීම් ලබා ගන්නා ලදී."
    }
  },
  {
    year: "2005 - 2006",
    title: {
      en: "Reporter / News Editor",
      si: "වාර්තාකරු සහ ප්‍රවෘත්ති සංස්කාරක"
    },
    detail: {
      en: "Max TV Channel. Transitioned into broadcast media and reporting local and national events.",
      si: "Max TV නාලිකාව. විද්‍යුත් මාධ්‍යයට පිවිසෙමින් දේශීය සහ ජාතික තොරතුරු වාර්තාකරණය ආරම්භ කළේය."
    }
  },
  {
    year: "2007 - 2009",
    title: {
      en: "News Editor",
      si: "ප්‍රවෘත්ති සංස්කාරක"
    },
    detail: {
      en: "Isura FM Radio Channel. Directed radio newsroom operations and news bulletin editing.",
      si: "ඉසුරා එෆ්.එම්. ගුවන්විදුලි නාලිකාව. ගුවන්විදුලි ප්‍රවෘත්ති කාමර මෙහෙයුම් සහ ප්‍රවෘත්ති සංස්කරණ කටයුතු මෙහෙයවන ලදී."
    }
  },
  {
    year: "2009 - Present",
    title: {
      en: "News Manager",
      si: "ප්‍රවෘත්ති කළමනාකරු"
    },
    detail: {
      en: "FM Derana. Leading overall news operations and management at a premier national station.",
      si: "එෆ්.එම්. දෙරණ. දිවයිනේ ප්‍රමුඛතම නාලිකාවක සමස්ත ප්‍රවෘත්ති මෙහෙයුම් සහ කළමනාකාරීත්වයට නායකත්වය දෙයි."
    }
  }
];

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

          <div 
            className="relative mt-20 overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Timeline connector line */}
            <div className="absolute top-[59px] left-5 right-5 h-[1px] bg-sand md:left-0 md:right-0" />
            
            <div className="flex gap-8 relative min-w-[max-content] md:min-w-0 md:grid md:grid-cols-5 md:gap-6">
              {digitalJournalismTimeline.map((item, index) => (
                <Reveal key={index} delay={index * 0.05} className="w-[280px] md:w-auto flex-shrink-0">
                  <div className="relative pt-16">
                    {/* Timeline node dot */}
                    <div className="absolute top-[54px] left-0 size-[12px] rounded-full bg-ivory ring-2 ring-sand z-10" />
                    
                    <div className="font-display text-2xl text-brown font-medium">
                      {item.year}
                    </div>
                    <h3 className="font-display mt-4 text-xl text-deep font-medium leading-snug">
                      {item.title[locale]}
                    </h3>
                    <p className="mt-3 text-[0.875rem] leading-6 text-ink/75">
                      {item.detail[locale]}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div id="print">
        <Book />
        <PhotoArchive group="Publication" bgClass="bg-deep" hideHeader />
        
        <section className="bg-ivory py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <Kicker>{page.sankathanaKicker}</Kicker>
              <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-6xl">
                {page.sankathanaTitle}
              </h2>
              <p className="mt-6 max-w-2xl leading-8 text-brown">{page.sankathanaBody}</p>
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

            {/* Sankathana Journal Covers Horizontal Scroll with side arrows */}
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

            <Reveal className="mt-14" delay={0.12}>
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

        <PressArchive bgClass="bg-beige" />
      </div>

      <Investigations bgClass="bg-ivory" />

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
