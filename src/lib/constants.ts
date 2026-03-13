export const SITE_CONFIG = {
  name: "Keller Küchenwelt",
  description: "Ihr Küchenstudio in Nürnberg – Individuelle Küchenplanung, hochwertige Marken und persönliche Beratung.",
  url: "https://keller-kuechenwelt.de",
  ogImage: "/og-image.jpg",
  locale: "de_DE",
};

export const BUSINESS_INFO = {
  name: "Keller Küchenwelt",
  phone: "0911 89314510",
  phoneFormatted: "+49 911 89314510",
  email: "info@keller-kuechenwelt.de",
  address: {
    street: "Musterstraße 123",
    city: "Nürnberg",
    zip: "90402",
    country: "Deutschland",
  },
  hours: {
    weekdays: "Mo–Fr: 10:00 – 18:00",
    saturday: "Sa: 10:00 – 14:00",
    sunday: "So: geschlossen",
  },
  serviceRadius: "100 km rund um Nürnberg und Umgebung",
  googleMapsUrl: "https://maps.google.com/?q=Nürnberg",
  founded: 2015,
  experience: "10+",
  projects: "500+",
  rating: "4.8",
};

export const NAVIGATION = [
  { label: "Küchen", href: "/kuechen" },
  { label: "Marken", href: "/marken" },
  { label: "Projekte", href: "/projekte" },
  { label: "Showroom", href: "/showroom" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export const FOOTER_LINKS = {
  services: [
    { label: "Küchenplanung", href: "/kuechen/kuechenplanung" },
    { label: "Küchenverkauf", href: "/kuechen/kuechenverkauf" },
    { label: "Lieferung & Montage", href: "/kuechen/montage" },
    { label: "Aufmaß", href: "/kuechen/aufmass" },
    { label: "3D Planung", href: "/kuechen/3d-planung" },
  ],
  kitchenTypes: [
    { label: "Moderne Küchen", href: "/kuechen/moderne-kuechen" },
    { label: "Landhausküchen", href: "/kuechen/landhauskuechen" },
    { label: "L-Küchen", href: "/kuechen/l-kuechen" },
    { label: "U-Küchen", href: "/kuechen/u-kuechen" },
    { label: "Inselküchen", href: "/kuechen/insel-kuechen" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "FAQ", href: "/faq" },
  ],
};

export const KITCHEN_BRANDS = [
  { name: "LEICHT", logo: "/brands/leicht.svg" },
  { name: "NOBILIA", logo: "/brands/nobilia.svg" },
  { name: "PINO", logo: "/brands/pino.svg" },
  { name: "OSTER", logo: "/brands/oster.svg" },
];

export const APPLIANCE_BRANDS = [
  { name: "Miele", logo: "/brands/miele.svg" },
  { name: "Siemens", logo: "/brands/siemens.svg" },
  { name: "Neff", logo: "/brands/neff.svg" },
  { name: "Smeg", logo: "/brands/smeg.svg" },
  { name: "Novy", logo: "/brands/novy.svg" },
  { name: "Berbel", logo: "/brands/berbel.svg" },
  { name: "Blanco", logo: "/brands/blanco.svg" },
  { name: "Schock", logo: "/brands/schock.svg" },
];

export const SERVICES = [
  {
    id: "planung",
    title: "Individuelle Küchenplanung",
    shortTitle: "Küchenplanung",
    description: "Persönliche Beratung und Planung einer maßgeschneiderten Küche nach Ihren Wünschen.",
    icon: "Ruler",
  },
  {
    id: "verkauf",
    title: "Küchenverkauf",
    shortTitle: "Küchenverkauf",
    description: "Verkauf hochwertiger Küchen verschiedener Marken und Designs.",
    icon: "ShoppingBag",
  },
  {
    id: "montage",
    title: "Lieferung und Montage",
    shortTitle: "Lieferung & Montage",
    description: "Professionelle Lieferung und fachgerechte Küchenmontage bei Ihnen vor Ort.",
    icon: "Truck",
  },
];

export const TRUST_ITEMS = [
  { value: "10+", label: "Jahre Erfahrung", icon: "Award" },
  { value: "500+", label: "Küchenprojekte", icon: "Home" },
  { value: "4.8", label: "Sterne Bewertung", icon: "Star" },
  { value: "100%", label: "Komplettservice", icon: "CheckCircle" },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Beratung",
    description: "Persönliche Beratung im Showroom oder bei Ihnen zu Hause",
  },
  {
    step: 2,
    title: "Planung",
    description: "Individuelle 3D-Planung Ihrer Traumküche",
  },
  {
    step: 3,
    title: "Montage",
    description: "Professionelle Lieferung und fachgerechte Montage",
  },
];

export const WHY_US = [
  {
    title: "Persönliche Beratung",
    description: "Individuelle Betreuung durch erfahrene Küchenberater",
    icon: "Users",
  },
  {
    title: "Individuelle Planung",
    description: "Maßgeschneiderte Lösungen für jeden Raum",
    icon: "PenTool",
  },
  {
    title: "Hochwertige Marken",
    description: "Nur Premium-Marken für Qualität und Langlebigkeit",
    icon: "Award",
  },
  {
    title: "Komplettservice",
    description: "Von der Planung bis zur Montage – alles aus einer Hand",
    icon: "Package",
  },
  {
    title: "Showroom in Nürnberg",
    description: "Erleben Sie Küchen live in unserem Ausstellungsraum",
    icon: "Building",
  },
  {
    title: "10+ Jahre Erfahrung",
    description: "Profitieren Sie von unserer langjährigen Expertise",
    icon: "Clock",
  },
];

export const SEO_CITIES = [
  "Nürnberg",
  "Fürth",
  "Erlangen",
  "Schwabach",
  "Lauf an der Pegnitz",
];

export const KITCHEN_TYPES = [
  { slug: "moderne-kuechen", name: "Moderne Küchen" },
  { slug: "landhauskuechen", name: "Landhausküchen" },
  { slug: "l-kuechen", name: "L-Küchen" },
  { slug: "u-kuechen", name: "U-Küchen" },
  { slug: "insel-kuechen", name: "Inselküchen" },
];
