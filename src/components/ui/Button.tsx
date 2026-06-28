import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "white";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-deep",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink/[0.03]",
  white: "bg-white text-brand-deep hover:bg-white/90",
};

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  block?: boolean;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  disabled,
  block,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-[2px] px-6 py-[13px] text-[15px] font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60",
    VARIANTS[variant],
    block && "w-full",
    className,
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
