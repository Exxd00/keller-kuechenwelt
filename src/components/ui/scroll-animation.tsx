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
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once, threshold]);

  const getTransform = () => {
    if (mounted && !isVisible) {
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

  // Show content immediately on SSR, animate only on client
  const shouldShow = !mounted || isVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shouldShow ? 1 : 0,
        transform: shouldShow ? "translateY(0) translateX(0)" : getTransform(),
        transition: mounted ? `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms` : 'none',
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
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

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

  const shouldShow = !mounted || isVisible;

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
        width: shouldShow ? width : "0",
        opacity: shouldShow ? 1 : 0,
        transition: mounted ? `width 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, opacity 500ms ease ${delay}ms` : 'none',
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
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

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

  const shouldShow = !mounted || isVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shouldShow ? 1 : 0,
        transition: mounted ? `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms` : 'none',
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
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

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

  const shouldShow = !mounted || isVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shouldShow ? 1 : 0,
        transform: shouldShow ? "scale(1)" : "scale(0.95)",
        transition: mounted ? `opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms` : 'none',
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
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

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
    if (mounted && !isVisible) {
      switch (direction) {
        case "left": return "inset(0 100% 0 0)";
        case "right": return "inset(0 0 0 100%)";
        case "top": return "inset(100% 0 0 0)";
        case "bottom": return "inset(0 0 100% 0)";
      }
    }
    return "inset(0 0 0 0)";
  };

  const shouldShow = !mounted || isVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        clipPath: shouldShow ? "inset(0 0 0 0)" : getClipPath(),
        transition: mounted ? `clip-path 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms` : 'none',
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
  const [count, setCount] = useState(end); // Start with end value for SSR
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setCount(0); // Reset to 0 on mount for animation

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

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
