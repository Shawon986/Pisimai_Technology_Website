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

This is the initial application foundation and bilingual starter landing page. Service detail pages, case studies, contact workflows, CMS/admin tools, analytics, and backend integrations are deferred to later phases.

No external service credentials are required in this phase. Keep secrets in local environment files and never commit credentials.
