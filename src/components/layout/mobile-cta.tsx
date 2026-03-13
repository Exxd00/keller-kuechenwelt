"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 safe-area-inset-bottom">
      <div className="flex items-center gap-3">
        <a
          href={`tel:${BUSINESS_INFO.phoneFormatted}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-secondary text-foreground rounded-lg font-medium text-sm transition-colors hover:bg-secondary/80"
          aria-label={`Anrufen: ${BUSINESS_INFO.phone}`}
        >
          <Phone className="h-5 w-5" />
          <span>Anrufen</span>
        </a>
        <Link
          href="/termin-buchen"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary text-primary-foreground rounded-lg font-semibold text-sm transition-colors hover:bg-primary/90"
        >
          <Calendar className="h-5 w-5" />
          <span>Termin</span>
        </Link>
      </div>
    </div>
  );
}
