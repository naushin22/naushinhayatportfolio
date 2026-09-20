# Naushin Hayat Portfolio

## Local development

```bash
npm install
npm run dev
```

The public portfolio is available at `/`. The private editor is available at `/admin`.

## Admin setup

The admin panel uses Supabase Auth, a single JSON content record, and Supabase Storage for the resume PDF.

1. Create a Supabase project and copy `.env.example` to `.env.local`.
2. Add the project URL and anon key to `.env.local`.
3. Open the Supabase SQL Editor and run [`supabase/schema.sql`](supabase/schema.sql).
4. In Supabase, open Authentication > Users and create the owner email/password account.
5. Start the app again and visit `/admin`.

For deployment, add the same `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` values to the hosting provider's environment variables. The anon key is intended for browser use; never put a Supabase service-role key in the frontend.

The editor can update profile and contact information, projects, resume PDF, and all other structured sections through the Advanced JSON editor. Public visitors can read the published content, while only signed-in Supabase users can write it.
