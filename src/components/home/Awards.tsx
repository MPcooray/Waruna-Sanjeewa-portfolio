"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Kicker, Reveal } from "@/components/ui/Editorial";

export function Awards({ bgClass = "bg-beige" }: { bgClass?: string }) {
  const { locale } = useLanguage();

  const awardList = [
    {
      title: {
        en: "MASCO 2017 Madhyabhushana Excellence Award",
        si: "මාස්කෝ 2017 මාධ්‍යභූෂණ විශිෂ්ටතා සම්මානය",
      },
      image: "/images/gallery/award-ceremony.png",
      description: {
        en: "Awarded in recognition of outstanding national service in electronic and print journalism as Derana FM News Manager.",
        si: "දෙරණ FM ප්‍රවෘත්ති කළමනාකරු ලෙස විද්‍යුත් හා මුද්‍රිත ජනමාධ්‍ය ක්ෂේත්‍රයේ සිදුකළ විශිෂ්ට සේවය වෙනුවෙන් පිරිනමන ලදී.",
      },
      link: "https://drive.google.com/file/d/1P_V5eRbUOicO0uqDHnjQhS4TK7GZlO_z/view?usp=drive_link",
    },
    {
      title: {
        en: "SLIM-Kantar People's Awards",
        si: "SLIM-Kantar මහජන සම්මානය",
      },
      image: "/images/gallery/slim-kantar-awards.png",
      description: {
        en: "Recognizing outstanding public appreciation and professional excellence in media operations.",
        si: "මාධ්‍ය මෙහෙයුම්වල විශිෂ්ටත්වය සහ මහජන ඇගයීම වෙනුවෙන් පිරිනමන ලදී.",
      },
    },
    {
      title: {
        en: "Ninnada 2024 - Appreciation from Own School",
        si: "නින්නාද 2024 - විද්‍යාලයීය උපහාරය",
      },
      image: "/images/gallery/award-ninada.jpg",
      description: {
        en: "Presented with a special token of appreciation from his own school, D. S. Senanayake College, during the Ninada 2024 festival.",
        si: "ඔහුගේම පාසල වන කොළඹ ඩී. එස්. සේනානායක විද්‍යාලයේ 'නින්නාද 2024' උපහාර උළෙලේදී විශේෂ ඇගයීම් සම්මානයෙන් පිදුම් ලැබීම.",
      },
    },
  ];

  return (
    <section id="awards" className={`${bgClass} py-24 md:py-32`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{locale === "en" ? "Honors & Achievements" : "ගෞරව සහ ඇගයීම්"}</Kicker>
          <h2 className="font-display mt-5 max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-deep">
            {locale === "en" ? "Awards & Recognition" : "සම්මාන සහ පිළිගැනීම"}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {awardList.map((award, index) => {
            const CardComponent = award.link ? "a" : "div";
            return (
              <Reveal key={index} delay={index * 0.1} className="h-full">
                <CardComponent
                  {...(award.link
                    ? {
                      href: award.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                    : {})}
                  className={`group flex flex-col bg-ivory/40 border border-sand/15 p-6 rounded-xs transition duration-300 h-full ${award.link ? "hover:bg-ivory/80 cursor-pointer" : ""
                    }`}
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-sand border-[6px] border-beige shadow-[0_8px_24px_rgba(33,28,24,0.05)] rounded-xs">
                    <Image
                      src={award.image}
                      alt={award.title[locale]}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(min-width: 768px) 45vw, 100vw"
                    />
                  </div>
                  <h3 className={`font-display mt-6 text-xl sm:text-2xl text-deep leading-tight ${award.link ? "group-hover:text-brown transition-colors" : ""
                    }`}>
                    {award.title[locale]}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink/75">
                    {award.description[locale]}
                  </p>
                  {award.link && (
                    <div className="mt-auto pt-6 flex items-center justify-end gap-2 text-xs uppercase tracking-widest text-brown font-semibold">
                      {locale === "en" ? "View" : "නරඹන්න"}
                      <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </div>
                  )}
                </CardComponent>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
