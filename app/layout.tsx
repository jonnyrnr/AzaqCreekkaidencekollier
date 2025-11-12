import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Help Find Kaidence Kollier - Missing Teen",
  description: "Kaidence Kollier, a teen, went missing in the Azaq Creek area. If you have any information, please contact us immediately.",
  keywords: ["Kaidence Kollier", "missing teen", "Azaq Creek", "missing person", "help find", "have you seen"],
  authors: [{ name: "Family and Friends" }],
  creator: "Missing Person Awareness Campaign",
  publisher: "Missing Person Awareness Campaign",
  robots: "index, follow",
  openGraph: {
    title: "Help Find Kaidence Kollier - Missing Teen",
    description: "Kaidence Kollier, a teen, went missing in the Azaq Creek area. If you have any information, please contact us immediately.",
    url: "https://azaqcreek-missing.com",
    siteName: "Help Find Kaidence Kollier - Missing Teen",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Help find Kaidence Kollier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@findkaidence",
    title: "Help Find Kaidence Kollier - Missing Teen",
    description: "Kaidence Kollier, a teen, went missing in the Azaq Creek area. If you have any information, please contact us immediately.",
    images: ["/images/og-image.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kaidence Kollier",
              description: "Please update with physical description",
              image: "/images/missing-person.jpg",
              url: "https://azaqcreek-missing.com",
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
