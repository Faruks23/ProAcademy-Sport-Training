import React, { useContext, useState } from "react";
import StudentNav from "./StudentNav/StudentNav";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import InstructorNav from "./InstructorPage/InstructorNav/InstructorNav";
import AdminNav from "./AdminPage/AdminNav/AdminNav";
import './Dashboard.css'
import useAdmin from "../Hook/UseAdmin";
import UseInstructor from "../Hook/UseInstructor";
import UseStudent from "../Hook/UseStudent";


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useContext(AuthContext)

  const [isAdmin] = useAdmin()
  const [isInstructor] = UseInstructor();
  const [isStudent] = UseStudent();
  // const isAdmin = true;
  // const isInstructor = false;
    const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex gap-2">
      {/* Sidebar */}
      <div
        className={` bg-indigo-500   text-white w-[250px] md:w-[400px] ${
          isSidebarOpen ? "z-50 min-w-[200px]" : "hidden"
        } md:block transition-all duration-300 ease-in-out shadow-xl`}
      >
        {/* Sidebar content goes here */}
        {/* Example menu item */}
        <ul className="navItem flex flex-col justify-center items-start md:px-10 px-2 py-5 gap-5">
          {isStudent && <StudentNav></StudentNav>}
          {isAdmin && <AdminNav></AdminNav>}
          {isInstructor && <InstructorNav></InstructorNav>}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        {/* Navbar */}
        <nav className="bg-white px-4 py-3 shadow">
          {/* Navbar content goes here */}
          <button
            className="md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Page Content */}
        <div className="">
          {/* Page content goes here */}

          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
