"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    // Trigger analytics consent event
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("cookie-consent", { detail: "all" }));
    }
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    // Trigger analytics consent event
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("cookie-consent", { detail: "essential" }));
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-xl shadow-lg p-6">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-secondary flex-shrink-0">
              <Cookie className="h-6 w-6 text-muted-foreground" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold mb-2">Wir respektieren Ihre Privatsphäre</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten.
                Einige Cookies sind für den Betrieb der Website erforderlich, während andere uns helfen,
                die Website zu verbessern und Ihnen relevante Inhalte anzuzeigen.{" "}
                <Link href="/datenschutz" className="text-primary hover:underline">
                  Mehr erfahren
                </Link>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={acceptAll}
                  className="bg-primary hover:bg-primary/90"
                >
                  Alle akzeptieren
                </Button>
                <Button
                  onClick={acceptEssential}
                  variant="outline"
                >
                  Nur essenzielle
                </Button>
              </div>
            </div>

            <button
              onClick={acceptEssential}
              className="p-1 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Banner schließen"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
