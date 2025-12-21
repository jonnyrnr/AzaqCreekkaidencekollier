import { NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

export const dynamic = "force-static";

export async function GET() {
  try {
    // Return the missing person's profile information
    const profile = {
      person: {
        name: siteConfig.person.name,
        age: siteConfig.person.age,
        lastSeen: {
          location: siteConfig.person.lastSeen.location,
          date: siteConfig.person.lastSeen.date,
        },
        description: siteConfig.person.description,
        photo: siteConfig.person.photo,
      },
      contact: {
        phone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        tipline: siteConfig.contact.tipline,
        policeContact: siteConfig.contact.policeContact,
      },
      social: {
        facebook: siteConfig.social.facebook,
        twitter: siteConfig.social.twitter,
        instagram: siteConfig.social.instagram,
        hashtags: siteConfig.social.hashtags,
      },
      site: {
        title: siteConfig.site.title,
        description: siteConfig.site.description,
        url: siteConfig.site.url,
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
