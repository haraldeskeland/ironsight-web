"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 24, label: "Weapons", color: "text-accent-red", accent: "#FE4546" },
  { value: 37, label: "Towers", color: "text-accent-blue", accent: "#017BCC" },
  { value: 33, label: "Characters", color: "text-accent-gold", accent: "#FFDC2F" },
  { value: 95, label: "Levels", color: "text-accent-green", accent: "#51D502" },
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
            className="overflow-hidden rounded-xl text-center"
            style={{
              border: "2px solid rgba(255,255,255,0.12)",
              borderBottom: `5px solid ${stat.accent}`,
              background: "linear-gradient(180deg, #03498a, #034070)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              animationDelay: `${i * 100}ms`,
            }}
          >
            <div className="p-5">
              <div className={`font-game text-4xl ${stat.color}`}>
                <AnimatedCounter target={stat.value} active={active} />
              </div>
              <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
