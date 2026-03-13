import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Calendar, Navigation } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { SmartForm } from "@/components/sections/smart-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktieren Sie ${BUSINESS_INFO.name} in Nürnberg. Telefon: ${BUSINESS_INFO.phone}, E-Mail: ${BUSINESS_INFO.email}. Wir beraten Sie gerne!`,
};

export default function KontaktPage() {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="keller-section bg-secondary/30">
        <div className="keller-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="keller-label">Kontakt</span>
            <h1 className="keller-heading-1 mt-4">
              Wir sind für Sie da
            </h1>
            <p className="keller-body mt-6">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren?
              Kontaktieren Sie uns – wir beraten Sie gerne persönlich.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="keller-section bg-background">
        <div className="keller-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Phone className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Telefon</h3>
              <p className="text-primary font-medium">{BUSINESS_INFO.phone}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Rufen Sie uns direkt an
              </p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">E-Mail</h3>
              <p className="text-primary font-medium break-all">{BUSINESS_INFO.email}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Schreiben Sie uns
              </p>
            </a>

            {/* Address */}
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <MapPin className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p className="text-sm text-muted-foreground">
                {BUSINESS_INFO.address.street}
                <br />
                {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
              </p>
            </a>

            {/* Hours */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Öffnungszeiten</h3>
              <p className="text-sm text-muted-foreground">
                {BUSINESS_INFO.hours.weekdays}
                <br />
                {BUSINESS_INFO.hours.saturday}
                <br />
                {BUSINESS_INFO.hours.sunday}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/termin-buchen">
                <Calendar className="h-5 w-5 mr-2" />
                Termin buchen
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-5 w-5 mr-2" />
                Route planen
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-secondary/30">
        <div className="keller-container">
          <div className="relative h-[400px] rounded-xl overflow-hidden bg-card border border-border">
            <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
              <div className="text-center p-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">
                  {BUSINESS_INFO.name}
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
        </div>
      </section>

      {/* Contact Form */}
      <SmartForm />
    </div>
  );
}
