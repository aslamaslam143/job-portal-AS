import React from 'react';
import { assets } from '../assets/assets.js';
import { UserButton, useClerk, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  return (
    <div className='shadow py-4 px-8 flex justify-between items-center'>
      {/* Left side: Logo and Title */}
      <div className='flex items-center'>
        <img  onClick={()=>navigate('/')}src={assets.logo} alt="Logo" className='w-22 h-22 cursor-pointer' />

        {user ? (
          <div className='ml-4'>
            <Link to="/application" className='text-blue-600 font-medium'>
              Applied Jobs
            </Link>
            <p className='text-gray-600'>
              Hi, {user.firstName} {user.lastName}
            </p>
          </div>
        ) : (
          <div className='text-2xl font-bold ml-4'>
            <h1>SN Jobify</h1>
          </div>
        )}
      </div>

      {/* Right side: Buttons or User Info */}
      <div className='flex gap-4 items-center'>
        {user ? (
          <UserButton afterSignOutUrl='/' />
        ) : (
          <>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              <Link to="/recruiter-login" className="text-white">
                Recruiter Login
              </Link>
            </button>
            <button
              onClick={() => openSignIn()}
              className='bg-green-500 text-white px-4 py-2 rounded-full'
            >
              Candidate Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
