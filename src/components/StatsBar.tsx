"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 24, label: "Weapons" },
  { value: 37, label: "Towers" },
  { value: 33, label: "Characters" },
  { value: 95, label: "Levels" },
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
    <section ref={ref} className="py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="game-panel p-7 text-center"
          >
            <div
              className="font-game text-5xl text-white"
              style={{
                WebkitTextStroke: "2px #000",
                paintOrder: "stroke fill",
                textShadow: "0 3px 0 #000",
              }}
            >
              <AnimatedCounter target={stat.value} active={active} />
            </div>
            <div className="mt-1 font-game text-base text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
