import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Home, Calendar } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vielen Dank für Ihre Anfrage",
  description: "Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-32">
      <div className="keller-container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-8">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>

          {/* Heading */}
          <h1 className="keller-heading-2 mb-4">
            Vielen Dank für Ihre Anfrage!
          </h1>

          {/* Message */}
          <p className="keller-body mb-8">
            Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
            Unser Team freut sich darauf, Ihnen bei der Planung Ihrer Traumküche zu helfen.
          </p>

          {/* What happens next */}
          <div className="bg-card rounded-xl border border-border p-6 mb-8 text-left">
            <h2 className="font-semibold mb-4">Was passiert als nächstes?</h2>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  1
                </span>
                <span className="text-muted-foreground">
                  Wir prüfen Ihre Anfrage und bereiten ein individuelles Angebot vor.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  2
                </span>
                <span className="text-muted-foreground">
                  Ein Küchenberater kontaktiert Sie telefonisch oder per E-Mail.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  3
                </span>
                <span className="text-muted-foreground">
                  Wir vereinbaren einen persönlichen Beratungstermin im Showroom.
                </span>
              </li>
            </ol>
          </div>

          {/* Contact Info */}
          <div className="bg-secondary/50 rounded-xl p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-2">
              Sie haben eine dringende Frage?
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
              <Link href="/termin-buchen">
                <Calendar className="h-4 w-4 mr-2" />
                Termin buchen
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
