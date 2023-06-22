import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import DHeading from '../../../Shared/DashboardHeading/DHeading';
const img_hosting_key = import.meta.env.VITE_IMG_KEY;
 
const AddClass = () => {
  const { user } = useContext(AuthContext)
  const img_hosting_Url=`https://api.imgbb.com/1/upload?key=${img_hosting_key}`
  const fileInputRef = useRef(null);
  const [loader,setLoader]=useState()
  const handleSubmit = (e) => {
   setLoader(true)
   e.preventDefault();
   const form = e.target;
   const className = form.className.value;
  
   const classImage = fileInputRef.current.files[0];
   const instructorName = form.instructorName.value;
   const instructorEmail = form.instructorEmail.value;
   const availableSeats = parseInt(form.availableSeats.value);
   const price = parseFloat(form.price.value).toFixed(2);

  //  console.log(Class);
  //  img host to imgDb
   
   const fromData = new FormData();
   fromData.append('image', classImage)

   fetch(img_hosting_Url, {
     method: "POST",
     body:fromData,
     
   }).then(res => res.json())
     .then(img => {
       if (img.success) {
             let img_url = img.data.display_url;

             const Class = {
               className,
               classImage: img_url,
               instructorName,
               instructorEmail,
               availableSeats,
               price,
               status: "pending",
               StudentEnroll: 0,
             };
             fetch(
               `https://b7a12-summer-camp-server-side-faruks23.vercel.app/AddClasses`,
               {
                 method: "POST",
                 headers: {
                   "content-type": "application/json",
                 },
                 body: JSON.stringify(Class),
               }
             )
               .then((res) => res.json())
               .then((data) => {
                 if (data.insertedId) {
                   setLoader(false);
                   toast.success("Class has been inserted successfully");
                 }
                 console.log(data);
               });
     
   
          }
         
      //  console.log(img,Class)
     })
   


   
 };


  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Toaster></Toaster>

      <DHeading title={"add new class"}></DHeading>
      <form
        onSubmit={handleSubmit}
        className="w-[100%] mx-auto  p-6 border shadow-xl font-serif mt-20 rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="className"
            className="block text-gray-700 font-bold mb-2"
          >
            Class Name
          </label>
          <input
            type="text"
            id="className"
            name="className"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="classImage"
            className="block text-gray-700 font-bold mb-2"
          >
            Class Image
          </label>

          <input
            type="file"
            id="classImage"
            ref={fileInputRef}
            name="classImage"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorName"
            className="block text-gray-700 font-bold mb-2"
          >
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={user?.displayName}
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorEmail"
            className="block text-gray-700 font-bold mb-2"
          >
            Instructor Email
          </label>
          <input
            type="email"
            id="instructorEmail"
            name="instructorEmail"
            value={user?.email}
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="availableSeats"
            className="block text-gray-700 font-bold mb-2"
          >
            Available Seats
          </label>
          <input
            type="number"
            id="availableSeats"
            name="availableSeats"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="availableSeats"
            className="block text-gray-700 font-bold mb-2"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
          <div className="flex  w-full justify-center items-center mx-auto">
            <button
              type="submit"
              className="bg-indigo-500 text-white font-bold py-2 px-4 rounded mt-4    hover:bg-indigo-700"
            >
              {loader ? (
                <>
                  {" "}
                  <p> Loading.....</p>
                  <span className="loading loading-spinner text-info"></span>
                </>
              ) : (
                "Add Class"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddClass;