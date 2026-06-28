import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

export function Textarea({ className, label, error, id, ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={id}
          className="mb-1.5 block text-[13px] font-semibold text-ink-soft"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={id}
        className={cn(
          "min-h-32 w-full resize-y rounded-[2px] border border-line-soft bg-white px-4 py-3 text-[15px] text-ink transition-colors placeholder:text-muted-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/15",
          className,
        )}
        {...props}
      />
      {error ? <p className="mt-1 text-[13px] text-red-600">{error}</p> : null}
    </div>
  );
}
