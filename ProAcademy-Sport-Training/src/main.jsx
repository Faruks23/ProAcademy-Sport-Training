import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'

import Login from './Component/Pages/Login/Login.jsx'
import SignUP from './Component/Pages/SignUp/SignUP.jsx'
import AuthProvider from './Component/AuthProvider/AuthProvider.jsx'
import Classes from './Component/Pages/Classes/Classes.jsx'
import Instructor from './Component/Pages/Instructor/Instructor.jsx'
import Profile from './Component/Pages/Proifile/Profile.jsx'
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx'
import Dashboard from './Component/Dashboard/Dashboard.jsx'
import MySelectedClass from './Component/Dashboard/PageStudent/MySelectedClass/MySelectedClass.jsx'
import MyEnrolledClass from './Component/Dashboard/PageStudent/MyEnrolledClass/MyEnrolledClass.jsx'
import AddClass from './Component/Dashboard/InstructorPage/Addclclass/AddClass.jsx'
import MyClass from './Component/Dashboard/InstructorPage/MyClass/MyClass.jsx'
import MenageUser from './Component/Dashboard/AdminPage/MenageUser/MenageUser.jsx'
import MenageClass from './Component/Dashboard/AdminPage/MenageClass/MenageClass.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <Instructor></Instructor>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <DashPrivet>
        <Dashboard></Dashboard>
      </DashPrivet>
    ),
    children: [
      {
        path: "dashboard",
        element: <DashHome></DashHome>,
      },
      {
        path: "selectClass",
        element: (
          <StudentPrivet>
            {" "}
            <MySelectedClass></MySelectedClass>
          </StudentPrivet>
        ),
      },
      {
        path: "enrolled",
        element: (
          <StudentPrivet>
            {" "}
            <MyEnrolledClass></MyEnrolledClass>
          </StudentPrivet>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorPrivet>
            {" "}
            <AddClass></AddClass>
          </InstructorPrivet>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstructorPrivet>
            {" "}
            <MyClass></MyClass>
          </InstructorPrivet>
        ),
      },
      {
        path: "menageUser",
        element: (
          <AdminPrivet>
            <MenageUser></MenageUser>
          </AdminPrivet>
        ),
      },
      {
        path: "menageClass",
        element: (
          <AdminPrivet>
            <MenageClass></MenageClass>
          </AdminPrivet>
        ),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "history",
        element: <PymentHistory></PymentHistory>,
      },
    ],
  },
]);


import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import DashHome from './Component/Dashboard/DashHome/DashHome.jsx';
import CheckOut from './Component/Dashboard/PageStudent/Pyment/CheckOut.jsx';
import InstructorPrivet from './Component/PrivetRout/InstructorPrivet.jsx';
import DashPrivet from './Component/PrivetRout/DashPrivet.jsx';
import StudentPrivet from './Component/PrivetRout/StudentPrivet.jsx';
import AdminPrivet from './Component/PrivetRout/AdminPrivet.jsx';
import Payment from './Component/Dashboard/PageStudent/Pyment/Payment.jsx';
import PymentHistory from './Component/Dashboard/PageStudent/PymentHistory/PymentHistory.jsx';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
