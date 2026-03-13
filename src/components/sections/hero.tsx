"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

// Kitchen-specific video sources
const VIDEO_SOURCES = [
  // Modern kitchen video from Pexels
  "https://videos.pexels.com/video-files/4352584/4352584-hd_1920_1080_25fps.mp4",
  // Luxury interior
  "https://videos.pexels.com/video-files/4112953/4112953-hd_1920_1080_30fps.mp4",
  // Kitchen cooking ambiance
  "https://videos.pexels.com/video-files/3296542/3296542-hd_1920_1080_25fps.mp4",
];

// Static fallback image - using local image
const FALLBACK_IMAGE = "/kitchen/shot_01.png";

export function Hero() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Start reveal animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle video loading and fallback
  const handleVideoError = useCallback(() => {
    if (currentVideoIndex < VIDEO_SOURCES.length - 1) {
      setCurrentVideoIndex((prev) => prev + 1);
    } else {
      setVideoError(true);
    }
  }, [currentVideoIndex]);

  const handleVideoLoaded = useCallback(() => {
    setVideoLoaded(true);
    setVideoError(false);
  }, []);

  // Toggle video play/pause
  const toggleVideo = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  // Parallax mouse effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x: x * -5, y: y * -5 });
  }, []);

  // Scroll effect
  const handleScroll = useCallback(() => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        heroElement.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleMouseMove, handleScroll]);

  const scrollBlur = scrollProgress * 20;
  const scrollOpacity = 1 - scrollProgress * 1.5;
  const scrollY = scrollProgress * -100;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1F1F1F]"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        {/* Static Image Fallback */}
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: videoLoaded && !videoError ? 0 : 1 }}
        >
          <Image
            src={FALLBACK_IMAGE}
            alt="Luxuriöse moderne Küche"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            style={{
              filter: "brightness(0.5) contrast(1.1)",
            }}
          />
        </div>

        {/* Video Element */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{
              opacity: videoLoaded ? 1 : 0,
              filter: "brightness(0.5) contrast(1.1)",
              transform: "scale(1.05)",
            }}
          >
            <source src={VIDEO_SOURCES[currentVideoIndex]} type="video/mp4" />
          </video>
        )}

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F]/90 via-[#1F1F1F]/60 to-transparent" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(31,31,31,0.8)_100%)]" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1F1F1F] to-transparent" />
      </div>

      {/* Video control button */}
      {videoLoaded && !videoError && (
        <button
          onClick={toggleVideo}
          className={cn(
            "absolute bottom-24 right-8 z-20 w-12 h-12 rounded-full",
            "bg-white/10 backdrop-blur-sm border border-white/20",
            "flex items-center justify-center",
            "hover:bg-white/20 hover:scale-105",
            "transition-all duration-300",
            isRevealed ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: "2000ms" }}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white/70" />
          ) : (
            <Play className="w-5 h-5 text-white/70 ml-0.5" />
          )}
        </button>
      )}

      {/* Main Content */}
      <div
        className="keller-container relative z-10 pt-24 pb-20"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y + scrollY}px)`,
          filter: `blur(${scrollBlur}px)`,
          opacity: Math.max(0, scrollOpacity),
          transition: "transform 0.15s ease-out",
        }}
      >
        <div className="max-w-3xl">
          <div className="space-y-8">
            {/* Label */}
            <div
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full",
                "bg-white/10 backdrop-blur-sm border border-white/10",
                "transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                isRevealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[20px] opacity-0"
              )}
            >
              <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-white/70">
                Showroom Nürnberg
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="overflow-hidden">
                <span
                  className={cn(
                    "block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] text-white",
                    "transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isRevealed
                      ? "translate-y-0 opacity-100 blur-0"
                      : "translate-y-[30px] opacity-0 blur-[20px]"
                  )}
                  style={{
                    transitionDelay: "100ms",
                  }}
                >
                  Ihre Traumküche
                </span>

                <span
                  className={cn(
                    "block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]",
                    "transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isRevealed
                      ? "translate-y-0 opacity-100 blur-0"
                      : "translate-y-[30px] opacity-0 blur-[20px]"
                  )}
                  style={{
                    background: "linear-gradient(135deg, #D62828 0%, #FF5A3C 50%, #FF4D6D 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    transitionDelay: "250ms",
                  }}
                >
                  beginnt hier.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className={cn(
                "text-lg md:text-xl text-white/60 max-w-xl leading-relaxed",
                "transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                isRevealed
                  ? "translate-y-0 opacity-100 blur-0"
                  : "translate-y-[20px] opacity-0 blur-[10px]"
              )}
              style={{ transitionDelay: "500ms" }}
            >
              Exklusive Küchenplanung aus Nürnberg. Maßgeschneiderte Lösungen,
              hochwertige Marken und persönliche Beratung.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className={cn(
                  "bg-[#D62828] hover:bg-[#B82020] text-white font-semibold h-14 px-8 text-base",
                  "shadow-lg shadow-[#D62828]/30 border-0",
                  "hover:shadow-[#D62828]/50 hover:scale-[1.02]",
                  "transition-all duration-300 ease-out",
                  isRevealed
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[20px] opacity-0"
                )}
                style={{ transitionDelay: "700ms" }}
              >
                <Link href="/termin-buchen">
                  <Calendar className="h-5 w-5 mr-2" />
                  Termin buchen
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className={cn(
                  "h-14 px-8 text-base bg-white/5 backdrop-blur-sm border-white/20 text-white",
                  "hover:bg-white/10 hover:border-white/40",
                  "transition-all duration-300 ease-out",
                  isRevealed
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[20px] opacity-0"
                )}
                style={{ transitionDelay: "850ms" }}
              >
                <Link href="#beratung">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Beratung anfragen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div
        className={cn(
          "absolute top-0 right-0 w-1/3 h-px",
          "transition-all duration-1000",
          isRevealed ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        )}
        style={{
          background: "linear-gradient(to left, #D62828, transparent)",
          transitionDelay: "1200ms",
          transformOrigin: "right"
        }}
      />
      <div
        className={cn(
          "absolute top-0 right-0 w-px h-1/4",
          "transition-all duration-1000",
          isRevealed ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        )}
        style={{
          background: "linear-gradient(to bottom, #D62828, transparent)",
          transitionDelay: "1200ms",
          transformOrigin: "top"
        }}
      />
    </section>
  );
}
