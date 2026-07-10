# BrightPath Web Application

## Stack
- Vite 7 + React 19 + TypeScript 5.9
- Tailwind CSS 4 (CSS-based config in `src/index.css` via `@theme` — **no `tailwind.config.js`**)
- react-router-dom v7, framer-motion, lucide-react, clsx + tailwind-merge
- `vite-plugin-singlefile` — build outputs a single HTML file

## Commands
```bash
npm run dev      # dev server
npm run build    # single-file production build
npm run preview  # preview production build
```
No test, lint, or typecheck scripts configured.

## Path alias
`@/` → `src/` (configured in both `tsconfig.json` and `vite.config.ts`)

## Architecture
- **Entry**: `src/main.tsx` → `src/App.tsx`
- **Routing**: All routes defined in `App.tsx` (BrowserRouter). 20+ pages in `src/pages/`.
- **Data layer**: All content in `src/data/siteData.ts` (typed records for therapy programs, assessments, training, conditions). Individual pages look up data by `useParams` id.
- **Images**: Centralized Pexels CDN URLs in `src/data/images.ts` — no local image assets except `public/images/tlc-logo.svg`. Use `import { img } from "@/data/images"`.
- **Legal pages**: `/privacy-policy`, `/terms-of-service`, `/accessibility`, `/cookie-policy` all render `LegalPage.tsx` with tab switching via pathname matching.
- **404 fallback**: Individual pages redirect with `<Navigate to="/404" replace />` on missing `id`.
- **Scroll restoration**: `ScrollToTop` component resets scroll on route change.
- **Utility**: `cn()` from `src/utils/cn.ts` for className merging (clsx + twMerge).

## Styling conventions
- Tailwind v4 with custom `@theme` tokens: `brand-primary`, `brand-secondary`, `brand-teal`, `brand-soft`, `surface-*`, `text-*`, `font-display` (Fraunces), `font-body` (Plus Jakarta Sans).
- Prefer `rounded-2xl`/`rounded-3xl`/`rounded-4xl` for containers.
- Floating labels for form inputs: use `floating-label-group` CSS class (defined in `index.css`).
- Dot-grid pattern: class `dot-grid`.

## React 19 patterns (available)
- `useActionState` for form management, `useOptimistic` for optimistic UI, `use` for promise/context resolution (documented in `src/skills/`).
