import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, ChevronDown } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ - Häufig gestellte Fragen",
  description: "Antworten auf häufig gestellte Fragen zu Küchenplanung, Preisen, Lieferung und Montage bei Keller Küchenwelt in Nürnberg.",
};

const FAQ_ITEMS = [
  {
    category: "Allgemein",
    questions: [
      {
        q: "Wie lange dauert eine Küchenplanung?",
        a: "Eine individuelle Küchenplanung dauert in der Regel 2-4 Wochen, je nach Komplexität des Projekts. Die erste Beratung im Showroom dauert etwa 1-2 Stunden.",
      },
      {
        q: "Bieten Sie auch Finanzierung an?",
        a: "Ja, wir bieten verschiedene Finanzierungsmöglichkeiten an. Sprechen Sie uns gerne in der Beratung darauf an.",
      },
      {
        q: "Kommen Sie auch zu mir nach Hause?",
        a: "Selbstverständlich! Wir kommen gerne zu Ihnen und nehmen professionell Maß. So können wir Ihre Küche optimal planen.",
      },
    ],
  },
  {
    category: "Kosten & Preise",
    questions: [
      {
        q: "Was kostet eine neue Küche?",
        a: "Die Kosten variieren stark je nach Größe, Ausstattung und gewählten Marken. Einfache Küchen starten bei etwa 5.000€, Premium-Küchen können 30.000€ und mehr kosten. Wir erstellen Ihnen gerne ein individuelles Angebot.",
      },
      {
        q: "Ist die Beratung kostenlos?",
        a: "Ja, die Erstberatung und die 3D-Planung sind für Sie komplett kostenlos und unverbindlich.",
      },
      {
        q: "Sind Lieferung und Montage im Preis enthalten?",
        a: "Lieferung und Montage werden separat berechnet, sind aber Teil unseres Komplettservices. Die genauen Kosten hängen von der Entfernung und dem Aufwand ab.",
      },
    ],
  },
  {
    category: "Planung & Beratung",
    questions: [
      {
        q: "Was muss ich zum Beratungstermin mitbringen?",
        a: "Idealerweise bringen Sie einen Grundriss oder die Maße Ihrer Küche mit, sowie Fotos der aktuellen Küche und Inspirationsbilder. Aber auch ohne diese Unterlagen können wir Sie beraten.",
      },
      {
        q: "Kann ich die Küchen vorher live sehen?",
        a: "Ja! In unserem Showroom in Nürnberg können Sie über 20 Ausstellungsküchen live erleben und alle Materialien und Geräte anfassen.",
      },
      {
        q: "Bieten Sie 3D-Planung an?",
        a: "Ja, wir erstellen für Sie eine fotorealistische 3D-Visualisierung Ihrer neuen Küche, damit Sie sich diese vorab perfekt vorstellen können.",
      },
    ],
  },
  {
    category: "Lieferung & Montage",
    questions: [
      {
        q: "Wie lange dauert die Lieferung?",
        a: "Nach Auftragsbestätigung beträgt die Lieferzeit in der Regel 6-12 Wochen, je nach Hersteller und Verfügbarkeit.",
      },
      {
        q: "Wer montiert die Küche?",
        a: "Unsere erfahrenen Monteure kümmern sich um die fachgerechte Montage Ihrer Küche. Wir arbeiten nicht mit Subunternehmen.",
      },
      {
        q: "Entsorgen Sie meine alte Küche?",
        a: "Ja, auf Wunsch demontieren und entsorgen wir Ihre alte Küche fachgerecht. Sprechen Sie uns einfach darauf an.",
      },
      {
        q: "In welchem Umkreis liefern Sie?",
        a: `Wir liefern und montieren im Umkreis von ${BUSINESS_INFO.serviceRadius}.`,
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="keller-section bg-secondary/30">
        <div className="keller-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="keller-label">FAQ</span>
            <h1 className="keller-heading-1 mt-4">
              Häufig gestellte Fragen
            </h1>
            <p className="keller-body mt-6">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um
              Küchenplanung, Preise, Lieferung und Montage.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="keller-section bg-background">
        <div className="keller-container">
          <div className="max-w-4xl mx-auto space-y-12">
            {FAQ_ITEMS.map((category) => (
              <div key={category.category}>
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, index) => (
                    <details
                      key={`${category.category}-${index}`}
                      className="group bg-card rounded-xl border border-border"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <span className="font-medium pr-4">{item.q}</span>
                        <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180 flex-shrink-0" />
                      </summary>
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-muted-foreground">{item.a}</p>
                      </div>
                    </details>
                  ))}
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
              Noch Fragen?
            </h2>
            <p className="keller-body mt-4">
              Wir sind gerne für Sie da und beantworten alle Ihre Fragen persönlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/termin-buchen">
                  <Calendar className="h-5 w-5 mr-2" />
                  Termin buchen
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${BUSINESS_INFO.phoneFormatted}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.flatMap((category) =>
              category.questions.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              }))
            ),
          }),
        }}
      />
    </div>
  );
}
