"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Upload,
  MessageSquare,
  Ruler,
  FileText,
  HelpCircle,
  Home,
  LayoutTemplate,
  Sparkles,
  Landmark,
  Minimize2,
  Euro,
  Clock,
  Send,
  Shield,
} from "lucide-react";
import { ScrollReveal, LineReveal } from "@/components/ui/scroll-animation";

type FormData = {
  requestType: string;
  kitchenShape: string;
  style: string;
  budget: string;
  timeline: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  files: File[];
};

const STEPS = [
  { id: 1, title: "Art der Anfrage" },
  { id: 2, title: "Küchenform" },
  { id: 3, title: "Stil" },
  { id: 4, title: "Budget" },
  { id: 5, title: "Zeitplan" },
  { id: 6, title: "Kontaktdaten" },
  { id: 7, title: "Upload (optional)" },
  { id: 8, title: "Zusammenfassung" },
];

const REQUEST_TYPES = [
  { value: "showroom", label: "Beratung im Showroom", icon: Home },
  { value: "planung", label: "Küchenplanung", icon: Ruler },
  { value: "angebot", label: "Angebot anfragen", icon: FileText },
  { value: "allgemein", label: "Allgemeine Anfrage", icon: MessageSquare },
];

const KITCHEN_SHAPES = [
  { value: "gerade", label: "Gerade Küche", icon: LayoutTemplate },
  { value: "l-kueche", label: "L-Küche", icon: LayoutTemplate },
  { value: "u-kueche", label: "U-Küche", icon: LayoutTemplate },
  { value: "insel", label: "Küche mit Insel", icon: Home },
  { value: "unsicher", label: "Noch unsicher", icon: HelpCircle },
];

const STYLES = [
  { value: "modern", label: "Modern", icon: Sparkles },
  { value: "landhaus", label: "Landhaus", icon: Landmark },
  { value: "klassisch", label: "Klassisch", icon: Home },
  { value: "minimalistisch", label: "Minimalistisch", icon: Minimize2 },
  { value: "unsicher", label: "Noch unsicher", icon: HelpCircle },
];

const BUDGETS = [
  { value: "unter-10k", label: "Unter 10.000 €" },
  { value: "10k-20k", label: "10.000 – 20.000 €" },
  { value: "20k-30k", label: "20.000 – 30.000 €" },
  { value: "30k-50k", label: "30.000 – 50.000 €" },
  { value: "ueber-50k", label: "Über 50.000 €" },
  { value: "unsicher", label: "Noch unsicher" },
];

const TIMELINES = [
  { value: "sofort", label: "So schnell wie möglich" },
  { value: "3-monate", label: "In den nächsten 3 Monaten" },
  { value: "3-6-monate", label: "In 3–6 Monaten" },
  { value: "spaeter", label: "Später" },
];

