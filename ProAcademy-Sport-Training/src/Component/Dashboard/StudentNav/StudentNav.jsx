import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { SiGoogleclassroom } from "react-icons/si";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdHistory } from "react-icons/md";
const StudentNav = () => {
  return (
    <>
      <li>
        <NavLink to={"/"}>
          <FaHome className="w-10 h-10"></FaHome>
        </NavLink>
      </li>
      <li className="flex gap-4 items-center">
        <span>
          <SiGoogleclassroom></SiGoogleclassroom>
        </span>
        <span className="font-serif">
          <NavLink to={"/dashboard/selectClass"}>My Classes</NavLink>
        </span>
      </li>

      <li className="flex gap-4 items-center">
        <span>
          <BsFillBookmarkCheckFill></BsFillBookmarkCheckFill>
        </span>
        <span className="font-serif">
          {" "}
          <NavLink to={"/dashboard/enrolled"}>MY Enrolled </NavLink>
        </span>
      </li>

      <li className=" flex gap-4 items-center">
        <span>
          <MdHistory></MdHistory>
        </span>{" "}
        <span className=" font-serif">
          {" "}
          <NavLink to={"/dashboard/history"}>Payment history </NavLink>
        </span>
      </li>
      <li className=" flex gap-4 items-center">
        <span>
          <SiGoogleclassroom></SiGoogleclassroom>
        </span>{" "}
        <span className=" font-serif">
          {" "}
          <NavLink to={"/Classes"}>Classes </NavLink>
        </span>
      </li>
    </>
  );
};

export default StudentNav;