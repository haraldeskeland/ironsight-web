const stats = [
  { value: "24", label: "Weapons", color: "text-accent-red" },
  { value: "37", label: "Towers", color: "text-accent-blue" },
  { value: "33", label: "Characters", color: "text-rarity-epic" },
  { value: "95", label: "Levels", color: "text-accent-green" },
];

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/5 bg-card p-5 text-center">
            <div className={`font-game text-4xl ${stat.color}`}>{stat.value}</div>
            <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
