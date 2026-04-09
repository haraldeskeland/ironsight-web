"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const rarityColors: Record<string, { border: string; dark: string; ribbon: string }> = {
  Common:    { border: "#b8b8b8", dark: "#8a8a8a", ribbon: "#9e9e9e" },
  Rare:      { border: "#4fc3f7", dark: "#0288d1", ribbon: "#039be5" },
  Epic:      { border: "#ab47bc", dark: "#7b1fa2", ribbon: "#8e24aa" },
  Legendary: { border: "#ffab00", dark: "#c67c00", ribbon: "#ff8f00" },
  Mythic:    { border: "#FE4546", dark: "#b71c1c", ribbon: "#d32f2f" },
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
            htmlCard.style.animationDelay = `${i * 100}ms`;
            htmlCard.classList.remove("reveal-hidden");
            htmlCard.classList.add("animate-slide-right");
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
    <section id="characters" className="relative py-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sprites/Background_04.png')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-6xl px-6">
        <h2
          className="game-text text-center font-game text-4xl"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
        >
          COLLECT &amp; LEVEL 33 CHARACTERS
        </h2>
        <p className="mt-2 text-center text-text-secondary">
          Five rarity tiers from Common to Mythic
        </p>

        <div ref={ref} className="scroll-hide mt-10 flex justify-center gap-5 overflow-x-auto pb-4">
          {characters.map((c) => {
            const colors = rarityColors[c.rarity];
            return (
              <div
                key={c.name}
                data-char-card
                className="reveal-hidden group relative flex flex-col items-center transition-transform duration-200 hover:-translate-y-2"
                style={{
                  width: 180,
                  height: 260,
                }}
              >
                {/* Outer card frame */}
                <div
                  className="relative flex h-full w-full flex-col overflow-hidden rounded-xl"
                  style={{
                    border: `3px solid ${colors.border}`,
                    borderBottom: `6px solid ${colors.dark}`,
                    background: "linear-gradient(135deg, #5bc0ff 0%, #0288d1 50%, #01579b 100%)",
                    boxShadow: `0 4px 16px rgba(0,0,0,0.4), 0 0 12px ${colors.border}33`,
                  }}
                >
                  {/* Rarity ribbon triangle in top-right corner */}
                  <div
                    className="absolute right-0 top-0 z-20"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "40px solid transparent",
                      borderTop: `40px solid ${colors.ribbon}`,
                    }}
                  />

                  {/* Inner subtle pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.3), transparent 60%)",
                    }}
                  />

                  {/* Character image area */}
                  <div className="relative flex flex-1 items-center justify-center px-2 pt-4">
                    <div className="relative h-[150px] w-[130px]">
                      <Image
                        src={`/characters/${c.img}.png`}
                        alt={c.name}
                        fill
                        className="object-contain"
                        style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}
                      />
                    </div>
                  </div>

                  {/* Name banner - green 3D button style */}
                  <div className="relative z-10 px-2 pb-1">
                    <div
                      className="w-full rounded-lg py-1.5 text-center"
                      style={{
                        background: "linear-gradient(180deg, #51D502, #3aab00)",
                        borderBottom: "3px solid #2d8400",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      <span
                        className="font-game text-sm text-white"
                        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
                      >
                        {c.name}
                      </span>
                    </div>
                  </div>

                  {/* Rarity text */}
                  <div className="relative z-10 pb-2.5 pt-1 text-center">
                    <span
                      className="text-[11px] font-bold"
                      style={{
                        color: colors.border,
                        textShadow: `0 0 8px ${colors.border}66`,
                      }}
                    >
                      {c.rarity}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
