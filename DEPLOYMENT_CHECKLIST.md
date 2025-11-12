# Deployment Verification Checklist

## ✅ Pre-Deployment (Complete)

- [x] All infrastructure files created (package.json, tsconfig.json, etc.)
- [x] Build passes successfully
- [x] All pages render correctly
- [x] Contact form submits and generates reference numbers
- [x] QR code generator creates valid QR codes
- [x] Security scan passed (CodeQL - 0 vulnerabilities)
- [x] Mobile-responsive design verified
- [x] Phone number updated: 623-217-0545

## 📝 Required Before Production Launch

### 1. Update Site Configuration (`config/siteConfig.ts`)

- [ ] Update person description with physical details
- [ ] Set actual email address (replace `tips@example.com`)
- [ ] Update police contact information
- [ ] Verify social media URLs are correct
- [ ] Update site.url with production domain

### 2. Add Photos

- [ ] Add actual missing person photo to `public/images/missing-person.jpg`
- [ ] Create social media preview image at `public/images/og-image.jpg` (1200x630px)

### 3. Environment Variables

- [ ] Copy `.env.local.example` to `.env.local`
- [ ] Set `NEXT_PUBLIC_SITE_URL` to production domain
- [ ] (Optional) Add social media API tokens for automation
- [ ] (Optional) Configure email service for tip notifications

### 4. Deployment Platform Setup

Choose one platform and complete setup:

#### Option A: Vercel (Recommended)
- [ ] Push code to GitHub
- [ ] Connect repository to Vercel
- [ ] Add environment variables in Vercel dashboard
- [ ] Deploy

#### Option B: Netlify
- [ ] Push code to GitHub
- [ ] Connect repository to Netlify
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `.next`
- [ ] Add environment variables
- [ ] Deploy

#### Option C: Custom Server
- [ ] Set up server with Node.js 18+
- [ ] Install dependencies: `npm install`
- [ ] Build: `npm run build`
- [ ] Set up PM2 or similar process manager
- [ ] Configure reverse proxy (nginx/Apache)
- [ ] Set up SSL certificate (Let's Encrypt)
- [ ] Start: `npm start`

## 🧪 Post-Deployment Testing

### Homepage
- [ ] Page loads correctly
- [ ] Photo displays (or placeholder shows if not added)
- [ ] Phone number is correct: 623-217-0545
- [ ] All contact information is accurate
- [ ] Social sharing buttons work
- [ ] "Submit a Tip Online" button navigates to contact page
- [ ] "Get QR Code for Posters" navigates to QR page

### Contact Form
- [ ] Form loads correctly
- [ ] Required fields are enforced (Location, Details)
- [ ] Anonymous submission checkbox works
- [ ] Form submission succeeds
- [ ] Reference number is generated and displayed
- [ ] Tips are being logged (check server logs or database)
- [ ] Emergency contact information displays correctly

### QR Code Generator
- [ ] Page loads correctly
- [ ] All campaign types are selectable
- [ ] "Generate QR Code" button works
- [ ] QR code image displays
- [ ] Download button works
- [ ] QR code scans correctly on mobile devices
- [ ] QR code links to correct URL with campaign tracking

### Mobile Testing
- [ ] Test on iPhone
- [ ] Test on Android
- [ ] Test on tablet
- [ ] All buttons are tappable
- [ ] Form fields work correctly
- [ ] QR codes download on mobile

### Social Media
- [ ] Share on Facebook shows correct preview
- [ ] Share on Twitter/X shows correct preview
- [ ] Open Graph tags working (use https://metatags.io to test)
- [ ] Twitter Cards working

### SEO & Performance
- [ ] Site appears in Google search (may take 24-48 hours)
- [ ] Page load time is acceptable (< 3 seconds)
- [ ] Lighthouse score is good (> 90)
- [ ] Meta descriptions are correct
- [ ] Schema.org structured data is present

## 📊 Ongoing Monitoring

- [ ] Check for tip submissions daily
- [ ] Monitor website traffic
- [ ] Track QR code scan rates
- [ ] Update website with new information as available
- [ ] Post social media updates regularly

## 🆘 Emergency Contacts

Keep these readily available:

- **Website Issues**: Check deployment platform logs
- **Local Police**: [Add department contact]
- **FBI (if applicable)**: 1-800-CALL-FBI
- **National Center for Missing & Exploited Children**: 1-800-THE-LOST

## 🔒 Security Best Practices

- [x] No secrets committed to Git (verified)
- [x] Input validation on all form fields (verified)
- [x] HTTPS enabled in production (required for deployment)
- [ ] Rate limiting configured (optional, recommended)
- [ ] CORS configured if needed
- [ ] Regular dependency updates scheduled

## 📈 Success Metrics to Track

- Number of tip submissions
- Website traffic/visits
- QR code scans by campaign
- Social media shares
- Geographic distribution of visitors

---

**Time is critical. Every view and share could help bring someone home safely.**

Last Updated: 2025-11-12
