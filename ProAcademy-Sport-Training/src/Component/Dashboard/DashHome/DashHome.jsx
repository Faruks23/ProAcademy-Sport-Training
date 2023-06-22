import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const DashHome = () => {
  const {user}=useContext(AuthContext)
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-[100vh] flex justify-center items-center">
      <h1 className='text-7xl font-bold font-serif' > Welcome back <span>{ user.displayName}</span></h1>
    </div>
  );
};

export default DashHome;