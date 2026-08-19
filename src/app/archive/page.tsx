"use client";

import { ArchiveExplorer, ArchiveHeader } from "@/components/home/ArchiveExplorer";
import { PhotoArchive } from "@/components/home/PhotoArchive";
import { Timeline } from "@/components/home/Timeline";

export default function ArchivePage() {
  return (
    <>
      <ArchiveHeader />
      <ArchiveExplorer />
      <Timeline />
      <PhotoArchive />
    </>
  );
}
