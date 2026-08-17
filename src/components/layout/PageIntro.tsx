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
    <header className="bg-ivory pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Kicker>{kicker}</Kicker>
        <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[0.95] tracking-tight text-deep md:text-7xl">
          {title}
        </h1>
        {lede && <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/80">{lede}</p>}
      </div>
    </header>
  );
}
