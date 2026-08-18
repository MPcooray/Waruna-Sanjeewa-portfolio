"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 32 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Kicker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`kicker ${className}`}>{children}</p>;
}

export function ArrowIcon({
  direction = "right",
  className = "",
}: {
  direction?: "right" | "down" | "up";
  className?: string;
}) {
  const rotate =
    direction === "down" ? "rotate-90" : direction === "up" ? "-rotate-90" : "";

  return (
    <svg
      viewBox="0 0 16 16"
      className={`inline-block size-[0.9em] shrink-0 ${rotate} ${className}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 8h11M9.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function TextLink({
  href,
  children,
  external,
  light,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group inline-flex items-center gap-3 text-[0.875rem] font-medium tracking-[0.22em] uppercase ${
        light ? "text-ivory" : "text-deep"
      }`}
    >
      <span className="border-b border-current pb-1 transition-opacity group-hover:opacity-60">
        {children}
      </span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        <ArrowIcon />
      </span>
    </a>
  );
}
