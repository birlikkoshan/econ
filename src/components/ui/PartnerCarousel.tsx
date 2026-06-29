import { PARTNER_LOGOS } from "@/constants/content";

type PartnerCarouselProps = {
  /** Названия партнёров (в порядке показа). */
  items: readonly string[];
  /** Локализатор названия (юр. формы и т.п.). */
  localize?: (name: string) => string;
};

/** Инициалы из названия — для плейсхолдера, пока нет файла логотипа. */
function initials(name: string): string {
  const cleaned = name
    .replace(/[«»"']/g, " ")
    .replace(/\b(ТОО|ОЮЛ|ЖШС|ЗТБ|LLC|INC|GROUP|a\.s\.|AB|Корпорация|Филиал|компании)\b/giu, " ")
    .trim();
  const words = cleaned.split(/\s+/u).filter(Boolean);
  const letters = words.slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "");
  return letters.join("") || name.slice(0, 2).toUpperCase();
}

function LogoTile({ name, label }: { name: string; label: string }) {
  const logo = PARTNER_LOGOS[name];
  return (
    <div
      title={label}
      className="flex h-24 w-44 shrink-0 items-center justify-center border border-line bg-surface px-5 transition-colors hover:border-brand/40"
    >
      {logo ? (
        <img
          src={logo}
          alt={label}
          loading="lazy"
          className="max-h-12 max-w-full object-contain opacity-80 transition-opacity hover:opacity-100"
        />
      ) : (
        <span className="select-none text-2xl font-extrabold tracking-tight text-brand/70">
          {initials(name)}
        </span>
      )}
    </div>
  );
}

/**
 * Бесконечная карусель логотипов партнёров.
 * Дорожка содержит два одинаковых набора; CSS-анимация сдвигает её на −50%,
 * создавая иллюзию непрерывной ленты. Логотипы подставляются из PARTNER_LOGOS,
 * пока файла нет — показываем плейсхолдер с инициалами.
 */
export function PartnerCarousel({ items, localize }: PartnerCarouselProps) {
  const track = [...items, ...items];
  return (
    <div className="marquee-mask group overflow-hidden">
      <div className="flex w-max gap-4 py-2 animate-marquee group-hover:[animation-play-state:paused]">
        {track.map((name, index) => (
          <LogoTile
            key={`${name}-${index}`}
            name={name}
            label={localize ? localize(name) : name}
          />
        ))}
      </div>
    </div>
  );
}
