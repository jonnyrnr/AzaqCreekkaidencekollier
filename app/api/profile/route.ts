import { NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

// Force static export to pre-render this endpoint at build time
// This is required for compatibility with Next.js static export mode
export const dynamic = "force-static";

export async function GET() {
  try {
    // Destructure siteConfig for cleaner code
    const { person, contact, social, site } = siteConfig;
    
    // Return the missing person's profile information
    // Note: site.image is excluded as it's primarily for social media meta tags
    const profile = {
      person,
      contact,
      social,
      site: {
        title: site.title,
        description: site.description,
        url: site.url,
      },
    };

    return NextResponse.json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}
