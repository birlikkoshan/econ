import type { ContactFormData, ContactFormErrors } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  data: ContactFormData,
  messages: {
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
  },
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = messages.nameRequired;
  }

  if (!data.email.trim()) {
    errors.email = messages.emailRequired;
  } else if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = messages.emailInvalid;
  }

  if (!data.message.trim()) {
    errors.message = messages.messageRequired;
  }

  return errors;
}
