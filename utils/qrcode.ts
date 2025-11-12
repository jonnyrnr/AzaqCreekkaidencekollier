import QRCode from "qrcode";

export interface QRCodeOptions {
  url: string;
  campaign?: string;
  size?: number;
  errorCorrectionLevel?: "L" | "M" | "Q" | "H";
}

export async function generateQRCode(options: QRCodeOptions): Promise<string> {
  const {
    url,
    campaign = "default",
    size = 512,
    errorCorrectionLevel = "H", // High error correction for damaged posters
  } = options;

  // Add tracking parameter to URL
  const trackingUrl = `${url}?ref=qr&campaign=${encodeURIComponent(campaign)}`;

  try {
    // Generate QR code as data URL
    const qrDataUrl = await QRCode.toDataURL(trackingUrl, {
      width: size,
      margin: 2,
      errorCorrectionLevel,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    return qrDataUrl;
  } catch (error) {
    console.error("Error generating QR code:", error);
    throw new Error("Failed to generate QR code");
  }
}

export async function generateQRCodeBuffer(
  options: QRCodeOptions
): Promise<Buffer> {
  const {
    url,
    campaign = "default",
    size = 512,
    errorCorrectionLevel = "H",
  } = options;

  const trackingUrl = `${url}?ref=qr&campaign=${encodeURIComponent(campaign)}`;

  try {
    const buffer = await QRCode.toBuffer(trackingUrl, {
      width: size,
      margin: 2,
      errorCorrectionLevel,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    return buffer;
  } catch (error) {
    console.error("Error generating QR code buffer:", error);
    throw new Error("Failed to generate QR code");
  }
}

// Track QR code scans (would connect to analytics in production)
export function trackQRCodeScan(campaign: string, referer?: string) {
  const scanData = {
    campaign,
    timestamp: new Date().toISOString(),
    referer: referer || "direct",
  };

  // Log for now (in production, save to database/analytics)
  console.log("QR Code Scan:", scanData);

  // TODO: Send to analytics service
  // Example: Google Analytics, Plausible, or custom database
}
