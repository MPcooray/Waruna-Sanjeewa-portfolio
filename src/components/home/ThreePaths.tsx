"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowIcon, Kicker, Reveal } from "@/components/ui/Editorial";

const paths = [
  {
    key: "journalism" as const,
    href: "/journalism",
    images: [
      "/images/gallery/book-presentation-01.png",
      "/images/gallery/book-presentation-02.png",
      "/images/gallery/book-presentation-03.png",
      "/images/gallery/book-presentation-04.png",
      "/images/gallery/book-office.png",
      "/images/gallery/book-with-trophies.png",
    ],
    align: "left" as const,
  },
  {
    key: "training" as const,
    href: "/training",
    images: [
      "/images/gallery/media-event.png",
      "/images/gallery/slim-kantar-awards.png",
      "/images/gallery/award-ceremony.png",
    ],
    align: "right" as const,
  },
  {
    key: "music" as const,
    href: "/music",
    images: [] as string[],
    align: "left" as const,
  },
];

function PathSlides({
  images,
  offset = 0,
  paused,
}: {
  images: string[];
  offset?: number;
  paused?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (images.length < 2 || reduced || paused) return;

    let interval: ReturnType<typeof setInterval> | undefined;
    const start = window.setTimeout(() => {
      interval = setInterval(() => {
        setIndex((current) => (current + 1) % images.length);
      }, 1500);
    }, offset);

    return () => {
      window.clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [images.length, offset, paused, reduced]);

  if (images.length === 0) {
    return <div className="absolute inset-0 bg-deep" />;
  }

  return (
    <>
      {images.map((src, imageIndex) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover object-[50%_18%] transition-opacity duration-700 ease-out ${
            imageIndex === index ? "opacity-100" : "opacity-0"
          }`}
          sizes="(min-width: 768px) 58vw, 100vw"
          priority={imageIndex === 0}
        />
      ))}
    </>
  );
}

export function ThreePaths() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="paths" className="bg-beige pt-10 pb-24 md:pt-12 md:pb-32">
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
                  onMouseEnter={() => setHovered(path.key)}
                  onMouseLeave={() => setHovered(null)}
                  className={`group grid overflow-hidden bg-ivory md:grid-cols-12 ${
                    right ? "md:[direction:rtl]" : ""
                  }`}
                >
                  <div
                    className={`relative min-h-[18rem] md:col-span-7 md:min-h-[26rem] ${
                      right ? "md:[direction:ltr]" : ""
                    }`}
                  >
                    <PathSlides
                      images={path.images}
                      offset={index * 1000}
                      paused={hovered === path.key}
                    />
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
