import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/useReveal";

type RevealProps = {
  children: ReactNode;
  /** Тег-обёртка (по умолчанию div). */
  as?: ElementType;
  /** Задержка появления, мс — для каскада карточек. */
  delay?: number;
  className?: string;
};

/** Плавное появление (fade + slide-up) при прокрутке к элементу. */
export function Reveal({ children, as, delay = 0, className }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
