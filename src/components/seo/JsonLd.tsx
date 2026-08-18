import { links, siteUrl } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Waruna Sanjeewa Liyanage",
        alternateName: ["Waruna S. Liyanage", "වරුණ සංජීව ලියනගේ"],
        inLanguage: ["en", "si"],
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Waruna Sanjeewa Liyanage",
        alternateName: ["Waruna S. Liyanage", "වරුණ සංජීව ලියනගේ", "වරුණ S. ලියනගේ"],
        jobTitle: "Journalist",
        description:
          "Sri Lankan journalist, author, and media trainer. News Manager at Derana, with more than two decades in print, television, and investigative journalism.",
        url: siteUrl,
        image: `${siteUrl}/images/portrait.jpg`,
        email: `mailto:${links.email}`,
        nationality: "LK",
        sameAs: [links.linkedin, links.book, links.gijc],
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: "Waruna Sanjeewa Liyanage — Digital Journalism Archive",
        about: { "@id": `${siteUrl}/#person` },
        mainEntity: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
