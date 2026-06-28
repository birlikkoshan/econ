import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useContactForm } from "@/features/contact/useContactForm";

export function ContactForm() {
  const { t } = useTranslation();
  const { form, errors, sent, updateField, handleSubmit } = useContactForm();

  return (
    <form
      className="mx-auto flex max-w-lg flex-col gap-4"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium">
          {t("contact.form.name")}
        </label>
        <Input
          id="contact-name"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          error={errors.name}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium">
          {t("contact.form.email")}
        </label>
        <Input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          error={errors.email}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium">
          {t("contact.form.message")}
        </label>
        <Textarea
          id="contact-message"
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          error={errors.message}
        />
      </div>

      <Button type="submit">{t("contact.form.submit")}</Button>

      {sent ? (
        <p className="text-sm font-medium text-green-600" role="status">
          {t("contact.form.success")}
        </p>
      ) : null}
    </form>
  );
}
