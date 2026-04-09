"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  animation?: "slide-up" | "slide-right" | "scale-up";
  stagger?: boolean;
  staggerDelay?: number;
}

export default function ScrollReveal({
  children,
  animation = "slide-up",
  stagger = false,
  staggerDelay = 100,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (stagger) {
            const items = el.querySelectorAll("[data-stagger-item]");
            items.forEach((item, i) => {
              const htmlItem = item as HTMLElement;
              htmlItem.style.animationDelay = `${i * staggerDelay}ms`;
              htmlItem.classList.remove("reveal-hidden");
              htmlItem.classList.add(`animate-${animation}`);
            });
          }
          el.classList.remove("reveal-hidden");
          el.classList.add(`animate-${animation}`);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, stagger, staggerDelay]);

  return (
    <div ref={ref} className="reveal-hidden">
      {children}
    </div>
  );
}
