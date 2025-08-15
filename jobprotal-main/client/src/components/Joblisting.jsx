import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { assets, JobCategories, JobLocations } from '../assets/assets';
import Jobcard from './Jobcard';

const JobListing = () => {
  const { searchFilter, setSearchFilter, isSearched, jobs } = useContext(AppContext);
  const { title, location } = searchFilter;

  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const jobsPerPage = 6;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  const handleCheckboxChange = (value, selectedList, setSelectedList) => {
    setSelectedList((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    const result = jobs.filter((job) => {
      const matchCategory = selectedCategory.length === 0 || selectedCategory.includes(job.category);
      const matchLocation = selectedLocation.length === 0 || selectedLocation.includes(job.location);
      const matchTitle = job.title.toLowerCase().includes(title.toLowerCase());
      const matchSearchLocation = job.location.toLowerCase().includes(location.toLowerCase());
      return matchCategory && matchLocation && matchTitle && matchSearchLocation;
    });
    setFilteredJobs(result);
    setCurrentPage(1);
  }, [selectedCategory, selectedLocation, searchFilter, jobs]);

  const clearFilter = (key) => {
    setSearchFilter((prev) => ({ ...prev, [key]: '' }));
  };

  return (
    <div className={`flex ${showFilters ? 'flex-col' : 'flex-col lg:flex-row'} bg-gray-100 min-h-screen`}>
      <aside className="w-full lg:w-72 bg-white p-4 lg:p-6 shadow-md overflow-y-auto">
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-4">Search by Categories</h4>
          <ul className="space-y-3">
            {JobCategories.map((cat, index) => (
              <li key={index} className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={selectedCategory.includes(cat)}
                  onChange={() => handleCheckboxChange(cat, selectedCategory, setSelectedCategory)}
                />
                <span>{cat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-4">Search by Locations</h4>
          <ul className="space-y-3">
            {JobLocations.map((loc, index) => (
              <li key={index} className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={selectedLocation.includes(loc)}
                  onChange={() => handleCheckboxChange(loc, selectedLocation, setSelectedLocation)}
                />
                <span>{loc}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="flex-1 p-4 lg:p-8">
        <h2 className="text-3xl font-bold mb-6">Job Listings</h2>

        {isSearched && (title || location) ? (
          <div className="bg-white p-4 rounded-md shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Current Search Filters</h3>
            <div className="flex flex-col gap-2 text-gray-800">
              {title && (
                <span className="flex items-center gap-2">
                  <strong>Title:</strong> {title}
                  <img onClick={() => clearFilter('title')} src={assets.cross_icon} alt="clear title" className="w-4 h-4 cursor-pointer" />
                </span>
              )}
              {location && (
                <span className="flex items-center gap-2">
                  <strong>Location:</strong> {location}
                  <img onClick={() => clearFilter('location')} src={assets.cross_icon} alt="clear location" className="w-4 h-4 cursor-pointer" />
                </span>
              )}
            </div>
          </div>
        ) : (
          <p className="text-gray-600 mb-6">No active search filters. Start a search to see results.</p>
        )}

        <div className="bg-white p-6 rounded-md shadow-sm text-gray-700 mb-8">
          <p>Job results will appear here based on your search filters.</p>
        </div>

        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="flex items-center justify-center bg-gray-200 p-2 rounded-md mb-6"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        <section>
          <h2 className="text-2xl font-semibold mb-2" id="job-list">Latest Jobs</h2>
          <p className="text-gray-600 mb-4">Get your top companies</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedJobs.map((job, index) => (
              <Jobcard key={index} job={job} />
            ))}
          </div>

          {filteredJobs.length > jobsPerPage && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded border flex items-center justify-center ${
                  currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-white hover:bg-blue-100'
                }`}
              >
                <img src={assets.left_arrow_icon} alt="Prev" className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 rounded border text-sm font-medium ${
                    currentPage === index + 1
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-blue-500 hover:bg-blue-100 border-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded border flex items-center justify-center ${
                  currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-white hover:bg-blue-100'
                }`}
              >
                <img src={assets.right_arrow_icon} alt="Next" className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default JobListing;


// Note: The above code assumes that the assets and Jobcard components are correctly set up and imported................................................