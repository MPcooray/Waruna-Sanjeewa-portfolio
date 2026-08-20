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
  const sankathana = videos.find((video) => video.slug === "sankathana") ?? videos[0];

  return (
    <>
      <PageIntro kicker={page.kicker} title={page.title} lede={page.lede} titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]" />

      <section className="bg-ivory pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <a href="#print" className="group block overflow-hidden bg-beige transition-all duration-500 ease-out hover:bg-sand/20 hover:-translate-y-1 hover:shadow-md">
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
            <a href="#electronic" className="group block overflow-hidden bg-beige transition-all duration-500 ease-out hover:bg-sand/20 hover:-translate-y-1 hover:shadow-md">
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

      <section id="electronic" className="bg-beige py-24 text-ink md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Kicker>{page.deranaKicker}</Kicker>
            <h2 className="font-display mt-5 max-w-3xl text-4xl tracking-tight text-deep md:text-6xl">{page.deranaTitle}</h2>
          </Reveal>

          <div 
            className="relative mt-16 overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Timeline connector line */}
            <div className="absolute top-[59px] left-5 right-5 h-[1px] bg-sand/40 md:left-0 md:right-0" />
            
            <div className="flex gap-8 relative min-w-[max-content] md:min-w-0 md:grid md:grid-cols-5 md:gap-6">
              {digitalJournalismTimeline.map((item, index) => (
                <Reveal key={index} delay={index * 0.05} className="w-[280px] md:w-auto flex-shrink-0">
                  <div className="relative pt-16">
                    {/* Timeline node dot */}
                    <div className="absolute top-[54px] left-0 size-[12px] rounded-full bg-beige ring-2 ring-sand z-10" />
                    
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
      </section>

      <div id="print">
        <Book />
        <PhotoArchive group="Publication" heading={page.aroundBook} />
        <PressArchive />
      </div>

      <section className="bg-beige py-24 md:py-32">
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
              className="group grid w-full overflow-hidden bg-ivory text-left md:grid-cols-12"
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
