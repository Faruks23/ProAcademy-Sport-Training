import React from 'react';
import AdImg from '../../../assets/portrait-of-a-young-man-tennis-player-on-orange-ba-QUAG8UX-PhotoRoom.png-PhotoRoom.png'
 import { Fade, Slide } from "react-awesome-reveal";
import { RiFocus2Line } from "react-icons/ri";

import { MdOutlineSportsGymnastics } from "react-icons/md";
import { AiOutlineSchedule, AiTwotoneShop } from 'react-icons/ai';
import { FaCampground, FaUserTie } from 'react-icons/fa';

const Advantage = () => {
  return (
    <div className="mt-[140px]  pb-10">
      <div className="flex justify-center flex-col items-center gap-8">
        <h1 className="text-center text-4xl font-bold">
          COURSE FOR{" "}
          <span className="text-green-500">
            <Fade delay={0.1e3} cascade damping={1e-1}>
              ANY AGES
            </Fade>
          </span>
        </h1>
        <p className="text-center  font-serif  mb-20 w-[300px] md:w-full mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
        <div className="left_item flex flex-col gap-7 justify-center items-center mx-[5%] ">
          <div className="p-4 bg-slate-300 shadow-md rounded-md">
            <RiFocus2Line
              className="w-10 h-10
            text-green-400"
            ></RiFocus2Line>
            <h1 className="text-2xl font-bold mb-2"> Training Grounds</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>

          <div className="p-4 bg-slate-300 shadow-md rounded-md">
            <AiOutlineSchedule
              className="w-10 h-10
            text-green-400"
            ></AiOutlineSchedule>

            <h1 className="text-2xl font-bold mb-2 "> Flexible Scheduling</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>

          <div className="p-4 bg-slate-300 shadow-md rounded-md">
            <MdOutlineSportsGymnastics
              className="w-10 h-10
            text-green-400"
            ></MdOutlineSportsGymnastics>
            <h1 className="text-2xl font-bold mb-2"> Fitness and Gym</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>

        <div className="middle hidden md:flex">
          <img src={AdImg} alt="" />
        </div>
        <div className="left_item flex flex-col gap-7 justify-center items-center mx-[5%] ">
          <div className="p-4 bg-slate-300 shadow-md rounded-md">
            <AiTwotoneShop
              className="w-10 h-10
            text-green-400"
            ></AiTwotoneShop>
            <h1 className="text-2xl font-bold mb-2">Sports Shop</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>

          <div className="p-4 bg-slate-300 shadow-md rounded-md">
            <FaUserTie
              className="w-10 h-10
            text-green-400"
            ></FaUserTie>
            <h1 className="text-2xl font-bold mb-2"> Professional Coaches</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>

          <div className="p-4 bg-slate-300 shadow-md rounded-md">
            <FaCampground
              className="w-10 h-10
            text-green-400"
            ></FaCampground>
            <h1 className="text-2xl font-bold mb-2"> Training Grounds</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;