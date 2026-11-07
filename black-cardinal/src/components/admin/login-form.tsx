"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export function AdminLoginForm() {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      setMessage("Admin authentication is not configured. Add Supabase URL and anon key.");
      setBusy(false);
      return;
    }
    const form = new FormData(event.currentTarget);
    const client = createClient(url, key);
    const { error } = await client.auth.signInWithPassword({
      email: String(form.get("email")),
      password: String(form.get("password"))
    });
    if (error) setMessage(error.message);
    else setMessage("Authentication succeeded, but server-side admin session integration must be configured before using the dashboard.");
    setBusy(false);
  }

  return <form className="enquiry-form" onSubmit={submit}><label>Email<input name="email" type="email" required/></label><label>Password<input name="password" type="password" required/></label><button className="button" disabled={busy}>{busy ? "Signing in..." : "Sign in"}</button><p className="form-status" aria-live="polite">{message}</p></form>;
}
