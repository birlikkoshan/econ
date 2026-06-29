import type { CSSProperties } from "react";

import { PARTNER_LOGOS } from "@/constants/content";

type PartnerCarouselProps = {
  /** Названия партнёров (в порядке показа). */
  items: readonly string[];
  /** Локализатор названия (юр. формы и т.п.). */
  localize?: (name: string) => string;
};

function LogoTile({ logo, label }: { logo: string; label: string }) {
  return (
    <div
      title={label}
      className="flex h-24 w-44 shrink-0 items-center justify-center border border-line bg-surface px-5 transition-colors hover:border-brand/40"
    >
      <img
        src={logo}
        alt={label}
        loading="lazy"
        className="max-h-12 max-w-full object-contain opacity-80 transition-opacity hover:opacity-100"
      />
    </div>
  );
}

/**
 * Бесконечная карусель логотипов партнёров.
 * Показываем только партнёров с настоящим логотипом (из PARTNER_LOGOS);
 * у кого логотипа нет — в карусель не попадают (плейсхолдеры скрыты).
 * Дорожка содержит два одинаковых набора; CSS-анимация сдвигает её на −50%,
 * создавая иллюзию непрерывной ленты.
 */
export function PartnerCarousel({ items, localize }: PartnerCarouselProps) {
  // Берём только партнёров с логотипом и убираем повторяющиеся логотипы,
  // чтобы один и тот же бренд не шёл в ленте дважды подряд.
  const seenLogos = new Set<string>();
  const withLogos = items.filter((name) => {
    const logo = PARTNER_LOGOS[name];
    if (!logo || seenLogos.has(logo)) return false;
    seenLogos.add(logo);
    return true;
  });
  if (withLogos.length === 0) return null;

  // Повторяем набор несколько раз: лента получается длиннее и плотнее,
  // а петля наступает раньше (на один набор), а не ровно с середины.
  const COPIES = 4;
  const track = Array.from({ length: COPIES }, () => withLogos).flat();
  return (
    <div className="marquee-mask group overflow-hidden">
      <div
        className="flex w-max gap-4 py-2 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ "--marquee-shift": `-${100 / COPIES}%` } as CSSProperties}
      >
        {track.map((name, index) => (
          <LogoTile
            key={`${name}-${index}`}
            logo={PARTNER_LOGOS[name]}
            label={localize ? localize(name) : name}
          />
        ))}
      </div>
    </div>
  );
}
