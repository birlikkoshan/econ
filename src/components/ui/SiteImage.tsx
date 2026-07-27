import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SiteImageProps = {
  src: string;
  alt: string;
  /** Задержка появления, мс. */
  delay?: number;
  className?: string;
  imageClassName?: string;
};

/** Адаптивное фото с плавным появлением при прокрутке. */
export function SiteImage({
  src,
  alt,
  delay = 0,
  className,
  imageClassName,
}: SiteImageProps) {
  return (
    <Reveal
      delay={delay}
      className={cn(
        "overflow-hidden border-2 border-brand/50 bg-brand-tint",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn("h-full w-full object-cover", imageClassName)}
      />
    </Reveal>
  );
}
