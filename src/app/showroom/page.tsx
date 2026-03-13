import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Phone, Check, Navigation } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Showroom",
  description: `Besuchen Sie unseren Küchen-Showroom in ${BUSINESS_INFO.address.city}. Über 20 Ausstellungsküchen auf 500m². Erleben Sie Premium-Küchen live.`,
};

const SHOWROOM_FEATURES = [
  "Über 20 Ausstellungsküchen",
  "500m² Ausstellungsfläche",
  "Premium-Marken live erleben",
  "Hochwertige Geräte testen",
  "Individuelle Beratung",
  "Kostenlose Parkplätze",
];

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Showroom Moderne Küche",
  },
  {
    src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
    alt: "Showroom Klassische Küche",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Showroom Familienküche",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Showroom Designküche",
  },
];

export default function ShowroomPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="keller-section bg-secondary/30">
        <div className="keller-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="keller-label">Unser Showroom</span>
            <h1 className="keller-heading-1 mt-4">
              Küchen zum Anfassen
            </h1>
            <p className="keller-body mt-6">
              Erleben Sie Ihre Traumküche live in unserem modernen Showroom.
              Auf über 500m² präsentieren wir Ihnen ausgewählte Premium-Küchen.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
              <Link href="/termin-buchen">
                <Calendar className="h-5 w-5 mr-2" />
                Showroom-Termin buchen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="keller-section bg-background">
        <div className="keller-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {IMAGES.map((image, index) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-xl ${
                  index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes={index === 0 ? "50vw" : "25vw"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Info */}
      <section className="keller-section bg-secondary/30">
        <div className="keller-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Features */}
            <div>
              <h2 className="keller-heading-2 mb-8">
                Was Sie erwartet
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {SHOWROOM_FEATURES.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                  >
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6">Besuchen Sie uns</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-muted-foreground">
                      {BUSINESS_INFO.address.street}
                      <br />
                      {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Öffnungszeiten</p>
                    <p className="text-muted-foreground">
                      {BUSINESS_INFO.hours.weekdays}
                      <br />
                      {BUSINESS_INFO.hours.saturday}
                      <br />
                      {BUSINESS_INFO.hours.sunday}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                      className="text-primary hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-4 space-y-3 border-t border-border">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/termin-buchen">
                      <Calendar className="h-4 w-4 mr-2" />
                      Termin buchen
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Route planen
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
