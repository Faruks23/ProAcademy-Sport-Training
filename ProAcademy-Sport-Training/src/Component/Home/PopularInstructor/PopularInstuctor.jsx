import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useFormContext } from 'react-hook-form';
import { Fade } from 'react-awesome-reveal';

const PopularInstructor = () => {
 
  const [instructor, setInstructor] = useState([]);
  const [loader, setLoading] = useState(true);
  const { darkMode, toggleDarkMode } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(
        "https://b7a12-summer-camp-server-side-faruks23.vercel.app/instructor"
      )
      .then((response) => {
        setInstructor(response.data);
        setLoading(false);
      });
  }, [axios]);
  console.log(instructor);
  return (
    <div className="mt-[200px] pb-20 w-[95%] mx-auto">
      <h1 className="text-center text-4xl font-bold uppercase mb-10">
        Popular{" "}
        <span className="text-green-500">
          <Fade delay={0.1e3} cascade damping={1e-1}>
            Instructors
          </Fade>
        </span>
      </h1>
      <p className="text-center  font-serif  mb-20">
       
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
       
      </p>
      <div className="flex justify-center  ">
        <div className="classContainer grid grid-cols-1 md:grid-cols-3 mx-auto gap-20  md:mx-[5%]">
          {/* card */}

          {instructor.slice(0, 6).map((item) => {
            console.log(item);

            return (
              <div
                key={item._id}
                className={`  transform hover:scale-105 transition duration-500 w-[350px] ${
                  darkMode
                    ? "bg-gradient-to-r from-gray-300 from-10% via-gray-400 via-30% to-emerald-500 to-90%"
                    : " bg-slate-300"
                }  shadow-lg rounded-lg overflow-hidden my-4}`}
              >
                <img className="w-full h-56 " src={item.image} alt="avatar" />
                <div className="flex items-center px-6 py-3 bg-black"></div>
                <div className="py-4 px-6">
                  <h1 className="text-2xl font-semibold text-gray-800">
                    {item.name}
                  </h1>

                  <div className="flex items-center mt-4 text-gray-700">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
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
  );
};

export default PopularInstructor;