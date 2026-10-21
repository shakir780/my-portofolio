"use server";

import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
  // Echoed back so the form can refill itself; React resets forms after every action.
  values?: { name: string; email: string; message: string };
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot: real visitors never see this field, bots fill it in.
  if (formData.get("company")) return { status: "success" };

  const values = { name, email, message };
  const fieldErrors: ContactState["fieldErrors"] = {};
  if (name.length < 2 || name.length > 100) fieldErrors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(email) || email.length > 200) fieldErrors.email = "Please enter a valid email address.";
  if (message.length < 10 || message.length > 5000)
    fieldErrors.message = "Please write a message between 10 and 5,000 characters.";
  if (Object.keys(fieldErrors).length > 0) return { status: "error", fieldErrors, values };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return { status: "error", message: `The form isn't available right now. Please email me at ${site.email}.`, values };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? site.email,
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `${message}\n\n—\n${name}\n${email}`,
    }),
  });

  if (!response.ok) {
    console.error("Contact form: Resend responded", response.status, await response.text());
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email me at ${site.email}.`,
      values,
    };
  }

  return { status: "success" };
}
