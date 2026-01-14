# Avanti Landscaping clone

Full-site Next.js (App Router) clone of [avantilandscaping.ca](https://avantilandscaping.ca/) with a “Get a free quote” form that stores submissions in Postgres and redirects to a thank-you page.

## Requirements
- Node 18+
- Supabase project (for Postgres + API)

## Setup
```bash
cd avanti-site
npm install
cp env .env.local   # then fill in Supabase credentials
npm run dev
```

Visit `http://localhost:3000`.

## Supabase env
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` (server-side; keep it secret)

Set these in `.env.local`, restart `npm run dev`, and ensure the `quotes` table exists:
```sql
CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```
If Row Level Security is enabled, grant insert to the service role or disable RLS on `quotes`.

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint

## Quote form flow
1. Users submit name, phone, email, address, and message.
2. `POST /api/quote` validates input (zod), ensures the `quotes` table exists, and inserts the record via `pg`.
3. On success, the client redirects to `/thank-you`.

## Content & pages
Pages mirror the source site structure: home, services (landscaping, stonework, woodwork, swimming pools, other services), gallery, about us, blog (stub), contacts, get-a-quote, sitemap, privacy policy, thank-you. Text aligns with the reference site for easy review.
