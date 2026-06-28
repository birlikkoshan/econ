import { useCallback, useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { validateContactForm } from "@/lib/validation";
import type { ContactFormData, ContactFormErrors } from "@/types";

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

  const updateField = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      setSent(false);
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const nextErrors = validateContactForm(form, {
        nameRequired: t("contact.form.errors.nameRequired"),
        emailRequired: t("contact.form.errors.emailRequired"),
        emailInvalid: t("contact.form.errors.emailInvalid"),
        messageRequired: t("contact.form.errors.messageRequired"),
      });

      setErrors(nextErrors);

      if (Object.keys(nextErrors).length === 0) {
        // Backend API integration point
        setSent(true);
        setForm(INITIAL_FORM);
      }
    },
    [form, t],
  );

  return { form, errors, sent, updateField, handleSubmit };
}
