import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DHeading from '../../Shared/DashboardHeading/DHeading';

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);
  const [loader,setLoading]=useState(true)

   useEffect(() => {
     axios
       .get(
         "https://b7a12-summer-camp-server-side-faruks23.vercel.app/instructor"
       )
       .then((response) => {
         setInstructor(response.data)
       setLoading(false)});
   }, [axios]);
   console.log(instructor);
  return (
    <div className="   ">
      {loader ? (
        <span className="text-4xl  text-center font-bold font-serif ">
          Loading....
        </span>
      ) : (
        <div className="  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          <DHeading title={"instructor"}></DHeading>

            <div className=" pt-10 flex justify-center items-center mx-auto ">
              
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
              {instructor.map((item) => {
                console.log(item);
                return (
                  <div className="max-w-sm  from-gray-500 from-40% via-gray-900 via-50% to-emerald-500 to-50% text-white shadow-lg rounded-lg overflow-hidden my-4">
                    <img
                      className="w-full h-56"
                      src={item.image}
                      alt="avatar"
                    />
                    <div className="flex items-center px-6 py-3 bg-black"></div>
                    <div className="py-4 px-6">
                      <h1 className="text-2xl font-semibold text-gray-800">
                        {item.name}
                      </h1>

                      <div className="flex items-center mt-4 text-gray-700">
                        <svg
                          className="h-6 w-6 fill-current"
                          viewBox="0 0 512 512"
                        >
                          <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                        </svg>
                        <h1 className="px-2 text-sm">patterson@example.com</h1>
                      </div>
                    </div>
                  </div>
                );
              })}
              </div>
              
          </div>
        </div>
      )}
    </div>
  );
};

export default Instructor;