"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { ScrollReveal, LineReveal, ScaleReveal } from "@/components/ui/scroll-animation";

export function ContactInfo() {
  return (
    <section className="keller-section bg-secondary/30">
      <div className="keller-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <LineReveal delay={0} />
              <ScrollReveal delay={100} direction="up">
                <span className="keller-label">Kontakt</span>
              </ScrollReveal>
              <ScrollReveal delay={200} direction="up">
                <h2 className="keller-heading-2 mt-4">
                  Wir sind für Sie da
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={300} direction="up">
                <p className="keller-body mt-4">
                  Haben Sie Fragen oder möchten Sie einen Termin vereinbaren?
                  Kontaktieren Sie uns – wir beraten Sie gerne.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <ScrollReveal delay={400} direction="up">
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Telefon</p>
                    <p className="text-sm text-muted-foreground">
                      {BUSINESS_INFO.phone}
                    </p>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={500} direction="up">
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">E-Mail</p>
                    <p className="text-sm text-muted-foreground break-all">
                      {BUSINESS_INFO.email}
                    </p>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={600} direction="up">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Adresse</p>
                    <p className="text-sm text-muted-foreground">
                      {BUSINESS_INFO.address.street}
                      <br />
                      {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={700} direction="up">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Öffnungszeiten</p>
                    <p className="text-sm text-muted-foreground">
                      {BUSINESS_INFO.hours.weekdays}
                      <br />
                      {BUSINESS_INFO.hours.saturday}
                      <br />
                      {BUSINESS_INFO.hours.sunday}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={800} direction="up">
              <Button asChild variant="outline" className="gap-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" />
                  Route planen
                </a>
              </Button>
            </ScrollReveal>
          </div>

          {/* Map Teaser */}
          <ScaleReveal delay={400}>
            <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden bg-card border border-border">
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">
                    Keller Küchenwelt
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {BUSINESS_INFO.address.street}
                    <br />
                    {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
                  </p>
                  <Button asChild>
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      In Google Maps öffnen
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScaleReveal>
        </div>
      </div>
    </section>
  );
}
