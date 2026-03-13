"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { ScrollReveal, LineReveal } from "@/components/ui/scroll-animation";

export function Showroom() {
  return (
    <section className="keller-section bg-card">
      <div className="keller-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <ScrollReveal delay={100} direction="left" distance={50}>
            <div className="relative">
              <div className="grid grid-cols-12 gap-4">
                {/* Main large image */}
                <div className="col-span-7 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/kitchen/shot_02.png"
                    alt="Moderne Küche im Showroom"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 60vw, 30vw"
                  />
                </div>

                {/* Right column with two images */}
                <div className="col-span-5 flex flex-col gap-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/kitchen/shot_03.png"
                      alt="Küchendetails"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 40vw, 20vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/kitchen/shot_04.png"
                      alt="Premium Küchengeräte"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 40vw, 20vw"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 left-6 right-6 md:left-8 md:right-auto md:max-w-xs">
                <div className="bg-[#D62828] text-white rounded-xl p-5 shadow-xl shadow-[#D62828]/20">
                  <p className="font-bold text-lg">Erleben Sie unsere Küchen live</p>
                  <p className="text-white/80 text-sm mt-1">
                    Über 20 Ausstellungsküchen auf 500m²
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="space-y-6 lg:pl-4 pt-8 lg:pt-0">
            <LineReveal delay={0} />
            <ScrollReveal delay={100} direction="up">
              <span className="keller-label">Unser Showroom</span>
            </ScrollReveal>
            <ScrollReveal delay={200} direction="up">
              <h2 className="keller-heading-2">
                Besuchen Sie unser Küchenstudio in Nürnberg
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={300} direction="up">
              <p className="keller-body">
                In unserem modernen Showroom können Sie hochwertige Küchen erleben
                und anfassen. Lassen Sie sich von der Qualität überzeugen und
                entdecken Sie die neuesten Trends.
              </p>
            </ScrollReveal>

            {/* Info cards */}
            <ScrollReveal delay={400} direction="up">
              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-sm text-muted-foreground">
                      {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Öffnungszeiten</p>
                      <p className="text-sm text-muted-foreground">
                        {BUSINESS_INFO.hours.weekdays}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Telefon</p>
                      <p className="text-sm text-muted-foreground">
                        {BUSINESS_INFO.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={500} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="bg-[#D62828] hover:bg-[#B82020] text-white shadow-lg shadow-[#D62828]/20">
                  <Link href="/termin-buchen">
                    <Calendar className="h-5 w-5 mr-2" />
                    Termin im Studio
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    Route planen
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
