import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import useAdmin from '../../Hook/UseAdmin';
import UseInstructor from '../../Hook/UseInstructor';
import UseStudent from '../../Hook/UseStudent';

const Navlink = () => {

  const { user, LogOutUser, toggleDarkMode, darkMode } =
    useContext(AuthContext);
  console.log(user);
  const [isAdmin] = useAdmin();
  const [isInstructor] = UseInstructor();
  const [isStudent] = UseStudent();
  const handleLogout=() =>{
    LogOutUser()
      .then(() => {
      toast.success('Logged out successfully')
    })
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/instructors"}>Instructors</NavLink>
      </li>
      <li>
        <NavLink to={"/Classes"}>Classes</NavLink>
      </li>
      {user && (
        <>
          {" "}
          {isStudent && (
            <li>
              <NavLink to={"/dashboard/selectClass "}>Dashboard </NavLink>
            </li>
          )}
          {isAdmin && (
            <li>
              <NavLink to={"/dashboard/menageUser"}>Dashboard </NavLink>
            </li>
          )}
          {isInstructor && (
            <li>
              <NavLink to={"/dashboard/addclass "}>Dashboard </NavLink>
            </li>
          )}
          <li>
           
              {user ? (
                <>
                 <NavLink to={"/profile "}>
                  <div>
                    <img className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" />
                  </div>
                  </NavLink>
                </>
              ) : (
                <div className="avatar rounded-full w-6 h-6 bg-slate-50">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              )}
            
          </li>
        </>
      )}

      {user ? (
        <>
          <li className="flex justify-center items-center">
            <span
              onClick={handleLogout}
              className="btn btn-sm  btn-outline text-center"
            >
              Logout
            </span>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/login "}>Login </NavLink>
          </li>
          <li className="flex justify-center items-center">
            <NavLink to={"/signup "}>signUp </NavLink>
          </li>
        </>
      )}
      <li className="flex justify-center items-center ml-3">
        {" "}
        <button
          onClick={toggleDarkMode}
          className="btn btn-outline bg-blue-500 btn-sm text-center"
        >
          {darkMode ? "Light" : "Dark"}
        </button>{" "}
      </li>
    </>
  );
};

export default Navlink;