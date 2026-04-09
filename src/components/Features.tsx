"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const features = [
  { icon: "/sprites/Icon_Sword.png", title: "24 Weapons", desc: "From pistols to the BFG-9000. Six rarity tiers, each with 5 upgradable stats.", accent: "#FE4546" },
  { icon: "/sprites/Icon_Shield.png", title: "37 Towers", desc: "Turrets, lasers, mortars, railguns. Independent upgrade paths for every tower.", accent: "#4fc3f7" },
  { icon: "/sprites/Icon_Crown.png", title: "33 Characters", desc: "Soldiers, pirates, monsters, mechs. Each with a unique passive ability.", accent: "#ffab00" },
  { icon: "/sprites/Icon_Compass.png", title: "19 Stages", desc: "Forest to Space Station and beyond. 95 total levels across unique biomes.", accent: "#51D502" },
  { icon: "/sprites/Icon_Hammer.png", title: "Hub World", desc: "Upgrade 8 permanent buildings. Every upgrade boosts all future runs.", accent: "#FE8F37" },
  { icon: "/sprites/Icon_Golden_Pass.png", title: "Battle Pass", desc: "30 tiers per season. Daily and weekly quests for coins, gems, and cosmetics.", accent: "#FFDC2F" },
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
    <section id="features" className="relative py-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sprites/Background_03.png')" }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="game-text text-center font-game text-4xl">
          BUILT FOR BATTLE
        </h2>
        <p className="mt-2 text-center text-white/70">
          Everything you need to defend, upgrade, and dominate
        </p>

        <div ref={ref} className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              data-feature-card
              className="reveal-hidden game-panel overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            >
              <div
                className="flex items-center justify-center py-5"
                style={{
                  background: `linear-gradient(135deg, ${f.accent}30, ${f.accent}10)`,
                  borderBottom: "2px solid rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(0,0,0,0.25)",
                    border: "2px solid #000000",
                    boxShadow: `0 3px 0 #000000, 0 0 12px ${f.accent}40`,
                  }}
                >
                  <Image src={f.icon} alt={f.title} width={36} height={36} />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3
                  className="font-game text-lg"
                  style={{
                    color: "#ffffff",
                    WebkitTextStroke: "1px #000000",
                    paintOrder: "stroke fill",
                    textShadow: "0 2px 0 #000000",
                  }}
                >
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
