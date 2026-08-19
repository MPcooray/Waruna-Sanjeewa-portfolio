"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowIcon, Kicker, Reveal } from "@/components/ui/Editorial";

const paths = [
  {
    key: "journalism" as const,
    href: "/journalism",
    image: "/images/gallery/book-presentation-01.png",
    align: "left" as const,
  },
  {
    key: "training" as const,
    href: "/training",
    image: "/images/gallery/media-event.png",
    align: "right" as const,
  },
  {
    key: "music" as const,
    href: "/music",
    image: null,
    align: "left" as const,
  },
];

export function ThreePaths() {
  const { t } = useLanguage();

  return (
    <section id="paths" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{t.paths.kicker}</Kicker>
          <h2 className="font-display mt-5 max-w-3xl text-4xl tracking-tight text-deep md:text-6xl">
            {t.paths.title}
          </h2>
        </Reveal>

        <div className="mt-16 space-y-8 md:mt-20 md:space-y-12">
          {paths.map((path, index) => {
            const copy = t.paths[path.key];
            const right = path.align === "right";

            return (
              <Reveal key={path.key} delay={index * 0.06}>
                <Link
                  href={path.href}
                  className={`group grid overflow-hidden bg-ivory md:grid-cols-12 ${
                    right ? "md:[direction:rtl]" : ""
                  }`}
                >
                  <div
                    className={`relative min-h-[18rem] md:col-span-7 md:min-h-[26rem] ${
                      right ? "md:[direction:ltr]" : ""
                    }`}
                  >
                    {path.image ? (
                      <Image
                        src={path.image}
                        alt=""
                        fill
                        className="object-cover object-[50%_18%] transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(min-width: 768px) 58vw, 100vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-deep" />
                    )}
                    <div className="absolute inset-0 bg-ink/25 transition-colors duration-500 group-hover:bg-ink/40" />
                  </div>
                  <div
                    className={`flex flex-col justify-between p-7 sm:p-10 md:col-span-5 md:p-12 ${
                      right ? "md:[direction:ltr]" : ""
                    }`}
                  >
                    <div>
                      <p className="kicker">{copy.index}</p>
                      <h3 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-5xl">
                        {copy.title}
                      </h3>
                      <p className="mt-3 text-sm tracking-wide text-brown">{copy.lede}</p>
                      <p className="mt-6 max-w-sm leading-7 text-ink/75">{copy.body}</p>
                    </div>
                    <p className="mt-10 inline-flex items-center gap-3 text-[0.875rem] tracking-[0.22em] uppercase text-deep">
                      {t.paths.explore}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowIcon />
                      </span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
