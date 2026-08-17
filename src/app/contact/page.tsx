"use client";

import { ContactPreview } from "@/components/home/ContactPreview";
import { Training } from "@/components/home/Training";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactPreview />
      <Training />
    </div>
  );
}
