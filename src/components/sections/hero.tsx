"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

// High-quality kitchen and interior videos - using reliable video hosting
const VIDEO_SOURCES = [
  // Modern luxury kitchen - Mixkit (free stock videos)
  "https://assets.mixkit.co/videos/preview/mixkit-luxury-home-interior-design-4811-large.mp4",
  // Kitchen cooking scene
  "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-in-a-professional-kitchen-23566-large.mp4",
  // Modern kitchen interior
  "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-a-view-4473-large.mp4",
];

// Fallback image
const FALLBACK_IMAGE = "/kitchen/shot_01.png";

export function Hero() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Start reveal animation on mount
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Try to load video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentVideoIndex]);

  // Handle video loading and fallback
  const handleVideoError = useCallback(() => {
    console.log("Video error, trying next source...", currentVideoIndex);
    if (currentVideoIndex < VIDEO_SOURCES.length - 1) {
      setCurrentVideoIndex((prev) => prev + 1);
    } else {
      console.log("All video sources failed, showing fallback image");
      setVideoError(true);
    }
  }, [currentVideoIndex]);

  const handleVideoLoaded = useCallback(() => {
    console.log("Video loaded successfully!");
    setVideoLoaded(true);
    setVideoError(false);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay prevented");
      });
    }
  }, []);

  const handleCanPlay = useCallback(() => {
    setVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay prevented");
      });
    }
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

  // Toggle mute
  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

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
      <div className="absolute inset-0 z-0">
        {/* Static Image Fallback - Always visible initially */}
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
            key={currentVideoIndex}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoaded}
            onCanPlay={handleCanPlay}
            onError={handleVideoError}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{
              opacity: videoLoaded ? 1 : 0,
              filter: "brightness(0.5) contrast(1.1)",
              transform: "scale(1.05)",
            }}
          >
            <source src={VIDEO_SOURCES[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F]/90 via-[#1F1F1F]/60 to-transparent z-10" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(31,31,31,0.8)_100%)] z-10" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1F1F1F] to-transparent z-10" />

        {/* Animated grain overlay for cinematic effect */}
        <div
          className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Video control buttons */}
      <div
        className={cn(
          "absolute bottom-24 right-8 z-20 flex gap-3",
          "transition-all duration-500",
          isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: "2000ms" }}
      >
        {videoLoaded && !videoError && (
          <>
            <button
              onClick={toggleMute}
              className={cn(
                "w-12 h-12 rounded-full",
                "bg-white/10 backdrop-blur-sm border border-white/20",
                "flex items-center justify-center",
                "hover:bg-white/20 hover:scale-105",
                "transition-all duration-300"
              )}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white/70" />
              ) : (
                <Volume2 className="w-5 h-5 text-white/70" />
              )}
            </button>
            <button
              onClick={toggleVideo}
              className={cn(
                "w-12 h-12 rounded-full",
                "bg-white/10 backdrop-blur-sm border border-white/20",
                "flex items-center justify-center",
                "hover:bg-white/20 hover:scale-105",
                "transition-all duration-300"
              )}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white/70" />
              ) : (
                <Play className="w-5 h-5 text-white/70 ml-0.5" />
              )}
            </button>
          </>
        )}
      </div>

      {/* Main Content */}
      <div
        className="keller-container relative z-20 pt-24 pb-20"
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

            {/* Quick stats */}
            <div
              className={cn(
                "flex flex-wrap gap-8 pt-8 border-t border-white/10",
                "transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                isRevealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: "1000ms" }}
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
                <div className="text-sm text-white/50">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-white/50">Zufriedene Kunden</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">20+</div>
                <div className="text-sm text-white/50">Premium Marken</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div
        className={cn(
          "absolute top-0 right-0 w-1/3 h-px z-20",
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
          "absolute top-0 right-0 w-px h-1/4 z-20",
          "transition-all duration-1000",
          isRevealed ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        )}
        style={{
          background: "linear-gradient(to bottom, #D62828, transparent)",
          transitionDelay: "1200ms",
          transformOrigin: "top"
        }}
      />

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 z-20",
          "transition-all duration-1000",
          isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: "2500ms" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
