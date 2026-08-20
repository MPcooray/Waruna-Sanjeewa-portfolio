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

      <International bgClass="bg-beige" />
      <Interviews featuredId="TAemrO-_ETw" bgClass="bg-ivory" />
    </>
  );
}
