import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseStudent = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/student/${user?.email}`);
      console.log("isInstructor", res);
      return res.data.student;
    },
  });

  return [isStudent, isStudentLoading];
};
export default UseStudent;
