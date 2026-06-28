import type { ContactFormData } from "@/types";

export class ContactSubmitError extends Error {
  code: string;

  constructor(code: string) {
    super(code);
    this.code = code;
  }
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return;
  }

  let code = "send_failed";

  try {
    const payload = (await response.json()) as { error?: string };
    if (payload.error) {
      code = payload.error;
    }
  } catch {
    // Ответ без JSON — оставляем код по умолчанию.
  }

  throw new ContactSubmitError(code);
}
