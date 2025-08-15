import React, { useState } from 'react';
import { viewApplicationsPageData } from '../assets/assets'; // Adjust the path as needed

const ViewApplication = () => {
  const [applications, setApplications] = useState(
    viewApplicationsPageData.map(app => ({ ...app, status: 'Pending' }))
  );

  const updateStatus = (id, newStatus) => {
    const updated = applications.map(app =>
      app._id === id ? { ...app, status: newStatus } : app
    );
    setApplications(updated);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">View Applications 📄</h2>

      {applications.length === 0 ? (
        <p>No applications available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                <th className="px-4 py-3 border">Photo</th>
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Job Title</th>
                <th className="px-4 py-3 border">Location</th>
                <th className="px-4 py-3 border">Status</th>
                <th className="px-4 py-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app._id} className="text-sm text-gray-700 hover:bg-gray-50">
                  <td className="px-4 py-3 border">
                    <img src={app.imgSrc} alt={app.name} className="w-10 h-10 rounded-full object-cover" />
                  </td>
                  <td className="px-4 py-3 border">{app.name}</td>
                  <td className="px-4 py-3 border">{app.jobTitle}</td>
                  <td className="px-4 py-3 border">{app.location}</td>
                  <td className="px-4 py-3 border">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 border space-x-2">
                    <button
                      className="text-white bg-green-600 px-2 py-1 rounded text-xs hover:bg-green-700"
                      onClick={() => updateStatus(app._id, 'Shortlisted')}
                    >
                      Reject
                    </button>
                    <button
                      className="text-white bg-blue-600 px-2 py-1 rounded text-xs hover:bg-blue-700"
                      onClick={() => updateStatus(app._id, 'Reviewed')}
                    >
                      Accept
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'Reviewed':
      return 'bg-blue-100 text-blue-800';
    case 'Shortlisted':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export default ViewApplication;
