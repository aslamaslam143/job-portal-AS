import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppDownload from '../components/AppDownload';
import { useUser } from '@clerk/clerk-react';
const Applyjob = () => {
  const { id } = useParams();
  const { jobs } = useContext(AppContext);
  const [job, setJob] = useState(null);

  useEffect(() => {
    const selectedJob = jobs.find((job) => job._id === id);
    if (selectedJob) {
      setJob(selectedJob);
    } else {
      setJob(null);
    }
  }, [id, jobs]);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Job not found.</p>
      </div>
    );
  }

  return (
    <div>
       <Navbar />
    <div>
    <div>
     
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
    
    <div className="min-h-screen px-4 md:px-16 py-10 bg-gray-50 text-gray-800">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
        {/* Job Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={job.companyId.image || assets.company_icon}
            alt={job.companyId.name}
            className="w-14 h-14 rounded object-cover border"
          />
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="text-gray-500">{job.companyId.name}</p>
          </div>
        </div>

        {/* Job Details */}
        <div className="mb-6 space-y-2">
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Level:</strong> {job.level}</p>
          <p><strong>Category:</strong> {job.category}</p>
          <p><strong>Salary:</strong> ${job.salary.toLocaleString()}</p>
          <p><strong>Date Posted:</strong> {new Date(job.date).toLocaleDateString()}</p>
        </div>

        {/* Description Section */}
        <div className="prose max-w-none text-gray-700">
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>

        {/* Apply Button */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
    </div>
    <AppDownload/>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Applyjob;
