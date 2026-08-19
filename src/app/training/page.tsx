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
      <PageIntro kicker={page.kicker} title={page.title} lede={page.lede} />

      <section className="bg-beige py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:items-center md:px-8">
          <Reveal className="md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-sand">
              <Image
                src="/images/gallery/award-ceremony.png"
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-6" delay={0.08}>
            <Kicker>{page.universityKicker}</Kicker>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-5xl">
              {page.universityTitle}
            </h2>
            <p className="mt-8 max-w-md leading-8 text-ink/80">{page.universityBody}</p>
          </Reveal>
        </div>
      </section>

      <Training />
      <International />
      <Interviews featuredId="TAemrO-_ETw" />
    </>
  );
}
