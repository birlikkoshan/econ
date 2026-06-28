import koshkarMuizPattern from "@/assets/ornaments/koshkar-muiz-pattern.png";

/**
 * Фоновый орнамент кошкар-мүйіз.
 * PNG с прозрачным фоном + mask + цвет бренда → изумрудный узор.
 */
export function KazakhOrnamentBackground() {
  return (
    <div
      className="site-ornament-layer pointer-events-none fixed inset-0"
      aria-hidden="true"
      style={{
        WebkitMaskImage: `url(${koshkarMuizPattern})`,
        maskImage: `url(${koshkarMuizPattern})`,
      }}
    />
  );
}
