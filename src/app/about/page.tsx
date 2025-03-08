import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          About Epic Gaming
        </h1>
        
        <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                At Epic Gaming, we re dedicated to creating immersive gaming experiences that bring players together from around the world. Our platform combines cutting-edge technology with passionate community building to deliver the next generation of gaming entertainment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Our Story</h2>
              <p className="text-gray-300 leading-relaxed">
                Founded by a team of gaming enthusiasts in 2024, Epic Gaming has grown from a small indie platform to a global gaming destination. We believe in the power of games to connect, inspire, and entertain people across all boundaries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-xl font-medium text-purple-300 mb-2">Innovation</h3>
                  <p className="text-gray-400">Pushing boundaries in gaming technology and user experience.</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-xl font-medium text-purple-300 mb-2">Community</h3>
                  <p className="text-gray-400">Building inclusive spaces for gamers to connect and grow.</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-xl font-medium text-purple-300 mb-2">Quality</h3>
                  <p className="text-gray-400">Delivering exceptional gaming experiences consistently.</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-xl font-medium text-purple-300 mb-2">Fair Play</h3>
                  <p className="text-gray-400">Promoting sportsmanship and ethical gaming practices.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Join Our Team</h2>
              <p className="text-gray-300 leading-relaxed">
                We are always looking for passionate individuals to join our growing team. If you are excited about shaping the future of gaming, check out our careers page or get in touch.
              </p>
              <a href="/contact" className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                Contact Us
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}