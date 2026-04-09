import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const rarityColors: Record<string, { color: string; dark: string }> = {
  Common:    { color: "#b8b8b8", dark: "#6a6a6a" },
  Rare:      { color: "#4fc3f7", dark: "#0277bd" },
  Epic:      { color: "#ab47bc", dark: "#6a1b9a" },
  Legendary: { color: "#ffab00", dark: "#c67c00" },
  Mythic:    { color: "#FE4546", dark: "#b71c1c" },
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
  return (
    <section id="characters" className="relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sprites/Background_04.png')" }}
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="game-text text-center font-game text-4xl">
            COLLECT & LEVEL 33 CHARACTERS
          </h2>
          <p className="mt-3 text-center text-white/70">
            Five rarity tiers from Common to Mythic
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          {characters.map((c) => {
            const r = rarityColors[c.rarity];
            return (
              <ScrollReveal key={c.name}>
              <div
                className="flex flex-col items-center transition-transform duration-200 hover:-translate-y-3"
              >
                {/* Glow + character */}
                <div className="relative w-full">
                  {/* Glow */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: "90%",
                      height: "80%",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${r.color}60 0%, ${r.color}25 35%, transparent 70%)`,
                      filter: "blur(20px)",
                    }}
                  />
                  {/* Character — fixed size, not fill, so it renders at natural proportions */}
                  <div className="flex justify-center">
                    <Image
                      src={`/characters/${c.img}.png`}
                      alt={c.name}
                      width={200}
                      height={267}
                      className="relative"
                      style={{
                        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.7))",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>

                {/* Name */}
                <h3
                  className="-mt-2 font-game text-xl text-white"
                  style={{
                    WebkitTextStroke: "1.5px #000",
                    paintOrder: "stroke fill",
                    textShadow: "0 3px 0 #000",
                  }}
                >
                  {c.name}
                </h3>

                {/* Rarity pill */}
                <div
                  className="relative mt-1.5 overflow-hidden rounded-lg px-4 py-0.5"
                  style={{
                    background: `linear-gradient(180deg, ${r.color} 0%, ${r.color} 48%, ${r.dark} 52%, ${r.dark} 100%)`,
                    border: "1px solid #000",
                    boxShadow: `0 0 0 1px #000, 0 2px 0 1px rgba(0,0,0,0.3), 0 0 16px ${r.color}35`,
                  }}
                >
                  <div
                    className="absolute top-0 right-0 left-0 h-[48%]"
                    style={{ background: "rgba(255,255,255,0.2)", borderRadius: "8px 8px 2px 2px" }}
                  />
                  <span
                    className="relative z-10 font-game text-[11px] text-white"
                    style={{
                      WebkitTextStroke: "0.5px #000",
                      paintOrder: "stroke fill",
                      textShadow: "0 1px 0 #000",
                    }}
                  >
                    {c.rarity}
                  </span>
                </div>
              </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
