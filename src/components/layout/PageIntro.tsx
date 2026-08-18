"use client";

import { Kicker } from "@/components/ui/Editorial";

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="bg-ivory pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Kicker>{kicker}</Kicker>
        <h1 className="font-display mt-5 max-w-4xl text-4xl leading-[1.05] tracking-tight text-deep sm:text-5xl md:text-7xl md:leading-[0.95]">
          {title}
        </h1>
        {lede && <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/80">{lede}</p>}
      </div>
    </header>
  );
}
