
import React from "react";

export default function Home() {
  const games = [
    {
      title: "Cyber Assault",
      category: "Action",
      image: "/game-images/cyber-assault.jpg",
      players: "1-4 players",
      description: "Fast-paced cyberpunk shooter with stunning neon visuals.",
      rating: 4.8,
      features: ["Multiplayer modes", "Custom loadouts", "Ranked matches"]
    },
    {
      title: "Mystic Realms",
      category: "RPG",
      image: "/game-images/mystic-realms.jpg",
      players: "1 player",
      description: "Epic fantasy RPG with deep storyline and character customization.",
      rating: 4.9,
      features: ["Open world", "Character customization", "Epic quests"]
    },
    {
      title: "Speed Demons",
      category: "Racing",
      image: "/game-images/speed-demons.jpg",
      players: "1-8 players",
      description: "High-octane racing with futuristic vehicles and tracks.",
      rating: 4.7,
      features: ["Online races", "Vehicle customization", "Dynamic weather"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      avatar: "/avatars/sarah.jpg",
      game: "Mystic Realms",
      rating: 5,
      text: "The most immersive RPG I've ever played. The character customization is incredible!",
      verified: true
    },
    {
      name: "Marcus Johnson",
      avatar: "/avatars/marcus.jpg",
      game: "Cyber Assault",
      rating: 5,
      text: "Amazing multiplayer experience. The ranked matches are intense and addictive!",
      verified: true
    },
    {
      name: "Elena Rodriguez",
      avatar: "/avatars/elena.jpg",
      game: "Speed Demons",
      rating: 4,
      text: "The racing mechanics are perfect, and the tracks are beautifully designed.",
      verified: true
    }
  ];

  const tournaments = [
    {
      title: "Cyber Assault World Championship",
      date: "2024-06-15",
      prizePool: "$100,000",
      game: "Cyber Assault",
      registrationDeadline: "2024-06-01",
      participants: "128 teams"
    },
    {
      title: "Speed Demons Grand Prix",
      date: "2024-05-20",
      prizePool: "$50,000",
      game: "Speed Demons",
      registrationDeadline: "2024-05-10",
      participants: "256 players"
    },
    {
      title: "Strategy Empire League",
      date: "2024-07-01",
      prizePool: "$75,000",
      game: "Strategy Empire",
      registrationDeadline: "2024-06-20",
      participants: "64 teams"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4  pt-20 pb-32">
        <div className="flex flex-col py-[190px] items-center text-center gap-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Level Up Your Gaming Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Join millions of players worldwide in epic gaming adventures. Experience stunning graphics, competitive gameplay, and an amazing community.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="#games"
              className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors hover:scale-105 transform duration-200"
            >
              Play Now
            </a>
            <a
              href="#features"
              className="px-8 py-3 border border-purple-500 text-purple-400 rounded-full font-medium hover:bg-purple-900/50 transition-colors hover:scale-105 transform duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section id="games" className="bg-black/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-purple-400">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-1">
                <div className="h-48 bg-gray-800 relative">
                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                    {game.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-purple-400 mb-2">{game.title}</h3>
                  <p className="text-gray-400 mb-4">{game.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.features.map((feature, i) => (
                      <span key={i} className="text-sm bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-500 block">{game.players}</span>
                      <div className="flex items-center mt-1">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-gray-400">{game.rating}</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-purple-400">Epic Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl bg-gray-900/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">High-End Graphics</h3>
              <p className="text-gray-400">Experience stunning visuals and immersive environments powered by cutting-edge technology.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl bg-gray-900/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Multiplayer Action</h3>
              <p className="text-gray-400">Connect with players worldwide and compete in epic battles and adventures.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl bg-gray-900/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Regular Updates</h3>
              <p className="text-gray-400">New content, features, and improvements added regularly to keep the excitement fresh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Player Testimonials */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-purple-400">Player Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden">
                    {/* Avatar placeholder */}
                  </div>
                  <div>
                    <h3 className="text-purple-300 font-medium">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.game}</p>
                  </div>
                  {testimonial.verified && (
                    <div className="ml-auto">
                      <span className="text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-purple-400">Upcoming Tournaments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tournaments.map((tournament, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-1">
                <div className="text-purple-500 text-sm font-medium mb-2">{tournament.game}</div>
                <h3 className="text-xl font-semibold text-purple-300 mb-2">{tournament.title}</h3>
                <div className="space-y-3 text-gray-400 text-sm">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="text-gray-300">{new Date(tournament.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prize Pool:</span>
                    <span className="text-gray-300">{tournament.prizePool}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Registration Deadline:</span>
                    <span className="text-gray-300">{new Date(tournament.registrationDeadline).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Participants:</span>
                    <span className="text-gray-300">{tournament.participants}</span>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-gray-900/80 border-t border-purple-800/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Epic Gaming</h3>
              <p className="text-gray-400 mb-4">Level up your gaming experience with our cutting-edge platform and vibrant community.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/games" className="text-gray-400 hover:text-purple-400 transition-colors">Games</a></li>
                <li><a href="/news" className="text-gray-400 hover:text-purple-400 transition-colors">News</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">
              © 2024 Epic Gaming. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
