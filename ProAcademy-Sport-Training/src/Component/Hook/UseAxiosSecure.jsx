import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useAxiosSecure = () => {
  const { LogOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL:"https://b7a12-summer-camp-server-side-faruks23.vercel.app",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // await LogOutUser();
          // navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [LogOutUser, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
