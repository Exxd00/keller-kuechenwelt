"use client";

import {
  Users,
  PenTool,
  Award,
  Package,
  Building,
  Clock,
} from "lucide-react";
import { ScrollReveal, LineReveal } from "@/components/ui/scroll-animation";

const BENEFITS = [
  {
    title: "Persönliche Beratung",
    description: "Individuelle Betreuung durch erfahrene Küchenberater",
    Icon: Users,
  },
  {
    title: "Individuelle Planung",
    description: "Maßgeschneiderte Lösungen für jeden Raum",
    Icon: PenTool,
  },
  {
    title: "Hochwertige Marken",
    description: "Nur Premium-Marken für Qualität und Langlebigkeit",
    Icon: Award,
  },
  {
    title: "Komplettservice",
    description: "Von der Planung bis zur Montage – alles aus einer Hand",
    Icon: Package,
  },
  {
    title: "Showroom in Nürnberg",
    description: "Erleben Sie Küchen live in unserem Ausstellungsraum",
    Icon: Building,
  },
  {
    title: "10+ Jahre Erfahrung",
    description: "Profitieren Sie von unserer langjährigen Expertise",
    Icon: Clock,
  },
];

export function WhyUs() {
  return (
    <section className="keller-section bg-secondary/30">
      <div className="keller-container">
        <div className="text-center mb-16">
          <LineReveal direction="center" delay={0} />
          <ScrollReveal delay={100} direction="up">
            <span className="keller-label">Ihre Vorteile</span>
          </ScrollReveal>
          <ScrollReveal delay={200} direction="up">
            <h2 className="keller-heading-2 mt-4">Warum Keller Küchenwelt?</h2>
          </ScrollReveal>
          <ScrollReveal delay={300} direction="up">
            <p className="keller-body mt-4 max-w-2xl mx-auto">
              Wir verbinden Qualität, Service und Erfahrung zu einem einzigartigen
              Küchenerlebnis.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS.map((benefit, index) => (
            <ScrollReveal
              key={benefit.title}
              delay={index * 100}
              direction="up"
              distance={30}
            >
              <div className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <benefit.Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
