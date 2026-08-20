"use client";

import { useState } from "react";
import { ArrowIcon } from "@/components/ui/Editorial";

export function ArchiveFold({
  children,
  more,
  less,
  fadeFrom,
  forceDesktop = false,
}: {
  children: React.ReactNode;
  more: string;
  less: string;
  fadeFrom: "ivory" | "beige" | "deep";
  forceDesktop?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const fade = fadeFrom === "ivory" ? "from-ivory" : fadeFrom === "deep" ? "from-deep" : "from-beige";

  return (
    <div>
      <div
        className={`relative overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          forceDesktop ? "" : "md:max-h-none md:overflow-visible"
        } ${
          expanded ? "max-h-[4000px]" : "max-h-[36rem]"
        }`}
      >
        {children}
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t ${fade} to-transparent ${
            forceDesktop ? "" : "md:hidden"
          } ${
            expanded ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
      <div className={`relative z-10 -mt-6 flex justify-center ${forceDesktop ? "" : "md:hidden"}`}>
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className={`flex min-h-12 min-w-12 flex-col items-center gap-2 ${fadeFrom === "deep" ? "text-ivory" : "text-deep"}`}
          aria-expanded={expanded}
        >
          <span className={`flex h-11 w-11 items-center justify-center rounded-full border text-xl leading-none shadow-[0_8px_24px_rgba(33,28,24,0.08)] ${fadeFrom === "deep" ? "bg-deep border-sand/30 text-ivory" : "bg-ivory border-sand text-deep"}`}>
            <ArrowIcon direction={expanded ? "up" : "down"} className="size-4" />
          </span>
          <span className={`text-[0.8125rem] tracking-[0.18em] uppercase ${fadeFrom === "deep" ? "text-sand" : "text-brown"}`}>
            {expanded ? less : more}
          </span>
        </button>
      </div>
    </div>
  );
}
