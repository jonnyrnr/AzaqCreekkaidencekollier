"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function QRPage() {
  const [selectedCampaign, setSelectedCampaign] = useState("poster");
  const [qrCode, setQrCode] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const campaigns = [
    { id: "poster", name: "General Poster/Flyer", description: "For printed materials" },
    { id: "business", name: "Business Window", description: "For storefront displays" },
    { id: "community", name: "Community Board", description: "For bulletin boards" },
    { id: "vehicle", name: "Vehicle Display", description: "For car windows" },
    { id: "social", name: "Social Media", description: "For digital sharing" },
  ];

  const generateQR = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/qr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: siteConfig.site.url,
          campaign: selectedCampaign,
          size: 512,
        }),
      });

      const data = await response.json();
      if (data.qrCode) {
        setQrCode(data.qrCode);
      }
    } catch (error) {
      console.error("Failed to generate QR code:", error);
      alert("Failed to generate QR code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadQR = () => {
    if (!qrCode) return;

    const link = document.createElement("a");
    link.download = `missing-person-qr-${selectedCampaign}.png`;
    link.href = qrCode;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="bg-purple-600 text-white py-3 px-4 text-center">
        <Link href="/" className="hover:underline">
          ← Back to Main Page
        </Link>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          QR Code Generator
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Generate QR codes for posters, flyers, and social media to help spread awareness
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Generator */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Select Campaign Type</h2>
            <div className="space-y-3 mb-6">
              {campaigns.map((campaign) => (
                <label
                  key={campaign.id}
                  className={`flex items-start p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                    selectedCampaign === campaign.id
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="campaign"
                    value={campaign.id}
                    checked={selectedCampaign === campaign.id}
                    onChange={(e) => setSelectedCampaign(e.target.value)}
                    className="mt-1 mr-3"
                  />
                  <div>
                    <div className="font-semibold">{campaign.name}</div>
                    <div className="text-sm text-gray-600">{campaign.description}</div>
                  </div>
                </label>
              ))}
            </div>

            <button
              onClick={generateQR}
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              {loading ? "Generating..." : "Generate QR Code"}
            </button>
          </div>

          {/* Right Column - Preview */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">QR Code Preview</h2>
            {qrCode ? (
              <div className="space-y-4">
                <div className="bg-white p-4 border-4 border-gray-800 rounded-lg">
                  <Image
                    src={qrCode}
                    alt="QR Code"
                    width={512}
                    height={512}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
                <button
                  onClick={downloadQR}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  📥 Download QR Code
                </button>
                <p className="text-sm text-gray-600 text-center">
                  High-resolution PNG (512x512px)
                  <br />
                  Optimized for printing
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                <p className="text-gray-500 text-center">
                  Select a campaign type and click
                  <br />
                  &quot;Generate QR Code&quot; to preview
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">How to Use QR Codes</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-bold mb-2">📄 For Printed Materials</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Download the QR code image</li>
                <li>Add to your poster or flyer design</li>
                <li>Print in high quality (300 DPI)</li>
                <li>Ensure good contrast for scanning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">📱 For Digital Sharing</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Download the image</li>
                <li>Share on social media</li>
                <li>Include in email signatures</li>
                <li>Add to digital flyers</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500">
            <p className="text-sm text-yellow-800">
              <strong>Tip:</strong> Test the QR code with multiple phones before mass printing
              to ensure it scans correctly!
            </p>
          </div>
        </div>

        {/* Distribution Tracking */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Track Your Impact</h2>
          <p className="text-gray-700 mb-4">
            Each QR code campaign is tracked separately, helping you understand which distribution
            methods are most effective. Scans are logged automatically when someone visits the
            site through a QR code.
          </p>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">
              <strong>Current Campaign:</strong> {selectedCampaign}
              <br />
              <strong>Target URL:</strong> {siteConfig.site.url}?ref=qr&campaign={selectedCampaign}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
