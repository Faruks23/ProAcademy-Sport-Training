
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GrStatusInfo } from "react-icons/gr";
import { MdDiversity3 } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import UseClasses from "./UseClasses";
import { Toaster, toast } from "react-hot-toast";
import DHeading from "../../../Shared/DashboardHeading/DHeading";

const MenageClass = () => {
 
  const { user } = useContext(AuthContext);

  const [Classes, loading, refetch] = UseClasses();
  console.log(Classes);


  const handleApprove = (item) => {
    fetch(
      `https://b7a12-summer-camp-server-side-faruks23.vercel.app/updateStatus/${item?._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Class Approve Success");
        }
      });
  };

  // modal sections code 
    const [isOpen, setIsOpen] = useState(false);
    const [classe,setClasse]=useState({})
  const openModal = (item) => {
      
    setIsOpen(true);
    setClasse(item);
    };

    const closeModal = () => {
      setIsOpen(false);
  };

  const Feedback = useRef();

  // handle deny 
  const handleDeny = () => {

    console.log(Feedback.current.value);
    const feedback = {
           feedback:Feedback.current.value,
    }
    console.log(feedback);
          fetch(`https://b7a12-summer-camp-server-side-faruks23.vercel.app/updateDeny/${classe?._id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(feedback),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              if (data.modifiedCount > 0) {
                refetch();
                setIsOpen(false);
                toast.success("Class Deny Success");
              }
            });

    };



 

  return (
    <>
      <DHeading title={"menage classes"}></DHeading>
      <div class="min-h-screenbg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex justify-center items-center  ">
        <Toaster></Toaster>
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-9 md:space-y-5 mt-[70px]">
          {Classes.map((item) => {
            const {
              classImage,
              availableSeats,
              className,
              instructorEmail,
              instructorName,
              price,
              status,
              _id,
            } = item;

            return (
              <div
                key={item._id}
                class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
              >
                <h3 class="mb-3 text-xl font-bold text-indigo-600">
                  Beginner Friendly
                </h3>
                <div class="relative">
                  <img
                    class="w-full rounded-xl"
                    src={classImage}
                    alt="Colors"
                  />
                  <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    ${price}
                  </p>
                </div>
                <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                  {className}
                </h1>
                <div class="my-4">
                  <div class="flex space-x-1 items-center">
                    <span>
                      <FaUserCircle className="h-6 w-6 text-indigo-600 mb-1.5"></FaUserCircle>
                    </span>
                    <p>Instructor name: {instructorName}</p>
                  </div>

                  <div class="flex space-x-1 items-center">
                    <span>
                      <AiOutlineMail className="h-6 w-6 text-indigo-600 mb-1.5"></AiOutlineMail>
                    </span>
                    <p> Email:{instructorEmail}</p>
                  </div>
                  <div class="flex space-x-1 items-center">
                    <span>
                      <GrStatusInfo className="h-6 w-6 text-indigo-600 mb-1.5"></GrStatusInfo>
                    </span>
                    <p>
                      {" "}
                      {status == "Approved" ? (
                        <p className="text-blue-500">Status:{status}</p>
                      ) : (
                        <p>Status:{status}</p>
                      )}
                    </p>
                  </div>
                  <div class="flex space-x-1 items-center ">
                    <span>
                      <MdDiversity3 className="h-6 w-6 text-indigo-600 mb-1.5"></MdDiversity3>
                    </span>
                    <p>Available seats:{availableSeats}</p>
                  </div>

                  <div className="flex justify-center gap-4 mt-5">
                    <button
                      disabled={item?.disabled}
                      onClick={() => handleApprove(item)}
                      class={` ${
                        item?.disabled
                          ? "bg-gray-400 text-green-500"
                          : "bg-indigo-600"
                      }  mt-4   text-white   py-2 px-4 rounded-xl shadow-lg`}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => openModal(item)}
                      disabled={item?.disabled}
                      class={` ${
                        item?.disabled
                          ? "bg-gray-400 text-orange-600"
                          : "bg-indigo-600  text-white"
                      }  
                    mt-4   py-2 px-6 rounded-xl shadow-lg`}
                    >
                      Deny
                    </button>

                    {/* modal btn */}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Open the modal using ID.showModal() method */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 w-[50%] mx-auto">
              <div className="fixed inset-0 bg-gray-900 bg-opacity-75"></div>
              <div className="bg-white rounded-lg shadow-lg z-10">
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">
                    {classe.className}
                  </h2>
                  <p className="text-lg font-semibold mb-2 mt-2">
                    Send Your FeedBack
                  </p>
                  <hr />
                  <textarea
                    className="w-full"
                    name="feedback"
                    id=""
                    ref={Feedback}
                    cols="100"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex justify-end p-4">
                  <button
                    className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded mr-2"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    onClick={handleDeny}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* hell */}
      </div>
    </>
  );
};

export default MenageClass;
// bg-${  Disable ? "gray-400" : ""   }