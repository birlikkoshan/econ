import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_RECIPIENT = "econ2007kz@gmail.com";

function validatePayload(body: ContactPayload): string | null {
  if (!body.name?.trim()) return "name";
  if (!body.email?.trim()) return "email";
  if (!EMAIL_PATTERN.test(body.email.trim())) return "emailInvalid";
  if (!body.message?.trim()) return "message";
  return null;
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "method_not_allowed" });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_APP_PASSWORD;

  if (!smtpUser || !smtpPass) {
    console.error("SMTP_USER or SMTP_APP_PASSWORD is not configured");
    return response.status(503).json({ error: "mail_not_configured" });
  }

  const body = (request.body ?? {}) as ContactPayload;
  const validationError = validatePayload(body);

  if (validationError) {
    return response.status(400).json({ error: validationError });
  }

  const name = body.name!.trim();
  const company = body.company?.trim() ?? "";
  const email = body.email!.trim();
  const message = body.message!.trim();
  const recipient = process.env.CONTACT_TO ?? DEFAULT_RECIPIENT;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = company
    ? `Заявка с сайта ECON: ${name} (${company})`
    : `Заявка с сайта ECON: ${name}`;

  const text = [
    `Имя: ${name}`,
    `Компания: ${company || "—"}`,
    `E-mail: ${email}`,
    "",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"ECON — форма сайта" <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject,
      text,
    });

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return response.status(500).json({ error: "send_failed" });
  }
}
