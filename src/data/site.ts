export type Locale = "en" | "si";
export type VideoCategory = "all" | "interviews" | "discussions" | "journalism";

export const sankathanaVideo = {
  id: "c9gxowcsSnw",
  slug: "sankathana",
  thumbnail: "/images/videos/sankathana.jpg",
  category: "discussions" as const,
  duration: "",
  title: {
    en: "Sankathana",
    si: "සංකථන",
  },
  subtitle: {
    en: "A long-form conversation on journalism and public life.",
    si: "ප්‍රවෘත්තිකරණය සහ පොදු ජීවිතය පිළිබඳ දීර්ඝ සංවාදයක්.",
  },
};

export const videos = [
  {
    id: "TAemrO-_ETw",
    slug: "interview",
    thumbnail: "/images/videos/interview.jpg",
    category: "interviews" as const,
    duration: "",
    title: {
      en: "Interview",
      si: "සම්මුඛ සාකච්ඡාව",
    },
    subtitle: {
      en: "An in-depth interview on media and broadcast journalism.",
      si: "මාධ්‍ය සහ විකාශන මාධ්‍ය කලාව පිළිබඳ ගැඹුරු සම්මුඛ සාකච්ඡාවක්.",
    },
  },
  {
    id: "DSr63DipgTQ",
    slug: "conversation-one",
    thumbnail: "/images/videos/conversation-1.jpg",
    category: "discussions" as const,
    duration: "",
    title: {
      en: "Conversation",
      si: "සංවාදය",
    },
    subtitle: {
      en: "Reflections on media ethics and modern newsroom practices.",
      si: "මාධ්‍ය ආචාරධර්ම සහ නවීන පුවත් කාමර භාවිතය පිළිබඳ මතකයන්.",
    },
  },
  {
    id: "HeV16oOInNQ",
    slug: "conversation-two",
    thumbnail: "/images/videos/conversation-2.jpg",
    category: "discussions" as const,
    duration: "",
    title: {
      en: "Conversation",
      si: "සංවාදය",
    },
    subtitle: {
      en: "A discussion on investigative reporting and public interest.",
      si: "ගවේෂණාත්මක මාධ්‍යකරණය සහ පොදු ජන උනන්දුව පිළිබඳ සාකච්ඡාවක්.",
    },
  },
];

export const timeline = [
  {
    year: "1997",
    title: { en: "Print journalism", si: "මුද්‍රිත මාධ්‍ය" },
    detail: {
      en: "Feature writer, Sunday Lankadeepa — one of Sri Lanka’s leading national newspapers.",
      si: "ඉරිදා ලංකාදීප — ජාතික පුවත්පතක විශේෂාංග ලේඛක.",
    },
  },
  {
    year: "1998",
    title: { en: "Diploma in Journalism", si: "ප්‍රවෘත්තිකරණ ඩිප්ලෝමාව" },
    detail: {
      en: "University of Colombo. Distinction, including the Lakshman Jayawardena Gold Medal.",
      si: "කොළඹ විශ්වවිද්‍යාලය. සාමාර්ථය සහ මහාචාර්ය ලක්ෂ්මන් ජයවර්ධන රන් පදක්කම.",
    },
  },
  {
    year: "2001",
    title: { en: "Sub-editor", si: "උප කතුවරයා" },
    detail: {
      en: "Aratuwa Business Newspaper, Colombo.",
      si: "අරටුව ව්‍යාපාරික පුවත්පත, කොළඹ.",
    },
  },
  {
    year: "2005",
    title: { en: "Digital media", si: "ඩිජිටල් මාධ්‍ය" },
    detail: {
      en: "Reporter and news editor, Max TV.",
      si: "Max TV හි වාර්තාකරු සහ ප්‍රවෘත්ති සංස්කාරක.",
    },
  },
  {
    year: "2007",
    title: { en: "News editor", si: "ප්‍රවෘත්ති සංස්කාරක" },
    detail: {
      en: "Isura FM Radio Channel, Colombo.",
      si: "ඉසුරා ගුවන්විදුලි නාලිකාව, කොළඹ.",
    },
  },
  {
    year: "2009",
    title: { en: "Derana", si: "දෙරණ" },
    detail: {
      en: "Joined Derana as news editor; later assistant manager, and now news manager.",
      si: "ප්‍රවෘත්ති සංස්කාරක ලෙස දෙරණට එක්විය. පසුව සහකාර කළමනාකරු, අද ප්‍රවෘත්ති කළමනාකරු.",
    },
  },
  {
    year: "2015",
    title: { en: "GIJC · Norway", si: "GIJC · නෝර්වේ" },
    detail: {
      en: "Global Investigative Journalism Conference, Lillehammer.",
      si: "ගෝලීය ගවේෂණාත්මක ප්‍රවෘත්තිකරණ සමුළුව, ලිලේහැමර්.",
    },
  },
  {
    year: "2017",
    title: { en: "GIJC · South Africa", si: "GIJC · දකුණු අප්‍රිකාව" },
    detail: {
      en: "10th Global Investigative Journalism Conference, Johannesburg.",
      si: "10 වැනි ගෝලීය ගවේෂණාත්මක ප්‍රවෘත්තිකරණ සමුළුව, ජොහැනස්බර්ග්.",
    },
  },
  {
    year: "2018",
    title: { en: "Postgraduate diploma", si: "පශ්චාත් උපාධි ඩිප්ලෝමාව" },
    detail: {
      en: "Mass Communication / Media Studies, University of Colombo.",
      si: "ජනමාධ්‍ය අධ්‍යයන, කොළඹ විශ්වවිද්‍යාලය.",
    },
  },
  {
    year: "2019",
    title: { en: "GIJC · Germany", si: "GIJC · ජර්මනිය" },
    detail: {
      en: "Global Investigative Journalism Conference, Hamburg. Master’s degree in Mass Media, University of Colombo.",
      si: "ගෝලීය ගවේෂණාත්මක ප්‍රවෘත්තිකරණ සමුළුව, හැම්බර්ග්. කොළඹ විශ්වවිද්‍යාලයෙන් ජනමාධ්‍ය ශාස්ත්‍රපති උපාධිය.",
    },
  },
  {
    year: "2022",
    title: { en: "Investigative training", si: "ගවේෂණ පුහුණුව" },
    detail: {
      en: "Certificate, Organized Crime and Corruption Project — investigative journalism.",
      si: "සංවිධානාත්මක අපරාධ සහ දූෂණ ව්‍යාපෘතිය — ගවේෂණාත්මක ප්‍රවෘත්තිකරණ සහතිකය.",
    },
  },
];

