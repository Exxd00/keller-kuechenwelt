"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div
        className={cn(
          "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({ children, subtitle, className, align = "left" }: SectionTitleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "-30px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "relative",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      {/* Golden Line Reveal */}
      <div
        className={cn(
          "h-px bg-gradient-to-r from-[#c9a227] via-[#e8d5a3] to-[#c9a227]/50 mb-6",
          "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto",
          isVisible
            ? "w-24 opacity-100"
            : "w-0 opacity-0"
        )}
        style={{
          transformOrigin: align === "right" ? "right" : "left",
        }}
      />

      {/* Title Text - emerges from below the line */}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-foreground",
          "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        )}
        style={{ transitionDelay: "300ms" }}
      >
        {children}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-muted-foreground font-light",
            "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          )}
          style={{ transitionDelay: "500ms" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface ContentFadeProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export function ContentFade({ children, className, stagger = false }: ContentFadeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "-20px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
