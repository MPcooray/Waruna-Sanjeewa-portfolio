import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ThreePaths } from "@/components/home/ThreePaths";
import { Book } from "@/components/home/Book";
import { Recognition } from "@/components/home/Recognition";
import { ContactPreview } from "@/components/home/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ThreePaths />
      <Book />
      <Recognition />
      <ContactPreview />
    </>
  );
}
