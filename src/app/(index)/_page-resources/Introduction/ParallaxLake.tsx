"use client";

import { useEffect, useRef } from "react";

import { useMediaQuery } from "@/client/hooks/useMediaQuery";
import Image from "next/image";

export default function ParallaxLake() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const parallaxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        // Move the background slower than the scroll speed for parallax effect
        parallaxRef.current.style.transform = `translateY(${scrolled * (isMobile ? 0.1 : 0.6)}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <Image
      ref={parallaxRef}
      src="/images/lago.webp"
      alt="Lago background"
      width={690}
      height={664}
      className="right-0 top-16 mt-12 h-full max-h-[780px] rounded-t-[56px] bg-cover bg-bottom object-cover md:absolute md:max-w-[45%] lg:top-0 lg:mt-32 lg:rounded-tl-[56px]"
    />
  );
}
