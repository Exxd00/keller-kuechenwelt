import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Award, Users, Heart, Target } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Über uns",
  description: `${BUSINESS_INFO.name} – Ihr Küchenstudio in ${BUSINESS_INFO.address.city}. ${BUSINESS_INFO.experience} Jahre Erfahrung, ${BUSINESS_INFO.projects} Projekte. Lernen Sie uns kennen!`,
};

const VALUES = [
  {
    icon: Heart,
    title: "Leidenschaft",
    description: "Küchen sind unsere Leidenschaft. Wir lieben was wir tun und das spüren Sie bei jeder Beratung.",
  },
  {
    icon: Award,
    title: "Qualität",
    description: "Wir arbeiten nur mit Premium-Marken und legen höchsten Wert auf Verarbeitung und Langlebigkeit.",
  },
  {
    icon: Users,
    title: "Persönlichkeit",
    description: "Bei uns sind Sie keine Nummer. Wir nehmen uns Zeit für Sie und Ihre individuellen Wünsche.",
  },
  {
    icon: Target,
    title: "Perfektion",
    description: "Von der Planung bis zur Montage – wir geben uns erst zufrieden, wenn alles perfekt ist.",
  },
];

const TIMELINE = [
  { year: "2015", event: "Gründung in Nürnberg" },
  { year: "2017", event: "Erweiterung des Showrooms" },
  { year: "2019", event: "500. Küchenprojekt" },
  { year: "2021", event: "Partnerschaft mit LEICHT" },
  { year: "Heute", event: "Ihr Partner für Traumküchen" },
];

export default function UeberUnsPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="keller-section bg-secondary/30">
        <div className="keller-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="keller-label">Über uns</span>
              <h1 className="keller-heading-1 mt-4">
                Wir sind {BUSINESS_INFO.name}
              </h1>
              <p className="keller-body mt-6">
                Seit {BUSINESS_INFO.experience} Jahren planen und realisieren wir Traumküchen
                in Nürnberg und Umgebung. Mit Leidenschaft, Erfahrung und höchsten
                Qualitätsansprüchen machen wir Ihre Küchenwünsche wahr.
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
                <Link href="/termin-buchen">
                  <Calendar className="h-5 w-5 mr-2" />
                  Lernen Sie uns kennen
                </Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Keller Küchenwelt Team"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="keller-section bg-background">
        <div className="keller-container">
          <div className="text-center mb-12">
            <h2 className="keller-heading-2">Unsere Werte</h2>
            <p className="keller-body mt-4">
              Das macht uns aus und dafür stehen wir
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="keller-section bg-secondary/30">
        <div className="keller-container">
          <div className="text-center mb-12">
            <h2 className="keller-heading-2">Unsere Geschichte</h2>
            <p className="keller-body mt-4">
              Der Weg zu Ihrem Küchenpartner
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-1/2" />

              {/* Timeline items */}
              <div className="space-y-8">
                {TIMELINE.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex items-center gap-6 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 w-3 h-3 rounded-full bg-primary lg:left-1/2 lg:-translate-x-1/2" />

                    {/* Content */}
                    <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                      <p className="text-muted-foreground">{item.event}</p>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="keller-section bg-background">
        <div className="keller-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary">{BUSINESS_INFO.experience}</div>
              <p className="text-muted-foreground mt-2">Jahre Erfahrung</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary">{BUSINESS_INFO.projects}</div>
              <p className="text-muted-foreground mt-2">Küchenprojekte</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary">{BUSINESS_INFO.rating}</div>
              <p className="text-muted-foreground mt-2">Sterne Bewertung</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary">100%</div>
              <p className="text-muted-foreground mt-2">Komplettservice</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
