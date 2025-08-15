import React, { useRef, useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);
  const titleref = useRef(null);
  const locationref = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    const title = titleref.current.value.trim();
    const location = locationref.current.value.trim();

    setSearchFilter({ title, location });
    setIsSearched(true);
    navigate('/jobs'); // navigate to JobListing page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white px-4">
      <h1 className="text-5xl font-extrabold text-center leading-tight max-w-2xl">
        Discover Your Next Opportunity
      </h1>
      <p className="mt-4 text-lg text-center max-w-xl">
        Explore thousands of jobs and connect with top companies to build your dream career.
      </p>

      {/* Search Box */}
      <div className="mt-10 flex flex-wrap justify-center gap-4 bg-white rounded-lg p-4 shadow-lg">
        {/* Title Input */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded w-72">
          <img src={assets.search_icon} alt="search" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search job titles or keywords"
            className="bg-transparent outline-none w-full text-black"
            ref={titleref}
          />
        </div>

        {/* Location Input */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded w-72">
          <img src={assets.location_icon} alt="location" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Enter location"
            className="bg-transparent outline-none w-full text-black"
            ref={locationref}
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-indigo-600 hover:bg-indigo-700 transition px-5 py-2 text-white rounded-full font-medium"
        >
          Search Jobs
        </button>
      </div>

      {/* Trusted Companies */}
      <div className="mt-10 flex flex-wrap justify-center gap-4 bg-white rounded-lg p-4 shadow-lg">
        <div className="max-w-8xl mx-auto text-center">
          <p className="text-gray-800 text-lg font-semibold mb-8">✅ Trusted by top companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src={assets.microsoft_logo} alt="Microsoft" className="w-20 h-20 object-contain" />
            <img src={assets.amazon_logo} alt="Amazon" className="w-20 h-20 object-contain" />
            <img src={assets.walmart_logo} alt="Walmart" className="w-20 h-20 object-contain" />
            <img src={assets.accenture_logo} alt="Accenture" className="w-20 h-20 object-contain" />
            <img src={assets.samsung_logo} alt="Samsung" className="w-20 h-20 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
