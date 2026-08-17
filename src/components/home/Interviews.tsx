"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { videos, type VideoCategory } from "@/data/site";
import { Kicker, Reveal, TextLink } from "@/components/ui/Editorial";
import { VideoModal } from "@/components/ui/VideoModal";

const filters: VideoCategory[] = ["all", "interviews", "discussions", "journalism"];

export function Interviews({
  featuredOnly = false,
}: {
  featuredOnly?: boolean;
}) {
  const { t, locale } = useLanguage();
  const [filter, setFilter] = useState<VideoCategory>("all");
  const [active, setActive] = useState<string | null>(null);

  const featured = videos[0];
  const list = useMemo(() => {
    const rest = videos.slice(1);
    if (filter === "all") return rest;
    return rest.filter((video) => video.category === filter);
  }, [filter]);

  const playing = videos.find((video) => video.id === active);

  return (
    <section id="interviews" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Kicker>{t.interviews.kicker}</Kicker>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-deep md:text-6xl">
              {t.interviews.title}
            </h2>
          </div>
          {featuredOnly && <TextLink href="/interviews">{t.interviews.more}</TextLink>}
        </Reveal>

        <Reveal className="mt-14" delay={0.08}>
          <button
            type="button"
            onClick={() => setActive(featured.id)}
            className="group grid w-full overflow-hidden bg-ivory text-left md:grid-cols-5"
          >
            <div className="relative aspect-video overflow-hidden bg-deep md:col-span-3 md:aspect-auto md:min-h-[420px]">
              <Image
                src={featured.thumbnail}
                alt={featured.title[locale]}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-ink/20 transition-colors group-hover:bg-ink/35" />
            </div>
            <div className="flex flex-col justify-between p-7 md:col-span-2 md:p-10">
              <div>
                <p className="kicker">{t.interviews.featured}</p>
                <h3 className="font-display mt-5 text-3xl text-deep md:text-4xl">
                  {featured.title[locale]}
                </h3>
                <p className="mt-4 leading-7 text-ink/75">{featured.subtitle[locale]}</p>
              </div>
              <p className="mt-10 text-[0.72rem] tracking-[0.22em] uppercase text-deep">
                ▶ {t.interviews.watch}
              </p>
            </div>
          </button>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`text-[0.7rem] tracking-[0.2em] uppercase ${
                filter === item ? "text-deep" : "text-brown/60 hover:text-brown"
              }`}
            >
              {t.interviews.filters[item]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActive(video.id)}
              className="group bg-ivory text-left transition-colors duration-500 hover:bg-deep"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title[locale]}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 30vw, 50vw"
                />
                <div className="absolute right-4 bottom-4 flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {t.interviews.watchShort}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-deep transition-colors group-hover:text-ivory">
                  {video.title[locale]}
                </h3>
                <p className="mt-2 text-sm leading-6 text-brown transition-colors group-hover:text-beige">
                  {video.subtitle[locale]}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {playing && (
          <VideoModal
            videoId={playing.id}
            title={playing.title[locale]}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
