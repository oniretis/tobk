"use client";
import React, { useState, useEffect, useCallback } from "react";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const Carousel: React.FC = () => {
  const t = useTranslations("Index");

  const images = [
    {
      title: t("titleHero1"),
      description: t("subtitleHero1"),
      url: "/images/1.png",
    },
    {
      title: t("titleHero2"),
      description: t("subtitleHero2"),
      url: "/images/2.png",
    },
    {
      title: t("titleHero3"),
      description: t("subtitleHero3"),
      url: "/images/3.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  return (
    <div
      className="relative w-full h-[calc(100vh-6rem)] overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${index === currentSlide
            ? "opacity-100 scale-100 z-10"
            : "opacity-0 scale-105 z-0"
            }`}
        >
          {/* Image */}
          <Image
            src={image.url}
            alt={image.title}
            fill
            priority={index === 0}
            className="object-cover transition-transform duration-[8000ms] ease-linear group-hover:scale-105"
          />

          {/* Better Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
            <Container>
              <FadeIn className="text-center">
                <h1 className="font-display max-w-5xl text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                  {image.title}
                </h1>
              </FadeIn>
            </Container>

            <Container>
              <FadeIn className="text-center">
                <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-200 leading-relaxed drop-shadow-lg">
                  {image.description}
                </p>
              </FadeIn>
            </Container>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30
        backdrop-blur-md bg-white/10 border border-white/20
        text-white p-3 rounded-full
        opacity-0 group-hover:opacity-100
        transition-all duration-300
        hover:scale-110 hover:bg-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30
        backdrop-blur-md bg-white/10 border border-white/20
        text-white p-3 rounded-full
        opacity-0 group-hover:opacity-100
        transition-all duration-300
        hover:scale-110 hover:bg-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80 drop-shadow-lg" />
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
              ? "w-10 bg-white shadow-lg"
              : "w-3 bg-white/40 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;