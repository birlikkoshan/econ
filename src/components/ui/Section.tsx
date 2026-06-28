import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  id?: string;
  variant?: "default" | "muted" | "dark";
  animate?: boolean;
};

const variants = {
  default: "bg-white",
  muted: "bg-slate-50",
  dark: "bg-surface-900 text-white",
};

export function Section({
  id,
  children,
  className,
  variant = "default",
  animate = true,
  ...props
}: SectionProps) {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "py-16 md:py-24",
        variants[variant],
        animate && (isInView ? "animate-fade-in-up" : "opacity-0"),
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
