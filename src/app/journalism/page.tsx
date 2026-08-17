"use client";

import { Investigations } from "@/components/home/Investigations";
import { Training } from "@/components/home/Training";

export default function JournalismPage() {
  return (
    <div className="pt-16">
      <Investigations />
      <Training />
    </div>
  );
}
