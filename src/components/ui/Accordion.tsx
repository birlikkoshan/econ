type AccordionItem = {
  q: string;
  a: string;
};

type AccordionProps = {
  items: readonly AccordionItem[];
};

/**
 * FAQ-аккордеон на нативных <details>/<summary>: доступен с клавиатуры и без JS.
 * Маркер-стрелка поворачивается в раскрытом состоянии (group-open).
 */
export function Accordion({ items }: AccordionProps) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
            <span className="text-[15px] font-semibold text-ink sm:text-base">
              {item.q}
            </span>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-300 group-open:rotate-45">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                aria-hidden
                className="h-4 w-4"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="pb-5 pr-10 text-[15px] leading-relaxed text-muted">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
