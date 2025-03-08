import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Contact Us
        </h1>

        <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Get in Touch</h2>
              <p className="text-gray-300 mb-6">
                Have questions or feedback? We love to hear from you. Our team is here to help with any gaming-related inquiries.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-purple-300 mb-2">Support Hours</h3>
                  <p className="text-gray-400">Monday - Friday: 9AM - 6PM EST</p>
                  <p className="text-gray-400">Weekend: 10AM - 4PM EST</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-purple-300 mb-2">Email</h3>
                  <p className="text-gray-400">support@epicgaming.com</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-purple-300 mb-2">Location</h3>
                  <p className="text-gray-400">123 Gaming Street</p>
                  <p className="text-gray-400">Digital City, DC 12345</p>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-purple-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-purple-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-purple-300 mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-purple-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}