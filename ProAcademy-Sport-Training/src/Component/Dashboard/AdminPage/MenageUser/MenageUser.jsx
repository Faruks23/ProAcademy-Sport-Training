import React from 'react';
import UseUser from './UseUser';
import DHeading from '../../../Shared/DashboardHeading/DHeading';
import { Toaster, toast } from 'react-hot-toast';
import { FaTrashAlt } from "react-icons/fa";
const MenageUser = () => {
  const [users, loading, refetch] = UseUser();
  console.log(users);
// /users/admin
  const handleMakeAdmin = (id) => { 
    console.log(id);
    fetch(`https://b7a12-summer-camp-server-side-faruks23.vercel.app/users/admin/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Make Admin  successfully");
        refetch();
      });


  }


  // make instructor
  const handleMakeInstructor= (id) => { 
    console.log(id);
    fetch(`https://b7a12-summer-camp-server-side-faruks23.vercel.app/users/instructor/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Make Instructor successfully");
        refetch();
      });


  }
  // Delete the user from  db
  const handleDelete = (id) => {
    // DeleteUsers
    fetch(`https://b7a12-summer-camp-server-side-faruks23.vercel.app/users/DeleteUsers/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User Delete successfully");
        refetch();
      });
  }

  return (
    <div className="h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <DHeading title={"Menage user"}></DHeading>
      <Toaster></Toaster>
      <div className="flex justify-center mx-auto mt-11">
        <div className="overflow-x-auto">
          <table className="table border shadow-xl">
            {/* head */}
            <thead>
              <tr>
                <th>NO:</th>
                <th>Name</th>
                <th>Email</th>
                <td>Promote: Instructor / admin</td>

                <th>Role</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="font-serif">
              {/* row 2 */}
              {users.map((user, index) => {
                return (
                  <tr className="hover">
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {" "}
                      <button
                        disabled={user?.Insdisabled}
                        onClick={() => handleMakeInstructor(user._id)}
                        className={` ${
                          user.Insdisabled ? "bg-slate-300" : " bg-blue-500"
                        }
                               p-1 shadow-md  rounded-md cursor-pointer text-white`}
                      >
                        {" "}
                        Make Instructor
                      </button>{" "}
                      /
                      <button
                        disabled={user?.disabled}
                        onClick={() => handleMakeAdmin(user._id)}
                        className={` ${
                          user.disabled ? "bg-slate-300" : " bg-blue-500"
                        }
                               p-1 shadow-md  rounded-md cursor-pointer text-white`}
                      >
                        {" "}
                        Make Admin
                      </button>
                    </td>
                    <td>{user?.role ? <p>{user.role}</p> : "Student"}</td>
                    <td>
                      {" "}
                      <span onClick={() => handleDelete(user._id)}>
                        <FaTrashAlt className="text-blue-500 w-6 h-6 cursor-pointer"></FaTrashAlt>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MenageUser;