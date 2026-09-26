export const SITE_TITLE = "Senior Data Engineer & Product Solution Architect";

export const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL?.trim() || "";
export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID?.trim() || "";
export const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY?.trim() || "";

export const ENQUIRY_TYPES = [
  "Hiring",
  "Consulting",
  "Agentworkx",
  "Speaking/training",
  "Other",
] as const;

export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

export interface EnquiryFormData {
  name: string;
  email: string;
  company?: string;
  enquiryType: EnquiryType;
  message: string;
}

export async function submitEnquiry(data: EnquiryFormData): Promise<void> {
  if (FORMSPREE_ID) {
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company || "Not provided",
        enquiryType: data.enquiryType,
        message: data.message,
        _subject: `[Portfolio] ${data.enquiryType} — ${data.name}`,
      }),
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => null);
      throw new Error(payload?.error || "Form submission failed.");
    }
    return;
  }

  if (WEB3FORMS_KEY) {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: data.name,
        email: data.email,
        company: data.company || "Not provided",
        enquiry_type: data.enquiryType,
        message: data.message,
        subject: `[Portfolio] ${data.enquiryType} — ${data.name}`,
      }),
    });

    const result = await response.json();
    if (!response.ok || !result.success) {
      throw new Error(result.message || "Form submission failed.");
    }
    return;
  }

  throw new Error(
    "Contact form is not configured. Set VITE_FORMSPREE_ID or VITE_WEB3FORMS_KEY.",
  );
}

export function getBookCallHref(): string {
  return CALENDLY_URL || "#contact-book";
}
