import React from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
// import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-purple-900 border-b border-purple-800/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Epic Gaming
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/games"
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Games
            </Link>
            <Link
              href="/news"
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              News
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          <button className="md:hidden text-gray-300 hover:text-purple-400 transition-colors">
            <HiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}