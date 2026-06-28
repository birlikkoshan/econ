import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ListMarkerProps = {
  size?: "lg" | "sm";
  className?: string;
};

/** Изумрудный ромб — единый маркер для всех списков. */
export function ListMarker({ size = "lg", className }: ListMarkerProps) {
  const isLarge = size === "lg";

  return (
    <div
      aria-hidden
      className={cn(
        "shrink-0 rotate-45 bg-brand",
        isLarge ? "mt-1.5 h-2.5 w-2.5" : "mt-1 h-2 w-2",
        className,
      )}
    />
  );
}

type LeadListRowProps = {
  isLast: boolean;
  borderClass?: string;
  children: ReactNode;
};

/** Строка списка с ромбом и вертикальной «нитью» между пунктами. */
export function LeadListRow({
  isLast,
  borderClass = "border-line",
  children,
}: LeadListRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-[28px_1fr] items-start gap-6 border-t py-[22px] lg:grid-cols-[36px_1fr]",
        borderClass,
      )}
    >
      <div className="flex flex-col items-center self-stretch">
        <ListMarker size="lg" />
        {!isLast ? (
          <div className="mt-2.5 w-px flex-1 min-h-5 bg-brand/20" />
        ) : null}
      </div>
      {children}
    </div>
  );
}

type CompactListRowProps = {
  borderClass?: string;
  className?: string;
  children: ReactNode;
};

/** Компактная строка для двухколоночных сеток услуг. */
export function CompactListRow({
  borderClass = "border-line",
  className,
  children,
}: CompactListRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-[24px_1fr] items-start gap-4 border-t py-[18px]",
        borderClass,
        className,
      )}
    >
      <ListMarker size="sm" />
      {children}
    </div>
  );
}
