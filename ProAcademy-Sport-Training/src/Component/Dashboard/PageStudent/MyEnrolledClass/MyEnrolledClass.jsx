import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { data } from 'autoprefixer';
import { AiOutlineMail } from "react-icons/ai";
import DHeading from '../../../Shared/DashboardHeading/DHeading';
import { FaUserCircle } from 'react-icons/fa';
import { MdDiversity3 } from 'react-icons/md';

const MyEnrolledClass = () => {
  const {user}=useContext(AuthContext)
 const [MyEnrolClasses,setMyEnrolClasses] = useState([])
  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-faruks23.vercel.app/payment/enrol?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyEnrolClasses(data);
        // console.log('history', data);
      });
  },[])
 console.log('history',MyEnrolClasses);
  return (
    <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mt-2 ">
      <DHeading title={"My enrol classes"}></DHeading>
      <div className="min-h-screen  flex justify-center items-center pb-20  mt-[10px]">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-9 md:space-y-5 mt-[70px]">
          {MyEnrolClasses.map((item) => {
            const {
              classImage,
              availableSeats,
              className,
              instructorEmail,
              instructorName,
              price,
              status,
              _id,
            } = item;
            return (
              <div
                key={item._id}
                className={`max-w-sm px-6 pt-6 pb-2 bg-slate-300 rounded-xl shadow-lg transform hover:scale-105 transition duration-500`}
              >
                <h3 className="mb-3 text-xl font-bold text-indigo-600">
                  Beginner Friendly
                </h3>
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt="Colors"
                  />
                  <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    ${price}
                  </p>
                </div>
                <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                  {className}
                </h1>
                <div className="my-4">
                  <div className="flex space-x-1 items-center ">
                    <span>
                      <MdDiversity3 className="h-6 w-6 text-indigo-600 mb-1.5"></MdDiversity3>
                    </span>
                    <p>Available seats:{availableSeats}</p>
                  </div>

                  <div className="flex justify-center gap-4 mt-5">
                    <button
                      className={`  bg-indigo-600
                       mt-4   text-white   py-2 px-4 rounded-xl shadow-lg`}
                    >
                      View Class
                    </button>

                    {/* modal btn */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* hell */}
      </div>
    </div>
  );
};

export default MyEnrolledClass;