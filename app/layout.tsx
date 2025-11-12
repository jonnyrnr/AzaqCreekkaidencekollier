import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.site.url),
  title: siteConfig.site.title,
  description: siteConfig.site.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Family and Friends" }],
  creator: "Missing Person Awareness Campaign",
  publisher: "Missing Person Awareness Campaign",
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.site.url,
    title: siteConfig.site.title,
    description: siteConfig.site.description,
    siteName: siteConfig.site.title,
    images: [
      {
        url: siteConfig.site.image,
        width: 1200,
        height: 630,
        alt: `Help find ${siteConfig.person.name}`,
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.site.title,
    description: siteConfig.site.description,
    images: [siteConfig.site.image],
    creator: "@findkaidence",
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification (add when available)
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org JSON-LD for Missing Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.person.name,
              description: siteConfig.person.description,
              image: siteConfig.person.photo,
              url: siteConfig.site.url,
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
