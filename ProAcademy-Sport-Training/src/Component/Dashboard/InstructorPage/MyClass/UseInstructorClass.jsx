import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const UseInstructorClass = () => {
  //  https://b7a12-summer-camp-server-side-faruks23.vercel.app/classes
  const [axiosSecure] = useAxiosSecure();
  const {user}=useContext(AuthContext)
  const {
    data: MyClasses = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["MyClasses"],
    queryFn: async () => {
      const res = await axiosSecure(`/getClass?email=${user?.email}`);
      return res.data;
    },
  });

  return [MyClasses, loading, refetch];
};

export default UseInstructorClass;
