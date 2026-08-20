"use client";

import { useRef } from "react";
import Image from "next/image";
import { PageIntro } from "@/components/layout/PageIntro";
import { Training } from "@/components/home/Training";
import { International } from "@/components/home/International";
import { Interviews } from "@/components/home/Interviews";
import { ArrowIcon, Kicker, Reveal } from "@/components/ui/Editorial";
import { useLanguage } from "@/context/LanguageContext";

export default function TrainingPage() {
  const { t, locale } = useLanguage();
  const page = t.trainingPage;
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
      <PageIntro kicker={page.kicker} title={page.title} lede={page.lede} titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]" />

      <section className="bg-beige py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="max-w-3xl">
            <Kicker>{page.universityKicker}</Kicker>
            <h2 className="font-display mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-deep">
              {page.universityTitle}
            </h2>
            <p className="mt-8 max-w-2xl leading-8 text-ink/80">{page.universityBody}</p>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <Reveal className="flex flex-col" delay={0.05}>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand border border-sand/10 shadow-[0_8px_24px_rgba(33,28,24,0.05)] rounded-xs">
                <Image
                  src="/images/gallery/training-01.jpg"
                  alt="Waruna lecturing at D.S. Senanayake College"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <p className="mt-4 text-[0.8125rem] leading-relaxed text-ink/75 font-medium border-l-2 border-brown/30 pl-3">
                {locale === "en" 
                  ? "Lecture on Journalism — D.S. Senanayake College" 
                  : "ප්‍රවෘත්තිකරණය පිළිබඳ දේශනය — ඩී.එස්. සේනානායක විද්‍යාලය"}
              </p>
            </Reveal>

            <Reveal className="flex flex-col" delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand border border-sand/10 shadow-[0_8px_24px_rgba(33,28,24,0.05)] rounded-xs">
                <Image
                  src="/images/gallery/training-02.jpg"
                  alt="Waruna teaching data journalism"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <p className="mt-4 text-[0.8125rem] leading-relaxed text-ink/75 font-medium border-l-2 border-brown/30 pl-3">
                {locale === "en" 
                  ? "Lecture on Data Journalism — Center for Investigative Reporting, Sri Lanka" 
                  : "දත්ත ප්‍රවෘත්තිකරණය පිළිබඳ දේශනය — ගවේෂණාත්මක වාර්තාකරණ මධ්‍යස්ථානය, ශ්‍රී ලංකාව"}
              </p>
            </Reveal>

            <Reveal className="flex flex-col" delay={0.15}>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand border border-sand/10 shadow-[0_8px_24px_rgba(33,28,24,0.05)] rounded-xs">
                <Image
                  src="/images/gallery/training-03.jpg"
                  alt="Waruna lecturing at Sri Pali Campus"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <p className="mt-4 text-[0.8125rem] leading-relaxed text-ink/75 font-medium border-l-2 border-brown/30 pl-3">
                {locale === "en" 
                  ? "Guest Lecture — Sri Palee Campus, University of Colombo" 
                  : "ආරාධිත දේශනය — ශ්‍රී පාලි මණ්ඩපය, කොළඹ විශ්වවිද්‍යාලය"}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Training bgClass="bg-deep" />

      {/* Publications Section */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Kicker>{page.publicationsKicker}</Kicker>
            <h2 className="font-display mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-deep">
              {page.publicationsTitle}
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-brown">{page.publicationsBody}</p>
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
        </div>
      </section>

      <International bgClass="bg-beige" />
      <Interviews featuredId="TAemrO-_ETw" bgClass="bg-ivory" />
    </>
  );
}
