import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Projekte & Galerie",
  description: "Entdecken Sie unsere realisierten Küchenprojekte. Lassen Sie sich von modernen, klassischen und individuellen Küchen inspirieren.",
};

const PROJECTS = [
  {
    id: 1,
    title: "Moderne Inselküche in Weiß",
    style: "Modern",
    location: "Nürnberg",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    description: "Elegante weiße Küche mit großer Kochinsel und integrierten Miele-Geräten.",
  },
  {
    id: 2,
    title: "Elegante L-Küche mit Holzakzenten",
    style: "Klassisch",
    location: "Fürth",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80",
    description: "Harmonische Kombination aus weißen Fronten und warmen Holzelementen.",
  },
  {
    id: 3,
    title: "Familienküche mit Essplatz",
    style: "Modern",
    location: "Erlangen",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    description: "Offene Küche mit integriertem Essbereich für die ganze Familie.",
  },
  {
    id: 4,
    title: "Kompakte Stadtküche",
    style: "Minimalistisch",
    location: "Nürnberg",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80",
    description: "Clevere Raumnutzung auf kleinem Raum mit maximaler Funktionalität.",
  },
  {
    id: 5,
    title: "Landhausküche mit Charme",
    style: "Landhaus",
    location: "Schwabach",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
    description: "Gemütliche Landhausküche mit natürlichen Materialien und warmem Ambiente.",
  },
  {
    id: 6,
    title: "Design-Küche mit Kochinsel",
    style: "Modern",
    location: "Nürnberg",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    description: "Puristische Designküche mit Kochinsel und hochwertiger Ausstattung.",
  },
  {
    id: 7,
    title: "U-Küche für Hobbyköche",
    style: "Modern",
    location: "Fürth",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    description: "Großzügige U-Küche mit viel Arbeitsfläche und professioneller Ausstattung.",
  },
  {
    id: 8,
    title: "Offene Wohnküche",
    style: "Modern",
    location: "Erlangen",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80",
    description: "Nahtlose Integration von Küche und Wohnbereich für modernes Wohnen.",
  },
  {
    id: 9,
    title: "Klassische Einbauküche",
    style: "Klassisch",
    location: "Nürnberg",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    description: "Zeitlose Einbauküche mit durchdachter Raumnutzung.",
  },
];

export default function ProjektePage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="keller-section bg-secondary/30">
        <div className="keller-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="keller-label">Unsere Projekte</span>
            <h1 className="keller-heading-1 mt-4">
              Traumküchen zum Inspirieren
            </h1>
            <p className="keller-body mt-6">
              Entdecken Sie eine Auswahl unserer realisierten Küchenprojekte.
              Jede Küche ist ein Unikat – individuell geplant und perfekt umgesetzt.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="keller-section bg-background">
        <div className="keller-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
                      {project.style}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="keller-section bg-secondary/30">
        <div className="keller-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="keller-heading-2">
              Lassen Sie sich inspirieren
            </h2>
            <p className="keller-body mt-4">
              In unserem Showroom können Sie noch mehr Küchen live erleben.
              Vereinbaren Sie einen Beratungstermin und planen Sie Ihre Traumküche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/termin-buchen">
                  <Calendar className="h-5 w-5 mr-2" />
                  Beratung vereinbaren
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/showroom">
                  Showroom besuchen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
