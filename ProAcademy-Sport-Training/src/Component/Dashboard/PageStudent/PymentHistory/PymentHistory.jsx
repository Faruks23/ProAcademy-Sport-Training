import React, { useContext, useEffect, useState } from 'react';
import DHeading from '../../../Shared/DashboardHeading/DHeading';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const PymentHistory = () => {

  const { user } = useContext(AuthContext);
  const [PaymentHistory, setPaymentHistory] = useState([]);
  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-faruks23.vercel.app/payment/history?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPaymentHistory(data);
        // console.log('history', data);
      });
  }, []);
  console.log(PaymentHistory, "payment history");

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
      <DHeading title={"Payment history"}></DHeading>
      <div className="flex justify-center mt-20 min-h-[100vh] ">
        <div className="overflow-x-auto ">
          <table className="table table-zebra border shadow-lg  rounded-lg">
            {/* head */}
            <thead>
              <tr>
                <th>No:</th>
                <th>Name</th>
                <th>Price</th>
                <th>TransactionId</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {PaymentHistory.map((item,index) => {

                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{item.className}</td>
                    <td>{item.price}</td>
                    <td>{item.transactionId}</td>
                    <td>{item.data}</td>
                  </tr>
                ); })}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PymentHistory;