export function SmartForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    requestType: "",
    kitchenShape: "",
    style: "",
    budget: "",
    timeline: "",
    name: "",
    phone: "",
    email: "",
    city: "",
    files: [],
  });

  const progress = (currentStep / STEPS.length) * 100;

  const updateFormData = <K extends keyof FormData>(
    key: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.requestType !== "";
      case 2:
        return formData.kitchenShape !== "";
      case 3:
        return formData.style !== "";
      case 4:
        return formData.budget !== "";
      case 5:
        return formData.timeline !== "";
      case 6:
        return formData.name !== "" && formData.phone !== "";
      case 7:
        return true; // Optional
      case 8:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < STEPS.length && canProceed()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("/thank-you");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    updateFormData("files", [...formData.files, ...files]);
  };

  const removeFile = (index: number) => {
    const newFiles = formData.files.filter((_, i) => i !== index);
    updateFormData("files", newFiles);
  };

  const getLabelForValue = (options: { value: string; label: string }[], value: string) => {
    return options.find((opt) => opt.value === value)?.label || value;
  };

  return (
    <section id="beratung" className="keller-section bg-secondary/30">
      <div className="keller-container">
        <div className="text-center mb-12">
          <LineReveal direction="center" delay={0} />
          <ScrollReveal delay={100} direction="up">
            <span className="keller-label">Jetzt starten</span>
          </ScrollReveal>
          <ScrollReveal delay={200} direction="up">
            <h2 className="keller-heading-2 mt-4">
              Ihre kostenlose Küchenberatung
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={300} direction="up">
            <p className="keller-body mt-4 max-w-2xl mx-auto">
              Beantworten Sie einige Fragen und wir melden uns mit einem
              individuellen Angebot bei Ihnen.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">
                Schritt {currentStep} von {STEPS.length}
              </span>
              <span className="font-medium">{STEPS[currentStep - 1].title}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Form Container */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
            {/* Step 1: Request Type */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Was möchten Sie anfragen?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {REQUEST_TYPES.map((type) => (
                    <button
                      type="button"
                      key={type.value}
                      onClick={() => updateFormData("requestType", type.value)}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left",
                        formData.requestType === type.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center w-12 h-12 rounded-lg",
                          formData.requestType === type.value
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        )}
                      >
                        <type.icon className="h-6 w-6" />
                      </div>
                      <span className="font-medium">{type.label}</span>
                      {formData.requestType === type.value && (
                        <Check className="h-5 w-5 text-primary ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Kitchen Shape */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Welche Küchenform interessiert Sie?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {KITCHEN_SHAPES.map((shape) => (
                    <button
                      type="button"
                      key={shape.value}
                      onClick={() => updateFormData("kitchenShape", shape.value)}
                      className={cn(
                        "flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all",
                        formData.kitchenShape === shape.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center w-14 h-14 rounded-lg",
                          formData.kitchenShape === shape.value
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        )}
                      >
                        <shape.icon className="h-7 w-7" />
                      </div>
                      <span className="font-medium text-center">{shape.label}</span>
                      {formData.kitchenShape === shape.value && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Style */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Welcher Stil gefällt Ihnen?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {STYLES.map((style) => (
                    <button
                      type="button"
                      key={style.value}
                      onClick={() => updateFormData("style", style.value)}
                      className={cn(
                        "flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all",
                        formData.style === style.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center w-14 h-14 rounded-lg",
                          formData.style === style.value
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        )}
                      >
                        <style.icon className="h-7 w-7" />
                      </div>
                      <span className="font-medium text-center">{style.label}</span>
                      {formData.style === style.value && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Budget */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Welches Budget planen Sie ungefähr?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {BUDGETS.map((budget) => (
                    <button
                      type="button"
                      key={budget.value}
                      onClick={() => updateFormData("budget", budget.value)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-xl border-2 transition-all",
                        formData.budget === budget.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Euro className={cn(
                          "h-5 w-5",
                          formData.budget === budget.value
                            ? "text-primary"
                            : "text-muted-foreground"
                        )} />
                        <span className="font-medium">{budget.label}</span>
                      </div>
                      {formData.budget === budget.value && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Timeline */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Wann planen Sie Ihre Küche?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TIMELINES.map((timeline) => (
                    <button
                      type="button"
                      key={timeline.value}
                      onClick={() => updateFormData("timeline", timeline.value)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-xl border-2 transition-all",
                        formData.timeline === timeline.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className={cn(
                          "h-5 w-5",
                          formData.timeline === timeline.value
                            ? "text-primary"
                            : "text-muted-foreground"
                        )} />
                        <span className="font-medium">{timeline.label}</span>
                      </div>
                      {formData.timeline === timeline.value && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Contact */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Ihre Kontaktdaten</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      placeholder="Ihr Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      placeholder="Ihre Telefonnummer"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail (optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="Ihre E-Mail-Adresse"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Stadt</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => updateFormData("city", e.target.value)}
                      placeholder="Ihre Stadt"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Upload */}
            {currentStep === 7 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Bilder hochladen (optional)
                </h3>
                <p className="text-muted-foreground">
                  Laden Sie Bilder Ihrer aktuellen Küche oder einen Grundriss hoch.
                </p>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
                  <input
                    type="file"
                    id="file-upload"
                    multiple
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Klicken Sie hier zum Hochladen
                      </p>
                      <p className="text-sm text-muted-foreground">
                        oder ziehen Sie Dateien hierher
                      </p>
                    </div>
                  </label>
                </div>
                {formData.files.length > 0 && (
                  <div className="space-y-2">
                    <p className="font-medium">Hochgeladene Dateien:</p>
                    {formData.files.map((file, index) => (
                      <div
                        key={`${file.name}-${index}`}
                        className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                      >
                        <span className="text-sm truncate">{file.name}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                        >
                          Entfernen
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 8: Summary */}
            {currentStep === 8 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Zusammenfassung</h3>
                <div className="space-y-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Art der Anfrage</span>
                    <span className="font-medium">
                      {getLabelForValue(REQUEST_TYPES, formData.requestType)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Küchenform</span>
                    <span className="font-medium">
                      {getLabelForValue(KITCHEN_SHAPES, formData.kitchenShape)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Stil</span>
                    <span className="font-medium">
                      {getLabelForValue(STYLES, formData.style)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Budget</span>
                    <span className="font-medium">
                      {getLabelForValue(BUDGETS, formData.budget)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Zeitplan</span>
                    <span className="font-medium">
                      {getLabelForValue(TIMELINES, formData.timeline)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Name</span>
                    <span className="font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Telefon</span>
                    <span className="font-medium">{formData.phone}</span>
                  </div>
                  {formData.email && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">E-Mail</span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                  )}
                  {formData.city && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Stadt</span>
                      <span className="font-medium">{formData.city}</span>
                    </div>
                  )}
                  {formData.files.length > 0 && (
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Dateien</span>
                      <span className="font-medium">{formData.files.length} Datei(en)</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück
              </Button>

              {currentStep < STEPS.length ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="gap-2 bg-primary hover:bg-primary/90"
                >
                  Weiter
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="gap-2 bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Kostenlose Beratung anfragen
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Trust message */}
            {currentStep === STEPS.length && (
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Ihre Daten werden vertraulich behandelt.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
