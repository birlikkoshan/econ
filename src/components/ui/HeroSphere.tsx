import heroEurasiaMap from "@/assets/hero-eurasia-map.jpg";
import { cn } from "@/lib/utils";

type HeroSphereProps = {
  className?: string;
};

export function HeroSphere({ className }: HeroSphereProps) {
  return (
    <div
      className={cn("pointer-events-none inline-flex", className)}
      aria-hidden="true"
    >
      <img
        src={heroEurasiaMap}
        alt=""
        className="aspect-square w-full max-w-[min(100%,560px)] object-contain opacity-80 mix-blend-multiply"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
