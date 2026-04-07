# Ebook Landing Page - Ciąża, Poród, Połóg

## Overview
Landing page for selling an ebook about pregnancy, birth, and postpartum by Dorota Matuła. Payments handled via a direct Stripe Payment Link (no backend Stripe integration needed).

## Recent Changes
- 2026-04-07: Removed Stripe backend integration (was causing server crash); payments use Stripe Payment Link directly
- 2026-02-10: Added interactive ebook page slider (Swiper.js) in "Dlaczego warto" section
- 2026-02-10: Updated content sections with new copy and modern card-based design

## Project Architecture
- **Frontend**: React + Vite + Tailwind CSS + shadcn/ui + Framer Motion
- **Backend**: Express.js (minimal — only newsletter endpoint)
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Payments**: Stripe Payment Link (direct, no backend integration)
- **Email**: MailerLite API via `/api/newsletter` endpoint
- **Routing**: wouter (frontend), Express (backend API)

### Key Files
- `client/src/pages/home.tsx` - Main landing page
- `client/src/pages/checkout-success.tsx` - Payment success page (shows download links)
- `client/src/pages/checkout-cancel.tsx` - Payment cancelled page
- `server/index.ts` - Express server (minimal, no Stripe)
- `server/routes.ts` - API routes (newsletter only)
- `server/storage.ts` - Database storage (newsletter subscribers)
- `shared/schema.ts` - Database schema (newsletter_subscribers table)

### Payments
- Stripe Payment Link: `https://buy.stripe.com/8x2dR9espcQD0eugk814400`
- Direct link in frontend — no backend processing required
- Success page shows download links directly (no session verification)

### Brand Colors
- brand-cobalt (dark blue), brand-pink, brand-orange, brand-purple, brand-beige

## User Preferences
- Polish language throughout the app
- Modern, designerski aesthetic with branding elements (waves, flowers, checkers)
- No hearts as icons - use branding elements instead
