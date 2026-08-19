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
        alternateName: ["වරුණ සංජීව ලියනගේ"],
        inLanguage: ["en", "si"],
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Waruna Sanjeewa Liyanage",
        alternateName: ["වරුණ සංජීව ලියනගේ"],
        jobTitle: "Journalist, media trainer, and musician",
        description:
          "Sri Lankan journalist, media trainer, and musician. News Manager at Derana, with more than two decades in print and electronic journalism, teaching, and music.",
        url: siteUrl,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/profile.jpg`,
          width: 1200,
          height: 1200,
          caption: "Waruna Sanjeewa Liyanage",
        },
        email: `mailto:${links.email}`,
        nationality: "LK",
        sameAs: [links.linkedin, links.book, links.gijc],
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: "Waruna Sanjeewa Liyanage — Journalism, Training & Music",
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
