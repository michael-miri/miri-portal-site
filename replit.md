# Miri Technology Website

## Overview
Multi-page marketing website for Miri Technology, an AI-driven tech consulting company. Conversion-optimized site with separate pages for Services, About, Industries, Products, Portfolio, FAQ, Security, Contact, and Legal. Brand: "Miri" — slogan: "Delivering the Future Today".

## Recent Changes
- 2026-03-05: Added Products landing page (/products) with 3 product cards
- 2026-03-05: Added miri|housing product page (/miri-housing) — PHA management platform
- 2026-03-05: Added miri|portal product page (/miri-portal) — Company operations portal
- 2026-03-05: Added miri|ehr product page (/miri-ehr) — Electronic health records system
- 2026-03-05: Added "Products" to navbar navigation
- 2026-03-05: Removed housing management app from portfolio (now a product)
- 2026-02-25: Added per-page SEO with useSEO hook (dynamic titles, descriptions, OG/Twitter tags)
- 2026-02-25: Added JSON-LD structured data (ProfessionalService on index.html, FAQPage on FAQ)
- 2026-02-25: Enhanced meta tags: keywords, robots, twitter cards, og:site_name, og:locale
- 2026-02-25: Removed phone numbers site-wide, email-only contact
- 2026-02-25: Fixed ADA contrast issues (white/40 → white/50 minimum)
- 2026-02-25: Replaced portfolio placeholder images with Key Outcomes panels
- 2026-02-25: Industry sub-pages hidden from navigation (components retained)
- 2026-02-25: Updated favicon to blue chevron logo
- 2026-02-25: Hero background image updated and made more visible (opacity-60)
- 2026-02-25: Rebranded from "Avion Tech" to "Miri Technology" across all metadata and content
- 2026-02-25: Added "Selfware" manifesto section below hero (Faster/Better/Cheaper pillars)
- 2026-02-25: Added combined Legal page (/legal) with Privacy Policy and Terms of Service
- 2026-02-25: Removed SOC 2 compliance references from security sections
- 2026-02-24: Complete redesign to editorial magazine-style layout
- 2026-02-24: Removed all content animations (framer motion only used for mobile nav toggle)
- 2026-02-24: Background changed to #0A0E1A, borders white/[0.06]
- 2026-02-24: Blue (#0645FF) CTA buttons, tan (#C4A882) accent labels

## Architecture
- **Frontend**: React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- **Routing**: wouter with Switch/Route, ScrollToTop component
- **Static site**: No database or API required
- **SEO**: useSEO hook for per-page meta tags, JSON-LD structured data
- **Theme**: Editorial dark design, #0A0E1A background, white/[0.06] borders, gap-px grids
- **Fonts**: Space Grotesk (headings), Inter (body)
- **No content animations** - Framer Motion only used for mobile nav toggle

## Pages
1. **Home** (`/`) - Hero, Selfware section, Capabilities (9), Why Us, How We Work, Industries, Security, CTA
2. **Services** (`/services`) - Full 9 capabilities with detailed bullet points per service
3. **About** (`/about`) - Mission, values, Our Story selfware manifesto
4. **Industries** (`/industries`) - 4 sectors with full details + additional industry tags
5. **Products** (`/products`) - Landing page with 5 product cards (miri|housing, miri|portal, miri|ehr, miri|grants, miri|time & attendance)
6. **miri|housing** (`/miri-housing`) - Enterprise Housing Management Platform for PHAs
7. **miri|portal** (`/miri-portal`) - Company Operations Portal
8. **miri|ehr** (`/miri-ehr`) - Electronic Health Records System
9. **miri|grants** (`/miri-grants`) - Integrated Grants Management for Public Agencies
10. **miri|time & attendance** (`/miri-time-attendance`) - Cloud-Based Workforce Time Tracking
11. **Portfolio** (`/portfolio`) - 4 project examples with key outcomes
10. **FAQ** (`/faq`) - 4 accordion sections with FAQ structured data (JSON-LD)
11. **Security** (`/security`) - 6 security pillars, lifecycle process
12. **Contact** (`/contact`) - Form (mailto) + contact info sidebar + expectations
13. **Legal** (`/legal`) - Combined Privacy Policy and Terms of Service
14. **Industry Detail** (`/industries/:slug`) - Hidden from nav, components retained

## Shared Components
- `client/src/components/layout.tsx` - Navbar, Footer, PageHeader, CTABanner, Layout wrapper
- `client/src/hooks/use-seo.ts` - Dynamic page title and meta tag management

## Key Files
- `client/src/App.tsx` - Router setup with all routes + ScrollToTop
- `client/src/pages/home.tsx` - Home landing page with all sections
- `client/src/pages/services.tsx` - Full services page
- `client/src/pages/about.tsx` - About page with Our Story
- `client/src/pages/industries.tsx` - Industries page
- `client/src/pages/portfolio.tsx` - Portfolio/project examples page
- `client/src/pages/faq.tsx` - FAQ page with accordions + JSON-LD
- `client/src/pages/security.tsx` - Security page
- `client/src/pages/contact.tsx` - Contact form page (mailto)
- `client/src/pages/legal.tsx` - Privacy & Terms page
- `client/src/pages/products.tsx` - Products landing page with product cards
- `client/src/pages/miri-housing.tsx` - miri|housing product page
- `client/src/pages/miri-portal.tsx` - miri|portal product page
- `client/src/pages/miri-ehr.tsx` - miri|ehr product page
- `client/src/pages/miri-grants.tsx` - miri|grants product page
- `client/src/pages/miri-time-attendance.tsx` - miri|time & attendance product page
- `client/src/pages/industry-detail.tsx` - Individual industry detail pages (hidden from nav)
- `client/src/components/layout.tsx` - Shared layout components
- `client/src/hooks/use-seo.ts` - SEO hook for per-page meta management
- `client/index.html` - Base meta tags, JSON-LD structured data, favicon
- `client/public/favicon.png` - Blue chevron favicon

## Contact Info
- Email: contact@miritechnology.com

## User Preferences
- Primary color: #0645FF
- Tan accent: #C4A882
- Background: #0A0E1A
- Clean, futuristic aesthetic
- Conversion-optimized design
- Static site (no backend/database)
- No generated illustrations/images - CSS-only visuals
- No content animations
- No specific compliance framework references (SOC 2, NIST, ISO, etc.)
- No phone numbers on site
- Minimum text contrast: white/50 for WCAG AA compliance
