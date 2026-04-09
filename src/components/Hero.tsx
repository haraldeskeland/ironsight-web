"use client";

import { useEffect, useRef } from "react";
import StatsBar from "./StatsBar";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const title = el.querySelector("[data-hero-title]");
    const sub = el.querySelector("[data-hero-sub]");
    const cta = el.querySelector("[data-hero-cta]");
    if (title) title.classList.add("animate-slide-left");
    if (sub) {
      (sub as HTMLElement).style.animationDelay = "200ms";
      sub.classList.add("animate-slide-left");
    }
    if (cta) {
      (cta as HTMLElement).style.animationDelay = "400ms";
      cta.classList.add("animate-fade-up");
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/loading-2.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#034a7e]/90 via-[#045D9E]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#045D9E]/90 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 md:pt-28">
        <div className="max-w-xl">
          <p
            data-hero-sub
            className="reveal-hidden coc-text font-game text-xl text-[#FFDC2F]"
          >
            Tower Defense Action Shooter
          </p>
          <h1
            data-hero-title
            className="reveal-hidden mt-3 font-game text-5xl leading-none md:text-7xl"
            style={{
              color: "#ffffff",
              textShadow: "0 -3px #000, 0 0 #000, 0 3px #000, 0 6px #000, -2px -2px #000, 2px -2px #000, 2px 0 #000, -2px 0 #000, 2px 2px #000, -2px 2px #000, 2px 3px #000, -2px 3px #000, 2px 4px #000, -2px 4px #000",
            }}
          >
            IRONSIGHT
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">
            Defend your base. Arm your towers. Unleash hell. Run, gun, and build
            defenses in real time as waves of enemies storm from every direction.
          </p>
          <div data-hero-cta className="reveal-hidden mt-8 flex flex-wrap gap-4">
            <a href="#" className="btn-primary">
              <span>Download Free</span>
            </a>
            <a href="#features" className="btn-outline">
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats inside hero */}
      <div className="relative">
        <StatsBar />
      </div>
    </section>
  );
}