export const conferences = [
  {
    year: "2015",
    country: { en: "Norway", si: "නෝර්වේ" },
    city: { en: "Lillehammer", si: "ලිලේහැමර්" },
    event: {
      en: "Global Investigative Journalism Conference",
      si: "ගෝලීය ගවේෂණාත්මක ප්‍රවෘත්තිකරණ සමුළුව",
    },
    note: {
      en: "An international gathering of investigative reporters, editors, and trainers.",
      si: "ගවේෂණාත්මක වාර්තාකරුවන්, සංස්කාරකවරුන් සහ පුහුණුකරුවන්ගේ ජාත්‍යන්තර රැස්වීමකි.",
    },
  },
  {
    year: "2017",
    country: { en: "South Africa", si: "දකුණු අප්‍රිකාව" },
    city: { en: "Johannesburg", si: "ජොහැනස්බර්ග්" },
    event: {
      en: "10th Global Investigative Journalism Conference",
      si: "10 වැනි ගෝලීය ගවේෂණාත්මක ප්‍රවෘත්තිකරණ සමුළුව",
    },
    note: {
      en: "Conference biography published by GIJC17 records his work as News Manager at Derana.",
      si: "GIJC17 සමුළු චරිතාපදානය ඔහු දෙරණ ප්‍රවෘත්ති කළමනාකරු ලෙස සටහන් කරයි.",
    },
  },
  {
    year: "2019",
    country: { en: "Germany", si: "ජර්මනිය" },
    city: { en: "Hamburg", si: "හැම්බර්ග්" },
    event: {
      en: "Global Investigative Journalism Conference",
      si: "ගෝලීය ගවේෂණාත්මක ප්‍රවෘත්තිකරණ සමුළුව",
    },
    note: {
      en: "The third Global Investigative Journalism Conference in this sequence.",
      si: "මෙම අනුක්‍රමයේ තෙවැනි ගෝලීය ගවේෂණාත්මක ප්‍රවෘත්තිකරණ සමුළුව.",
    },
  },
];

