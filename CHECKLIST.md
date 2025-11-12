# 🎯 Pre-Launch Checklist

Use this checklist before deploying the missing teen awareness website to ensure everything is ready.

## ✅ Essential Items (Must Complete)

### 1. Images
- [ ] Download missing person photo from: https://share.google/hXgIhso8QPIaRLxye
- [ ] Save as `public/images/missing-person.jpg`
- [ ] Create social media preview image (1200x630px)
- [ ] Save as `public/images/og-image.jpg`
- [ ] Verify both images display correctly in dev mode

### 2. Configuration Review
- [x] Phone number updated: 623-217-0545 ✅
- [x] Emergency contact: 911 ✅
- [x] Last seen location: Azaq Creek area ✅
- [ ] Review person description in `config/siteConfig.ts`
- [ ] Update physical description with actual details
- [ ] Update email address if different from placeholder
- [ ] Update police contact information

### 3. Build & Test
- [x] Dependencies installed: `npm install` ✅
- [x] Project builds successfully: `npm run build` ✅
- [ ] Dev server runs: `npm run dev`
- [ ] Landing page displays correctly
- [ ] Contact form submits successfully
- [ ] QR generator creates downloadable codes
- [ ] All links work
- [ ] Mobile responsive (test on phone)

## 🚀 Deployment Steps

### 4. Push to GitHub
- [ ] All changes committed
- [ ] Pushed to main/master branch
- [ ] Repository is accessible

### 5. Deploy to Vercel
- [ ] Account created on vercel.com
- [ ] Repository imported to Vercel
- [ ] Environment variables added (if using social media features)
- [ ] First deployment successful
- [ ] Production URL obtained

### 6. Post-Deployment Updates
- [ ] Update `config/siteConfig.ts` with production URL
- [ ] Update `.env.local` with production URL
- [ ] Commit and redeploy
- [ ] Test production site fully
- [ ] Verify social sharing works (preview images appear)

## 📢 Distribution Plan

### 7. QR Code Generation
- [ ] Visit production site `/qr` page
- [ ] Generate "Poster" campaign QR code
- [ ] Generate "Business" campaign QR code
- [ ] Generate "Community" campaign QR code
- [ ] Download all as PNG files
- [ ] Test scanning with multiple phones

### 8. Physical Materials
- [ ] Design poster with photo, details, QR code
- [ ] Print high-quality posters (300 DPI)
- [ ] Print business card size handouts
- [ ] Print flyers
- [ ] Include website URL on all materials

### 9. Digital Distribution
- [ ] Post to Facebook with site link
- [ ] Post to Twitter/X with site link
- [ ] Post to Instagram (link in bio)
- [ ] Share in local community Facebook groups
- [ ] Post on Nextdoor
- [ ] Email to friends and family
- [ ] Share on LinkedIn (personal network)

### 10. Community Outreach
- [ ] Schools and universities
- [ ] Local businesses (ask to display posters)
- [ ] Community centers
- [ ] Libraries
- [ ] Religious organizations
- [ ] Youth centers
- [ ] Parks and recreation areas

### 11. Media Contact
- [ ] Local TV news stations
- [ ] Local newspapers
- [ ] Local radio stations
- [ ] Community blogs
- [ ] Local podcasts
- [ ] Press release (if applicable)

## 🔧 Optional Enhancements

### 12. Analytics (Recommended)
- [ ] Set up Google Analytics
- [ ] Add tracking code
- [ ] Monitor traffic sources
- [ ] Track QR campaign effectiveness

### 13. Social Media Automation (Optional)
- [ ] Create Facebook page
- [ ] Set up Facebook API credentials
- [ ] Create Twitter developer account
- [ ] Set up Twitter API credentials
- [ ] Configure Instagram business account
- [ ] Test posting with `node scripts/postUpdate.mjs`

### 14. Email Notifications (Optional)
- [ ] Set up email service (Gmail, SendGrid, etc.)
- [ ] Configure SMTP credentials
- [ ] Update contact form to send emails
- [ ] Test tip notification emails

### 15. Database Storage (Optional)
- [ ] Set up database (PostgreSQL, MongoDB, etc.)
- [ ] Update API routes to save tips
- [ ] Create admin dashboard for viewing tips
- [ ] Implement backup system

## 📊 Success Metrics

Track these to measure effectiveness:

- [ ] Website visits (use analytics)
- [ ] QR code scans (track via campaign parameters)
- [ ] Tips submitted (check logs/database)
- [ ] Social shares (monitor platforms)
- [ ] Media coverage (track mentions)

## 🆘 Emergency Contacts

Keep these handy:

- **Mom:** 623-217-0545
- **Emergency:** 911
- **Local Police:** (Update in config)
- **FBI:** 1-800-CALL-FBI (if applicable)
- **National Center for Missing & Exploited Children:** 1-800-THE-LOST

## ⏰ Timeline Recommendation

| Phase | Timeline | Priority |
|-------|----------|----------|
| Images & Config | Day 1 - Hour 1 | CRITICAL |
| Deploy & Test | Day 1 - Hour 2 | CRITICAL |
| Physical Posters | Day 1-2 | HIGH |
| Social Media | Day 1 (ongoing) | HIGH |
| Community Outreach | Day 2-3 | HIGH |
| Media Contact | Day 2-3 | MEDIUM |
| Optional Features | Ongoing | LOW |

## 🚨 Critical Reminder

**Time is of the essence in missing person cases.**

- Get the site live FIRST, perfect it LATER
- Basic working site > Perfect site that launches tomorrow
- Share immediately and widely
- Update as more information becomes available

## ✅ Pre-Launch Quick Test

Before announcing publicly:

```bash
# 1. Test locally
npm run dev
# Visit: http://localhost:3000

# 2. Test all pages
# - / (home)
# - /contact (form)
# - /qr (generator)

# 3. Test on mobile
# Use your phone to visit the site

# 4. Test social sharing
# Share on Facebook, check preview

# 5. Test QR code
# Generate, download, scan with phone
```

## 📞 Getting Help

- **Technical:** See README.md, DEPLOYMENT.md
- **Case-related:** Call 623-217-0545 or 911

---

**Remember: Every share could save a life. Launch fast, iterate quickly.**

**#FindKaidenceKollier**
