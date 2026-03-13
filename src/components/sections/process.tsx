"use client";

import { MessageSquare, PenTool, Wrench, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal, LineReveal } from "@/components/ui/scroll-animation";

const STEPS = [
  {
    step: 1,
    title: "Beratung",
    description:
      "Persönliche Beratung im Showroom oder bei Ihnen zu Hause. Wir hören Ihnen zu und verstehen Ihre Wünsche.",
    Icon: MessageSquare,
  },
  {
    step: 2,
    title: "Planung",
    description:
      "Individuelle 3D-Planung Ihrer Traumküche. Sie sehen vorab, wie Ihre neue Küche aussehen wird.",
    Icon: PenTool,
  },
  {
    step: 3,
    title: "Montage",
    description:
      "Professionelle Lieferung und fachgerechte Montage. Wir sorgen dafür, dass alles perfekt passt.",
    Icon: Wrench,
  },
];

export function Process() {
  return (
    <section className="keller-section bg-background">
      <div className="keller-container">
        <div className="text-center mb-16">
          <LineReveal direction="center" delay={0} />
          <ScrollReveal delay={100} direction="up">
            <span className="keller-label">Unser Prozess</span>
          </ScrollReveal>
          <ScrollReveal delay={200} direction="up">
            <h2 className="keller-heading-2 mt-4">So funktioniert es</h2>
          </ScrollReveal>
          <ScrollReveal delay={300} direction="up">
            <p className="keller-body mt-4 max-w-2xl mx-auto">
              Von der ersten Idee bis zur fertigen Küche – wir begleiten Sie auf
              dem gesamten Weg.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {STEPS.map((step, index) => (
            <ScrollReveal
              key={step.step}
              delay={index * 150}
              direction="up"
              distance={40}
            >
              <div className="relative">
                <div className="flex flex-col items-center text-center p-6 md:p-8">
                  {/* Step number */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.Icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow connector */}
                {index < STEPS.length - 1 && (
                  <div className="hidden md:flex absolute top-1/4 -right-4 lg:-right-2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
