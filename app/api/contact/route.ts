import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

// Generate a reference number for tracking
function generateReferenceNumber(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  return `TIP-${timestamp}-${random}`.toUpperCase();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, location, dateTime, message, anonymous } = body;

    // Validation
    if (!location || !message) {
      return NextResponse.json(
        { error: "Location and details are required" },
        { status: 400 }
      );
    }

    const referenceNumber = generateReferenceNumber();
    const timestamp = new Date().toISOString();

    // Prepare tip data
    const tipData = {
      referenceNumber,
      timestamp,
      anonymous,
      contact: anonymous ? null : { name, email, phone },
      sighting: {
        location,
        dateTime: dateTime || "Not specified",
      },
      details: message,
      ip: request.headers.get("x-forwarded-for") || "unknown",
    };

    // Log to console (in production, save to database)
    console.log("=== NEW TIP RECEIVED ===");
    console.log(JSON.stringify(tipData, null, 2));
    console.log("========================");

    // TODO: In production, implement one or more of:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send to law enforcement portal
    // 4. Integrate with case management system
    
    // Example: Send email notification (requires email service setup)
    /*
    await sendEmailNotification({
      to: siteConfig.contact.email,
      subject: `New Tip: ${referenceNumber}`,
      body: `
        Reference: ${referenceNumber}
        Time: ${timestamp}
        Location: ${location}
        Details: ${message}
        ${!anonymous ? `Contact: ${name} (${email}, ${phone})` : 'Anonymous submission'}
      `,
    });
    */

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: "Tip received successfully",
    });
  } catch (error) {
    console.error("Error processing tip:", error);
    return NextResponse.json(
      { error: "Failed to process tip" },
      { status: 500 }
    );
  }
}
