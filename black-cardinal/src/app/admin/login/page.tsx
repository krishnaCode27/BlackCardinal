import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/admin/login-form";
export const metadata: Metadata = { title: "Admin Login", robots: { index: false, follow: false } };
export default function AdminLoginPage() {
  return <section className="admin-shell"><div className="admin-card"><p className="eyebrow">BLACK CARDINAL / PRIVATE AREA</p><h1>Admin <span>sign in.</span></h1><p className="muted">Sign in with an administrator account created in Supabase.</p><AdminLoginForm/></div></section>;
}
