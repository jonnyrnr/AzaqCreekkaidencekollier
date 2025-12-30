import QRCode from "qrcode";

export interface QRCodeOptions {
  url: string;
  campaign?: string;
  size?: number;
  errorCorrectionLevel?: "L" | "M" | "Q" | "H";
}

// Helper function to build tracking URL and common options
function buildQRCodeConfig(options: QRCodeOptions) {
  const {
    url,
    campaign = "default",
    size = 512,
    errorCorrectionLevel = "H", // High error correction for damaged posters
  } = options;

  const trackingUrl = `${url}?ref=qr&campaign=${encodeURIComponent(campaign)}`;

  const qrOptions = {
    width: size,
    margin: 2,
    errorCorrectionLevel,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
  };

  return { trackingUrl, qrOptions };
}

export async function generateQRCode(options: QRCodeOptions): Promise<string> {
  try {
    const { trackingUrl, qrOptions } = buildQRCodeConfig(options);
    const qrDataUrl = await QRCode.toDataURL(trackingUrl, qrOptions);
    return qrDataUrl;
  } catch (error) {
    console.error("Error generating QR code:", error);
    throw new Error("Failed to generate QR code");
  }
}

export async function generateQRCodeBuffer(
  options: QRCodeOptions
): Promise<Buffer> {
  try {
    const { trackingUrl, qrOptions } = buildQRCodeConfig(options);
    const buffer = await QRCode.toBuffer(trackingUrl, qrOptions);
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
