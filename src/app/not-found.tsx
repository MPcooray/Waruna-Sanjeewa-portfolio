import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Editorial";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-end bg-ivory px-5 pb-24 pt-40 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="kicker">404</p>
        <h1 className="font-display mt-5 text-5xl text-deep md:text-7xl">This page is not in the archive.</h1>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-[0.875rem] tracking-[0.22em] uppercase text-deep"
        >
          Return home <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
