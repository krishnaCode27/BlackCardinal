import Link from "next/link";

export const metadata = { title: "Admin Dashboard", robots: { index: false, follow: false } };

export default function DashboardPage() {
  return (
    <section className="admin-shell">
      <div className="admin-card">
        <p className="eyebrow">PRIVATE / ADMIN</p>
        <h1>Admin setup <span>required.</span></h1>
        <p className="muted">
          The admin dashboard is intentionally locked in this starter. Before enabling it,
          complete Supabase cookie-based server authentication, verify the signed-in user&apos;s
          email against ADMIN_EMAILS, and enforce Row Level Security. No enquiry data is
          exposed by this placeholder page.
        </p>
        <Link className="button" href="/admin/login">Go to admin login</Link>
      </div>
    </section>
  );
}
