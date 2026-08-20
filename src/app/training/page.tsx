"use client";

import Image from "next/image";
import { PageIntro } from "@/components/layout/PageIntro";
import { Training } from "@/components/home/Training";
import { International } from "@/components/home/International";
import { Interviews } from "@/components/home/Interviews";
import { Kicker, Reveal } from "@/components/ui/Editorial";
import { useLanguage } from "@/context/LanguageContext";

export default function TrainingPage() {
  const { t } = useLanguage();
  const page = t.trainingPage;

  return (
    <>
      <PageIntro kicker={page.kicker} title={page.title} lede={page.lede} titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]" />

      <section className="bg-beige py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="max-w-3xl">
            <Kicker>{page.universityKicker}</Kicker>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-5xl">
              {page.universityTitle}
            </h2>
            <p className="mt-8 max-w-2xl leading-8 text-ink/80">{page.universityBody}</p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <Reveal className="relative aspect-[4/3] w-full overflow-hidden bg-sand border border-sand/10 shadow-[0_8px_24px_rgba(33,28,24,0.05)] rounded-xs" delay={0.05}>
              <Image
                src="/images/gallery/training-01.jpg"
                alt="Waruna lecturing at Samarambha '23"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 30vw, 100vw"
              />
            </Reveal>
            <Reveal className="relative aspect-[4/3] w-full overflow-hidden bg-sand border border-sand/10 shadow-[0_8px_24px_rgba(33,28,24,0.05)] rounded-xs" delay={0.1}>
              <Image
                src="/images/gallery/training-02.jpg"
                alt="Waruna teaching data gathering methods"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 30vw, 100vw"
              />
            </Reveal>
            <Reveal className="relative aspect-[4/3] w-full overflow-hidden bg-sand border border-sand/10 shadow-[0_8px_24px_rgba(33,28,24,0.05)] rounded-xs" delay={0.15}>
              <Image
                src="/images/gallery/training-03.jpg"
                alt="Waruna lecturing in classroom"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 30vw, 100vw"
              />
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
