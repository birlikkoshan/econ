import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CARD_BORDER_HOVER =
  "transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand-tint hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)]";

export const CARD_BORDER_HOVER_LG =
  "transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand-tint hover:shadow-[0_10px_28px_-14px_rgba(0,0,0,0.2)]";
