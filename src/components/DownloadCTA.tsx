import Image from "next/image";

export default function DownloadCTA() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2">
        <Image src="/sprites/Glow_Cirlce.png" alt="" fill className="object-contain opacity-20" />
      </div>
      <div className="relative rounded-2xl border border-accent-orange/10 bg-gradient-to-br from-accent-orange/5 to-accent-blue/5 px-8 py-16 text-center">
        <h2 className="font-game text-4xl text-white">READY TO DEFEND?</h2>
        <p className="mt-3 text-text-secondary">Download Ironsight free on the App Store</p>
        <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#ffb347] via-accent-orange to-[#e8890a] px-10 py-4 font-game text-xl text-bg shadow-[0_4px_0_#c77008,0_6px_24px_rgba(247,151,30,0.3)] transition-transform hover:-translate-y-0.5">
          Download Now
        </a>
      </div>
    </section>
  );
}
