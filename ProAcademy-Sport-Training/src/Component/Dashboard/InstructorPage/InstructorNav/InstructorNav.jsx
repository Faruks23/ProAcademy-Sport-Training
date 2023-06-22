import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
const InstructorNav = () => {
  return (
    <>
      <li>
        <NavLink to={"/"}>
          <FaHome className="w-10 h-10"></FaHome>
        </NavLink>
      </li>

      <NavLink to={"/dashboard/addclass"}>
        <li className=" flex items-center gap-3 mt-3 ">
          {" "}
          <BiAddToQueue></BiAddToQueue> Add Class
        </li>{" "}
      </NavLink>
      <NavLink to={"/dashboard/myclass"}>
        <li className="flex items-center gap-3 mt-3">
          {" "}
          <span>
            <SiGoogleclassroom></SiGoogleclassroom>
          </span>{" "}
          My Class
        </li>{" "}
      </NavLink>
    </>
  );
};

export default InstructorNav;