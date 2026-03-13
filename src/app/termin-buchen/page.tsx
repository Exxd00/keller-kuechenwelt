"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Check,
  ArrowLeft,
  ArrowRight,
  Building,
  Video,
  Shield,
} from "lucide-react";

type BookingData = {
  type: string;
  duration: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
};

const APPOINTMENT_TYPES = [
  {
    value: "showroom",
    label: "Showroom Beratung",
    description: "Persönliche Beratung in unserem Küchenstudio",
    icon: Building,
    defaultDuration: "30",
  },
  {
    value: "planung",
    label: "Küchenplanung Termin",
    description: "Ausführliche Planung Ihrer Traumküche",
    icon: Calendar,
    defaultDuration: "60",
  },
  {
    value: "telefon",
    label: "Telefon Beratung",
    description: "Erste Beratung telefonisch",
    icon: Phone,
    defaultDuration: "15",
  },
];

const DURATIONS = [
  { value: "15", label: "15 Minuten" },
  { value: "30", label: "30 Minuten" },
  { value: "60", label: "60 Minuten" },
];

const TIME_SLOTS = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

const BENEFITS = [
  "Persönliche Beratung",
  "Individuelle Planung",
  "Direkt im Showroom",
  "Kostenlos & unverbindlich",
];

export default function TerminBuchenPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    type: "",
    duration: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  });

  // Generate available dates (next 14 days, excluding Sundays)
  const getAvailableDates = () => {
    const dates: Date[] = [];
    const today = new Date();
    for (let i = 1; i <= 21 && dates.length < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0) {
        // Exclude Sundays
        dates.push(date);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const updateBookingData = <K extends keyof BookingData>(
    key: K,
    value: BookingData[K]
  ) => {
    setBookingData((prev) => ({ ...prev, [key]: value }));
  };

  const selectAppointmentType = (type: string, defaultDuration: string) => {
    updateBookingData("type", type);
    updateBookingData("duration", defaultDuration);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("de-DE", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const formatDateValue = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return bookingData.type !== "" && bookingData.duration !== "";
      case 2:
        return bookingData.date !== "" && bookingData.time !== "";
      case 3:
        return bookingData.name !== "" && bookingData.phone !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (step < 3 && canProceed()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("/termin-bestaetigt");
  };

  return (
    <div className="min-h-screen pt-20 pb-32">
      <div className="keller-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div>
              <span className="keller-label">Termin buchen</span>
              <h1 className="keller-heading-2 mt-4">
                Buchen Sie Ihre persönliche Küchenberatung
              </h1>
              <p className="keller-body mt-4">
                Besuchen Sie unseren Showroom in Nürnberg und lassen Sie sich
                persönlich beraten. Wir nehmen uns Zeit für Ihre Wünsche.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Keller Küchenwelt Showroom"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
            {/* Progress */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                      step >= s
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    )}
                  >
                    {step > s ? <Check className="h-4 w-4" /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={cn(
                        "w-12 md:w-20 h-1 mx-2 rounded transition-colors",
                        step > s ? "bg-primary" : "bg-secondary"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Appointment Type */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">
                  Was möchten Sie buchen?
                </h2>

                <div className="space-y-3">
                  {APPOINTMENT_TYPES.map((type) => (
                    <button
                      type="button"
                      key={type.value}
                      onClick={() =>
                        selectAppointmentType(type.value, type.defaultDuration)
                      }
                      className={cn(
                        "w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left",
                        bookingData.type === type.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div
                        className={cn(
                          "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center",
                          bookingData.type === type.value
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        )}
                      >
                        <type.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{type.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {type.description}
                        </p>
                      </div>
                      {bookingData.type === type.value && (
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>

                {bookingData.type && (
                  <div className="space-y-3 pt-4 border-t border-border">
                    <h3 className="font-medium">Dauer wählen</h3>
                    <div className="flex flex-wrap gap-3">
                      {DURATIONS.map((duration) => (
                        <button
                          type="button"
                          key={duration.value}
                          onClick={() =>
                            updateBookingData("duration", duration.value)
                          }
                          className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all",
                            bookingData.duration === duration.value
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            {duration.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Datum & Uhrzeit wählen</h2>

                {/* Date Selection */}
                <div className="space-y-3">
                  <h3 className="font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Datum
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {availableDates.slice(0, 8).map((date) => (
                      <button
                        type="button"
                        key={formatDateValue(date)}
                        onClick={() =>
                          updateBookingData("date", formatDateValue(date))
                        }
                        className={cn(
                          "p-3 rounded-lg border-2 text-center transition-all",
                          bookingData.date === formatDateValue(date)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <span className="text-xs text-muted-foreground block">
                          {date.toLocaleDateString("de-DE", { weekday: "short" })}
                        </span>
                        <span className="text-sm font-medium">
                          {date.toLocaleDateString("de-DE", {
                            day: "numeric",
                            month: "short",
                          })}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                {bookingData.date && (
                  <div className="space-y-3 pt-4 border-t border-border">
                    <h3 className="font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Uhrzeit
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {TIME_SLOTS.map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => updateBookingData("time", time)}
                          className={cn(
                            "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                            bookingData.time === time
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Ihre Kontaktdaten</h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Name *
                    </Label>
                    <Input
                      id="name"
                      value={bookingData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        updateBookingData("name", e.target.value)
                      }
                      placeholder="Ihr Name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Telefon *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        updateBookingData("phone", e.target.value)
                      }
                      placeholder="Ihre Telefonnummer"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      E-Mail (optional)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={bookingData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        updateBookingData("email", e.target.value)
                      }
                      placeholder="Ihre E-Mail-Adresse"
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                  <p className="text-sm font-medium">Ihr Termin:</p>
                  <p className="text-sm text-muted-foreground">
                    {APPOINTMENT_TYPES.find((t) => t.value === bookingData.type)
                      ?.label}{" "}
                    ({bookingData.duration} Min.)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(bookingData.date).toLocaleDateString("de-DE", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    um {bookingData.time} Uhr
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück
              </Button>

              {step < 3 ? (
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
                  disabled={!canProceed() || isSubmitting}
                  className="gap-2 bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    "Wird gebucht..."
                  ) : (
                    <>
                      <Calendar className="h-4 w-4" />
                      Termin buchen
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Trust message */}
            {step === 3 && (
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Ihre Daten werden vertraulich behandelt.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
