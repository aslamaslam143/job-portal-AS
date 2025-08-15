import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear tokens or session storage here if needed
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
  <div>
    <div className="flex items-center gap-2 mb-8">
      <img src={assets.company_icon} alt="Company Icon" className="w-15 h-15 rounded-full" />
      <div>
        <h2 className="text-lg font-bold">Recruiter</h2>
        <p className="text-sm text-gray-500">Welcome Back</p>
      </div>
    </div>

    {/* Navigation Buttons */}
    <nav className="flex flex-col gap-4">
      <Link
        to="add-job"
        className="bg-blue-100 text-blue-800 px-4 py-3 rounded shadow hover:bg-blue-200 transition"
      >
        ➕ Add Job
      </Link>
      <Link
        to="manage-job"
        className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded shadow hover:bg-yellow-200 transition"
      >
        🛠️ Manage Jobs
      </Link>
      <Link
        to="view-application-job"
        className="bg-green-100 text-green-800 px-4 py-3 rounded shadow hover:bg-green-200 transition"
      >
        📋 View Applications
      </Link>
    </nav>
  </div>

  {/* Logout Button */}
  <button
    onClick={handleLogout}
    className="mt-6 bg-red-100 text-red-700 px-4 py-3 rounded shadow hover:bg-red-200 transition"
  >
    🔓 Logout
  </button>
</aside>


      {/* Main content */}
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={assets.logo}
              alt="Logo"
              className="w-22 h-22 cursor-pointer"
              onClick={() => navigate('/')}
            />
            <h1 className="text-2xl font-bold text-blue-600">Recruiter Dashboard</h1>

          </div>
          
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Manage Your Jobs</h2>
          <p className="text-gray-500">Here you can add, manage, and view job applications.</p>
        </div>

        {/* Nested components: AddJob, ManageJobs, etc. will be rendered here */}
        <div className="bg-white p-6 rounded-lg shadow">
          <Outlet />
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Recent Activity</h2>
          <p className="text-gray-500">Check your recent job postings and applications.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
