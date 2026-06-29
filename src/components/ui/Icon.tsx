import type { ReactElement } from "react";

import { cn } from "@/lib/utils";

export type IconName =
  | "shield"
  | "users"
  | "layers"
  | "user-check"
  | "lock"
  | "handshake"
  | "stamp"
  | "clipboard-check"
  | "link"
  | "message"
  | "archive"
  | "badge"
  | "beaker"
  | "file-text"
  | "document"
  | "globe";

type IconProps = {
  name: IconName;
  className?: string;
};

/* Контурные иконки 24×24, stroke=currentColor. Без внешних зависимостей. */
const PATHS: Record<IconName, ReactElement> = {
  shield: (
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0111 0M16 7a3 3 0 010 6M21 19a4.5 4.5 0 00-3.5-4.4" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3.5 12L12 17l8.5-5M3.5 16L12 21l8.5-5" />
    </>
  ),
  "user-check": (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0111 0M16 12l2 2 4-4" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </>
  ),
  handshake: (
    <path d="M3 12l4-4 4 3 2-2 4 4M3 12l4 4 2-2M13 9l3-3 5 5-4 4-3-3" />
  ),
  stamp: (
    <>
      <path d="M9 13a3 3 0 003-3V8a2 2 0 10-4 0v0M9 13a3 3 0 01-3-3V8a2 2 0 114 0" />
      <path d="M5 16h14M6 13h12l-1 3H7l-1-3zM5 20h14" />
    </>
  ),
  "clipboard-check": (
    <>
      <rect x="6" y="4" width="12" height="17" rx="1.5" />
      <path d="M9 4V3h6v1M9 13l2 2 4-4" />
    </>
  ),
  link: (
    <path d="M10 13a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1.5 1.5M14 11a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1.5-1.5" />
  ),
  message: (
    <path d="M4 5h16v11H9l-4 4v-4H4V5z" />
  ),
  archive: (
    <>
      <rect x="4" y="4" width="16" height="4" rx="1" />
      <path d="M5 8v11a1 1 0 001 1h12a1 1 0 001-1V8M10 12h4" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L8 21l4-2 4 2-1-7.5" />
    </>
  ),
  beaker: (
    <path d="M9 3h6M10 3v6l-4.5 8a1.5 1.5 0 001.3 2.2h10.4a1.5 1.5 0 001.3-2.2L14 9V3M7 14h10" />
  ),
  "file-text": (
    <>
      <path d="M7 3h7l5 5v13H7V3z" />
      <path d="M14 3v5h5M10 13h6M10 17h6" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h7l5 5v13H7V3z" />
      <path d="M14 3v5h5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9" />
      <path d="M12 3c-2.5 2.8-4 6-4 9s1.5 6.2 4 9" />
    </>
  ),
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("h-6 w-6", className)}
    >
      {PATHS[name]}
    </svg>
  );
}
