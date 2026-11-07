create extension if not exists pgcrypto;

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  business_name text,
  email text not null,
  phone text,
  service text not null,
  budget text,
  message text not null,
  contact_method text not null default 'Email',
  source_page text,
  referral_source text,
  utm jsonb not null default '{}'::jsonb,
  status text not null default 'New'
    check (status in ('New','Contacted','Qualified','Proposal Sent','Converted','Not Interested')),
  internal_notes text not null default '',
  created_at timestamptz not null default now()
);

alter table public.enquiries enable row level security;

-- Browser clients receive no direct table permissions. Server-side service role handles writes.
revoke all on public.enquiries from anon, authenticated;
grant select, insert, update, delete on public.enquiries to service_role;
