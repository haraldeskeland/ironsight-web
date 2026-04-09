"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 24, label: "Weapons", color: "text-accent-red" },
  { value: 37, label: "Towers", color: "text-accent-blue" },
  { value: 33, label: "Characters", color: "text-accent-gold" },
  { value: 95, label: "Levels", color: "text-accent-green" },
];

function AnimatedCounter({ target, active }: { target: number; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const duration = 800;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return <>{count}</>;
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            data-stagger-item
            className="rounded-2xl border border-white/10 bg-card p-5 text-center"
            style={{
              borderBottom: "4px solid rgba(0,0,0,0.2)",
              animationDelay: `${i * 100}ms`,
            }}
          >
            <div className={`font-game text-4xl ${stat.color}`}>
              <AnimatedCounter target={stat.value} active={active} />
            </div>
            <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
