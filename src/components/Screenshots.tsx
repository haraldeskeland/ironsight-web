import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const screenshots = [
  { label: "Battle Gameplay", img: "/loading-1.jpg" },
  { label: "Tower Defense", img: "/loading-2.jpg" },
  { label: "Hub World", img: "/loading-3.jpg" },
];

export default function Screenshots() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="game-text-dark text-center font-game text-4xl">SEE IT IN ACTION</h2>
          <p className="mt-2 text-center text-gray-500">Gameplay screenshots</p>
        </ScrollReveal>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {screenshots.map((s) => (
            <ScrollReveal key={s.label}>
              <div
                className="relative h-48 overflow-hidden rounded-2xl"
                style={{
                  border: "3px solid #000000",
                  boxShadow: "0 6px 0 #000000, 0 8px 16px rgba(0,0,0,0.2)",
                }}
              >
                <Image src={s.img} alt={s.label} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span
                  className="absolute bottom-3 left-3 font-game text-sm"
                  style={{
                    color: "#ffffff",
                    WebkitTextStroke: "1px #000000",
                    paintOrder: "stroke fill",
                    textShadow: "0 2px 0 #000000",
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
