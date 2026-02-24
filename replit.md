# Avion Tech Website

## Overview
Multi-page marketing website for Avion Tech, an AI-driven tech consulting company. Conversion-optimized site with separate pages for Services, About (with Team), Industries, Portfolio, FAQ, Security, and Contact. Content sourced from Stantec Proposal document.

## Recent Changes
- 2026-02-24: Restructured from single-page to multi-page architecture with wouter routing
- 2026-02-24: Added Security page with callout on home page
- 2026-02-24: Added Portfolio page with 6 project examples
- 2026-02-24: Added FAQ page with accordion sections (General, Services, Security, Getting Started)
- 2026-02-24: Created shared layout components (Navbar, Footer, PageHeader, CTABanner)
- 2026-02-24: Added scroll-to-top behavior on route changes
- 2026-02-24: Updated services to Technology Consulting capabilities (9 services from pages 6-7 of proposal)
- 2026-02-24: Added Team section with Richard Hake (PM) and Michael Colliver (Solution Architect) from page 8
- 2026-02-24: Removed generated illustrations, using pure CSS gradients and geometric shapes
- 2026-02-24: Updated logo to new blue triangle "A" design

## Architecture
- **Frontend**: React + Vite + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion
- **Routing**: wouter with Switch/Route, ScrollToTop component
- **Static site**: No database or API required
- **Theme**: Dark futuristic design with primary color #0645FF
- **Fonts**: Space Grotesk (headings), Inter (body)

## Pages
1. **Home** (`/`) - Hero, Services preview (6 of 9), About preview, Security callout, Industries preview, CTA
2. **Services** (`/services`) - Full 9 capabilities with detailed bullet points per service
3. **About** (`/about`) - Mission, values, team (Richard Hake & Michael Colliver), milestones timeline
4. **Industries** (`/industries`) - 4 sectors with full details + additional industry tags
5. **Portfolio** (`/portfolio`) - 6 project examples with outcomes (MDAH Tour, Cloud Migration, AI Maintenance, Cybersecurity, Smart City, OT/IT)
6. **FAQ** (`/faq`) - 4 accordion sections: General, Services & Process, Security & Compliance, Getting Started
7. **Security** (`/security`) - 6 security pillars, lifecycle process, certifications & standards
8. **Contact** (`/contact`) - Form (useForm + zodResolver) + contact info sidebar + expectations

## Shared Components
- `client/src/components/layout.tsx` - Navbar, Footer, PageHeader, CTABanner, Layout wrapper, animation variants

## Key Files
- `client/src/App.tsx` - Router setup with all routes + ScrollToTop
- `client/src/pages/home.tsx` - Home landing page with preview sections
- `client/src/pages/services.tsx` - Full services page
- `client/src/pages/about.tsx` - About page with team section
- `client/src/pages/industries.tsx` - Industries page
- `client/src/pages/portfolio.tsx` - Portfolio/project examples page
- `client/src/pages/faq.tsx` - FAQ page with accordions
- `client/src/pages/security.tsx` - Security page
- `client/src/pages/contact.tsx` - Contact form page
- `client/src/components/layout.tsx` - Shared layout components
- `client/src/index.css` - Theme variables
- `tailwind.config.ts` - Design tokens
- `attached_assets/Black_and_White_Initial_A_Tech_Business_Logo__1771947651217.png` - Avion Tech logo
- `attached_assets/Stantec_Proposal_for_MDAH_Tour_System_1_1771948064569.pdf` - Source content

## User Preferences
- Primary color: #0645FF
- Clean, futuristic aesthetic
- Conversion-optimized design
- Static site (no backend/database)
- No generated illustrations/images - CSS-only visuals
- Only include Michael Colliver and Richard Hake from team page
