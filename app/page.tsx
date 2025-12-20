import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ContactInfo } from "@/components/ContactInfo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Urgent Banner */}
      <div className="bg-red-600 text-white py-3 px-4 text-center font-bold">
        🚨 MISSING PERSON - URGENT 🚨
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            HELP FIND {siteConfig.person.name.toUpperCase()}
          </h1>
          <p className="text-xl text-gray-700">
            Missing {siteConfig.person.age} - Last seen in {siteConfig.person.lastSeen.location}
          </p>
        </div>

        {/* Photo Section */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">
                  Photo placeholder<br />
                  Add photo to public/images/missing-person.jpg
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Name:</strong> {siteConfig.person.name}</p>
                <p><strong>Age:</strong> {siteConfig.person.age}</p>
                <p><strong>Last Seen:</strong> {siteConfig.person.lastSeen.location}</p>
                <p><strong>Date:</strong> {new Date(siteConfig.person.lastSeen.date).toLocaleDateString()}</p>
                <p className="pt-4">{siteConfig.person.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-yellow-50 border-4 border-yellow-400 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            HAVE YOU SEEN {siteConfig.person.name.split(' ')[0].toUpperCase()}?
          </h2>
          <ContactInfo variant="full" />
        </div>

        {/* Contact Form Button */}
        <div className="text-center mb-8">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg"
          >
            Submit a Tip Online
          </Link>
        </div>

        {/* Share Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">Help Spread the Word</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${siteConfig.site.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Share on Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=Help find ${siteConfig.person.name}&url=${siteConfig.site.url}&hashtags=${siteConfig.social.hashtags.join(',').replace(/#/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Share on Twitter/X
            </a>
            <Link
              href="/qr"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get QR Code for Posters
            </Link>
          </div>
        </div>

        {/* Hashtags */}
        <div className="text-center text-gray-600">
          <p className="text-lg font-semibold mb-2">Follow updates:</p>
          <p className="text-blue-600">
            {siteConfig.social.hashtags.join(' ')}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">Every share could make a difference. Thank you for your help.</p>
          <p className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  );
}
