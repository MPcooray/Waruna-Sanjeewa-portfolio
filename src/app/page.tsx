import { Hero } from "@/components/home/Hero";
import { CareerStatement } from "@/components/home/CareerStatement";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Timeline } from "@/components/home/Timeline";
import { Interviews } from "@/components/home/Interviews";
import { Investigations } from "@/components/home/Investigations";
import { Book } from "@/components/home/Book";
import { International } from "@/components/home/International";
import { Training } from "@/components/home/Training";
import { PressArchive } from "@/components/home/PressArchive";
import { PhotoArchive } from "@/components/home/PhotoArchive";
import { Recognition } from "@/components/home/Recognition";
import { ContactPreview } from "@/components/home/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <CareerStatement />
      <AboutPreview />
      <Timeline />
      <Interviews featuredOnly />
      <Investigations />
      <Book />
      <International />
      <Training />
      <PressArchive />
      <PhotoArchive />
      <Recognition />
      <ContactPreview />
    </>
  );
}
