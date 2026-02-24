# Avion Tech Website

## Overview
Static marketing website for Avion Tech, an AI-driven tech consulting company. Single-page landing site optimized for conversion (booking meetings, contact form submissions).

## Recent Changes
- 2026-02-24: Initial build of complete landing page with all sections

## Architecture
- **Frontend**: React + Vite + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion
- **Static site**: No database or API required
- **Theme**: Dark futuristic design with primary color #0645FF
- **Fonts**: Space Grotesk (headings), Inter (body)

## Sections
1. **Navbar** - Fixed, transparent with blur, mobile hamburger menu
2. **Hero** - Full-screen with animated gradient blobs, stats, dual CTAs
3. **Services** - 6 service cards (AI, App Dev, Automation, Web, Mobile, Digital Transformation)
4. **About/Why Us** - Guarantees (Quality, Affordability, Speed) + feature list + quote
5. **Industries** - 4 sectors (Private, Government, Municipal, Customer-Facing) + industry tags
6. **Contact** - Form (useForm + zodResolver) + contact info sidebar
7. **CTA Banner** - Final conversion push
8. **Footer** - Logo, service links, company links, copyright

## Key Files
- `client/src/pages/home.tsx` - Complete landing page
- `client/src/App.tsx` - Router setup
- `client/src/index.css` - Theme variables
- `tailwind.config.ts` - Design tokens
- `attached_assets/image_1771947163542.png` - Avion Tech logo (imported via @assets alias)

## User Preferences
- Primary color: #0645FF
- Clean, futuristic aesthetic
- Conversion-optimized design
- Static site (no backend/database)
