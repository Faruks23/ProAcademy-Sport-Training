import React, { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import UseMyClass from "./UseMyClass";
import DHeading from "../../../Shared/DashboardHeading/DHeading";
import { FaTrashAlt } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";

const MySelectedClass = () => {
  const { user } = useContext(AuthContext);
  const [MyClass, loading, refetch] = UseMyClass();
  console.log(MyClass);
  const [loadinge, setLoading] = useState(false);
   const handleDelete = (id) => {
     // DeleteUsers
     setLoading(true);
     fetch(
       `https://b7a12-summer-camp-server-side-faruks23.vercel.app/DeleteMyClass/${id}`,
       {
         method: "DELETE",
       }
     )
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         if (data.deletedCount > 0) {
           toast.success("Class Delete successfully");
           refetch();
           setLoading(false);
         }
       });
   };


  return (
    <>
      <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  min-h-[100vh] pb-10">
        <DHeading title={"My Classes"}></DHeading>
        <Toaster></Toaster>
        <div className="flex justify-center items-center mt-20 ">
          <div className="overflow-x-auto ">
            {MyClass.length === 0 ? (
              <p className="text-center p-2 font-bold text-white bg-blue-500 rounded-md">
                You have not added any classes yeats
              </p>
            ) : (
              <table className="table border shadow-xl   rounded-xl">
                {/* head */}
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price </th>

                    <th>Delete</th>
                    <th>Pay Now</th>
                  </tr>
                </thead>
                <tbody>
                  {MyClass.map((item) => {
                    console.log("item: ", item);
                    return (
                      <tr>
                        <td>
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={item.classImage}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </td>

                        <td>
                          <div>
                            <div className="font-bold">{item.className}</div>
                          </div>
                        </td>
                        <td>
                          ${item?.price}
                          <br />
                        </td>

                        <td>
                          <span onClick={() => handleDelete(item._id)}>
                            {loading ? (
                              "Loading..."
                            ) : (
                              <FaTrashAlt className="text-blue-500 w-6 h-6 cursor-pointer"></FaTrashAlt>
                            )}
                          </span>
                        </td>

                        <td>
                          {" "}
                          <NavLink
                            to={"/dashboard/payment"}
                            state={item }
                          >
                            {" "}
                            <span className="p-1 bg-blue-500 shadow-lg rounded-md text-white">
                              Pay Now
                            </span>{" "}
                          </NavLink>{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                {/* foot */}
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySelectedClass;
