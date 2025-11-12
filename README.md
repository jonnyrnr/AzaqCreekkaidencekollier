# Help Find Kaidence Kollier - Missing Teen Awareness Website

**⚠️ URGENT: This is an active missing person case**

This website is designed to help find Kaidence Kollier, a missing teen last seen in the Azaq Creek area. The site includes features for spreading awareness, collecting tips, and tracking campaign effectiveness.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jonnyrnr/AzaqCreekkaidencekollier.git
   cd AzaqCreekkaidencekollier
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your actual credentials
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## ✨ Features

### 1. **SEO-Optimized Landing Page**
- Urgent missing person alert
- Clear contact information
- Social sharing buttons
- Mobile-responsive design

### 2. **Contact/Tip Submission Form** (`/contact`)
- Anonymous submission option
- Reference number tracking
- Secure data handling
- Email/phone collection (optional)

### 3. **QR Code Generator** (`/qr`)
- Campaign-based tracking
- High-resolution for printing (512x512px)
- Multiple campaign types (posters, business windows, etc.)
- Downloadable PNG files

### 4. **Social Media Automation**
- Post to Facebook, Twitter, and Instagram
- Script: `node scripts/postUpdate.mjs "Your message"`
- Requires API credentials in `.env.local`

## 📝 Configuration

### Update Missing Person Information

Edit `config/siteConfig.ts`:

```typescript
person: {
  name: "Kaidence Kollier",
  age: "Teen",
  lastSeen: {
    location: "Azaq Creek area",
    date: "2025-11-12",
  },
  description: "Add physical description here",
}
```

### Add Photos

Place images in `public/images/`:
- **missing-person.jpg** - Main photo (portrait, 800x1000px recommended)
- **og-image.jpg** - Social media preview (1200x630px)

**Note:** The image URLs need to be updated. See instructions in the placeholder files.

### Update Contact Information

In `config/siteConfig.ts`:
```typescript
contact: {
  phone: "623-217-0545",  // Mom's number
  email: "tips@example.com",
  tipline: "911",
  policeContact: "Local Police Department: XXX-XXX-XXXX",
}
```

## 🌐 Deployment

### Option 1: Vercel (Recommended - Free)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" → Import from GitHub
4. Add environment variables in Vercel dashboard
5. Deploy (takes ~2 minutes)

### Option 2: Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. New site from Git → Select repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Add environment variables
7. Deploy

### Option 3: Custom Server

```bash
npm run build
npm start
# Or use PM2: pm2 start npm --name "missing-website" -- start
```

## 📱 Using the Website

### Generate QR Codes
1. Visit `/qr` on your deployed site
2. Select campaign type (poster, business window, etc.)
3. Click "Generate QR Code"
4. Download and print on flyers/posters

### Submit Tips
1. Visit `/contact` on your site
2. Fill out the form (anonymous option available)
3. Receive a reference number for tracking

### Post to Social Media
```bash
node scripts/postUpdate.mjs "New update: Help us find Kaidence!"
```

## 📊 Built With

- **Framework:** Next.js 15 (React 18)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **QR Codes:** qrcode library
- **Deployment:** Vercel/Netlify ready

## 🔒 Security

- All form inputs are validated
- Anonymous submissions supported
- HTTPS required in production
- Environment variables for sensitive data
- No personal data stored client-side

## 📞 Emergency Contacts

- **Mom's Phone:** 623-217-0545
- **Emergency:** 911
- **Email Tips:** tips@example.com (configure in siteConfig.ts)

## 📄 Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Detailed deployment guide
- **[NEXT_STEPS.md](./NEXT_STEPS.md)** - Post-deployment checklist

## ⚠️ Important Notes

1. **Time is Critical** - Every share could help
2. **Update Photos** - Replace placeholder images with actual photos
3. **Test Everything** - Verify all features before going live
4. **Monitor Tips** - Check server logs regularly for submissions
5. **Spread Awareness** - Share on all social media platforms

## 🤝 Contributing

This is a mission-critical project. If you can help improve it:
1. Keep changes minimal and focused
2. Test thoroughly before submitting
3. Priority is visibility and ease of use

## 📄 License

This project is provided as-is for the purpose of helping find a missing person.

---

**Every share could make a difference. Please help spread the word.**

#FindKaidenceKollier #MissingTeen #AzaqCreek