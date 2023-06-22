import React from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { MdClass } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const AdminNav = () => {
  return (
    <>
      <li>
        <NavLink to={"/"}>
          <FaHome className="w-10 h-10"></FaHome>
        </NavLink>
      </li>
      <NavLink to={"/dashboard/menageClass"}>
        <li className='flex items-center gap-4 '> <MdClass></MdClass> Menage Class</li>{" "}
      </NavLink>
      <NavLink to={"/dashboard/menageUser"}>
        <li className='flex items-center gap-4 '> <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd> Menage User</li>{" "}
      </NavLink>
    </>
  );
};

export default AdminNav;