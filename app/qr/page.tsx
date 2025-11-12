"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import QRCode from "qrcode";

export default function QRPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [url] = useState("https://azaqcreek-missing.com");
  const [generated, setGenerated] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        url,
        {
          width: 400,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF",
          },
        },
        (error) => {
          if (error) {
            console.error("Error generating QR code:", error);
          } else {
            setGenerated(true);
          }
        }
      );
    }
  }, [url]);

  const handleDownload = () => {
    if (canvasRef.current) {
      const link = document.createElement("a");
      link.download = "kaidence-kollier-qr-code.png";
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="bg-purple-600 text-white py-3 px-4 text-center font-bold no-print">
        📱 QR Code for Posters and Flyers
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6 no-print">
          <Link
            href="/"
            className="text-purple-600 hover:text-purple-800 font-semibold"
          >
            ← Back to Main Page
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            QR Code for Kaidence Kollier
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            Add this QR code to your missing person posters and flyers. When scanned, it will direct people to this website with Kaidence&apos;s information.
          </p>

          <div className="flex flex-col items-center mb-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <canvas ref={canvasRef} className="mx-auto" />
            </div>
          </div>

          {generated && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center no-print">
              <button
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                📥 Download QR Code
              </button>
              <button
                onClick={handlePrint}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                🖨️ Print This Page
              </button>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-center">Poster Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-gray-700">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-red-600 mb-2">MISSING</h3>
                <h4 className="text-2xl font-bold mb-4">KAIDENCE KOLLIER</h4>
              </div>
              
              <div className="space-y-2">
                <p><strong>Age:</strong> Teen</p>
                <p><strong>Last Seen:</strong> Azaq Creek area</p>
                <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
              </div>

              <div className="pt-4 border-t border-gray-300">
                <p className="text-lg font-semibold mb-2 text-center">If you have any information:</p>
                <p className="text-xl font-bold text-center">
                  📞 623-217-0545 (Mom)
                </p>
                <p className="text-xl font-bold text-center">
                  🚨 911 (Emergency)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 no-print">
            <h3 className="text-xl font-bold mb-3">Tips for Creating Posters:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Print on bright colored paper (yellow, pink, or orange) for better visibility</li>
              <li>Include a clear photo of Kaidence</li>
              <li>Post in high-traffic areas (community boards, stores, bus stops)</li>
              <li>Always get permission before posting on private property</li>
              <li>Include the QR code prominently on all materials</li>
              <li>Use laminated copies for outdoor posting</li>
            </ul>
          </div>
        </div>
      </main>

      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white;
          }
        }
      `}</style>
    </div>
  );
}
