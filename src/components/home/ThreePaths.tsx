"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowIcon, Kicker, Reveal } from "@/components/ui/Editorial";

const paths = [
  {
    key: "journalism" as const,
    href: "/journalism",
    image: "/images/home-journalism-v7.jpg",
    align: "left" as const,
  },
  {
    key: "training" as const,
    href: "/training",
    image: "/images/home-training-v7.jpg",
    align: "right" as const,
  },
  {
    key: "music" as const,
    href: "/music",
    image: "/images/home-music-v7.jpg",
    align: "left" as const,
  },
];

export function ThreePaths() {
  const { t } = useLanguage();

  return (
    <section id="paths" className="bg-ivory pt-10 pb-24 md:pt-12 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Kicker>{t.paths.kicker}</Kicker>
          <h2 className="font-display mt-5 max-w-3xl text-4xl tracking-tight text-deep md:text-6xl">
            {t.paths.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:gap-8 md:grid-cols-3">
          {paths.map((path, index) => {
            const copy = t.paths[path.key];

            return (
              <Reveal key={path.key} delay={index * 0.08} className="h-full">
                <Link
                  href={path.href}
                  className="group flex flex-col overflow-hidden bg-beige h-full border border-sand/10 shadow-[0_4px_20px_rgba(33,28,24,0.03)] rounded-xs"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src={path.image}
                      alt={copy.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 33vw, 100vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-ink/15 transition-colors duration-500 group-hover:bg-ink/25" />
                  </div>
                  <div className="flex flex-col flex-grow p-6 sm:p-8">
                    <div>
                      <p className="kicker text-[0.75rem]">{copy.index}</p>
                      <h3 className="font-display mt-4 text-2xl tracking-tight text-deep sm:text-3xl">
                        {copy.title}
                      </h3>
                      <p className="mt-2 text-[0.75rem] font-display uppercase tracking-[0.16em] text-brown">{copy.lede}</p>
                      <p className="mt-4 leading-7 text-[0.875rem] text-ink/75">{copy.body}</p>
                    </div>
                    <p className="mt-8 inline-flex items-center gap-3 text-[0.8125rem] tracking-[0.2em] uppercase text-deep pt-4">
                      {t.paths.explore}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowIcon className="size-[11px]" />
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
