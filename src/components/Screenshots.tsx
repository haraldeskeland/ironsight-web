import Image from "next/image";

const screenshots = [
  { label: "Battle Gameplay", img: "/loading-1.jpg" },
  { label: "Tower Defense", img: "/loading-2.jpg" },
  { label: "Hub World", img: "/loading-3.jpg" },
];

export default function Screenshots() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-game text-4xl text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>SEE IT IN ACTION</h2>
      <p className="mt-2 text-center text-text-secondary">Gameplay screenshots</p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {screenshots.map((s) => (
          <div
            key={s.label}
            className="relative h-44 overflow-hidden rounded-2xl border border-white/10"
            style={{ borderBottom: "4px solid rgba(0,0,0,0.2)" }}
          >
            <Image src={s.img} alt={s.label} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-3 left-3 font-game text-sm text-white" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
