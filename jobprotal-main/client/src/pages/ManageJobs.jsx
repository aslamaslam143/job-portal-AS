import React, { useEffect, useState } from 'react';
import { manageJobsData } from '../assets/assets'; // adjust the path to your assets file

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setJobs(manageJobsData);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this job?');
    if (confirmDelete) {
      const updated = jobs.filter(job => job._id !== id);
      setJobs(updated);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Manage Jobs 📂</h2>
      {jobs.length === 0 ? (
        <p className="text-gray-600">No jobs posted yet.</p>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job._id} className="border p-4 rounded shadow bg-white">
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p className="text-sm text-gray-600">
                Location: {job.location} | Posted on: {new Date(job.date).toLocaleDateString()}
              </p>
              <p className="text-sm mt-1">Applicants: <strong>{job.applicants}</strong></p>
              <div className="mt-3 flex gap-3">
                <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
                <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                  View Applications
                </button>
              </div>
            </div>
          ))}

        </div>
      )}
      
    </div>
  );
};

export default ManageJobs;
