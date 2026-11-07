"use client";

import { FormEvent, useState } from "react";
import { services } from "@/config/services";

export function EnquiryForm({ initialService = "" }: { initialService?: string }) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const payload = {
      ...values,
      sourcePage: window.location.href,
      referralSource: document.referrer,
      utm: Object.fromEntries(new URLSearchParams(window.location.search).entries())
    };
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong.");
      form.reset();
      setStatus("Thanks — your enquiry has been received. We’ll be in touch.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to submit your enquiry.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-row">
        <label>Full name<input name="fullName" required minLength={2} maxLength={100} placeholder="Your name" /></label>
        <label>Business name<input name="businessName" maxLength={120} placeholder="Your company" /></label>
      </div>
      <div className="form-row">
        <label>Email address<input name="email" type="email" required placeholder="you@example.com" /></label>
        <label>Phone / WhatsApp<input name="phone" type="tel" placeholder="+91..." /></label>
      </div>
      <div className="form-row">
        <label>Interested service<select name="service" required defaultValue={initialService}><option value="" disabled>Select a service</option>{services.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}</select></label>
        <label>Estimated budget<select name="budget" defaultValue=""><option value="">Prefer to discuss</option><option>Under ₹10,000</option><option>₹10,000–₹25,000</option><option>₹25,000–₹50,000</option><option>₹50,000–₹1,00,000</option><option>₹1,00,000+</option></select></label>
      </div>
      <label>Preferred contact method<select name="contactMethod" defaultValue="Email"><option>Email</option><option>Phone</option><option>WhatsApp</option></select></label>
      <label>Tell us about your project<textarea name="message" required minLength={10} maxLength={3000} rows={5} placeholder="What are you looking to achieve?" /></label>
      <button className="button" disabled={busy} aria-busy={busy}>
        {busy ? "Sending…" : "Send enquiry"} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
      <p className="fine-print">Your information is used only to respond to your enquiry.</p>
    </form>
  );
}
