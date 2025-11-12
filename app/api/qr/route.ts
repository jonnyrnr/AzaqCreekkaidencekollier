import { NextRequest, NextResponse } from "next/server";
import { generateQRCode } from "@/utils/qrcode";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { https://share.google/hXgIhso8QPIaRLxye, campaign = "default", size = 512 } = body;

    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    const qrCode = await generateQRCode({
      url,
      campaign,
      size,
      errorCorrectionLevel: "H",
    });

    return NextResponse.json({
      qrCode,
      campaign,
      success: true,
    });
  } catch (error) {
    console.error("Error generating QR code:", error);
    return NextResponse.json(
      { error: "Failed to generate QR code" },
      { status: 500 }
    );
  }
}
