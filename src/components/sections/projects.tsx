"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, LineReveal, ScaleReveal } from "@/components/ui/scroll-animation";

const PROJECTS = [
  {
    id: 1,
    title: "Moderne Inselküche",
    style: "Modern",
    image: "/kitchen/shot_01.png",
  },
  {
    id: 2,
    title: "Elegante L-Küche",
    style: "Klassisch",
    image: "/kitchen/shot_02.png",
  },
  {
    id: 3,
    title: "Helle Familienküche",
    style: "Modern",
    image: "/kitchen/shot_03.png",
  },
  {
    id: 4,
    title: "Kompakte Stadtküche",
    style: "Minimalistisch",
    image: "/kitchen/shot_04.png",
  },
  {
    id: 5,
    title: "Landhausküche",
    style: "Landhaus",
    image: "/kitchen/shot_05.png",
  },
  {
    id: 6,
    title: "Design-Küche mit Insel",
    style: "Modern",
    image: "/kitchen/shot_06.png",
  },
];

export function Projects() {
  return (
    <section className="keller-section bg-secondary/30">
      <div className="keller-container">
        <div className="text-center mb-16">
          <LineReveal direction="center" delay={0} />
          <ScrollReveal delay={100} direction="up">
            <span className="keller-label">Unsere Projekte</span>
          </ScrollReveal>
          <ScrollReveal delay={200} direction="up">
            <h2 className="keller-heading-2 mt-4">Traumküchen zum Inspirieren</h2>
          </ScrollReveal>
          <ScrollReveal delay={300} direction="up">
            <p className="keller-body mt-4 max-w-2xl mx-auto">
              Entdecken Sie eine Auswahl unserer realisierten Küchenprojekte und
              lassen Sie sich für Ihre eigene Traumküche inspirieren.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ScaleReveal key={project.id} delay={index * 100}>
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                    {project.style}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            </ScaleReveal>
          ))}
        </div>

        <ScrollReveal delay={700} direction="up">
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/projekte">
                Alle Projekte ansehen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
