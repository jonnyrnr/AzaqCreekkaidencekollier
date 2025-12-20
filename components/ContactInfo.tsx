import { siteConfig } from "@/config/siteConfig";

interface ContactInfoProps {
  variant?: "full" | "compact";
  className?: string;
}

export function ContactInfo({ variant = "full", className = "" }: ContactInfoProps) {
  if (variant === "compact") {
    return (
      <div className={`space-y-2 text-gray-700 ${className}`}>
        <p>📞 Phone: {siteConfig.contact.phone}</p>
        <p>📧 Email: {siteConfig.contact.email}</p>
        <p>🔒 Anonymous Tip Line: {siteConfig.contact.tipline}</p>
        <p className="pt-2 text-sm">{siteConfig.contact.policeContact}</p>
      </div>
    );
  }

  return (
    <div className={`space-y-3 text-center ${className}`}>
      <p className="text-lg font-semibold">If you have any information, please contact:</p>
      <p className="text-2xl font-bold text-blue-600">
        📞 {siteConfig.contact.phone}
      </p>
      <p className="text-lg">
        📧 {siteConfig.contact.email}
      </p>
      <p className="text-lg">
        🔒 Anonymous Tip Line: {siteConfig.contact.tipline}
      </p>
      <p className="text-sm text-gray-600 mt-4">
        {siteConfig.contact.policeContact}
      </p>
    </div>
  );
}
