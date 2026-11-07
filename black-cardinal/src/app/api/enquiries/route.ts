import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema } from "@/lib/validation/enquiry-schema";
import { createAdminSupabase } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const supabase = createAdminSupabase();
  if (!supabase) {
    return NextResponse.json({ error: "Enquiry service is not configured. Please contact the agency directly." }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form fields and try again.", details: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const { data: inserted, error } = await supabase.from("enquiries").insert({
    full_name: data.fullName,
    business_name: data.businessName,
    email: data.email,
    phone: data.phone,
    service: data.service,
    budget: data.budget,
    message: data.message,
    contact_method: data.contactMethod,
    source_page: data.sourcePage,
    referral_source: data.referralSource,
    utm: data.utm
  }).select("id").single();

  if (error) {
    console.error("Enquiry insert failed:", error.message);
    return NextResponse.json({ error: "We could not save your enquiry. Please try again later." }, { status: 500 });
  }

  if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL && process.env.AGENCY_NOTIFICATION_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: process.env.AGENCY_NOTIFICATION_EMAIL,
        subject: `New website enquiry — ${data.service}`,
        text: `Name: ${data.fullName}\nBusiness: ${data.businessName}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nBudget: ${data.budget}\nMessage: ${data.message}\nSource: ${data.sourcePage}\nEnquiry ID: ${inserted.id}`
      });
    } catch (emailError) {
      console.error("Enquiry notification email failed:", emailError);
    }
  }

  return NextResponse.json({ success: true, message: "Your enquiry has been received.", id: inserted.id });
}
