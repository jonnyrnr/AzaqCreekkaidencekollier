# Missing Teen Awareness Website - Deployment Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your actual credentials
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Configuration

### 1. Update Site Information
Edit `config/siteConfig.ts` with actual information:
- Missing person details
- Contact information
- Social media accounts
- Website URL

### 2. Add Photos
Place images in the `public/images/` directory:
- `missing-person.jpg` - Main photo
- `og-image.jpg` - Social media preview image (1200x630px)

### 3. Social Media API Setup

#### Facebook
1. Create a Facebook Page
2. Get Page Access Token: https://developers.facebook.com/tools/explorer/
3. Add to `.env.local`

#### Twitter/X
1. Apply for Twitter Developer Account
2. Create app and get Bearer Token
3. Add to `.env.local`

#### Instagram
1. Convert Instagram account to Business account
2. Connect to Facebook Page
3. Get access token via Facebook Graph API
4. Add to `.env.local`

## Features

### QR Code Generation
- Visit `/qr` to generate QR codes
- Different campaigns for tracking effectiveness
- High-resolution for printing

### Contact Form
- Visit `/contact` to submit tips
- Generates reference numbers
- Supports anonymous submissions

### Social Media Automation
Run the script to post updates:
```bash
node scripts/postUpdate.mjs "Your message here"
```

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify
1. Push code to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Custom Server
1. Build: `npm run build`
2. Start: `npm start`
3. Use PM2 or similar for process management

## SEO Optimization

The site includes:
- Meta tags for search engines
- Open Graph tags for social sharing
- Schema.org structured data
- Mobile-responsive design
- Fast page loads

## Analytics (Optional)

Add Google Analytics or Plausible:
1. Get tracking ID
2. Add to `.env.local`
3. Implement tracking in `app/layout.tsx`

## Security Checklist

- [ ] Never commit `.env.local` to Git
- [ ] Use HTTPS in production
- [ ] Set up CORS if needed
- [ ] Validate all form inputs
- [ ] Sanitize user data
- [ ] Set up rate limiting for API endpoints

## Support

For issues or questions, consult:
- Next.js documentation: https://nextjs.org/docs
- Deployment guides: https://nextjs.org/docs/deployment

## Important Notes

**This is a time-sensitive project.** Every share and view could help bring someone home safely. 

- Test all features before launching
- Monitor form submissions regularly
- Update social media consistently
- Track which QR campaigns are most effective
