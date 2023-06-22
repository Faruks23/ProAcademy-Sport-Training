import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const DashPrivet = ({ children}) => {
   const { loading ,user} = useContext(AuthContext);
  if (loading) {
    return <div>
       Loading.......
     </div>
   }
   if (!user) {
     return <Navigate to={"/login"}></Navigate>;
   }
   return children;
};

export default DashPrivet;