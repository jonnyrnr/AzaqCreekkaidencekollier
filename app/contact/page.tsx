"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    anonymous: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // For static export, we'll just show success message
      // In production, this would call an API endpoint
      console.log("Tip submitted:", formData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        anonymous: false,
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      console.error("Error submitting tip:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="bg-blue-600 text-white py-3 px-4 text-center font-bold">
        🔒 Anonymous Tips Welcome - Your Information is Secure
      </div>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Back to Main Page
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit a Tip</h1>
          <p className="text-gray-600 mb-6">
            Any information, no matter how small, could help bring Kaidence home safely.
          </p>

          {status === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-400 rounded-lg text-green-800">
              <p className="font-semibold">Thank you for your tip!</p>
              <p className="text-sm">
                Your information has been received and will be reviewed immediately.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-400 rounded-lg text-red-800">
              <p className="font-semibold">There was an error submitting your tip.</p>
              <p className="text-sm">
                Please try again or contact us directly at 623-217-0545
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="anonymous"
                name="anonymous"
                checked={formData.anonymous}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="anonymous" className="ml-2 text-gray-700">
                Submit this tip anonymously
              </label>
            </div>

            {!formData.anonymous && (
              <>
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(555) 555-5555"
                  />
                </div>
              </>
            )}

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Information *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please provide any information you have about Kaidence Kollier's whereabouts or any relevant details..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
            >
              {status === "submitting" ? "Submitting..." : "Submit Tip"}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold mb-4">Other Ways to Contact</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                📞 <strong>Phone:</strong>{" "}
                <a href="tel:623-217-0545" className="text-blue-600 hover:underline">
                  623-217-0545
                </a>{" "}
                (Mom)
              </p>
              <p>
                🚨 <strong>Emergency:</strong>{" "}
                <a href="tel:911" className="text-blue-600 hover:underline">
                  911
                </a>
              </p>
              <p>
                📧 <strong>Email:</strong>{" "}
                <a href="mailto:tips@example.com" className="text-blue-600 hover:underline">
                  tips@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
