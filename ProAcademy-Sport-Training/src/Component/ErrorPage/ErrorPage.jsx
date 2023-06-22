import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
   const error = useRouteError();
   console.error(error);

   return (
     <div
       id="error-page "
       className="flex justify-center items-center h-[70vh]"
     >
       <div className="">
         <h1>Oops!</h1>
         <p>Sorry, an unexpected error has occurred.</p>
         <p>
           <i>{error.statusText || error.message}</i>
         </p>
         <NavLink to={'/'}>
           {" "}
           <button className="btn btn-outline">back to home</button>
         </NavLink>
       </div>
     </div>
   );
};

export default ErrorPage;