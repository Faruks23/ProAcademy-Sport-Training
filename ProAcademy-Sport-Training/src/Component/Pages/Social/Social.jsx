import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
const Social = () => {
  const { SignInWithGoogle } = useContext(AuthContext);
       const navigate = useNavigate();
 
  const handleGoogleLogin = () => { 
   
    SignInWithGoogle()
      .then((result) => {
        const user=result.user;
        toast.success("Login Success");

         const saveUser = { name: user.displayName, email:user.email,role:'student' };
          fetch(
            "https://b7a12-summer-camp-server-side-faruks23.vercel.app/AddUsers",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.InsertedId) {
                toast.success("User created successfully");
              }
            });
              navigate("/");
        })
      
      .catch((err) => {
        toast.error(err.message);
      });

    }
  
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <button onClick={handleGoogleLogin} className=" w-10 h-10 mt-5">
       <FcGoogle className='w-full h-full'></FcGoogle>
      </button>
    </div>
  );
};

export default Social;