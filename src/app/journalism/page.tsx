"use client";

import { Investigations } from "@/components/home/Investigations";
import { PressArchive } from "@/components/home/PressArchive";
import { Training } from "@/components/home/Training";

export default function JournalismPage() {
  return (
    <div className="pt-20">
      <Investigations />
      <PressArchive />
      <Training />
    </div>
  );
}
