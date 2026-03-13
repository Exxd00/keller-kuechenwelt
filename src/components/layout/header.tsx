"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAVIGATION, BUSINESS_INFO } from "@/lib/constants";
import { Menu, Phone, Calendar, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="keller-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Keller Die Küchenwelt - Startseite"
          >
            {/* Logo Icon */}
            <div className="w-10 h-10 bg-[#D62828] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-lg md:text-xl font-bold tracking-wide transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}>
                KELLER
              </span>
              <span className={cn(
                "text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase -mt-0.5 transition-colors",
                isScrolled ? "text-muted-foreground" : "text-white/60"
              )}>
                DIE KÜCHENWELT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full",
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Phone - Desktop */}
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className={cn(
                "hidden md:flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/70 hover:text-white"
              )}
              aria-label={`Anrufen: ${BUSINESS_INFO.phone}`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{BUSINESS_INFO.phone}</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button - Desktop */}
            <Button
              asChild
              className="hidden md:inline-flex bg-[#D62828] hover:bg-[#B82020] text-white font-semibold shadow-lg shadow-[#D62828]/20"
            >
              <Link href="/termin-buchen">
                <Calendar className="h-4 w-4 mr-2" />
                Termin buchen
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "lg:hidden",
                    !isScrolled && "text-white hover:bg-white/10"
                  )}
                  aria-label="Menü öffnen"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <Link
                      href="/"
                      className="flex items-center gap-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-10 h-10 bg-[#D62828] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">K</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-wide">
                          KELLER
                        </span>
                        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground -mt-0.5">
                          DIE KÜCHENWELT
                        </span>
                      </div>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-label="Menü schließen"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex-1 overflow-y-auto py-6 px-4">
                    <nav className="flex flex-col gap-1">
                      {NAVIGATION.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </div>

                  {/* Mobile Menu Footer */}
                  <div className="p-4 border-t border-border space-y-3">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-secondary text-foreground rounded-lg font-medium"
                    >
                      <Phone className="h-5 w-5" />
                      {BUSINESS_INFO.phone}
                    </a>
                    <Button
                      asChild
                      className="w-full bg-[#D62828] hover:bg-[#B82020] text-white"
                    >
                      <Link
                        href="/termin-buchen"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Calendar className="h-5 w-5 mr-2" />
                        Termin buchen
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
