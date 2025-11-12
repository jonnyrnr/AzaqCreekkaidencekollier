# 🚀 Quick Start Guide - Missing Teen Awareness Website

## ⚡ Get Running in 5 Minutes

This website is **ready to deploy**. Follow these steps to get it live ASAP.

### Prerequisites
- Node.js 18+ installed
- Git installed
- Images ready (see step 2)

---

## Step 1: Install Dependencies (1 minute)

```bash
npm install
```

**Status:** ✅ **DONE** - All dependencies are configured and ready

---

## Step 2: Add Images (2 minutes) ⚠️ **ACTION REQUIRED**

Two images are needed in `public/images/`:

### A. Missing Person Photo
- **Source:** https://share.google/hXgIhso8QPIaRLxye
- **Filename:** `missing-person.jpg`
- **Location:** `public/images/missing-person.jpg`

**How to add:**
1. Download image from the Google link
2. Rename to `missing-person.jpg`
3. Replace `public/images/missing-person.jpg`

### B. Social Media Preview
- **Filename:** `og-image.jpg`
- **Location:** `public/images/og-image.jpg`
- **Size:** 1200x630 pixels
- **Content:** Create a graphic with photo + text overlay

**Quick tip:** Use [Canva](https://canva.com) (free) to create this in 2 minutes.

See [IMAGE_INSTRUCTIONS.md](./IMAGE_INSTRUCTIONS.md) for detailed help.

---

## Step 3: Test Locally (1 minute)

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

**Verify:**
- ✅ Landing page loads
- ✅ Contact form at `/contact` works
- ✅ QR generator at `/qr` works
- ✅ Phone number shows: 623-217-0545

Press `Ctrl+C` to stop the dev server.

---

## Step 4: Deploy to Vercel (1 minute) 🎉

### Option A: Deploy via Web (Easiest)

1. **Push to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in

3. **Click "New Project"**

4. **Import your GitHub repository**

5. **Click "Deploy"** (no configuration needed!)

6. **Done!** Your site is live in ~2 minutes

### Option B: Deploy via CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts, and you're live!

---

## ✅ Post-Deployment Checklist

After deploying:

1. **Update site URL** in `config/siteConfig.ts`:
   ```typescript
   site: {
     url: "https://your-actual-domain.vercel.app",
   }
   ```

2. **Commit and redeploy**:
   ```bash
   git add config/siteConfig.ts
   git commit -m "Update production URL"
   git push
   ```

3. **Generate QR codes**:
   - Visit `https://your-domain.vercel.app/qr`
   - Generate codes for different campaigns
   - Download and use on posters

4. **Test sharing**:
   - Share on Facebook/Twitter
   - Verify preview image appears
   - Check all links work

---

## 📢 Immediate Actions After Going Live

### 1. Print and Distribute (Priority #1)
```bash
# Generate QR codes
Visit: https://your-domain.vercel.app/qr
Download: Poster, Business, Community campaigns
Print: High quality, 300 DPI
Distribute: High-traffic areas
```

### 2. Social Media Blitz
- Post on all platforms
- Include website link
- Use hashtags: #FindKaidenceKollier #MissingTeen #AzaqCreek
- Ask friends/family to share

### 3. Local Community
- Schools and universities
- Local businesses
- Community centers
- Nextdoor, local Facebook groups

### 4. Media Outreach
- Local TV news stations
- Local newspapers
- Local radio stations
- Community blogs

---

## 🔄 Making Updates

### Update Person Information
Edit `config/siteConfig.ts` and redeploy.

### Post Social Media Update
```bash
node scripts/postUpdate.mjs "New information available"
```
(Requires API credentials configured)

### View Tips Submitted
Tips are logged to the console. In production, set up:
- Email notifications
- Database storage
- Direct police integration

---

## 📞 Critical Contact Info

**Already configured in the site:**
- Mom's phone: **623-217-0545** ✅
- Emergency: **911** ✅
- Last seen: **Azaq Creek area** ✅

---

## 🆘 Troubleshooting

### Build fails?
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Images not showing?
- Check files exist: `ls -la public/images/`
- Check file names match exactly
- Rebuild: `npm run build`

### Can't deploy to Vercel?
- Make sure repository is pushed to GitHub
- Check you're signed into Vercel with the right account
- Try the CLI method instead

---

## 📚 Additional Resources

- **Detailed deployment:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Next steps:** [NEXT_STEPS.md](./NEXT_STEPS.md)
- **Image help:** [IMAGE_INSTRUCTIONS.md](./IMAGE_INSTRUCTIONS.md)
- **Full README:** [README.md](./README.md)

---

## ⏱️ Time Estimate

| Task | Time |
|------|------|
| Install dependencies | 1 min |
| Add images | 2 min |
| Test locally | 1 min |
| Deploy to Vercel | 1 min |
| **Total** | **~5 minutes** |

---

## 🎯 The Goal

**Get this website live and shared as quickly as possible.**

Every minute counts in a missing person case. This site is your tool to:
- Reach more people
- Collect tips
- Coordinate efforts
- Bring Kaidence home safely

---

**Need help? See the docs or open an issue on GitHub.**

**#FindKaidenceKollier - Every share matters.**
