
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- PRODCUTS TABLE
create table public.products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  category text not null,
  description text,
  details text,
  specs jsonb default '[]'::jsonb,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ARTICLES TABLE
create table public.articles (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  summary text,
  content text, -- HTML content
  author text default 'Seth Steels Team',
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- TESTIMONIALS TABLE
create table public.testimonials (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  role text,
  company text,
  text text not null,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- STORAGE BUCKET
-- Note: You'll need to create a storage bucket named 'cms-media' in the Supabase/Storage dashboard.
-- Policy: Enable Public Read access for 'cms-media'.

-- RLS POLICIES (Optional but recommended)
-- Enable RLS
alter table public.products enable row level security;
alter table public.articles enable row level security;
alter table public.testimonials enable row level security;

-- Create Policy: Public Read Access
create policy "Public products are viewable by everyone." on public.products for select using (true);
create policy "Public articles are viewable by everyone." on public.articles for select using (true);
create policy "Public testimonials are viewable by everyone." on public.testimonials for select using (true);

-- Create Policy: Authenticated Insert/Update/Delete (Admins)
create policy "Admins can insert products." on public.products for insert with check (auth.role() = 'authenticated');
create policy "Admins can update products." on public.products for update using (auth.role() = 'authenticated');
create policy "Admins can delete products." on public.products for delete using (auth.role() = 'authenticated');

-- Repeat for articles and testimonials...
create policy "Admins can insert articles." on public.articles for insert with check (auth.role() = 'authenticated');
create policy "Admins can update articles." on public.articles for update using (auth.role() = 'authenticated');
create policy "Admins can delete articles." on public.articles for delete using (auth.role() = 'authenticated');

create policy "Admins can insert testimonials." on public.testimonials for insert with check (auth.role() = 'authenticated');
create policy "Admins can update testimonials." on public.testimonials for update using (auth.role() = 'authenticated');
create policy "Admins can delete testimonials." on public.testimonials for delete using (auth.role() = 'authenticated');
