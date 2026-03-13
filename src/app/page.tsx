import { Hero } from "@/components/sections/hero";
import { Brands } from "@/components/sections/brands";
import { SmartForm } from "@/components/sections/smart-form";
import { Process } from "@/components/sections/process";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Projects } from "@/components/sections/projects";
import { Showroom } from "@/components/sections/showroom";
import { CTASection } from "@/components/sections/cta-section";
import { ContactInfo } from "@/components/sections/contact-info";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Brand Logos */}
      <Brands />

      {/* Smart Form */}
      <SmartForm />

      {/* Process Steps */}
      <Process />

      {/* Why Us */}
      <WhyUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Projects Gallery */}
      <Projects />

      {/* Showroom Section */}
      <Showroom />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Info */}
      <ContactInfo />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://keller-kuechenwelt.de",
            name: "Keller Küchenwelt",
            description:
              "Ihr Küchenstudio in Nürnberg – Individuelle Küchenplanung, hochwertige Marken und persönliche Beratung.",
            url: "https://keller-kuechenwelt.de",
            telephone: "+49 911 89314510",
            email: "info@keller-kuechenwelt.de",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Musterstraße 123",
              addressLocality: "Nürnberg",
              postalCode: "90402",
              addressCountry: "DE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "49.4521",
              longitude: "11.0767",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "10:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "14:00",
              },
            ],
            priceRange: "€€€",
            image: "https://keller-kuechenwelt.de/og-image.jpg",
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: "49.4521",
                longitude: "11.0767",
              },
              geoRadius: "100000",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
            },
            sameAs: [],
          }),
        }}
      />
    </>
  );
}
