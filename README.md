# Help Find Kaidence Kollier - Missing Teen Website

This is a Next.js website created to help find Kaidence Kollier, a missing teen last seen in the Azaq Creek area.

## Features

- 🔍 **Main Information Page**: Displays details about Kaidence and contact information
- 📱 **QR Code Generator**: Creates downloadable QR codes for posters and flyers
- 💬 **Anonymous Tip Form**: Allows people to submit tips online securely
- 🔗 **Social Media Integration**: Easy sharing on Facebook and Twitter/X
- 📊 **SEO Optimized**: Includes meta tags and structured data for better search visibility

## Contact Information

- **Phone (Mom)**: [623-217-0545](tel:623-217-0545)
- **Emergency**: [911](tel:911)
- **Email**: tips@example.com

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

This site is configured for static export and can be deployed to:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Deploy from GitHub with automatic builds
- **GitHub Pages**: Build and deploy the `out` folder
- **Any static hosting**: Upload the contents of the `out` folder after running `npm run build`

### Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=tips@example.com
# Add social media API credentials for automation
```

## Customization

### Updating Information

Edit the `missingPerson` object in `app/page.tsx`:

```typescript
const missingPerson = {
  name: "Kaidence Kollier",
  age: "Teen",
  lastSeen: "Azaq Creek area",
  phoneMain: "623-217-0545",
  phoneEmergency: "911",
  // ... other details
};
```

### Adding Photos

Place photos in the `public/images/` directory and update the URLs in the code.

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **QR Code**: qrcode library
- **Deployment**: Static export

## Support

Every share could make a difference. Thank you for helping spread the word about Kaidence.

**Hashtags**: #FindKaidenceKollier #MissingTeen #AzaqCreek

## License

This project is created for the purpose of finding a missing person. Feel free to use and adapt for similar purposes.