import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone, Home, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termin bestätigt",
  description: "Ihr Termin wurde erfolgreich gebucht. Wir freuen uns auf Sie!",
  robots: { index: false, follow: false },
};

export default function TerminBestaetigtPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-32">
      <div className="keller-container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-8">
            <CalendarCheck className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>

          {/* Heading */}
          <h1 className="keller-heading-2 mb-4">
            Ihr Termin ist bestätigt!
          </h1>

          {/* Message */}
          <p className="keller-body mb-8">
            Wir freuen uns auf Ihren Besuch in unserem Küchenstudio.
            Eine Terminbestätigung wurde an Ihre E-Mail-Adresse gesendet.
          </p>

          {/* Appointment Details Card */}
          <div className="bg-card rounded-xl border border-border p-6 mb-8 text-left">
            <h2 className="font-semibold mb-4 text-center">Termindetails</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 bg-secondary/50 rounded-lg">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Ort</p>
                  <p className="text-sm text-muted-foreground">
                    {BUSINESS_INFO.name}
                    <br />
                    {BUSINESS_INFO.address.street}
                    <br />
                    {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-secondary/50 rounded-lg">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Öffnungszeiten</p>
                  <p className="text-sm text-muted-foreground">
                    {BUSINESS_INFO.hours.weekdays}
                    <br />
                    {BUSINESS_INFO.hours.saturday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What to bring */}
          <div className="bg-secondary/30 rounded-xl p-6 mb-8 text-left">
            <h2 className="font-semibold mb-4">Was Sie mitbringen können:</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Grundriss oder Maße Ihrer Küche
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Fotos der aktuellen Küche (falls vorhanden)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Inspirationsbilder oder Ideen
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Budget-Vorstellungen
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-secondary/50 rounded-xl p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-2">
              Fragen zum Termin?
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
            >
              <Phone className="h-5 w-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Zur Startseite
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Route planen
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
