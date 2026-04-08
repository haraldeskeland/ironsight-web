export default function Screenshots() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-game text-4xl text-white">SEE IT IN ACTION</h2>
      <p className="mt-2 text-center text-text-secondary">Gameplay screenshots coming soon</p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {["Battle Gameplay", "Tower Defense", "Hub World"].map((label) => (
          <div key={label} className="flex h-44 items-center justify-center rounded-2xl border border-white/5 bg-card text-sm text-text-secondary">
            <span className="text-accent-orange">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
