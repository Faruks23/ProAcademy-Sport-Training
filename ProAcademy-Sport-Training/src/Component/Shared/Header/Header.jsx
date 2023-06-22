

import Navlink from "./NavItem";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { darkMode } = useContext(AuthContext);



  return (
    <div className="md:mb-[65px] mt-10 w-full">
      <div className="navbar md:w-full w-[100%] bg-slate-800  text-white shadow-xl fixed top-0 left-0 z-50 mb-20">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm w-[300px] dropdown-content mt-3 p-2 shadow-xl bg-base-100 rounded-box md:w-96 text-black font-bold"
            >
              <Navlink></Navlink>
            </ul>
          </div>
       
          <a
            className=" uppercase font-bold md:text-xl ">Pro Academy</a>
        </div>
        <div className="navbar-center hidden lg:flex uppercase font-bold">
          <ul className="menu menu-horizontal px-1">
            <Navlink></Navlink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
