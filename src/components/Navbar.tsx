import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-900 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-white" />
              <span className="ml-2 text-white text-xl font-bold">
                E-Learning Platform
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-20 transition-colors border border-white border-opacity-20">
              Sign In
            </button>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}