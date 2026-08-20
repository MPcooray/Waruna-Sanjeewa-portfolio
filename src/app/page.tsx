import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ThreePaths } from "@/components/home/ThreePaths";
import { Interviews } from "@/components/home/Interviews";
import { Investigations } from "@/components/home/Investigations";
import { Book } from "@/components/home/Book";
import { Recognition } from "@/components/home/Recognition";
import { ContactPreview } from "@/components/home/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ThreePaths />
      <Investigations limit={3} />
      <Interviews featuredOnly />
      <Book />
      <Recognition />
      <ContactPreview />
    </>
  );
}
