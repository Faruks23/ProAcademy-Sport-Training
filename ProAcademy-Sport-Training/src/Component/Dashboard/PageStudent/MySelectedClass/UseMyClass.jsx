import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const UseMyClass = () => {
  const {user}=useContext(AuthContext)

  const {
    data: MyClass = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["MyClass"],
    queryFn: async () => {
      const res = await fetch(
        `https://b7a12-summer-camp-server-side-faruks23.vercel.app/MyClass?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [MyClass, loading, refetch];
};

export default UseMyClass;
