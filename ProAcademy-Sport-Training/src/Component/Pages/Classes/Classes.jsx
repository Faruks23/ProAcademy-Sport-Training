
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import DHeading from '../../Shared/DashboardHeading/DHeading';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import { MdDiversity3 } from 'react-icons/md';
import { Toaster, toast } from 'react-hot-toast';
import useAdmin from '../../Hook/UseAdmin';
import UseInstructor from '../../Hook/UseInstructor';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);

  const naviget = useNavigate();
  const handleEnrol = (item) => {
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

    const EnrolClass = {
      classImage,
      className,
      instructorEmail,
      availableSeats,
      availableSeats,
      instructorName,
      price,
      status,
      _id,
      StudentEmail: user?.email,
    };

    if (!user) {
      const process = confirm("You need to login to view this");
      if (process) {
        naviget("/login");
      }
    } else {
      fetch(
        `https://b7a12-summer-camp-server-side-faruks23.vercel.app/Student/Enrol`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(EnrolClass),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Enrolment updated successfully");
          }
        });
    }
  };

  useEffect(() => {
    axios
      .get("https://b7a12-summer-camp-server-side-faruks23.vercel.app/classes")
      .then((response) => setClasses(response.data));
  }, [axios]);
  console.log(classes);

 const [isAdmin] = useAdmin();

 const [isInstructor] = UseInstructor();

  return (
    <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mt-20  md:mt-1">
      <Toaster></Toaster> <DHeading title={"all classes"}></DHeading>
      <div className="min-h-screen  flex justify-center items-center pb-20  mt-[10px]">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-9 md:space-y-5 mt-[70px]">
          {classes.map((item) => {
            let isDisabled;

            if (!item.availableSeats || isAdmin || isInstructor) {
              isDisabled = true;
            }

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
                className={`max-w-sm ${
                  !availableSeats ? "bg-red-200 " :"from-gray-500 from-40% via-gray-900 via-50% to-emerald-500 to-90% text-white"
                } px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500`}
              >
                <h3 className="mb-3 text-xl font-bold text-indigo-600">
                  Beginner Friendly
                </h3>
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src={classImage}
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
                  <div className="flex space-x-1 items-center">
                    <span>
                      <FaUserCircle className="h-6 w-6 text-indigo-600 mb-1.5"></FaUserCircle>
                    </span>
                    <p>Instructor name: {instructorName}</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <span>
                      <AiOutlineMail className="h-6 w-6 text-indigo-600 mb-1.5"></AiOutlineMail>
                    </span>
                    <p> Email:{instructorEmail}</p>
                  </div>

                  <div className="flex space-x-1 items-center ">
                    <span>
                      <MdDiversity3 className="h-6 w-6 text-indigo-600 mb-1.5"></MdDiversity3>
                    </span>
                    <p>Available seats:{availableSeats}</p>
                  </div>

                  <div className="flex justify-center gap-4 mt-5">
                    <button
                      onClick={() => handleEnrol(item)}
                      disabled={isDisabled}
                      className={` ${
                        isDisabled
                          ? "bg-gray-400 text-green-500"
                          : "bg-indigo-600"
                      }  mt-4   text-white   py-2 px-4 rounded-xl shadow-lg`}
                    >
                      Enrol Now
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

export default Classes;