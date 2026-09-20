create table if not exists public.portfolio_content (
  id bigint primary key check (id = 1),
  content jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.portfolio_content enable row level security;

create policy "Published portfolio content is readable"
  on public.portfolio_content for select
  using (true);

create policy "Signed-in owner can publish portfolio content"
  on public.portfolio_content for all
  to authenticated
  using (true)
  with check (true);

insert into storage.buckets (id, name, public)
values ('portfolio-assets', 'portfolio-assets', true)
on conflict (id) do nothing;

create policy "Public can read portfolio assets"
  on storage.objects for select
  using (bucket_id = 'portfolio-assets');

create policy "Signed-in owner can upload portfolio assets"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'portfolio-assets');

create policy "Signed-in owner can update portfolio assets"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'portfolio-assets')
  with check (bucket_id = 'portfolio-assets');