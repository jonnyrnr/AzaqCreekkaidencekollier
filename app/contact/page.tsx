"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    dateTime: "",
    message: "",
    anonymous: false,
  });
  
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
    referenceNumber?: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Submitting your tip..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your tip has been received.",
          referenceNumber: data.referenceNumber,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          dateTime: "",
          message: "",
          anonymous: false,
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Failed to submit. Please call us directly.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="bg-blue-600 text-white py-3 px-4 text-center">
        <Link href="/" className="hover:underline">
          ← Back to Main Page
        </Link>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Submit a Tip
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Any information, no matter how small, could be crucial. All tips are treated confidentially.
        </p>

        {/* Emergency Contact Info */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="font-bold text-red-800">Emergency?</p>
          <p className="text-red-700">
            Call 911 or {siteConfig.contact.phone} immediately
          </p>
        </div>

        {status.type === "success" ? (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              ✓ Tip Received
            </h2>
            <p className="text-green-700 mb-2">{status.message}</p>
            {status.referenceNumber && (
              <p className="text-green-700 font-mono">
                Reference #: {status.referenceNumber}
              </p>
            )}
            <button
              onClick={() => setStatus({ type: "idle", message: "" })}
              className="mt-4 text-green-800 underline hover:no-underline"
            >
              Submit another tip
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <div>
              <label className="flex items-center space-x-2 mb-4">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span className="text-gray-700">Submit anonymously</span>
              </label>
            </div>

            {!formData.anonymous && (
              <>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Optional if anonymous"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Location of Sighting *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Street address or general area"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Date & Time of Sighting
              </label>
              <input
                type="datetime-local"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Details *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please provide as much detail as possible: what you saw, clothing description, direction of travel, companions, vehicle information, etc."
              />
            </div>

            {status.type === "error" && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-red-700">{status.message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              {status.type === "loading" ? "Submitting..." : "Submit Tip"}
            </button>

            <p className="text-sm text-gray-600 text-center">
              Your information will be handled confidentially and shared only with law enforcement.
            </p>
          </form>
        )}

        {/* Alternative Contact Methods */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Other Ways to Contact Us</h2>
          <div className="space-y-2 text-gray-700">
            <p>📞 Phone: {siteConfig.contact.phone}</p>
            <p>📧 Email: {siteConfig.contact.email}</p>
            <p>🔒 Anonymous Tip Line: {siteConfig.contact.tipline}</p>
            <p className="pt-2 text-sm">{siteConfig.contact.policeContact}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
