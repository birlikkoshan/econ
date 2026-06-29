import { useEffect, useState } from "react";

import { useReveal } from "@/lib/useReveal";

type CounterProps = {
  /** Числовое значение для анимации (например 2007, 4, 5). */
  value: number;
  /** Префикс перед числом (например «с »). */
  prefix?: string;
  /** Длительность анимации, мс. */
  duration?: number;
  className?: string;
};

/** Счётчик, который «доматывается» до значения при появлении в зоне видимости. */
export function Counter({
  value,
  prefix = "",
  duration = 1400,
  className,
}: CounterProps) {
  const { ref, shown } = useReveal<HTMLSpanElement>();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!shown) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let start: number | null = null;

    const step = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic — быстрый старт, мягкое замедление
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [shown, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
    </span>
  );
}
