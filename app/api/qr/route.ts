import { NextRequest } from "next/server";
import { generateQRCode } from "@/utils/qrcode";
import { createErrorResponse, createSuccessResponse } from "@/utils/api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, campaign = "default", size = 512 } = body;

    if (!url) {
      return createErrorResponse("URL is required");
    }

    const qrCode = await generateQRCode({
      url,
      campaign,
      size,
      errorCorrectionLevel: "H",
    });

    return createSuccessResponse({ qrCode, campaign });
  } catch (error) {
    console.error("Error generating QR code:", error);
    return createErrorResponse("Failed to generate QR code", 500);
  }
}
