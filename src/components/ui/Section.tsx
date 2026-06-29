import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  id?: string;
  /** Чуть более плотная изумрудная подложка — для смыслового разделения соседних секций. */
  tint?: boolean;
  /** Верхняя разделительная линия. */
  bordered?: boolean;
  className?: string;
};

/** Горизонтальные отступы тянутся с шириной экрана, вертикальные — 60px (py-15). */
export function Section({ children, id, tint, bordered, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-12 sm:px-8 lg:px-14 lg:py-15 xl:px-20 2xl:px-28",
        tint ? "bg-brand-tint/85" : "bg-brand-tint/65",
        bordered && "border-t border-line",
        className,
      )}
    >
      {children}
    </section>
  );
}
