"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 800,
  direction = "up",
  distance = 40,
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(true); // Start visible for SSR
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset to hidden state on mount, then animate when in viewport
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          if (once) observer.disconnect();
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "-50px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once, threshold, hasAnimated]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up": return `translateY(${distance}px)`;
        case "down": return `translateY(-${distance}px)`;
        case "left": return `translateX(${distance}px)`;
        case "right": return `translateX(-${distance}px)`;
        default: return "none";
      }
    }
    return "translateY(0) translateX(0)";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Line reveal animation (red gradient line expanding)
interface LineRevealProps {
  className?: string;
  delay?: number;
  width?: string;
  direction?: "left" | "center" | "right";
}

export function LineReveal({
  className,
  delay = 0,
  width = "6rem",
  direction = "left",
}: LineRevealProps) {
  const [isVisible, setIsVisible] = useState(true); // Start visible for SSR
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "h-px bg-gradient-to-r from-[#D62828] via-[#FF5A3C] to-[#FF4D6D]/50",
        direction === "center" && "mx-auto",
        direction === "right" && "ml-auto",
        className
      )}
      style={{
        width: isVisible ? width : "0",
        opacity: isVisible ? 1 : 0,
        transition: `width 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, opacity 500ms ease ${delay}ms`,
        transformOrigin: direction === "right" ? "right" : direction === "center" ? "center" : "left",
      }}
    />
  );
}

// Fade In animation
interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeIn({ children, className, delay = 0, duration = 800 }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(true); // Start visible for SSR
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Scale reveal animation
interface ScaleRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleReveal({ children, className, delay = 0 }: ScaleRevealProps) {
  const [isVisible, setIsVisible] = useState(true); // Start visible for SSR
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.95)",
        transition: `opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Clip reveal animation (reveal from one side)
interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "top" | "bottom";
}

export function ClipReveal({ children, className, delay = 0, direction = "bottom" }: ClipRevealProps) {
  const [isVisible, setIsVisible] = useState(true); // Start visible for SSR
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getClipPath = () => {
    if (isVisible) return "inset(0 0 0 0)";
    switch (direction) {
      case "left": return "inset(0 100% 0 0)";
      case "right": return "inset(0 0 0 100%)";
      case "top": return "inset(100% 0 0 0)";
      case "bottom": return "inset(0 0 100% 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        clipPath: getClipPath(),
        transition: `clip-path 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Number counter animation
interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function Counter({ end, suffix = "", prefix = "", className, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const steps = 60;
    const stepDuration = duration / steps;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
