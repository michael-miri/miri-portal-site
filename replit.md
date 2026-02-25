# Miri Technology Website

## Overview
Multi-page marketing website for Miri Technology, an AI-driven tech consulting company. Conversion-optimized site with separate pages for Services, About (with Team), Industries, Portfolio, FAQ, Security, Contact, and Legal. Brand: "Miri" — slogan: "Delivering the Future Today".

## Recent Changes
- 2026-02-25: Rebranded from "Avion Tech" to "Miri Technology" across all metadata and content
- 2026-02-25: Added "Selfware" manifesto section below hero (Faster/Better/Cheaper pillars)
- 2026-02-25: Added combined Legal page (/legal) with Privacy Policy and Terms of Service
- 2026-02-25: Updated contact info to richard@miritechnology.com / (859) 229-9831
- 2026-02-25: Removed SOC 2 compliance references from security sections
- 2026-02-25: Added checkmark icons to "Why Us" features
- 2026-02-25: Improved CTA banner layout (title/paragraph left, button right-aligned)
- 2026-02-24: Complete redesign to editorial magazine-style layout
- 2026-02-24: Removed all content animations (framer motion only used for mobile nav toggle)
- 2026-02-24: New design uses asymmetric grids, large editorial typography, gap-px grid patterns
- 2026-02-24: Background changed to #09090b, cards use #0e0e12, borders white/[0.06]
- 2026-02-24: Blue (#0645FF) CTA buttons, tan (#C4A882) accent labels
- 2026-02-24: Restructured from single-page to multi-page architecture with wouter routing

## Architecture
- **Frontend**: React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- **Routing**: wouter with Switch/Route, ScrollToTop component
- **Static site**: No database or API required
- **Theme**: Editorial dark design, #09090b background, white/[0.06] borders, gap-px grids
- **Fonts**: Space Grotesk (headings), Inter (body)
- **No content animations** - Framer Motion only used for mobile nav toggle

## Pages
1. **Home** (`/`) - Hero, Selfware section, Capabilities (9), Why Us, How We Work, Industries, Security, CTA
2. **Services** (`/services`) - Full 9 capabilities with detailed bullet points per service
3. **About** (`/about`) - Mission, values, team (Richard Hake & Michael Colliver), milestones timeline
4. **Industries** (`/industries`) - 4 sectors with full details + additional industry tags
5. **Portfolio** (`/portfolio`) - 6 project examples with outcomes
6. **FAQ** (`/faq`) - 4 accordion sections: General, Services & Process, Security & Compliance, Getting Started
7. **Security** (`/security`) - 6 security pillars, lifecycle process, certifications & standards
8. **Contact** (`/contact`) - Form (useForm + zodResolver) + contact info sidebar + expectations
9. **Legal** (`/legal`) - Combined Privacy Policy and Terms of Service
10. **Industry Detail** (`/industries/:slug`) - Individual pages for 8 industries (Government, Healthcare, Finance, Manufacturing, Energy, Education, Retail, Defense)

## Shared Components
- `client/src/components/layout.tsx` - Navbar, Footer, PageHeader, CTABanner, Layout wrapper

## Key Files
- `client/src/App.tsx` - Router setup with all routes + ScrollToTop
- `client/src/pages/home.tsx` - Home landing page with all sections
- `client/src/pages/services.tsx` - Full services page
- `client/src/pages/about.tsx` - About page with team section
- `client/src/pages/industries.tsx` - Industries page
- `client/src/pages/portfolio.tsx` - Portfolio/project examples page
- `client/src/pages/faq.tsx` - FAQ page with accordions
- `client/src/pages/security.tsx` - Security page
- `client/src/pages/contact.tsx` - Contact form page
- `client/src/pages/legal.tsx` - Privacy & Terms page
- `client/src/pages/industry-detail.tsx` - Individual industry detail pages
- `client/src/components/layout.tsx` - Shared layout components
- `client/index.html` - Page title and meta tags
- `attached_assets/IMG_6345_1772019800583.png` - Miri logo

## Contact Info
- Email: richard@miritechnology.com
- Phone: (859) 229-9831
- Location: Lexington, Kentucky

## User Preferences
- Primary color: #0645FF
- Tan accent: #C4A882
- Clean, futuristic aesthetic
- Conversion-optimized design
- Static site (no backend/database)
- No generated illustrations/images - CSS-only visuals
- Only include Michael Colliver and Richard Hake from team page
- No content animations
