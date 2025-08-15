import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Jobcard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <img src={assets.company_icon} alt="Company" className="w-10 h-10" />
        <h4 className="text-xl font-semibold">{job.title}</h4>
      </div>

      <div className="text-gray-600 mb-3 flex flex-wrap gap-4">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          {job.location}
        </span>
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
          {job.level}
        </span>
      </div>

      <p
        className="text-gray-700 mb-4 text-sm"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) + '...' }}
      />

      <div className="flex gap-4">
        <button
          onClick={() => {
            navigate(`apply-job/${job._id}`);
            window.scrollTo(0, 0);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Apply now
        </button>
        <button
          onClick={() => {
            navigate(`apply-job/${job._id}`);
            window.scrollTo(0, 0);
          }}
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Jobcard;
