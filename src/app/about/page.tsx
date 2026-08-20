"use client";

import Image from "next/image";
import { PageIntro } from "@/components/layout/PageIntro";
import { useLanguage } from "@/context/LanguageContext";
import { TextLink } from "@/components/ui/Editorial";

export default function AboutPage() {
  const { t, locale } = useLanguage();
  const page = t.aboutPage;
  const bodyClass =
    locale === "si" ? "text-lg leading-[2.1] text-ink/90" : "text-lg leading-8 text-ink/90";

  return (
    <>
      <PageIntro kicker={page.kicker} title={page.title} lede={page.intro} />
      <section className="bg-ivory pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-sand md:sticky md:top-28">
              <Image
                src="/images/portrait.jpg"
                alt="Waruna Sanjeewa Liyanage"
                fill
                className="portrait-filter object-cover object-[58%_12%]"
                sizes="(min-width: 768px) 33vw, 100vw"
                priority
              />
            </div>
          </div>
          <article className="md:col-span-7 md:col-start-6">
            <p className={bodyClass}>{page.p1}</p>
            <p className={`mt-8 ${bodyClass}`}>{page.p2}</p>
            <p className={`mt-8 ${bodyClass}`}>{page.p3}</p>
            <p className={`mt-8 ${bodyClass}`}>{page.p4}</p>
            <div className="mt-12 flex flex-wrap gap-8">
              <TextLink href="/journalism">{t.nav.journalism}</TextLink>
              <TextLink href="/training">{t.nav.training}</TextLink>
              <TextLink href="/music">{t.nav.music}</TextLink>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
