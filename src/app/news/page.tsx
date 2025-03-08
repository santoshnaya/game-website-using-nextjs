import React from "react";

export default function News() {
  const newsItems = [
    {
      title: "New Battle Pass Season Announced",
      date: "March 15, 2024",
      category: "Updates",
      image: "/news-images/battle-pass.jpg",
      summary: "Get ready for an epic new season with exclusive rewards, challenges, and legendary items."
    },
    {
      title: "Global Tournament Series 2024",
      date: "March 12, 2024",
      category: "Esports",
      image: "/news-images/tournament.jpg",
      summary: "Join the biggest gaming tournament of the year with a prize pool of $1 million."
    },
    {
      title: "Mystic Realms: Major Content Update",
      date: "March 10, 2024",
      category: "Game Updates",
      image: "/news-images/mystic-update.jpg",
      summary: "Explore new realms, face challenging bosses, and discover powerful artifacts in this massive update."
    },
    {
      title: "Community Spotlight: Player Achievements",
      date: "March 8, 2024",
      category: "Community",
      image: "/news-images/community.jpg",
      summary: "Celebrating our amazing players and their extraordinary achievements this month."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Latest News
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-1">
              <div className="h-48 bg-gray-800 relative">
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">{item.date}</div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.summary}</p>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">Never Miss an Update</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter and stay informed about the latest news, updates, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}