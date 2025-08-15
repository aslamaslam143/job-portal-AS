import React from 'react';
import Navbar from '../components/Navbar';
import { jobsApplied } from '../assets/assets';

function Application() {
  const [isEdit, setIsEdit] = React.useState(false);
  const [resumeUrl, setResumeUrl] = React.useState('');
  const [newResume, setNewResume] = React.useState(null);

  const handleResumeChange = (e) => {
    setNewResume(e.target.files[0]);
  };

  const handleSave = () => {
    if (newResume) {
      const url = URL.createObjectURL(newResume);
      setResumeUrl(url);
    }
    setIsEdit(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-16">
        <h1 className="bg-blue-100 text-blue-600 px-8 py-2 rounded-sm text-xl font-semibold mb-6">
          Your Resume
        </h1>

        <div className="bg-white p-6 rounded shadow max-w-4xl mx-auto mb-10">
          {isEdit ? (
            <>
              <input
                type=""
                accept=".pdf,.doc,.docx"
                onChange={handleResumeChange}
                className="mb-4"
              />
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEdit(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <div className="flex justify-between items-center">
              {resumeUrl ? (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
                >
                  View Resume
                </a>
              ) : (
                <p className="text-pink-600">No resume uploaded yet.</p>
              )}
              <button
                onClick={() => setIsEdit(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Edit
              </button>
            </div>
          )}
        </div>

        {/* Applied Jobs Section */}
        <div className="bg-white p-6 rounded shadow max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Jobs You Applied</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-3">Company</th>
                  <th className="p-3">Job Title</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {jobsApplied.map((job, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="p-3 flex items-center gap-2">
                      <img src={job.logo} alt="logo" className="w-8 h-8 rounded-full" />
                      <span>{job.company}</span>
                    </td>
                    <td className="p-3">{job.title}</td>
                    <td className="p-3">{job.location}</td>
                    <td className="p-3">{job.date}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-white text-sm ${
                          job.status === 'Pending'
                            ? 'bg-yellow-500'
                            : job.status === 'Accepted'
                            ? 'bg-green-600'
                            : 'bg-red-500'
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Application;
