import Image from "next/image";

const characters = [
  { name: "Soldier", img: "soldier", rarity: "Common", color: "bg-rarity-common/20 text-rarity-common" },
  { name: "Mako", img: "pirate_mako", rarity: "Rare", color: "bg-rarity-rare/20 text-rarity-rare" },
  { name: "Orc", img: "monster_orc", rarity: "Epic", color: "bg-rarity-epic/20 text-rarity-epic" },
  { name: "Ninja", img: "monster_ninja", rarity: "Legendary", color: "bg-rarity-legendary/20 text-rarity-legendary" },
  { name: "Dino", img: "monster_dino", rarity: "Legendary", color: "bg-rarity-legendary/20 text-rarity-legendary" },
  { name: "Yeti", img: "monster_yeti", rarity: "Legendary", color: "bg-rarity-legendary/20 text-rarity-legendary" },
  { name: "Ghost", img: "monster_ghost", rarity: "Epic", color: "bg-rarity-epic/20 text-rarity-epic" },
  { name: "Dragon", img: "monster_dragon_evolved", rarity: "Mythic", color: "bg-rarity-mythic/20 text-rarity-mythic" },
];

export default function Characters() {
  return (
    <section id="characters" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-game text-4xl text-white">COLLECT &amp; LEVEL 33 CHARACTERS</h2>
      <p className="mt-2 text-center text-text-secondary">Five rarity tiers from Common to Mythic</p>
      <div className="scroll-hide mt-10 flex gap-4 overflow-x-auto pb-4">
        {characters.map((c) => (
          <div key={c.name} className="group relative flex h-48 w-32 flex-shrink-0 flex-col items-center overflow-hidden rounded-2xl border border-white/5 bg-card transition-colors hover:border-accent-orange/30">
            <span className={`absolute left-2 top-2 z-10 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${c.color}`}>{c.rarity}</span>
            <div className="relative mt-4 h-28 w-24">
              <Image src={`/characters/${c.img}.png`} alt={c.name} fill className="object-contain drop-shadow-lg" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/80 to-transparent pb-2 pt-6 text-center">
              <span className="font-game text-sm text-white">{c.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
