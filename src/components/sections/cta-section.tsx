"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { ScrollReveal, LineReveal } from "@/components/ui/scroll-animation";

export function CTASection() {
  return (
    <section className="keller-section bg-foreground">
      <div className="keller-container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <LineReveal direction="center" delay={0} />
          <ScrollReveal delay={100} direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-background">
              Bereit für Ihre Traumküche?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200} direction="up">
            <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto">
              Starten Sie jetzt mit einer kostenlosen Beratung. Wir freuen uns
              darauf, Ihre Ideen in die Realität umzusetzen.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                <Link href="/termin-buchen">
                  <Calendar className="h-5 w-5 mr-2" />
                  Termin buchen
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base bg-transparent border-2 border-background/40 text-background hover:bg-background/10 hover:border-background/60"
              >
                <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
