"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 24, label: "Weapons", accent: "#FE4546" },
  { value: 37, label: "Towers", accent: "#017BCC" },
  { value: 33, label: "Characters", accent: "#FFDC2F" },
  { value: 95, label: "Levels", accent: "#51D502" },
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
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="game-panel p-5 text-center"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div
              className="font-game text-4xl"
              style={{
                color: stat.accent,
                WebkitTextStroke: "1.5px #1a1a1a",
                paintOrder: "stroke fill",
                textShadow: "0 2px 0 #1a1a1a, 0 3px 8px rgba(0,0,0,0.3)",
              }}
            >
              <AnimatedCounter target={stat.value} active={active} />
            </div>
            <div className="mt-1 font-game text-sm text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
