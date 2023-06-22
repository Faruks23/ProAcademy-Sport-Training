import React from 'react';
import useAdmin from '../Hook/UseAdmin';
import { Navigate } from 'react-router-dom';

const AdminPrivet = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  if (isAdminLoading) {
    return <div>
      loading ........
    </div>
  }
  if (isAdmin) {
    return children;
    }
  return (
  <Navigate to={'/login'}></Navigate>
  );
};

export default AdminPrivet;
