"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Check,
  Star,
  Award,
  Sparkles,
  ChevronRight,
  ArrowRight,
  MousePointerClick,
  Armchair,
  Zap,
} from "lucide-react";

// Möbelhersteller (Furniture/Kitchen brands)
const MOEBEL_BRANDS = [
  {
    id: "leicht",
    name: "LEICHT",
    logo: "https://ext.same-assets.com/2294232392/2530033921.svg",
    category: "Küchenmarke",
    tagline: "Pure Ästhetik. Kompromisslose Qualität.",
    description:
      "LEICHT Küchen stehen seit 1928 für kompromisslose Qualität und zeitloses Design. Als einer der führenden Premium-Küchenhersteller Deutschlands verbindet LEICHT traditionelles Handwerk mit innovativer Technologie.",
    features: [
      "Made in Germany",
      "Premium-Qualität seit 1928",
      "Individuelle Lösungen",
      "Nachhaltige Produktion",
      "Innovative Oberflächen",
      "Präzise Verarbeitung",
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    color: "#3A3A3A",
    gradient: "from-stone-700 to-stone-500",
  },
  {
    id: "nobilia",
    name: "NOBILIA",
    logo: "https://ext.same-assets.com/2294232392/62883864.svg",
    category: "Küchenmarke",
    tagline: "Europas größter Küchenhersteller.",
    description:
      "Nobilia ist Europas größter Küchenhersteller und steht für ein hervorragendes Preis-Leistungs-Verhältnis mit maximaler Qualität. Mit modernster Fertigungstechnologie und kurzen Lieferzeiten.",
    features: [
      "Europas Nr. 1",
      "Hervorragendes Preis-Leistung",
      "Kurze Lieferzeiten",
      "Große Auswahl",
      "Deutsche Qualität",
      "Moderne Fertigung",
    ],
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
    color: "#C8A97E",
    gradient: "from-amber-600 to-amber-500",
  },
  {
    id: "haecker",
    name: "Häcker",
    logo: "https://ext.same-assets.com/2294232392/215878612.svg",
    category: "Küchenmarke",
    tagline: "Küchen. Erleben. Leben.",
    description:
      "Häcker Küchen verbindet Innovation mit Tradition. Als familiengeführtes Unternehmen steht Häcker für höchste Qualitätsansprüche und individuelle Küchenlösungen.",
    features: [
      "Familienunternehmen",
      "Individuelle Lösungen",
      "Hochwertige Materialien",
      "Innovative Designs",
      "Nachhaltig produziert",
      "Made in Germany",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    color: "#8B7355",
    gradient: "from-amber-700 to-amber-500",
  },
];

// Elektronikhersteller (Electronics brands)
const ELEKTRONIK_BRANDS = [
  {
    id: "miele",
    name: "Miele",
    logo: "https://ext.same-assets.com/2294232392/593742276.svg",
    category: "Geräte",
    tagline: "Immer besser.",
    description:
      "Miele steht weltweit für höchste Qualität und Langlebigkeit. Die Premium-Hausgeräte von Miele setzen Maßstäbe in Technologie, Bedienkomfort und Design.",
    features: [
      "Premium-Qualität",
      "20 Jahre Lebensdauer",
      "Innovative Technologie",
      "Energieeffizienz",
      "Made in Germany",
      "Exzellenter Service",
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    color: "#8B5A2B",
    gradient: "from-amber-800 to-amber-600",
  },
  {
    id: "bosch",
    name: "Bosch",
    logo: "https://ext.same-assets.com/2294232392/120290776.svg",
    category: "Geräte",
    tagline: "Technik fürs Leben.",
    description:
      "Bosch Hausgeräte kombinieren deutsche Ingenieurskunst mit innovativer Technologie. Zuverlässigkeit und Effizienz für Ihren Küchenalltag.",
    features: [
      "Deutsche Ingenieurskunst",
      "Zuverlässig & effizient",
      "Smart Home Integration",
      "Energiesparend",
      "Langlebig",
      "Innovativ",
    ],
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
    color: "#C8A97E",
    gradient: "from-amber-700 to-yellow-600",
  },
  {
    id: "siemens",
    name: "Siemens",
    logo: "https://ext.same-assets.com/2294232392/3634581733.svg",
    category: "Geräte",
    tagline: "Die Zukunft zieht ein.",
    description:
      "Siemens Hausgeräte stehen für fortschrittliche Technologie und intelligente Vernetzung. Perfekte Integration in Ihre moderne Küche.",
    features: [
      "Home Connect",
      "Intelligente Steuerung",
      "Premium Design",
      "Energieeffizienz",
      "Innovative Features",
      "Deutsche Qualität",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    color: "#6B5B4F",
    gradient: "from-stone-600 to-stone-400",
  },
  {
    id: "neff",
    name: "Neff",
    logo: "https://ext.same-assets.com/2294232392/1656656089.svg",
    category: "Geräte",
    tagline: "Leidenschaft fürs Kochen.",
    description:
      "Neff ist die Marke für alle, die das Kochen lieben. Innovative Einbaugeräte mit cleveren Features für anspruchsvolle Hobbyköche.",
    features: [
      "Slide&Hide Backofen",
      "Für Kochbegeisterte",
      "Innovative Features",
      "Perfekte Ergebnisse",
      "Einfache Bedienung",
      "Made in Germany",
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    color: "#D4A574",
    gradient: "from-amber-500 to-yellow-400",
  },
  {
    id: "gaggenau",
    name: "Gaggenau",
    logo: "https://ext.same-assets.com/2294232392/1372019582.svg",
    category: "Geräte",
    tagline: "Die Unterschrift des Profis.",
    description:
      "Gaggenau steht für Luxus und Perfektion. Die professionellen Küchengeräte erfüllen höchste Ansprüche und sind die Wahl von Profiköchen weltweit.",
    features: [
      "Profi-Qualität",
      "Luxus-Segment",
      "Handwerkliche Tradition",
      "Zeitloses Design",
      "Höchste Präzision",
      "Exklusiv",
    ],
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
    color: "#3A3A3A",
    gradient: "from-stone-800 to-stone-600",
  },
  {
    id: "franke",
    name: "Franke",
    logo: "https://ext.same-assets.com/2294232392/337115100.svg",
    category: "Spülen & Armaturen",
    tagline: "Make it wonderful.",
    description:
      "Franke ist der Spezialist für hochwertige Küchenspülen und Armaturen. Schweizer Qualität und innovatives Design für Ihre Küche.",
    features: [
      "Schweizer Qualität",
      "Innovatives Design",
      "Langlebige Materialien",
      "Hygienisch",
      "Pflegeleicht",
      "Große Auswahl",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    color: "#5C4D3C",
    gradient: "from-stone-700 to-stone-500",
  },
  {
    id: "blanco",
    name: "Blanco",
    logo: "https://ext.same-assets.com/2294232392/4282525060.svg",
    category: "Spülen & Armaturen",
    tagline: "Pure Freude an Wasser.",
    description:
      "BLANCO ist der führende Hersteller für Premium-Spülen und Armaturen. Deutsche Ingenieurskunst für perfekte Funktionalität.",
    features: [
      "Premium-Spülen",
      "Silgranit Material",
      "Made in Germany",
      "Pflegeleicht",
      "Langlebig",
      "Großes Sortiment",
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    color: "#8B7355",
    gradient: "from-amber-600 to-amber-400",
  },
  {
    id: "bora",
    name: "Bora",
    logo: "https://ext.same-assets.com/2294232392/1863130809.svg",
    category: "Dunstabzug",
    tagline: "Kochen ohne Dunstabzugshaube.",
    description:
      "BORA revolutioniert das Kochen mit innovativen Kochfeldabzügen. Der Dunst wird dort abgesaugt, wo er entsteht - direkt am Kochfeld.",
    features: [
      "Kochfeldabzug",
      "Revolution im Kochen",
      "Freie Sicht",
      "Leistungsstark",
      "Leise",
      "Award-winning Design",
    ],
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
    color: "#2C2C2C",
    gradient: "from-stone-900 to-stone-700",
  },
];

// Combined brands for reference
const ALL_BRANDS = [...MOEBEL_BRANDS, ...ELEKTRONIK_BRANDS];

function MarkenPageContent() {
  const searchParams = useSearchParams();
  const highlightedBrand = searchParams.get("brand");
  const [activeBrandId, setActiveBrandId] = useState<string | null>(highlightedBrand);
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const brandRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const sidebarRef = useRef<HTMLDivElement>(null);
  const brandsSectionRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Track scroll progress and sidebar visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);

      // Check if brands section is in view for sidebar visibility
      if (brandsSectionRef.current) {
        const sectionRect = brandsSectionRef.current.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const sectionBottom = sectionRect.bottom;

        // Show sidebar when first brand is visible and hide when section ends
        const shouldShow = sectionTop <= window.innerHeight * 0.3 && sectionBottom >= window.innerHeight * 0.5;
        setShowSidebar(shouldShow);
      }

      // Find which brand is currently in view
      const brandEntries = Object.entries(brandRefs.current);
      for (const [brandId, ref] of brandEntries) {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveBrandId(brandId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (highlightedBrand && brandRefs.current[highlightedBrand]) {
      setTimeout(() => {
        brandRefs.current[highlightedBrand]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setActiveBrandId(highlightedBrand);
      }, 500);
    }
  }, [highlightedBrand, isLoaded]);

  const scrollToBrand = (brandId: string) => {
    if (brandRefs.current[brandId]) {
      brandRefs.current[brandId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setActiveBrandId(brandId);
    }
  };

  // Render a brand card
  const renderBrandCard = (brand: typeof MOEBEL_BRANDS[0], index: number) => (
    <div
      key={brand.id}
      ref={(el) => {
        brandRefs.current[brand.id] = el;
      }}
      className={cn(
        "group relative scroll-mt-32",
        highlightedBrand === brand.id && "animate-pulse-once"
      )}
    >
      {/* Brand card with 3D effect */}
      <div
        className={cn(
          "relative rounded-[2rem] overflow-hidden transition-all duration-700",
          "transform-gpu perspective-1000",
          activeBrandId === brand.id && "scale-[1.02]"
        )}
        style={{
          transform: activeBrandId === brand.id ? "translateY(-8px)" : "translateY(0)",
        }}
      >
        {/* Highlighted indicator */}
        {highlightedBrand === brand.id && (
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-[2rem] animate-pulse z-0" />
        )}

        <div className={cn(
          "relative bg-card border border-border rounded-[2rem] overflow-hidden",
          activeBrandId === brand.id && "border-primary/50 shadow-2xl shadow-primary/10"
        )}>
          {/* Gradient header */}
          <div className={cn("h-2 bg-gradient-to-r", brand.gradient)} />

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image section */}
            <div className={cn(
              "relative aspect-square lg:aspect-auto",
              index % 2 === 1 && "lg:order-2"
            )}>
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay gradient */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card via-card/50 to-transparent",
                index % 2 === 1 && "lg:bg-gradient-to-l"
              )} />

              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <span
                  className="px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg backdrop-blur-sm"
                  style={{ backgroundColor: `${brand.color}e0` }}
                >
                  {brand.category}
                </span>
              </div>

              {/* Brand number */}
              <div className="absolute bottom-6 right-6 text-8xl font-black text-white/10">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Content section */}
            <div className={cn(
              "relative p-8 lg:p-12 flex flex-col justify-center",
              index % 2 === 1 && "lg:order-1"
            )}>
              {/* Logo & rating */}
              <div className="flex items-start justify-between mb-6">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-12 w-auto object-contain dark:invert dark:brightness-200"
                  />
                ) : (
                  <h2 className="text-4xl font-bold">{brand.name}</h2>
                )}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Tagline */}
              <p className={cn(
                "text-2xl lg:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r",
                brand.gradient
              )}>
                {brand.tagline}
              </p>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {brand.description}
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {brand.features.map((feature, i) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2.5 text-sm"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${brand.color}20` }}
                    >
                      <Check className="h-3 w-3" style={{ color: brand.color }} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className={cn("bg-gradient-to-r text-white hover:opacity-90", brand.gradient)}
                >
                  <Link href="/termin-buchen">
                    <Calendar className="h-4 w-4 mr-2" />
                    {brand.name} erleben
                  </Link>
                </Button>
                <Button asChild variant="outline" className="group/btn">
                  <Link href={`/kontakt?brand=${brand.id}`}>
                    Beratung anfragen
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border z-50">
        <div
          className="h-full bg-gradient-to-r from-primary via-primary to-primary/70 transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Hero Section - Modern Minimal */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-primary/3 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 animate-spin" style={{ animationDuration: "60s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/5 animate-spin" style={{ animationDuration: "40s", animationDirection: "reverse" }} />
        </div>

        <div className="keller-container relative">
          <div
            className={cn(
              "max-w-4xl mx-auto text-center transition-all duration-1000",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Premium Partner seit 1990</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="block">Unsere</span>
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/60">
                  Marken
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Entdecken Sie die führenden Marken der Küchenbranche. Wählen Sie eine Marke aus, um mehr zu erfahren.
            </p>

            {/* Interactive brand dots */}
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {ALL_BRANDS.map((brand, index) => (
                <button
                  key={brand.id}
                  onClick={() => scrollToBrand(brand.id)}
                  onMouseEnter={() => setHoveredBrand(brand.id)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  className={cn(
                    "group relative h-14 px-4 rounded-2xl border transition-all duration-300",
                    activeBrandId === brand.id
                      ? "bg-primary/10 border-primary scale-105"
                      : "bg-card border-border hover:border-primary/50 hover:bg-primary/5"
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className={cn(
                        "h-6 w-auto object-contain transition-all duration-300",
                        activeBrandId === brand.id ? "opacity-100" : "opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                      )}
                    />
                  ) : (
                    <span className="text-sm font-semibold">{brand.name}</span>
                  )}

                  {/* Tooltip */}
                  {hoveredBrand === brand.id && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs rounded-lg whitespace-nowrap animate-fade-in z-20">
                      {brand.name}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
              <MousePointerClick className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">Scrollen Sie für Details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar - Grid Layout */}
      <div className="relative py-16 md:py-24" ref={brandsSectionRef}>
        <div className="flex">
          {/* Main Content - Centered with max width */}
          <div className="flex-1 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto xl:mr-72">
            {/* Section 1: Möbelhersteller */}
            <div className="mb-24">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-12">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
                  <Armchair className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Unsere Möbelhersteller</h2>
                  <p className="text-muted-foreground mt-1">Premium Küchenmöbel aus Deutschland</p>
                </div>
              </div>

              {/* Möbel Brands Grid */}
              <div className="space-y-24">
                {MOEBEL_BRANDS.map((brand, index) => renderBrandCard(brand, index))}
              </div>
            </div>

            {/* Section 2: Elektronikhersteller */}
            <div>
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-12">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
                  <Zap className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Unsere Elektronikhersteller</h2>
                  <p className="text-muted-foreground mt-1">Hochwertige Hausgeräte und Technik</p>
                </div>
              </div>

              {/* Elektronik Brands Grid */}
              <div className="space-y-24">
                {ELEKTRONIK_BRANDS.map((brand, index) => renderBrandCard(brand, index))}
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Fixed on right side, appears with first brand */}
        <div
          className={cn(
            "hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 z-30 w-56 transition-all duration-500",
            showSidebar
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10 pointer-events-none"
          )}
        >
          <div ref={sidebarRef} className="bg-card/95 backdrop-blur-xl rounded-2xl border border-border p-4 shadow-xl">
            {/* Möbelhersteller Section */}
            <div className="mb-4">
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <Armchair className="h-3.5 w-3.5" />
                <span>Möbelhersteller</span>
              </div>
              <div className="space-y-1">
                {MOEBEL_BRANDS.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => scrollToBrand(brand.id)}
                    className={cn(
                      "group flex items-center gap-3 w-full px-3 py-2 rounded-xl transition-all duration-300 text-left",
                      activeBrandId === brand.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    )}
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        activeBrandId === brand.id ? "bg-foreground" : "bg-border"
                      )}
                      style={{ backgroundColor: activeBrandId === brand.id ? undefined : brand.color }}
                    />
                    <span className="text-sm font-medium truncate">{brand.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border my-3" />

            {/* Elektronikhersteller Section */}
            <div>
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <Zap className="h-3.5 w-3.5" />
                <span>Elektronikhersteller</span>
              </div>
              <div className="space-y-1">
                {ELEKTRONIK_BRANDS.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => scrollToBrand(brand.id)}
                    className={cn(
                      "group flex items-center gap-3 w-full px-3 py-2 rounded-xl transition-all duration-300 text-left",
                      activeBrandId === brand.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    )}
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        activeBrandId === brand.id ? "bg-foreground" : "bg-border"
                      )}
                      style={{ backgroundColor: activeBrandId === brand.id ? undefined : brand.color }}
                    />
                    <span className="text-sm font-medium truncate">{brand.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/90" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-primary/30 to-transparent" />
        </div>

        <div className="keller-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-background/10 mb-8">
              <Award className="h-10 w-10 text-background" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-background mb-6">
              Erleben Sie unsere Marken live
            </h2>

            <p className="text-xl text-background/70 mb-10 max-w-xl mx-auto">
              In unserem Showroom in Nürnberg können Sie alle Marken persönlich
              erleben und sich von der Qualität überzeugen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 h-14 px-8 text-base"
              >
                <Link href="/termin-buchen">
                  <Calendar className="h-5 w-5 mr-2" />
                  Showroom-Termin buchen
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border-2 border-background/40 text-background hover:bg-background/10 hover:border-background/60 h-14 px-8 text-base"
              >
                <Link href="/showroom" className="flex items-center">
                  Showroom entdecken
                  <ChevronRight className="h-5 w-5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function MarkenPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    }>
      <MarkenPageContent />
    </Suspense>
  );
}
