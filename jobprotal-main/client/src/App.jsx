import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Application from './pages/Application';
import Applyjob from './pages/Applyjob';
import RecruiterLogin from './components/RecruiterLogin';
import AddJob from './pages/AddJob';
import ViewApplication from './pages/ViewApplication';
import ManageJobs from './pages/ManageJobs';
import Dashboard from './pages/Dashboard';
// import 'quill.css/dist/quill.snow.css';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/apply-job/:id" element={<Applyjob />} />
        <Route path="/recruiter-login" element={<RecruiterLogin />} />

        {/* Nested routes under dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-job" element={<ManageJobs />} />
          <Route path="view-application-job" element={<ViewApplication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
