import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Calendar } from "lucide-react";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Küchen",
  description: "Entdecken Sie unsere hochwertigen Küchen in verschiedenen Stilen: Modern, Landhaus, L-Küchen, U-Küchen und Inselküchen. Individuelle Planung in Nürnberg.",
};

const KITCHEN_TYPES = [
  {
    slug: "moderne-kuechen",
    name: "Moderne Küchen",
    description: "Klare Linien, hochwertige Materialien und innovative Technik für zeitgemäßes Wohnen.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    features: ["Grifflos", "Hochglanz", "Integrierte Geräte", "Smart Home"],
  },
  {
    slug: "landhauskuechen",
    name: "Landhausküchen",
    description: "Gemütlichkeit und Wärme mit natürlichen Materialien und traditionellem Charme.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    features: ["Massivholz", "Kassettenfronten", "Natürliche Materialien", "Warm & gemütlich"],
  },
  {
    slug: "l-kuechen",
    name: "L-Küchen",
    description: "Die perfekte Lösung für effiziente Raumnutzung und optimale Arbeitswege.",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
    features: ["Platzsparend", "Ergonomisch", "Flexibel", "Praktisch"],
  },
  {
    slug: "u-kuechen",
    name: "U-Küchen",
    description: "Maximale Arbeitsfläche und Stauraum für anspruchsvolle Köche.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    features: ["Viel Stauraum", "Große Arbeitsfläche", "Drei Arbeitszonen", "Optimal für Familien"],
  },
  {
    slug: "insel-kuechen",
    name: "Inselküchen",
    description: "Der Mittelpunkt Ihres Zuhauses – kochen, essen und leben in einem.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    features: ["Kommunikativ", "Großzügig", "Multifunktional", "Design-Highlight"],
  },
];

const SERVICES = [
  {
    title: "Individuelle Küchenplanung",
    description: "Wir planen Ihre Küche nach Maß – abgestimmt auf Ihren Raum und Ihre Bedürfnisse.",
    href: "/kuechen/kuechenplanung",
  },
  {
    title: "3D Visualisierung",
    description: "Sehen Sie Ihre Traumküche vor der Fertigung in fotorealistischer 3D-Darstellung.",
    href: "/kuechen/3d-planung",
  },
  {
    title: "Aufmaß vor Ort",
    description: "Wir kommen zu Ihnen und nehmen alle Maße professionell auf.",
    href: "/kuechen/aufmass",
  },
  {
    title: "Lieferung & Montage",
    description: "Komplettservice von der Lieferung bis zur fachgerechten Montage.",
    href: "/kuechen/montage",
  },
];

export default function KuechenPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="keller-section bg-secondary/30">
        <div className="keller-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="keller-label">Unsere Küchen</span>
            <h1 className="keller-heading-1 mt-4">
              Küchen für jeden Geschmack
            </h1>
            <p className="keller-body mt-6">
              Entdecken Sie unsere vielfältige Auswahl an hochwertigen Küchen.
              Von modern bis klassisch – wir finden gemeinsam Ihre Traumküche.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
              <Link href="/termin-buchen">
                <Calendar className="h-5 w-5 mr-2" />
                Beratung vereinbaren
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Kitchen Types */}
      <section className="keller-section bg-background">
        <div className="keller-container">
          <div className="space-y-16">
            {KITCHEN_TYPES.map((kitchen, index) => (
              <div
                key={kitchen.slug}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={kitchen.image}
                      alt={kitchen.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="keller-heading-3">{kitchen.name}</h2>
                  <p className="keller-body">{kitchen.description}</p>

                  <ul className="grid grid-cols-2 gap-3">
                    {kitchen.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="outline" className="gap-2">
                    <Link href={`/kuechen/${kitchen.slug}`}>
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="keller-section bg-secondary/30">
        <div className="keller-container">
          <div className="text-center mb-12">
            <span className="keller-label">Unsere Leistungen</span>
            <h2 className="keller-heading-2 mt-4">
              Alles aus einer Hand
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-4 text-primary font-medium text-sm flex items-center gap-1">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
