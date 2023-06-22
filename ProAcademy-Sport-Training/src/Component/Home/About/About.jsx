import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <div className="mt-[200px] ">
      <div className="flex justify-center flex-col items-center gap-8">
        <h1 className="text-center text-4xl font-bold uppercase">about us</h1>
        <p className="text-center  font-serif  mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  mx-[10%] gap-12">
        <div className="img">
          <img
            className=" rounded-md"
            src="https://www.beyondbooksmart.com/hubfs/Karate%20as%20a%20way%20to%20train%20Executive%20Function.jpg"
            alt=""
          />
        </div>
        <div className="content mb-5 mt-10">
          <h1 className="text-2xl font-bold font-serif mb-10 uppercase">
            WE ARE THE BEST Trining{" "}
            <span className="text-green-500">
              {" "}
              <Fade delay={0.1e3} cascade damping={1e-1}>
                SCHOOL FOR A CHAMPION
              </Fade>
            </span>
          </h1>
          <p className=" leading-7 mb-10 max-w-xs break-words ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedo
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commod consequat{" "}
          </p>
          <button className="btn bg-green-500">About Us </button>
        </div>
      </div>
    </div>
  );
};

export default About;