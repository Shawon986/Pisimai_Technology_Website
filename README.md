# PISIMAI TECHNOLOGY

**Engineering Tomorrow. Empowering Today.**

A bilingual (English / Simplified Chinese) corporate website for PISIMAI TECHNOLOGY.

## Technology foundation

- Next.js 16 App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4
- ESLint flat configuration
- Locale routes: `/en` and `/zh`

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. The root route redirects to `/en`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
app/
  [locale]/
    layout.tsx
    page.tsx
  api/
    contact/
      route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  contact-form.tsx
  site-header.tsx
  site-footer.tsx
lib/
  i18n.ts
public/brand/
docs/FOUNDATION.md
```

## Design direction

The visual system follows the approved **Hybrid Intelligence Core** direction: an abstract intelligence-inspired visual centerpiece, precise orbital geometry, holographic interface details, and restrained digital energy. Robotics is represented as one capability area rather than the identity of the whole company.

## Contact inquiry setup (Formspree)

The bilingual contact form submits inquiries through a server-side route to Formspree. Formspree then emails submissions to the notification address configured in your Formspree account. The website does not need SMTP credentials, a Resend API key, or a paid sending domain.

1. Create a free account at [Formspree](https://formspree.io/) and create a new form.
2. Set the form's notification/recipient email to your company inbox in the Formspree dashboard, then complete any email verification Formspree requires.
3. Copy the Form ID from the form endpoint. It is the short ID in a URL shaped like `https://formspree.io/f/yourFormId`.
4. Copy `.env.example` to `.env.local` in the project root and set `FORMSPREE_FORM_ID=yourFormId`. Do not include the full URL or quotes.
5. Restart the local development server after changing the environment file.
6. Add `FORMSPREE_FORM_ID` to your production hosting environment variables and redeploy.

The Form ID is kept in a server-only environment variable and is not exposed through a `NEXT_PUBLIC_*` variable. The API route validates the request, checks its origin and size, filters supported service categories, and uses a honeypot field before forwarding submissions. Formspree's free-plan submission limits and verification requirements apply. Test the form after setup and confirm the notification arrives in the configured inbox.

Never commit `.env.local` or account credentials to Git.

## Production URL and SEO

Set `NEXT_PUBLIC_SITE_URL` to the exact public HTTPS origin used by the deployed website (for example, your Vercel production URL). This value is used for canonical metadata, Open Graph URLs, the XML sitemap, and the robots file. Vercel deployments can fall back to Vercel's deployment host when this variable is not set; local development falls back to `http://localhost:3000`.

The generated SEO endpoints are:

- `/sitemap.xml` — English and Simplified Chinese public pages.
- `/robots.txt` — permits public page crawling and excludes `/api/`.

GitHub Actions runs linting, TypeScript checks, a production dependency audit, and a production build on pushes and pull requests to `master`.
