import Link from "next/link";

export default function Home() {
  const missingPerson = {
    name: "Kaidence Kollier",
    firstName: "KAIDENCE",
    age: "Teen",
    lastSeen: "Azaq Creek area",
    date: new Date().toLocaleDateString(),
    phoneMain: "623-217-0545",
    phoneEmergency: "911",
    email: "tips@example.com",
    photoUrl: "https://lh3.googleusercontent.com/d/1hXgIhso8QPIaRLxye",
    description: "Please update with physical description",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Alert Banner */}
      <div className="bg-red-600 text-white py-3 px-4 text-center font-bold">
        🚨 MISSING PERSON - URGENT 🚨
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            HELP FIND {missingPerson.firstName} KOLLIER
          </h1>
          <p className="text-xl text-gray-700">
            Missing {missingPerson.age} - Last seen in {missingPerson.lastSeen}
          </p>
        </div>

        {/* Photo and Description Card */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Photo */}
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center overflow-hidden">
                {missingPerson.photoUrl ? (
                  <img
                    src={missingPerson.photoUrl}
                    alt={`Photo of ${missingPerson.name}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p className="text-gray-500 text-center px-4">
                    Photo placeholder
                    <br />
                    Add photo to public/images/missing-person.jpg
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Name:</strong> {missingPerson.name}
                </p>
                <p>
                  <strong>Age:</strong> {missingPerson.age}
                </p>
                <p>
                  <strong>Last Seen:</strong> {missingPerson.lastSeen}
                </p>
                <p>
                  <strong>Date:</strong> {missingPerson.date}
                </p>
                <p className="pt-4">{missingPerson.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="bg-yellow-50 border-4 border-yellow-400 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            HAVE YOU SEEN {missingPerson.firstName}?
          </h2>
          <div className="space-y-3 text-center">
            <p className="text-lg font-semibold">
              If you have any information, please contact:
            </p>
            <p className="text-2xl font-bold text-blue-600">
              📞{" "}
              <a href={`tel:${missingPerson.phoneMain}`} className="hover:underline">
                {missingPerson.phoneMain}
              </a>{" "}
              (Mom)
            </p>
            <p className="text-2xl font-bold text-red-600">
              🚨{" "}
              <a href={`tel:${missingPerson.phoneEmergency}`} className="hover:underline">
                {missingPerson.phoneEmergency}
              </a>{" "}
              (Emergency)
            </p>
            <p className="text-lg">
              📧{" "}
              <a href={`mailto:${missingPerson.email}`} className="hover:underline">
                {missingPerson.email}
              </a>
            </p>
          </div>
        </div>

        {/* Submit Tip Button */}
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
          <h2 className="text-2xl font-bold text-center mb-4">
            Help Spread the Word
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                "https://azaqcreek-missing.com"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Share on Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `Help find ${missingPerson.name}`
              )}&url=${encodeURIComponent(
                "https://azaqcreek-missing.com"
              )}&hashtags=FindKaidenceKollier,MissingTeen,AzaqCreek`}
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

        {/* Social Media Follow */}
        <div className="text-center text-gray-600">
          <p className="text-lg font-semibold mb-2">Follow updates:</p>
          <p className="text-blue-600">
            #FindKaidenceKollier #MissingTeen #AzaqCreek
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            Every share could make a difference. Thank you for your help.
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {missingPerson.date}
          </p>
        </div>
      </footer>
    </div>
  );
}
