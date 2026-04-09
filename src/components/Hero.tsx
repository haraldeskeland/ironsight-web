"use client";

import { useEffect, useRef } from "react";

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
        style={{ backgroundImage: "url('/loading-1.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#034a7e]/95 via-[#045D9E]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#045D9E] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div className="max-w-xl">
          <p
            data-hero-sub
            className="reveal-hidden font-game text-lg"
            style={{
              color: "#FFDC2F",
              WebkitTextStroke: "1px #6b4400",
              paintOrder: "stroke fill",
              textShadow: "0 2px 0 #6b4400, 0 3px 8px rgba(0,0,0,0.4)",
            }}
          >
            Tower Defense Action Shooter
          </p>
          <h1
            data-hero-title
            className="reveal-hidden mt-3 font-game text-6xl leading-none md:text-8xl"
            style={{
              color: "#ffffff",
              WebkitTextStroke: "3px #1a1a1a",
              paintOrder: "stroke fill",
              textShadow: "0 4px 0 #1a1a1a, 0 6px 16px rgba(0,0,0,0.5)",
            }}
          >
            IRONSIGHT
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">
            Defend your base. Arm your towers. Unleash hell. Run, gun, and build
            defenses in real time as waves of enemies storm from every direction.
          </p>
          <div data-hero-cta className="reveal-hidden mt-8 flex flex-wrap gap-4">
            <a href="#" className="btn-primary">
              Download Free
            </a>
            <a href="#features" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
