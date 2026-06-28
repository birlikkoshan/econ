import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

/** Изумрудный надзаголовок капсом с разрядкой — как в эталоне. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "text-xs font-bold uppercase tracking-[0.12em] text-brand",
        className,
      )}
    >
      {children}
    </div>
  );
}
