"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 24, label: "Weapons", accent: "#FE4546", shadow: "#7a0000" },
  { value: 37, label: "Towers", accent: "#017BCC", shadow: "#003d66" },
  { value: 33, label: "Characters", accent: "#ab47bc", shadow: "#4a1a5e" },
  { value: 95, label: "Levels", accent: "#51D502", shadow: "#1a4a00" },
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
    <section ref={ref} className="bg-white py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border-3 border-black bg-white p-6 text-center"
            style={{
              boxShadow: `0 6px 0 ${stat.shadow}, 0 8px 16px rgba(0,0,0,0.15)`,
            }}
          >
            <div
              className="font-game text-5xl"
              style={{
                color: stat.accent,
                WebkitTextStroke: "2px #000000",
                paintOrder: "stroke fill",
                textShadow: "0 3px 0 #000000",
              }}
            >
              <AnimatedCounter target={stat.value} active={active} />
            </div>
            <div className="mt-1 font-game text-base text-gray-800">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
