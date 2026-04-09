"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const rarityColors: Record<string, { bg: string; border: string }> = {
  Common:    { bg: "#6a6a6a", border: "#b8b8b8" },
  Rare:      { bg: "#0277bd", border: "#4fc3f7" },
  Epic:      { bg: "#6a1b9a", border: "#ab47bc" },
  Legendary: { bg: "#e65100", border: "#ffab00" },
  Mythic:    { bg: "#b71c1c", border: "#FE4546" },
};

const characters = [
  { name: "Soldier", img: "soldier", rarity: "Common" },
  { name: "Mako", img: "pirate_mako", rarity: "Rare" },
  { name: "Orc", img: "monster_orc", rarity: "Epic" },
  { name: "Ninja", img: "monster_ninja", rarity: "Legendary" },
  { name: "Dino", img: "monster_dino", rarity: "Legendary" },
  { name: "Yeti", img: "monster_yeti", rarity: "Legendary" },
  { name: "Ghost", img: "monster_ghost", rarity: "Epic" },
  { name: "Dragon", img: "monster_dragon_evolved", rarity: "Mythic" },
];

export default function Characters() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = el.querySelectorAll("[data-char-card]");
          cards.forEach((card, i) => {
            const htmlCard = card as HTMLElement;
            htmlCard.style.animationDelay = `${i * 80}ms`;
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
    <section id="characters" className="relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sprites/Background_04.png')" }}
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="game-text text-center font-game text-4xl">
          COLLECT & LEVEL 33 CHARACTERS
        </h2>
        <p className="mt-3 text-center text-white/70">
          Five rarity tiers from Common to Mythic
        </p>

        <div ref={ref} className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {characters.map((c) => {
            const colors = rarityColors[c.rarity];
            return (
              <div
                key={c.name}
                data-char-card
                className="reveal-hidden game-panel flex flex-col items-center p-4 transition-transform duration-200 hover:-translate-y-2"
              >
                {/* Character image */}
                <div className="relative h-[140px] w-[120px]">
                  <Image
                    src={`/characters/${c.img}.png`}
                    alt={c.name}
                    fill
                    className="object-contain"
                    style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}
                  />
                </div>

                {/* Name banner */}
                <div
                  className="relative mt-3 w-full overflow-hidden rounded-lg py-2 text-center"
                  style={{
                    background: "linear-gradient(180deg, #8ed44a 0%, #7fc427 48%, #58a221 52%, #4a8d1a 100%)",
                    border: "1px solid #000",
                    boxShadow: "0 0 0 1px #000, 0 3px 0 1px rgba(0,0,0,0.25)",
                  }}
                >
                  <div className="absolute inset-[2px] rounded-md" style={{ background: "linear-gradient(180deg, #7fc427, #58a221)" }} />
                  <div className="absolute top-[2px] right-[3px] left-[3px] h-[45%] rounded-md" style={{ background: "rgba(255,255,255,0.15)" }} />
                  <span
                    className="relative z-10 font-game text-sm text-white"
                    style={{
                      WebkitTextStroke: "1px #000",
                      paintOrder: "stroke fill",
                      textShadow: "0 2px 0 #000",
                    }}
                  >
                    {c.name}
                  </span>
                </div>

                {/* Rarity */}
                <span
                  className="mt-2 font-game text-xs"
                  style={{ color: colors.border }}
                >
                  {c.rarity}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
