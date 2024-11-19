import React from "react";

export default function Insights() {
  return (
    <div className="mt-16">
      <section className="pt-4 px-3 bg-dark text-light">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center py-8">
            <h1 className="text-6xl md:text-3xl text-white font-serif font-light">
              🎙 Introducing the Imperial Insights Podcast 🎙
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Investment Society’s Flagship Show!
            </p>
          </div>

          {/* Podcast Description */}
          <div className="bg-gray-800 rounded-lg p-6 text-white">
            <p className="font-light text-lg leading-relaxed">
              Our podcast is your guide to mastering markets and launching a
              finance career. Featuring society members and industry guests,
              we’ll cover market trends, career journeys, and financial
              insights.
            </p>
          </div>

          {/* Join the Team Section */}
          <div className="mt-12">
            <h2 className="font-bold font-serif text-3xl text-center mb-6">
              Join the Team!
            </h2>
            <p className="text-lg text-gray-300 text-center mb-6">
              We’re recruiting passionate members now, with contributors
              eligible to become co-hosts or executive producers next year.
              Open roles include:
            </p>

            {/* Roles Section */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {/* Audio Engineer */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="font-bold text-xl ">
                  🔊 Audio Engineer
                </h3>
                <p className="mt-2 text-gray-300">
                  Edit episodes with tools like Premiere Pro or Final Cut,
                  optimize audio, and support recording sessions.
                </p>
              </div>

              {/* Liaison */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="font-bold text-xl">
                  🤝 Liaison
                </h3>
                <p className="mt-2 text-gray-300">
                  Research and prepare content, including a one-minute market
                  update and stock pitch, and source students for insights.
                </p>
              </div>

              {/* Scriptwriter */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="font-bold text-xl ">
                  📄 Scriptwriter
                </h3>
                <p className="mt-2 text-gray-300">
                  Draft engaging 15-20 minute scripts for host-guest
                  discussions, incorporating questions seamlessly.
                </p>
              </div>

              {/* Sponsorship / Social Marketing */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="font-bold text-xl">
                  🌐 Sponsorship / Social Marketing 
                </h3>
                <p className="mt-2 text-gray-300">
                  Secure sponsorships, promote on Instagram/LinkedIn, and grow
                  the podcast’s brand.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 mb-10">
            <h3 className="text-xl font-bold mb-4 pt-10">
              Deadline: 7th November 23:59
            </h3>
            <a
              href="https://forms.office.com/e/5Lzgc2Yc0Q"
              className="inline-block mt-4 px-8 py-3 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition"
            >
              Apply Now !
            </a>
          </div>
          <div className="bg-gray-800 text-center rounded-lg p-6 mt-16">
            <h3 className="font-bold text-2xl text-white">
              📢 Podcasts Coming Soon!
            </h3>
            <p className="text-lg text-gray-300 mt-4">
              Stay tuned! Our episodes will soon be uploaded, featuring market
              insights, career advice, and expert guest interviews.
            </p>
          </div>
        </div>

        
      </section>

    </div>
  );
}

