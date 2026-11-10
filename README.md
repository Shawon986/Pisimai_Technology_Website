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
  globals.css
  layout.tsx
  page.tsx
components/
  site-header.tsx
  site-footer.tsx
lib/
  i18n.ts
public/brand/
docs/FOUNDATION.md
```

## Design direction

The visual system follows the approved **Hybrid Intelligence Core** direction: an abstract intelligence-inspired visual centerpiece, precise orbital geometry, holographic interface details, and restrained digital energy. Robotics is represented as one capability area rather than the identity of the whole company.

## Current scope

The foundation and Phase 2 bilingual homepage are in place. The homepage includes the Hybrid Intelligence Core hero, capability areas, engineering approach, company introduction, and contact invitation. The hero and supporting visual details use CSS motion rather than a heavyweight 3D runtime. Service detail pages, verified case studies, working contact workflows, CMS/admin tools, analytics, and backend integrations are deferred to later phases.

No external service credentials are required in this phase. Keep secrets in local environment files and never commit credentials.


## Contact inquiry email setup

The bilingual contact form sends new project inquiries to **shawonh986@pisimai.com** through the Resend email API. The recipient is configured server-side and is not exposed to the browser.

1. Create a Resend account and verify a sending domain you control by adding the DNS records Resend provides.
2. Create a Resend API key with permission to send email.
3. Copy `.env.example` to `.env.local` for local development and set:
   - `RESEND_API_KEY` — your private Resend API key.
   - `RESEND_FROM_EMAIL` — a sender address on the domain verified in Resend, for example `PISIMAI Website <website@your-verified-domain.com>`.
4. Add the same two variables to the production deployment's environment variables, then redeploy.

Never put the API key in a `NEXT_PUBLIC_*` variable or commit it to Git. The form does not store inquiries in a database; it forwards them by email. If email credentials are missing or delivery fails, the form reports that it could not send the inquiry rather than showing a false success message.
