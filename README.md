# Amit Kumar Portfolio

A modern full-stack developer portfolio built with Next.js, React, Tailwind CSS, Supabase, and Vercel. The site includes a polished public portfolio, project case-study pages, blog support, contact lead capture, and a protected admin dashboard for managing content.

## Features

- Cinematic homepage with animated hero, stats, tech stack, selected projects, and contact CTA
- Project listing with individual case-study pages
- Blog listing and dynamic blog detail pages
- Attractive testimonials coming-soon page
- Contact form with Supabase storage and honeypot spam protection
- Supabase Auth powered admin login
- Admin dashboard for projects, blogs, testimonials, messages, settings, and activity logs
- Dynamic sitemap and robots configuration
- SEO metadata, Open Graph images, JSON-LD schema, and Vercel Speed Insights
- Responsive UI built for desktop and mobile

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Three.js / React Three Fiber
- Supabase Auth and Postgres
- Vercel Speed Insights
- Vercel deployment

## Requirements

- Node.js 22 or newer
- npm 11 or newer
- Supabase project

The project uses:

```bash
npm@11.12.1
node>=22.0.0
```

## Getting Started

Install dependencies:

```bash
npm ci
```

Create a local env file:

```bash
cp .env.example .env.local
```

Fill `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=change_this_to_a_strong_password
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Run the Supabase schema:

```bash
supabase/schema.sql
```

Create or update the admin user:

```bash
npm run seed:admin
```

Start the dev server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run typecheck
```

Runs TypeScript without emitting files.

```bash
npm run seed:admin
```

Creates or updates the Supabase admin user.

## Routes

Public routes:

- `/`
- `/about`
- `/services`
- `/projects`
- `/projects/[slug]`
- `/blog`
- `/blog/[slug]`
- `/testimonials`
- `/contact`

Admin routes:

- `/admin`
- `/admin/login`
- `/admin/dashboard`
- `/admin/contacts`
- `/admin/messages`
- `/admin/projects`
- `/admin/blogs`
- `/admin/testimonials`
- `/admin/settings`
- `/admin/activity`

## Supabase Setup

1. Create a Supabase project.
2. Copy the project URL and anon key into `.env.local`.
3. Copy the service role key into `.env.local`.
4. Run `supabase/schema.sql` in the Supabase SQL editor.
5. Run `npm run seed:admin`.

Public pages can render fallback content if Supabase is not configured, but contact submissions and admin workflows require Supabase.

## Deployment

Deploy on Vercel:

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Add the environment variables from `.env.example`.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
5. Deploy.

This project includes `vercel.json`:

```json
{
  "framework": "nextjs",
  "installCommand": "npm ci",
  "buildCommand": "npm run build"
}
```

Using `npm ci` keeps Vercel aligned with `package-lock.json` and avoids dependency drift.

## Vercel Troubleshooting

If Vercel shows an old dependency like `next@9.3.3`, check:

- The selected Git branch is the latest branch.
- The Vercel root directory points to this project folder.
- The latest `package.json` and `package-lock.json` were pushed.
- Redeploy with "Clear Build Cache" enabled.

## Project Data

Fallback data lives in:

```bash
src/lib/site-data.ts
```

Supabase-backed reads and fallbacks are handled in:

```bash
src/lib/queries.ts
```

Public Supabase reads use a cookie-less client:

```bash
src/lib/supabase/public.ts
```

Authenticated admin reads use:

```bash
src/lib/supabase/server.ts
```

## Quality Checks

Before deploying, run:

```bash
npm run lint
npm run typecheck
npm run build
```
