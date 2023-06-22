
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
;
import DHeading from '../../../Shared/DashboardHeading/DHeading';

import UseInstructorClass from './UseInstructorClass';

const MyClass = () => {
  const { user } = useContext(AuthContext)
  const [MyClasses]=UseInstructorClass()
  

  
  return (
    <div className=" min-h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <DHeading title={"my class"}></DHeading>
      <div className="flex justify-center items-center mt-20  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="overflow-x-auto  bg-indigo-300">
          <table className="table border shadow-xl  bg-indigo-300 rounded-xl">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Status </th>
                <th>Total Enroll</th>
                <th> FeedBack</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {MyClasses.map((item) => {
                return (
                  <tr key={item._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.classImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.className}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item?.status}
                      <br />
                    </td>
                    <td>
                      {item?.StudentEnroll}
                      <br />
                    </td>
                    <td>
                      {item?.feedback ? (
                        <span>{item.feedback}</span>
                      ) : (
                        "No FeedBack"
                      )}
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Update</button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClass;