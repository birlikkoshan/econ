import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  eyebrow?: string;
  title?: string;
  lead?: string;
};

/** Шапка внутренней страницы в стилистике эталонного hero. */
export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-surface px-5 py-12 sm:px-8 lg:px-14 lg:py-15 xl:px-20 2xl:px-28">
      <div className="animate-fade-in-up">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        {title ? (
          <h1 className="mt-4 max-w-[20ch] text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            {title}
          </h1>
        ) : null}
        {lead ? (
          title ? (
            <p className="mt-5 max-w-[64ch] text-base leading-relaxed text-muted">
              {lead}
            </p>
          ) : (
            <h1 className="mt-4 max-w-[64ch] text-base font-normal leading-relaxed text-muted">
              {lead}
            </h1>
          )
        ) : null}
      </div>
    </section>
  );
}
