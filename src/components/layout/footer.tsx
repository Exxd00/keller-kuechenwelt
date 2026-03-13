"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO, FOOTER_LINKS, NAVIGATION } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="keller-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D62828] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wide">KELLER</span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground -mt-0.5">
                  DIE KÜCHENWELT
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ihr Küchenstudio in Nürnberg – Individuelle Küchenplanung, hochwertige Marken und persönliche Beratung für Ihre Traumküche.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                {BUSINESS_INFO.email}
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.street}<br />
                  {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Leistungen
            </h3>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Kitchen Types */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Küchenarten
            </h3>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.kitchenTypes.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Hours & CTA */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Öffnungszeiten
            </h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>{BUSINESS_INFO.hours.weekdays}</span>
              </div>
              <div className="pl-6">{BUSINESS_INFO.hours.saturday}</div>
              <div className="pl-6">{BUSINESS_INFO.hours.sunday}</div>
            </div>

            <div className="pt-4 space-y-3">
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
                  <MapPin className="h-4 w-4 mr-2" />
                  Route planen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="keller-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {BUSINESS_INFO.name}. Alle Rechte vorbehalten.
            </p>
            <nav className="flex items-center gap-6">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
