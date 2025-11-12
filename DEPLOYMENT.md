# Deployment Guide

This guide will help you deploy the missing teen website to various hosting platforms.

## Prerequisites

- Node.js 18+ installed
- Git installed
- A GitHub account (for most deployment options)

## Building the Site

Before deployment, build the static site:

```bash
npm install
npm run build
```

This creates an `out` directory with all static files.

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Your site will be live in minutes with a free `.vercel.app` domain

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain and follow DNS instructions

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Click "Deploy site"

**Custom Domain:**
- Go to Domain Settings → Add custom domain

### Option 3: GitHub Pages

1. In your repository, go to Settings → Pages
2. Under "Build and deployment":
   - Source: GitHub Actions
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

4. Commit and push the workflow file
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 4: Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign in and click "Create a project"
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
5. Click "Save and Deploy"

### Option 5: Any Static Hosting (Manual)

For AWS S3, DigitalOcean Spaces, or any web server:

1. Build the site locally: `npm run build`
2. Upload the entire `out` directory to your hosting
3. Configure your web server to serve the files
4. Ensure the root points to `out/index.html`

## Post-Deployment Configuration

After deploying, update these settings:

### 1. Update Domain in Code

Edit `app/page.tsx` and replace all instances of:
```typescript
"https://azaqcreek-missing.com"
```
with your actual domain.

### 2. Update Social Media Links

In `app/layout.tsx`, update the Open Graph and Twitter image URLs:
```typescript
images: [
  {
    url: "https://yourdomain.com/images/og-image.jpg", // Update this
    width: 1200,
    height: 630,
  },
],
```

### 3. Configure Environment Variables (Optional)

Create a `.env.local` file (copy from `.env.local.example`) if you want to set up:
- Email notifications for tips
- Social media automation
- Analytics

### 4. Add Analytics (Optional)

To add Google Analytics:

1. Get your GA4 Measurement ID
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

## SSL/HTTPS

All recommended hosting providers (Vercel, Netlify, Cloudflare, GitHub Pages) provide free SSL certificates automatically. Ensure your site is served over HTTPS for security.

## Custom Domain Setup

After deploying, to use a custom domain like `findkaidence.com`:

1. Purchase domain from registrar (GoDaddy, Namecheap, Google Domains, etc.)
2. Add domain to your hosting platform
3. Update DNS records as instructed by your hosting provider
4. Wait for DNS propagation (can take up to 48 hours)

## Monitoring and Updates

### Update Content

To update contact information or other details:

1. Edit the relevant files (`app/page.tsx`, `app/contact/page.tsx`)
2. Commit and push to GitHub
3. Most platforms will automatically redeploy

### Monitor Traffic

Consider adding:
- Google Analytics for visitor tracking
- Plausible Analytics (privacy-friendly alternative)
- Simple Analytics

## Troubleshooting

**Build fails:**
- Ensure Node.js 18+ is installed
- Run `npm install` to ensure all dependencies are installed
- Check for any TypeScript errors

**Images not loading:**
- Ensure images are in the `public/images/` directory
- Check that image paths start with `/images/`
- For external images (like Google Photos), ensure the URL is correct

**QR code not generating:**
- This is a client-side feature and should work after page loads
- Check browser console for any JavaScript errors
- Ensure the `qrcode` npm package is installed

## Support

For deployment issues specific to your hosting platform, consult their documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)

## Emergency Updates

If you need to make urgent updates:

1. Edit the files directly on GitHub (click Edit button)
2. Commit changes
3. Automatic deployment will trigger
4. Changes will be live in 1-5 minutes

## Backup

Always keep a backup of your repository. GitHub serves as your backup, but you can also:
```bash
git clone https://github.com/yourusername/repository-name.git backup-folder
```

---

Remember: Every share and deployment of this site could help bring Kaidence home safely.