export const investigations = [
  {
    kicker: { en: "Practice · Print & broadcast", si: "භාවිතය · මුද්‍රිත සහ විද්‍යුත්" },
    title: {
      en: "Reporting beneath the surface",
      si: "පෘෂ්ඨයට එහා වාර්තාකරණය",
    },
    summary: {
      en: "Across newspapers and television, his work has included investigative reporting — searching for facts that sit outside ordinary public attention.",
      si: "පුවත්පත් සහ රූපවාහිනිය හරහා, සාමාන්‍ය ප්‍රසිද්ධියෙන් බැහැරව තිබෙන කරුණු සෙවීම ඇතුළු ගවේෂණාත්මක වාර්තාකරණයක නිරත වී ඇත.",
    },
  },
  {
    kicker: { en: "International · 2015–2019", si: "ජාත්‍යන්තර · 2015–2019" },
    title: {
      en: "The investigative craft, in the world",
      si: "ලෝකය තුළ ගවේෂණ ශිල්පය",
    },
    summary: {
      en: "Participation in the Global Investigative Journalism Conferences in Norway, South Africa, and Germany placed local practice beside international method.",
      si: "නෝර්වේ, දකුණු අප්‍රිකාව සහ ජර්මනියේ ගෝලීය ගවේෂණාත්මක ප්‍රවෘත්තිකරණ සමුළුවලට සහභාගී වීමෙන් දේශීය භාවිතය ජාත්‍යන්තර ක්‍රමය අසල තැබිණි.",
    },
  },
  {
    kicker: { en: "Research · Publication", si: "පර්යේෂණ · ප්‍රකාශනය" },
    title: {
      en: "A global and national perspective",
      si: "ගෝලීය සහ ජාතික පර්යාලෝකයක්",
    },
    summary: {
      en: "His research book maps the history, theory, and practice of investigative journalism for professionals and students in Sri Lanka.",
      si: "ගවේෂණාත්මක ප්‍රවෘත්තිකරණයේ ඉතිහාසය, න්‍යාය සහ භාවිතය ශ්‍රී ලංකාවේ වෘත්තිකයන්ට සහ ශිෂ්‍යයන්ට මෙම පර්යේෂණ ග්‍රන්ථයෙන් සිතියම් ගැන්වේ.",
    },
  },
  {
    kicker: { en: "Study · 2022", si: "අධ්‍යයනය · 2022" },
    title: {
      en: "Organized crime and corruption",
      si: "සංවිධානාත්මක අපරාධ සහ දූෂණය",
    },
    summary: {
      en: "A dedicated certificate in investigative journalism through the Organized Crime and Corruption Project.",
      si: "සංවිධානාත්මක අපරාධ සහ දූෂණ ව්‍යාපෘතිය යටතේ ගවේෂණාත්මක ප්‍රවෘත්තිකරණය පිළිබඳ විශේෂිත සහතිකයකි.",
    },
  },
];

export const trainingTopics = [
  { en: "Investigative journalism", si: "ගවේෂණාත්මක ප්‍රවෘත්තිකරණය" },
  { en: "News reporting", si: "ප්‍රවෘත්ති වාර්තාකරණය" },
  { en: "Media ethics", si: "මාධ්‍ය ආචාර ධර්ම" },
  { en: "Editorial practice", si: "කතෘ භාවිතය" },
  { en: "Journalism training", si: "ප්‍රවෘත්තිකරණ පුහුණුව" },
];

export const disciplines = [
  { en: "Journalism", si: "ප්‍රවෘත්තිකරණය" },
  { en: "Training", si: "පුහුණුව" },
  { en: "Music", si: "සංගීතය" },
];

export const songs = [
  {
    number: "01",
    title: { en: "Midella Mal", si: "මිදෙල්ල මල්" },
    lyrics: { en: "Waruna Sanjeewa Liyanage", si: "වරුණ සංජීව ලියනගේ" },
  },
];

export const stats = [
  {
    value: "20+",
    label: { en: "Years in journalism", si: "ප්‍රවෘත්තිකරණයේ වසර" },
  },
  {
    value: "3",
    label: {
      en: "Global Investigative Journalism Conferences",
      si: "ගෝලීය ගවේෂණාත්මක ප්‍රවෘත්තිකරණ සමුළු",
    },
  },
  {
    value: "M.A.",
    label: { en: "Mass Media, University of Colombo", si: "ජනමාධ්‍ය, කොළඹ විශ්වවිද්‍යාලය" },
  },
  {
    value: "1998",
    label: {
      en: "Diploma in Journalism with distinction",
      si: "සාමාර්ථය සහිත ප්‍රවෘත්තිකරණ ඩිප්ලෝමාව",
    },
  },
];

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://waruna-sanjeewa-portfolio.vercel.app";

export const links = {
  email: "warunasliyanage@gmail.com",
  linkedin: "https://www.linkedin.com/in/waruna-liyanage",
  book: "https://grantha.lk/gaweshanathmaka-prawurthikaranaya-waruna-sanjeewa-sooriya.html",
  gijc: "https://gijc17.sched.com/warunasanjeewaliyanage",
};
