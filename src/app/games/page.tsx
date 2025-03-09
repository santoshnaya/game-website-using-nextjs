import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Games() {
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
    },
    {
      title: "Strategy Empire",
      category: "Strategy",
      image: "/game-images/strategy-empire.jpg",
      players: "1-6 players",
      description: "Build and manage your empire in this epic strategy game.",
      rating: 4.6,
      features: ["Real-time battles", "Resource management", "Alliance system"]
    },
    {
      title: "Cosmic Defenders",
      category: "Space Sim",
      image: "/game-images/cosmic-defenders.jpg",
      players: "1-100 players",
      description: "Explore vast galaxies and defend your space territory.",
      rating: 4.8,
      features: ["Space exploration", "Fleet management", "Trading system"]
    },
    {
      title: "Dragon's Legacy",
      category: "Adventure",
      image: "/game-images/dragons-legacy.jpg",
      players: "1-4 players",
      description: "Embark on an epic journey with dragons and ancient magic.",
      rating: 4.9,
      features: ["Dragon taming", "Co-op missions", "Magical combat"]
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
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Our Games
        </h1>

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

        {/* Player Testimonials */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Player Testimonials</h2>
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
                        <BsCheckCircleFill className="h-6 w-6" />
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

        {/* Upcoming Tournaments */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Upcoming Tournaments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tournaments.map((tournament, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-purple-500 text-sm font-medium mb-2">{tournament.game}</div>
                <h3 className="text-xl font-semibold text-purple-300 mb-2">{tournament.title}</h3>
                <div className="space-y-3 text-gray-400 text-sm">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="text-gray-300">{new Date(tournament.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prize Pool:</span>
                    <span className="text-green-400">{tournament.prizePool}</span>
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

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">Coming Soon</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay tuned for more exciting games! Our team is working on new titles that will push the boundaries of gaming entertainment.
          </p>
          <button className="mt-8 px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors">
            Subscribe for Updates
          </button>
        </div>
      </div>
    </div>
  );
}