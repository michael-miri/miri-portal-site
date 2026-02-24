# Avion Tech Website

## Overview
Static marketing website for Avion Tech, an AI-driven tech consulting company. Single-page landing site optimized for conversion (booking meetings, contact form submissions). Content sourced from Stantec Proposal document.

## Recent Changes
- 2026-02-24: Updated services to Technology Consulting capabilities (9 services from pages 6-7 of proposal)
- 2026-02-24: Added Team section with Richard Hake (PM) and Michael Colliver (Solution Architect) from page 8
- 2026-02-24: Removed generated illustrations, using pure CSS gradients and geometric shapes
- 2026-02-24: Updated logo to new blue triangle "A" design
- 2026-02-24: Redesigned with angled SVG section dividers, gradient backgrounds, simplified content
- 2026-02-24: Initial build of complete landing page with all sections

## Architecture
- **Frontend**: React + Vite + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion
- **Static site**: No database or API required
- **Theme**: Dark futuristic design with primary color #0645FF
- **Fonts**: Space Grotesk (headings), Inter (body)

## Sections
1. **Navbar** - Fixed, transparent with blur, mobile hamburger menu, 5 nav links
2. **Hero** - Full-screen with CSS gradient effects, stats, dual CTAs
3. **Services** - 9 Technology Consulting capability cards in 3x3 grid (Strategy, AI, Cybersecurity, Cloud, Custom Apps, Data Governance, IoT, Digital Twin, OT/IT)
4. **About/Why Us** - Stats grid + 3 value props (Scalable & Secure, Actionable Insights, End-to-End Delivery)
5. **Team** - Richard Hake (Project Manager) and Michael Colliver (Technology Solution Architect) with bios and skill tags
6. **Industries** - 4 sectors (Private, Government, Municipal, Customer-Facing) + industry tags
7. **Contact** - Form (useForm + zodResolver) + contact info sidebar
8. **CTA Banner** - Final conversion push
9. **Footer** - Logo, service links, company links, copyright

## Key Files
- `client/src/pages/home.tsx` - Complete landing page
- `client/src/App.tsx` - Router setup
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
