-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/maeufjsffbmpkycrkhga/sql/new

create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  phone text,
  membership_type text default 'basic',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Disable RLS so anon key can read/write (for development)
alter table public.members disable row level security;
