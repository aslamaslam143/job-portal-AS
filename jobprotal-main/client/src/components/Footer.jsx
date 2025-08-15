import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">TrackStack</h2>
          <p className="text-sm text-gray-400">
            Your reliable platform for tracking tasks, jobs, and everything in between.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Links with Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
        <div className="flex space-x-4 " >
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition">
                <img src={assets.facebook_icon} alt="Facebook" className="w-4 h-4" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full hover:bg-sky-600 transition">
                <img src={assets.twitter_icon} alt="Twitter" className="w-4 h-4" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-2 rounded-full hover:opacity-90 transition">
                <img src={assets.instagram_icon} alt="Instagram" className="w-5 h-4" />
            </a>
        </div>

        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TrackStack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
