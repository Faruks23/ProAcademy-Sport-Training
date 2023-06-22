import React from 'react';

const DHeading = ({title}) => {
  return (
    <h1 className="text-center font-sans uppercase text-4xl font-bold p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg shadow-lg">
      {title}
    </h1>
  );
};

export default DHeading;