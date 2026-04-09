import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const screenshots = [
  { label: "Tower Defense Action", img: "/screenshots/gameplay-combat-web.jpg" },
  { label: "Strategic Gameplay", img: "/screenshots/gameplay-overview-web.jpg" },
  { label: "Build Your Base", img: "/screenshots/hub-world-web.jpg" },
  { label: "Collect Characters", img: "/screenshots/characters-grid-web.jpg" },
  { label: "Level Up Heroes", img: "/screenshots/character-detail-web.jpg" },
  { label: "Unique Worlds", img: "/screenshots/cyberpunk-level-web.jpg" },
];

export default function Screenshots() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="game-text-dark text-center font-game text-4xl">SEE IT IN ACTION</h2>
          <p className="mt-2 text-center text-gray-500">Real gameplay screenshots</p>
        </ScrollReveal>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((s) => (
            <ScrollReveal key={s.label}>
              <div
                className="group relative overflow-hidden rounded-2xl"
                style={{
                  border: "3px solid #000",
                  boxShadow: "0 0 0 1px #000, 0 6px 0 2px rgba(0,0,0,0.2)",
                }}
              >
                <Image
                  src={s.img}
                  alt={s.label}
                  width={1400}
                  height={645}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span
                  className="absolute bottom-3 left-4 font-game text-base"
                  style={{
                    color: "#fff",
                    WebkitTextStroke: "1px #000",
                    paintOrder: "stroke fill",
                    textShadow: "0 2px 0 #000",
                  }}
                >
                  {s.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
