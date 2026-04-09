"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const features = [
  { icon: "/sprites/Icon_Sword.png", title: "24 Weapons", desc: "From pistols to the BFG-9000. Six rarity tiers, each with 5 upgradable stats." },
  { icon: "/sprites/Icon_Shield.png", title: "37 Towers", desc: "Turrets, lasers, mortars, railguns. Independent upgrade paths for every tower." },
  { icon: "/sprites/Icon_Crown.png", title: "33 Characters", desc: "Soldiers, pirates, monsters, mechs. Each with a unique passive ability." },
  { icon: "/sprites/Icon_Compass.png", title: "19 Stages", desc: "Forest to Space Station and beyond. 95 total levels across unique biomes." },
  { icon: "/sprites/Icon_Hammer.png", title: "Hub World", desc: "Upgrade 8 permanent buildings. Every upgrade boosts all future runs." },
  { icon: "/sprites/Icon_Golden_Pass.png", title: "Battle Pass", desc: "30 tiers per season. Daily and weekly quests for coins, gems, and cosmetics." },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = el.querySelectorAll("[data-feature-card]");
          cards.forEach((card, i) => {
            const htmlCard = card as HTMLElement;
            htmlCard.style.animationDelay = `${i * 100}ms`;
            htmlCard.classList.remove("reveal-hidden");
            htmlCard.classList.add("animate-scale-up");
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-game text-4xl text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>BUILT FOR BATTLE</h2>
      <p className="mt-2 text-center text-text-secondary">Everything you need to defend, upgrade, and dominate</p>
      <div ref={ref} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            data-feature-card
            className="reveal-hidden group rounded-2xl border border-white/10 bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-accent-gold/40"
            style={{ borderBottom: "4px solid rgba(0,0,0,0.2)" }}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
              <Image src={f.icon} alt={f.title} width={32} height={32} />
            </div>
            <h3 className="font-game text-lg text-white">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
