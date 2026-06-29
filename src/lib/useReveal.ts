import { useEffect, useRef, useState } from "react";

type UseRevealOptions = {
  /** Нижний отступ зоны срабатывания (IntersectionObserver rootMargin). */
  rootMargin?: string;
  threshold?: number | number[];
};

/**
 * Появление элемента при попадании в область видимости.
 * Возвращает ref для целевого узла и флаг `shown` (становится true один раз).
 * Уважает prefers-reduced-motion: при включённом — сразу показывает.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {},
) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    const rootMargin =
      options.rootMargin ??
      (isMobile ? "0px 0px -4% 0px" : "0px 0px -12% 0px");
    const threshold = options.threshold ?? (isMobile ? 0.08 : 0.1);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options.rootMargin, options.threshold]);

  return { ref, shown };
}
