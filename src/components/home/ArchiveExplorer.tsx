"use client";

import { useMemo, useState } from "react";
import { PageIntro } from "@/components/layout/PageIntro";
import { useLanguage } from "@/context/LanguageContext";
import { conferences, songs, timeline, videos } from "@/data/site";
import { pressClippings } from "@/data/press";
import { galleryPhotos } from "@/data/gallery";
import Link from "next/link";

const filters = [
  "all",
  "print",
  "electronic",
  "training",
  "conferences",
  "interviews",
  "music",
  "photographs",
  "documents",
] as const;

type Filter = (typeof filters)[number];

type ArchiveRow = {
  id: string;
  year: string;
  kind: Exclude<Filter, "all">;
  title: { en: string; si: string };
  kicker: { en: string; si: string };
  href: string;
};

export function ArchiveExplorer() {
  const { t, locale } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const rows = useMemo<ArchiveRow[]>(() => {
    const press: ArchiveRow[] = pressClippings.map((item) => ({
      id: item.src,
      year: item.year,
      kind: "print",
      title: item.caption,
      kicker: item.kicker,
      href: "/journalism#print",
    }));

    const clips: ArchiveRow[] = videos.map((item) => ({
      id: item.id,
      year: "",
      kind: item.slug === "sankathana" ? "print" : "interviews",
      title: item.title,
      kicker: item.subtitle,
      href: item.slug === "sankathana" ? "/journalism#print" : "/training#conversations",
    }));

    const meets: ArchiveRow[] = conferences.map((item) => ({
      id: `conf-${item.year}`,
      year: item.year,
      kind: "conferences",
      title: item.event,
      kicker: {
        en: `${item.city.en} · ${item.country.en}`,
        si: `${item.city.si} · ${item.country.si}`,
      },
      href: "/training#conferences",
    }));

    const discography: ArchiveRow[] = songs.map((item) => ({
      id: `song-${item.number}`,
      year: "",
      kind: "music",
      title: item.title,
      kicker: { en: "Song", si: "ගීතය" },
      href: "/music",
    }));

    const photos: ArchiveRow[] = galleryPhotos.map((item) => ({
      id: item.src,
      year: "",
      kind: "photographs",
      title: item.caption,
      kicker: item.kicker,
      href: "/archive#photos",
    }));

    const electronic: ArchiveRow[] = timeline
      .filter((item) => ["2005", "2007", "2009"].includes(item.year))
      .map((item) => ({
        id: `el-${item.year}`,
        year: item.year,
        kind: "electronic",
        title: item.title,
        kicker: item.detail,
        href: "/journalism#electronic",
      }));

    const teaching: ArchiveRow[] = [
      {
        id: "training-work",
        year: "",
        kind: "training",
        title: { en: "Media training", si: "මාධ්‍ය පුහුණුව" },
        kicker: {
          en: "Lectures, workshops, and investigative practice",
          si: "දේශන, වැඩමුළු සහ ගවේෂණ භාවිතය",
        },
        href: "/training",
      },
    ];

    return [
      ...press,
      ...clips,
      ...meets,
      ...discography,
      ...photos,
      ...electronic,
      ...teaching,
    ];
  }, []);

  const visible = rows.filter((row) => {
    if (
      filter !== "all" &&
      row.kind !== filter &&
      !(filter === "documents" && row.kind === "print")
    ) {
      return false;
    }
    const haystack = `${row.title.en} ${row.title.si} ${row.kicker.en} ${row.kicker.si} ${row.year}`.toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  });

  return (
    <section className="bg-ivory pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <label className="block">
          <span className="sr-only">{t.archivePage.search}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.archivePage.search}
            className="w-full border-b border-sand bg-transparent py-4 text-lg text-deep outline-none placeholder:text-brown/50"
          />
        </label>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`min-h-11 py-1 text-[0.8125rem] tracking-[0.16em] uppercase ${
                filter === item ? "text-deep" : "text-brown/55 hover:text-brown"
              }`}
            >
              {t.archivePage.filters[item]}
            </button>
          ))}
        </div>

        <ul className="mt-12 divide-y divide-sand border-y border-sand">
          {visible.length === 0 && (
            <li className="py-12 text-brown">{t.archivePage.empty}</li>
          )}
          {visible.map((row) => (
            <li key={row.id}>
              <Link
                href={row.href}
                className="grid gap-2 py-8 md:grid-cols-12 md:items-baseline md:gap-4"
              >
                <p className="kicker md:col-span-2">{row.year || "—"}</p>
                <div className="md:col-span-7">
                  <h2 className="font-display text-2xl text-deep md:text-3xl">
                    {row.title[locale]}
                  </h2>
                  <p className="mt-2 text-sm text-brown">{row.kicker[locale]}</p>
                </div>
                <p className="text-[0.75rem] tracking-[0.18em] uppercase text-brown md:col-span-3 md:text-right">
                  {t.archivePage.filters[row.kind]}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ArchiveHeader() {
  const { t } = useLanguage();
  return (
    <PageIntro kicker={t.nav.archive} title={t.archivePage.title} lede={t.archivePage.lede} />
  );
}
