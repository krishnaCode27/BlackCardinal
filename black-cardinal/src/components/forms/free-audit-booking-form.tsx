"use client";

import { useState, type FormEvent } from "react";

export function FreeAuditBookingForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917067492239").replace(/\D/g, "");
    const message = `Hi Black Cardinal, I would like to book my free SEO and marketing audit.\nName: ${name}\nBusiness or website: ${business}\nWhatsApp: ${whatsapp}`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Name
        <input required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} className="rounded-xl border border-white/10 bg-[#080d18] px-4 py-3 text-white outline-none transition focus:border-cyan-300/60" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Business or website URL
        <input required value={business} onChange={(event) => setBusiness(event.target.value)} placeholder="Your business name or website" className="rounded-xl border border-white/10 bg-[#080d18] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        WhatsApp number
        <input required type="tel" autoComplete="tel" value={whatsapp} onChange={(event) => setWhatsapp(event.target.value)} placeholder="+91" className="rounded-xl border border-white/10 bg-[#080d18] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" />
      </label>
      <button type="submit" className="mt-2 inline-flex min-h-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 font-bold text-[#04101b] shadow-lg shadow-cyan-500/15 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
        Book My Free Slot
      </button>
      <p className="text-center text-xs leading-relaxed text-slate-400">Your details open a WhatsApp message so you can send your booking request.</p>
    </form>
  );
}
