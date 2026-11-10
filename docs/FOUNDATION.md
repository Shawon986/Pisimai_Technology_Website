# Phase 1 — Foundation

## Purpose
Establish a secure, maintainable, bilingual application base before implementing deeper business features.

## Architecture decisions
- **Next.js App Router** for server-rendered and statically generated routes.
- **React + TypeScript strict mode** for component composition and safer refactoring.
- **Tailwind CSS 4** is installed as the utility styling foundation; the initial brand shell uses explicit CSS design tokens for precise visual control.
- **Locale-prefixed routes**: English at `/en`, Simplified Chinese at `/zh`. The root route redirects to English.
- **Server-first rendering**: page content and sections are server components. The initial shell avoids a heavy client-side animation or 3D runtime.
- **No backend credentials or third-party services** are required in this phase.

## Design tokens

| Token | Value | Role |
|---|---|---|
| Obsidian Navy | `#070B16` | Primary background |
| Deep Technology Blue | `#101B32` | Surface / depth |
| Electric Cyan | `#16D9F5` | Primary accent |
| Digital Blue | `#397BFF` | Secondary accent |
| Neural Violet | `#8967FF` | Intelligence accent |
| Ice White | `#EAF2FF` | Primary text |

## Performance principles
- Keep the main page server-rendered.
- Avoid shipping a 3D runtime or animation library until the visual requirement and performance budget are validated.
- Use CSS for the initial abstract hero artwork.
- Respect `prefers-reduced-motion`.
- Avoid remote font requests in the initial shell; use system font stacks with Chinese fallback.
- Add heavy visual assets only after measuring their impact.

## Security baseline
- Disable the `X-Powered-By` header.
- Add `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, and a restrictive `Permissions-Policy`.
- Keep secrets out of source control; use local environment files.
- Do not add authentication, database access, payment handling, or form persistence until the threat model and data requirements are defined.
- A Content Security Policy will be introduced after external asset and integration requirements are known, so it can be strict without breaking required functionality.

## Phase 1 acceptance checklist
- [ ] Install dependencies with Node.js 20.9+ and npm.
- [ ] Run lint and TypeScript checks.
- [ ] Run a production build.
- [ ] Review `/en` and `/zh` on desktop and mobile.
- [ ] Confirm all logo and favicon assets resolve.
- [ ] Review generated security headers in a deployed preview.

## Known follow-up
The contact CTA currently uses a placeholder email address. Replace it with a verified company contact address before launch. Do not publish unverified company registration, customer, certification, project, or performance claims.
