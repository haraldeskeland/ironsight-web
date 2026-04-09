import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: "/sprites/Icon_Sword.png", title: "24 Weapons", desc: "From pistols to the BFG-9000. Six rarity tiers, each with 5 upgradable stats." },
  { icon: "/sprites/Icon_Shield.png", title: "37 Towers", desc: "Turrets, lasers, mortars, railguns. Independent upgrade paths for every tower." },
  { icon: "/sprites/Icon_Crown.png", title: "33 Characters", desc: "Soldiers, pirates, monsters, mechs. Each with a unique passive ability." },
  { icon: "/sprites/Icon_Compass.png", title: "19 Stages", desc: "Forest to Space Station and beyond. 95 total levels across unique biomes." },
  { icon: "/sprites/Icon_Hammer.png", title: "Hub World", desc: "Upgrade 8 permanent buildings. Every upgrade boosts all future runs." },
  { icon: "/sprites/Icon_Golden_Pass.png", title: "Battle Pass", desc: "30 tiers per season. Daily and weekly quests for coins, gems, and cosmetics." },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="game-text-dark text-center font-game text-4xl">
            BUILT FOR BATTLE
          </h2>
          <p className="mt-2 text-center text-gray-500">
            Everything you need to defend, upgrade, and dominate
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <ScrollReveal key={f.title}>
            <div
              className="game-panel p-6 text-center transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mx-auto mb-4">
                <Image src={f.icon} alt={f.title} width={64} height={64} />
              </div>
              <h3
                className="font-game text-2xl text-white"
                style={{
                  WebkitTextStroke: "1px #000",
                  paintOrder: "stroke fill",
                  textShadow: "0 2px 0 #000",
                }}
              >
                {f.title}
              </h3>
              <p className="mt-1.5 text-xs leading-snug text-white/60">
                {f.desc}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
