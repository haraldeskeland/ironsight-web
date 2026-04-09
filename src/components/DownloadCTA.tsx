import ScrollReveal from "./ScrollReveal";

export default function DownloadCTA() {
  return (
    <section className="bg-[#02335a] py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <h2 className="game-text font-game text-5xl">READY TO DEFEND?</h2>
          <p className="mt-4 text-lg text-white/60">Download Ironsight free on the App Store</p>
          <div className="mt-10">
            <a href="#" className="btn-primary px-14 py-5 text-2xl">
              <span>Download Now</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
