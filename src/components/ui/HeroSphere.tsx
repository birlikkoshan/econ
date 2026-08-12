import heroEurasiaMap from "@/assets/hero-eurasia-map.png";
import { cn } from "@/lib/utils";

type HeroSphereProps = {
  className?: string;
};

export function HeroSphere({ className }: HeroSphereProps) {
  return (
    <div
      className={cn(
        "pointer-events-none relative inline-flex aspect-square overflow-hidden rounded-full shadow-[0_24px_70px_-34px_rgba(0,0,0,0.65)]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_58%_42%,transparent_0%,transparent_58%,rgba(5,10,18,0.42)_100%)]" />
      <img
        src={heroEurasiaMap}
        alt=""
        className="h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
