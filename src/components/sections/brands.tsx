"use client";

import Link from "next/link";
import { ScrollReveal, FadeIn } from "@/components/ui/scroll-animation";

type Brand = {
  name: string;
  id: string;
  logo?: string;
  initials?: string;
};

// Kitchen brands
const KITCHEN_BRANDS: Brand[] = [
  { id: "leicht", name: "LEICHT", logo: "https://ext.same-assets.com/2294232392/2530033921.svg" },
  { id: "nobilia", name: "NOBILIA", logo: "https://ext.same-assets.com/2294232392/62883864.svg" },
  { id: "haecker", name: "Häcker", logo: "https://ext.same-assets.com/2294232392/215878612.svg" },
  { id: "pino", name: "PINO", initials: "PINO" },
  { id: "oster", name: "OSTER", initials: "OSTER" },
];

// Appliance brands
const APPLIANCE_BRANDS: Brand[] = [
  { id: "miele", name: "Miele", logo: "https://ext.same-assets.com/2294232392/593742276.svg" },
  { id: "bosch", name: "Bosch", logo: "https://ext.same-assets.com/2294232392/120290776.svg" },
  { id: "neff", name: "Neff", logo: "https://ext.same-assets.com/2294232392/1656656089.svg" },
  { id: "siemens", name: "Siemens", logo: "https://ext.same-assets.com/2294232392/3634581733.svg" },
  { id: "gaggenau", name: "Gaggenau", logo: "https://ext.same-assets.com/2294232392/1372019582.svg" },
  { id: "franke", name: "Franke", logo: "https://ext.same-assets.com/2294232392/337115100.svg" },
  { id: "blanco", name: "Blanco", logo: "https://ext.same-assets.com/2294232392/4282525060.svg" },
  { id: "bora", name: "Bora", logo: "https://ext.same-assets.com/2294232392/1863130809.svg" },
];

// Combine all brands for the marquee
const ALL_BRANDS = [...KITCHEN_BRANDS, ...APPLIANCE_BRANDS];

function BrandItem({ brand }: { brand: Brand }) {
  const content = brand.logo ? (
    <div className="flex items-center justify-center h-12 md:h-16 px-8 md:px-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
      <img
        src={brand.logo}
        alt={brand.name}
        className="h-full w-auto max-w-[120px] md:max-w-[150px] object-contain"
      />
    </div>
  ) : (
    <div className="flex items-center justify-center h-12 md:h-16 px-8 md:px-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
      <span className="text-xl md:text-2xl font-bold tracking-wider text-muted-foreground hover:text-foreground">
        {brand.initials || brand.name}
      </span>
    </div>
  );

  return (
    <Link href={`/marken?brand=${brand.id}`} className="flex-shrink-0">
      {content}
    </Link>
  );
}

export function Brands() {
  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...ALL_BRANDS, ...ALL_BRANDS];

  return (
    <section className="py-8 md:py-12 bg-card border-y border-border overflow-hidden">
      {/* Marquee Container */}
      <FadeIn delay={200}>
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {duplicatedBrands.map((brand, index) => (
              <BrandItem key={`${brand.name}-${index}`} brand={brand} />
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Subtitle with link */}
      <ScrollReveal delay={400} direction="up" distance={20}>
        <p className="text-center text-xs text-muted-foreground mt-6 px-4">
          <Link href="/marken" className="hover:text-primary transition-colors">
            Hochwertige Marken für Ihre Traumküche →
          </Link>
        </p>
      </ScrollReveal>
    </section>
  );
}
