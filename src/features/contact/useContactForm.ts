import { useCallback, useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

import {
  ContactSubmitError,
  submitContactForm,
} from "@/features/contact/submitContactForm";
import { SITE } from "@/constants/site";
import { validateContactForm } from "@/lib/validation";
import type { ContactFormData, ContactFormErrors } from "@/types";

const SERVER_ERROR_MAP: Record<string, string> = {
  name: "contact.form.errors.nameRequired",
  email: "contact.form.errors.emailRequired",
  emailInvalid: "contact.form.errors.emailInvalid",
  message: "contact.form.errors.messageRequired",
  method_not_allowed: "contact.form.submitErrors.default",
};

const INITIAL_FORM: ContactFormData = {
  name: "",
  company: "",
  email: "",
  message: "",
};

export function useContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      setSent(false);
      setSubmitError(null);
    },
    [],
  );

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const nextErrors = validateContactForm(form, {
        nameRequired: t("contact.form.errors.nameRequired"),
        emailRequired: t("contact.form.errors.emailRequired"),
        emailInvalid: t("contact.form.errors.emailInvalid"),
        messageRequired: t("contact.form.errors.messageRequired"),
      });

      setErrors(nextErrors);

      if (Object.keys(nextErrors).length > 0) {
        return;
      }

      setSubmitting(true);
      setSubmitError(null);

      try {
        await submitContactForm(form);
        setSent(true);
        setForm({ ...INITIAL_FORM });
      } catch (error) {
        const code =
          error instanceof ContactSubmitError ? error.code : "send_failed";
        const messageKey =
          SERVER_ERROR_MAP[code] ?? `contact.form.submitErrors.${code}`;
        setSubmitError(
          t(messageKey, {
            email: SITE.email,
            defaultValue: t("contact.form.submitErrors.default", {
              email: SITE.email,
            }),
          }),
        );
      } finally {
        setSubmitting(false);
      }
    },
    [form, t],
  );

  return {
    form,
    errors,
    sent,
    submitting,
    submitError,
    updateField,
    handleSubmit,
  };
}
