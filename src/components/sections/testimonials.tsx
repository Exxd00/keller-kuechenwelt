"use client";

import { Star, Quote } from "lucide-react";
import { ScrollReveal, LineReveal, ScaleReveal } from "@/components/ui/scroll-animation";

const TESTIMONIALS = [
  {
    name: "Familie Müller",
    location: "Nürnberg",
    rating: 5,
    text: "Wir sind begeistert von unserer neuen Küche! Die Beratung war sehr professionell und die Montage tadellos. Das Team hat sich wirklich Zeit genommen, um unsere Wünsche zu verstehen.",
    project: "L-Küche in Weiß",
  },
  {
    name: "Thomas Schmidt",
    location: "Fürth",
    rating: 5,
    text: "Von der ersten Beratung bis zur Montage lief alles perfekt. Die 3D-Planung hat uns sehr geholfen, uns die Küche vorzustellen. Absolute Empfehlung!",
    project: "Moderne Inselküche",
  },
  {
    name: "Anna Weber",
    location: "Erlangen",
    rating: 5,
    text: "Endlich haben wir unsere Traumküche! Die Qualität ist erstklassig und der Service war immer freundlich und kompetent. Vielen Dank an das ganze Team!",
    project: "Landhausküche",
  },
];

export function Testimonials() {
  return (
    <section className="keller-section bg-background">
      <div className="keller-container">
        <div className="text-center mb-16">
          <LineReveal direction="center" delay={0} />
          <ScrollReveal delay={100} direction="up">
            <span className="keller-label">Kundenstimmen</span>
          </ScrollReveal>
          <ScrollReveal delay={200} direction="up">
            <h2 className="keller-heading-2 mt-4">
              Was unsere Kunden sagen
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={300} direction="up">
            <p className="keller-body mt-4 max-w-2xl mx-auto">
              Zufriedene Kunden sind unser größter Erfolg. Lesen Sie, was andere
              über ihre Erfahrung mit uns sagen.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              delay={index * 150}
              direction="up"
              distance={40}
            >
              <div className="relative bg-card rounded-xl p-6 lg:p-8 border border-border hover:shadow-lg transition-shadow h-full">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={`star-${testimonial.name}-${i}`}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location} · {testimonial.project}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Google Rating */}
        <ScaleReveal delay={500}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary rounded-full">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={`google-star-${i}`}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <span className="font-medium">4.8 / 5</span>
              <span className="text-muted-foreground">bei Google</span>
            </div>
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
}
