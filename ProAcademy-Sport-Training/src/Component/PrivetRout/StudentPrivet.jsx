import React from 'react';
import { Navigate } from 'react-router-dom';
import UseStudent from '../Hook/UseStudent';

const StudentPrivet = ({ children }) => {
  const [isStudent, isStudentLoading] = UseStudent();
  if (isStudentLoading) {
    return <div>
      Loading .....
    </div>
  }
  if (isStudent) {
    return children
  }
  return (
     <Navigate to={"/login"}></Navigate>
      
  );
};

export default StudentPrivet;