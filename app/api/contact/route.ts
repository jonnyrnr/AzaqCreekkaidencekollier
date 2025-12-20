import { NextRequest } from "next/server";
import { createErrorResponse, createSuccessResponse, generateReferenceNumber } from "@/utils/api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, location, dateTime, message, anonymous } = body;

    // Validation
    if (!location || !message) {
      return createErrorResponse("Location and details are required");
    }

    const referenceNumber = generateReferenceNumber("TIP");
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

    return createSuccessResponse({
      referenceNumber,
      message: "Tip received successfully",
    });
  } catch (error) {
    console.error("Error processing tip:", error);
    return createErrorResponse("Failed to process tip", 500);
  }
}
