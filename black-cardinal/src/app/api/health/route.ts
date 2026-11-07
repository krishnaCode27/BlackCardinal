import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    supabaseConfigured: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
    emailConfigured: Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL && process.env.AGENCY_NOTIFICATION_EMAIL)
  });
}
