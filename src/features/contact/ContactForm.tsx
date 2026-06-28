import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useContactForm } from "@/features/contact/useContactForm";

export function ContactForm() {
  const { t } = useTranslation();
  const { form, errors, sent, submitting, submitError, updateField, handleSubmit } =
    useContactForm();

  return (
    <div className="border border-line-soft bg-white p-7 lg:p-8">
      <h2 className="text-xl font-extrabold text-ink">{t("contact.form.title")}</h2>
      <p className="mt-1.5 text-[14px] text-muted">{t("contact.form.subtitle")}</p>

      <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            id="contact-name"
            label={t("contact.form.name")}
            placeholder={t("contact.form.namePlaceholder")}
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            error={errors.name}
          />
          <Input
            id="contact-company"
            label={t("contact.form.company")}
            placeholder={t("contact.form.companyPlaceholder")}
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
          />
        </div>

        <Input
          id="contact-email"
          type="email"
          label={t("contact.form.email")}
          placeholder={t("contact.form.emailPlaceholder")}
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          error={errors.email}
        />

        <Textarea
          id="contact-message"
          label={t("contact.form.message")}
          placeholder={t("contact.form.messagePlaceholder")}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          error={errors.message}
        />

        <Button type="submit" block disabled={submitting}>
          {submitting ? t("contact.form.submitting") : t("contact.form.submit")}
        </Button>

        {submitError ? (
          <p
            className="rounded-[2px] bg-red-50 px-4 py-3 text-[14px] text-red-800"
            role="alert"
          >
            {submitError}
          </p>
        ) : null}

        {sent ? (
          <p
            className="rounded-[2px] bg-brand-tint px-4 py-3 text-[14px] font-medium text-brand-deep"
            role="status"
          >
            {t("contact.form.success")}
          </p>
        ) : null}
      </form>
    </div>
  );
}
