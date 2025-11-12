# Copilot Instructions for AzaqCreekkaidencekollier

## Project Overview

**Mission-Critical Website**: Public awareness platform for a missing teen case (Kaidence Kollier)
- **Primary Goal**: Maximize visibility and facilitate tip reporting
- **Technology**: Next.js 15 + TypeScript + Tailwind CSS
- **Key Features**: QR code generation, contact forms, SEO optimization, social media automation
- **Deployment**: Vercel/Netlify ready, production build working

## Architecture & Data Flow

### Core Components
1. **Landing Page** (`app/page.tsx`) - Main awareness page with SEO
2. **Contact System** (`app/contact/page.tsx` + `app/api/contact/route.ts`) - Tip submission
3. **QR Generator** (`app/qr/page.tsx` + `app/api/qr/route.ts`) - Campaign-tracked QR codes
4. **Config** (`config/siteConfig.ts`) - Centralized person info, contacts, social accounts

### Data Flow
- **Tips**: Form → API route → Console log (TODO: database/email)
- **QR Codes**: User selects campaign → API generates QR → Client downloads
- **Social Posts**: CLI script → API calls → Facebook/Twitter/Instagram

### Key Files
- `config/siteConfig.ts` - **UPDATE FIRST** with real missing person details
- `app/layout.tsx` - SEO metadata, Open Graph, Schema.org structured data
- `utils/qrcode.ts` - QR generation with campaign tracking
- `scripts/socialMedia.ts` - Social media API integrations

## Development Workflow

### Setup
```bash
npm install
cp .env.local.example .env.local  # Then edit with real credentials
npm run dev  # http://localhost:3000
```

### Build & Deploy
```bash
npm run build  # Production build
npm start      # Run production
# OR push to GitHub → auto-deploy on Vercel
```

### Social Media Posting
```bash
node scripts/postUpdate.js "Help us find Kaidence"
```

## Project-Specific Conventions

### 1. Configuration Pattern
All customizable content is centralized in `config/siteConfig.ts`. Never hardcode:
- Missing person details
- Contact information  
- Social media URLs
- Site metadata

### 2. API Routes
- Use Next.js App Router API routes (`app/api/*/route.ts`)
- Return JSON with `NextResponse.json()`
- Log to console (production TODO: database)
- Generate reference numbers for tracking (e.g., `TIP-${timestamp}-${random}`)

### 3. Form Handling
- Client-side validation + server-side validation
- Anonymous submission option (clears contact fields)
- Reference numbers for all submissions
- Security: validate all inputs, sanitize data

### 4. QR Code System
- Campaign-based tracking via URL params (`?ref=qr&campaign=poster`)
- High error correction level ("H") for damaged prints
- 512x512px output (print-ready)
- Black/white only for maximum contrast

### 5. SEO Strategy
- Meta tags in `app/layout.tsx` (global)
- Open Graph + Twitter Cards for social sharing
- Schema.org Person structured data
- Mobile-first responsive (Tailwind)
- No `metadataBase` warning is expected in dev (set in production)

## Integration Points

### External Dependencies
- **qrcode** - QR code generation (server-side)
- **Next.js API Routes** - Backend endpoints
- **Social Media APIs** (optional):
  - Facebook Graph API (Page posts)
  - Twitter API v2 (Tweets)
  - Instagram Graph API (Photo posts)

### TODO Integration Points
1. **Email notifications** - Add nodemailer config to send tips
2. **Database** - Store tips persistently (currently console.log)
3. **Analytics** - Google Analytics or Plausible tracking
4. **Job scheduler** - node-cron for scheduled social posts

## Critical Notes for AI Agents

### Sensitivity & Privacy
- This is an **active missing person case** - handle with care
- Never commit real personal info to version control
- Validate all user inputs (security + privacy)
- Reference numbers allow anonymous follow-up

### Time-Criticality
- **Prioritize speed** over perfection
- Build works, ready to deploy immediately
- Focus on visibility and ease of use
- Mobile accessibility is critical (most users)

### Customization Checklist
Before going live, update:
- [ ] `config/siteConfig.ts` - ALL placeholder data
- [ ] `public/images/missing-person.jpg` - Add photo
- [ ] `public/images/og-image.jpg` - Social share image
- [ ] `.env.local` - Production URLs and API keys
- [ ] Test contact form end-to-end
- [ ] Generate and test QR codes

### Common Tasks
- **Update person info**: Edit `config/siteConfig.ts`
- **Change styling**: Tailwind classes in page files
- **Add API integration**: Create in `app/api/*/route.ts`
- **Social posting**: Use `scripts/postUpdate.js`
- **Deploy**: Push to GitHub (auto-deploy) or `npm run build`

## Quick Reference

```typescript
// Site config structure
siteConfig = {
  person: { name, age, lastSeen, description, photo },
  site: { title, description, url, image },
  contact: { phone, email, tipline, policeContact },
  social: { facebook, twitter, instagram, hashtags },
  keywords: [...]
}
```

See [NEXT_STEPS.md](../NEXT_STEPS.md) for deployment guide.
See [DEPLOYMENT.md](../DEPLOYMENT.md) for detailed setup.
