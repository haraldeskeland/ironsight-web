"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const rarityColors: Record<string, string> = {
  Common: "#b8b8b8",
  Rare: "#4fc3f7",
  Epic: "#ab47bc",
  Legendary: "#ffab00",
  Mythic: "#FE4546",
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
    <section id="characters" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-game text-4xl text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>COLLECT &amp; LEVEL 33 CHARACTERS</h2>
      <p className="mt-2 text-center text-text-secondary">Five rarity tiers from Common to Mythic</p>
      <div ref={ref} className="scroll-hide mt-10 flex gap-5 overflow-x-auto pb-4">
        {characters.map((c) => (
          <div
            key={c.name}
            data-char-card
            className="reveal-hidden group relative flex w-[160px] min-w-[160px] flex-col items-center overflow-hidden rounded-2xl border border-white/15"
            style={{
              height: "220px",
              background: "linear-gradient(180deg, #5bc0ff, #017BCC)",
              borderBottom: `5px solid ${rarityColors[c.rarity]}`,
            }}
          >
            {/* Green name banner at top */}
            <div
              className="relative z-10 w-full py-1.5 text-center"
              style={{ background: "linear-gradient(180deg, #51D502, #3aab00)" }}
            >
              <span className="font-game text-sm text-white" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>{c.name}</span>
            </div>

            {/* Character image */}
            <div className="relative mt-2 flex flex-1 items-center justify-center">
              <div className="relative h-[130px] w-[110px]">
                <Image src={`/characters/${c.img}.png`} alt={c.name} fill className="object-contain drop-shadow-lg" />
              </div>
            </div>

            {/* Rarity pill at bottom */}
            <div className="relative z-10 mb-3">
              <span
                className="rounded-full px-3 py-0.5 text-[10px] font-bold text-white"
                style={{ backgroundColor: rarityColors[c.rarity], textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
              >
                {c.rarity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
