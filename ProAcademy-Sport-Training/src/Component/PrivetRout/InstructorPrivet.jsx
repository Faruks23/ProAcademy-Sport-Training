import React, { useContext } from 'react';
import UseInstructor from '../Hook/UseInstructor';
import { Navigate } from 'react-router-dom';


const InstructorPrivet = ({ children }) => {

  const [isInstructor, isInstructorLoading] = UseInstructor();
  if (isInstructorLoading) {
    return (
      <div>
        <p>Loading.....</p>
      </div>
    );
  }
  if (isInstructor) {
      return children
  }
  return (
    <Navigate to={'/login'}></Navigate>
  );
};

export default InstructorPrivet;