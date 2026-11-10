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

The bilingual contact form sends project inquiries to **shawonh986@pisimai.com** through Gmail SMTP using Nodemailer. No paid sending domain or Resend subscription is required. The Gmail account is used only as the sender; customer replies go to the visitor's email address.

1. Choose a Gmail account that you control and enable 2-Step Verification.
2. Create a Google **App Password** for that account. Google only shows App Passwords when the account is eligible and 2-Step Verification is enabled. Do not use your normal Gmail password.
3. Copy `.env.example` to `.env.local` and set:
   - `GMAIL_USER` — the full Gmail address used to send website inquiries.
   - `GMAIL_APP_PASSWORD` — the 16-character Google App Password (spaces may be included or omitted).
4. Restart the local development server after changing environment variables.
5. Add the same two variables to the production hosting environment and redeploy.

Never put these credentials in a `NEXT_PUBLIC_*` variable or commit them to Git. The contact form does not store inquiries in a database; it forwards them by email to the configured company inbox. Gmail account sending limits and Google's account security policies apply. If credentials are missing or delivery fails, the form reports an error rather than showing a false success message.
