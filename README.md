# Missing Teen Awareness Website

A mission-critical website designed to maximize visibility and facilitate contact reporting for a missing teen case.

## 🚨 Project Purpose

This website serves as a public awareness platform featuring:
- **QR Code Generation** - For physical distribution on posters and flyers
- **Contact Forms** - Secure tip submission system
- **SEO Optimization** - Maximum search engine visibility
- **Social Media Automation** - Automated posting to major platforms

## 🏗️ Technology Stack

- **Framework:** Next.js 15 with TypeScript
- **Styling:** Tailwind CSS
- **QR Codes:** qrcode library
- **Deployment:** Vercel/Netlify ready

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main landing page
│   ├── contact/           # Contact form page
│   ├── qr/                # QR code generator
│   └── api/               # API routes
├── components/            # Reusable React components
├── config/                # Site configuration
│   └── siteConfig.ts      # Missing person info, contacts
├── utils/                 # Utility functions
│   └── qrcode.ts          # QR code generation
├── scripts/               # Automation scripts
│   ├── socialMedia.ts     # Social media posting
│   └── postUpdate.js      # CLI for posting updates
└── public/                # Static assets
    └── qr-codes/          # Generated QR codes
```

## ⚙️ Configuration

1. **Edit `config/siteConfig.ts`** with actual information:
   - Missing person details
   - Contact information
   - Social media accounts

2. **Add photos to `public/images/`**:
   - `missing-person.jpg` - Main photo
   - `og-image.jpg` - Social media preview (1200x630px)

3. **Set up environment variables** in `.env.local`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed setup instructions.

## 🎯 Key Features

### Landing Page (/)
- Urgent alert banner
- Missing person information
- Multiple contact methods
- Social sharing buttons
- SEO optimized with meta tags

### Contact Form (/contact)
- Anonymous submission option
- Reference number generation
- Mobile-responsive design
- Form validation

### QR Code Generator (/qr)
- Multiple campaign tracking
- High-resolution output (512x512px)
- Print-ready format
- Download functionality

### Social Media Automation
Post updates via command line:
```bash
node scripts/postUpdate.mjs "Help us find [Name]"
```

## 📱 SEO & Social Features

- ✅ Open Graph meta tags (Facebook, LinkedIn)
- ✅ Twitter Card meta tags
- ✅ Schema.org Person structured data
- ✅ Mobile-first responsive design
- ✅ Fast page loads
- ✅ Accessibility optimized

## 🔒 Security

- Form validation on client and server
- Reference number tracking
- Anonymous tip support
- Environment variables for sensitive data

## 📊 Analytics & Tracking

- QR code campaign tracking
- Form submission logging
- Ready for Google Analytics integration

## 🌐 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions and other hosting options.

## 🤝 Contributing

This is a time-sensitive project. If you can help improve it:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## ⚠️ Important

**This is an active missing person case.** Every share, view, and tip could make a crucial difference. Please:
- Share widely on social media
- Print and distribute QR code posters
- Report any information immediately
- Respect the privacy of the family

---

Built with urgency and care. Every minute counts.

