# Black Cardinal — Digital Agency Website

A Next.js 16 / TypeScript / Tailwind CSS starter for a premium digital marketing agency website.

## Requirements
- Node.js 20.9 or newer
- npm
- A Supabase project for persistent enquiries and admin authentication
- A Resend account for email notifications (optional until configured)

## Install and run
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp`.

## Configure Supabase
1. Create a Supabase project.
2. Copy Project URL and anon/public key into `.env.local`.
3. Copy the service role key into `SUPABASE_SERVICE_ROLE_KEY`. Keep this server-only.
4. Run `supabase/migrations/001_initial.sql` in the Supabase SQL Editor.
5. In Supabase Authentication, enable email/password sign-in and create your admin user manually.
6. Set `ADMIN_EMAILS` to the admin email(s), comma-separated.
7. Add the site URL to Supabase Auth URL Configuration.

## Configure Resend
1. Verify a sending domain in Resend.
2. Set `RESEND_API_KEY`.
3. Set `RESEND_FROM_EMAIL` to an address on that verified domain.
4. Set `AGENCY_NOTIFICATION_EMAIL` to the inbox that receives enquiries.

Without Supabase configuration, the enquiry API returns a clear configuration error; it does not pretend to save leads. Email is optional; enquiries still save when Supabase is configured.

## WhatsApp
Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the international number without `+`, spaces, or punctuation, e.g. `919876543210`. Do not use a personal number without permission.

## Admin
Visit `/admin/login`. Admin sign-in uses Supabase Auth. There is no public registration. Only emails in `ADMIN_EMAILS` can access the dashboard.

## Checks
```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy
Deploy the repository to Vercel and add the same environment variables in Project Settings → Environment Variables. Run the Supabase migration before accepting real enquiries.

## Before launch
- Replace the placeholder contact details and brand copy where appropriate.
- Add the official logo and approved portfolio images to `public/images`.
- Set `NEXT_PUBLIC_SITE_URL` to your real domain.
- Configure Supabase Auth redirect URLs and Resend sender domain.
- Test enquiry submission and admin access with real credentials.
