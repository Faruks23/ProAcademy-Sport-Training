import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import useAdmin from '../../Hook/UseAdmin';
import UseInstructor from '../../Hook/UseInstructor';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { MdDiversity3 } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Fade } from 'react-awesome-reveal';

const PopularClass = () => {
  // popularClasses;
  const [PopularClasses, setPopularClasses] = useState([]);
  const [loader, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://b7a12-summer-camp-server-side-faruks23.vercel.app/popularClasses"
      )
      .then((response) => {
        setPopularClasses(response.data);
        setLoading(false);
      });
  }, [axios]);
  console.log(PopularClasses);
  const [isAdmin] = useAdmin();
  const { darkMode, toggleDarkMode } = useContext(AuthContext);
  const [isInstructor] = UseInstructor();
  //
  return (
    <div className="mt-[170px] w-[95%] mx-auto ">
      <h1 className="text-center text-4xl font-bold uppercase mb-10">
        Popular{" "}
        <span className="text-green-500">
          {" "}
          <Fade delay={0.1e3} cascade damping={1e-1}>
            classes
          </Fade>{" "}
    
        </span>
      </h1>
      <p className="text-center  font-serif  mb-20">
     
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
    
      </p>

      {loader ? (
        <>
          {" "}
          <p>Loading........</p>{" "}
        </>
      ) : (
        <div className="flex justify-center">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-9 md:space-y-5 mt-[70px]">
            {PopularClasses.map((item) => {
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
                StudentEnroll,
                status,
                _id,
              } = item;
              return (
                <div
                  key={item._id}
                  className={`w-[350px] ${
                    !availableSeats ? "bg-red-200 " : "bg-slate-200"
                  } px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 ${
                    darkMode
                      ? " bg-gradient-to-r from-gray-300 from-1% via-gray-500 via-50% to-emerald-500 to-90% text-white"
                      : "bg-white"
                  } `}
                >
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
                  <h1 className="mt-4  text-2xl font-bold cursor-pointer">
                    {className}
                  </h1>
                  <div className="my-4">
                    <div className="flex space-x-1 items-center">
                      <span>
                        <FaUserCircle className="h-6 w-6 text-indigo-600 mb-1.5"></FaUserCircle>
                      </span>
                      <p className=" ">Instructor name: {instructorName}</p>
                    </div>

                    <div className="flex space-x-1 items-center">
                      <span>
                        <AiOutlineMail className="h-6 w-6 text-indigo-600 mb-1.5"></AiOutlineMail>
                      </span>
                      <p className=" "> Email:{instructorEmail}</p>
                    </div>

                    <div className="flex space-x-1 items-center ">
                      <span>
                        <MdDiversity3 className="h-6 w-6 text-indigo-600 mb-1.5"></MdDiversity3>
                      </span>
                      <p className=" ">Available seats:{availableSeats}</p>
                    </div>
                    <div className="flex space-x-1 items-center ">
                      <span>
                        <MdDiversity3 className="h-6 w-6 text-indigo-600 mb-1.5"></MdDiversity3>
                      </span>
                      <p className="">StudentEnroll:{StudentEnroll}</p>
                    </div>

                    <div className="flex justify-center gap-4 mt-5">
                      <NavLink to={"/classes"}>
                        <button
                          disabled={isDisabled}
                          className={` ${
                            isDisabled
                              ? "bg-gray-400 text-green-500"
                              : "bg-indigo-600"
                          }  mt-4   text-white   py-2 px-4 rounded-xl shadow-lg`}
                        >
                          Enrol Now
                        </button>
                      </NavLink>

                      {/* modal btn */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularClass;