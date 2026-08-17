"use client";

import { PageIntro } from "@/components/layout/PageIntro";
import { Timeline } from "@/components/home/Timeline";
import { PhotoArchive } from "@/components/home/PhotoArchive";
import { Recognition } from "@/components/home/Recognition";
import { International } from "@/components/home/International";
import { useLanguage } from "@/context/LanguageContext";

export default function ArchivePage() {
  const { t } = useLanguage();

  return (
    <>
      <PageIntro
        kicker={t.nav.archive}
        title={t.footer.mark}
        lede={t.photos.note}
      />
      <Timeline />
      <International />
      <PhotoArchive />
      <Recognition />
    </>
  );
}
