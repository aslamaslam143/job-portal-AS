import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Download the App</h2>
        <p className="text-gray-700 text-lg mb-6">
          Get the best experience on your mobile device. Download our app now!
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.example.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Download on Google Play"
              className="h-14 hover:scale-105 transition-transform duration-300"
            />
          </a>

          <a
            href="https://apps.apple.com/app/id1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-14 hover:scale-105 transition-transform duration-300"
            />
          </a>
          
        </div>
        <img
  className="absolute bottom-0 right-0 w-40 h-auto md:w-64 lg:w-80 opacity-90"
  src={assets.app_main_img}
  alt="App Preview"
/>

      </div>
    </div>
  );
};

export default AppDownload;
