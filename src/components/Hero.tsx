import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/sprites/Background_08_2Middle.png"
          alt=""
          fill
          className="object-cover opacity-20 mix-blend-screen"
          priority
        />
        <div className="absolute right-[10%] top-[10%] h-[400px] w-[400px]">
          <Image
            src="/sprites/Glow_Cirlce.png"
            alt=""
            fill
            className="object-contain opacity-30"
          />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-20 md:grid-cols-2 md:py-32">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[3px] text-accent-orange">
            Tower Defense Action Shooter
          </p>
          <h1 className="mt-3 font-game text-6xl leading-none tracking-wide text-white md:text-7xl">
            IRONSIGHT
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
            Defend your base. Arm your towers. Unleash hell. Run, gun, and build
            defenses in real time as waves of enemies storm from every direction.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#ffb347] via-accent-orange to-[#e8890a] px-8 py-4 font-game text-lg text-bg shadow-[0_4px_0_#c77008,0_6px_24px_rgba(247,151,30,0.3)] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_0_#c77008]"
            >
              Download Free
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/10 bg-white/[0.03] px-8 py-4 font-game text-lg text-white transition-colors hover:border-accent-orange/30 hover:bg-accent-orange/5"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative flex h-[400px] items-end justify-center md:h-[480px]">
          <div className="absolute bottom-0 left-[10%] w-[200px] md:w-[240px]">
            <Image src="/characters/pirate_captain.png" alt="Captain Barbarossa" width={240} height={400} className="drop-shadow-2xl" priority />
          </div>
          <div className="relative z-10 w-[220px] md:w-[280px]">
            <Image src="/characters/monster_ninja.png" alt="Ninja" width={280} height={440} className="drop-shadow-2xl" priority />
          </div>
          <div className="absolute bottom-0 right-[10%] w-[200px] md:w-[240px]">
            <Image src="/characters/soldier.png" alt="Soldier" width={240} height={400} className="drop-shadow-2xl" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
