import Image from "next/image";

const features = [
  { icon: "/sprites/Icon_Sword.png", title: "24 Weapons", desc: "From pistols to the BFG-9000. Six rarity tiers, each with 5 upgradable stats.", accent: "border-accent-red/20" },
  { icon: "/sprites/Icon_Shield.png", title: "37 Towers", desc: "Turrets, lasers, mortars, railguns. Independent upgrade paths for every tower.", accent: "border-accent-blue/20" },
  { icon: "/sprites/Icon_Crown.png", title: "33 Characters", desc: "Soldiers, pirates, monsters, mechs. Each with a unique passive ability.", accent: "border-rarity-epic/20" },
  { icon: "/sprites/Icon_Compass.png", title: "19 Stages", desc: "Forest to Space Station and beyond. 95 total levels across unique biomes.", accent: "border-accent-green/20" },
  { icon: "/sprites/Icon_Hammer.png", title: "Hub World", desc: "Upgrade 8 permanent buildings. Every upgrade boosts all future runs.", accent: "border-accent-orange/20" },
  { icon: "/sprites/Icon_Golden_Pass.png", title: "Battle Pass", desc: "30 tiers per season. Daily and weekly quests for coins, gems, and cosmetics.", accent: "border-accent-gold/20" },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-game text-4xl text-white">BUILT FOR BATTLE</h2>
      <p className="mt-2 text-center text-text-secondary">Everything you need to defend, upgrade, and dominate</p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className={`group rounded-2xl border ${f.accent} bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-accent-orange/30`}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
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
