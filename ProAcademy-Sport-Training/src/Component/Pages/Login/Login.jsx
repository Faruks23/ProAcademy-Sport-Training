import React, { useContext } from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import Social from '../Social/Social';
import football from '../../../assets/footbal.jfif'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
const Login = () => {
  const Navigate=useNavigate()
 const { SignInWithEmailPassword } = useContext(AuthContext);
   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm();
  const onSubmit = (data) => {
    SignInWithEmailPassword(data.email, data.password)
      .then(result => {
        toast.success('Login Success')
        Navigate('/')
      }).catch(err => {
        toast.error(err.message)
       }
      )
    console.log(data)
  };
  return (
    <div className="mt-[20px] grid grid-cols-1 md:grid-cols-2 border shadow-lg">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="sidimg  bg-slate-400">
        <img className="" src={football} alt="" />
      </div>
      <div className=" bg-slate-800 flex- justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-white font-bold text-3xl  uppercase mt-6">
            {" "}
            Login
          </h1>
          <label>Email</label>
          <input
            {...register("email",{
              required: true,
            
            })}
          />
          {errors?.email?.type === "required" && <p>This field is required</p>}

          <label>Password</label>
          <input {...register("password", )} />
         

          <input type="submit" />
          <span className='text-blue-600 underline'>
            Create a new account....<NavLink to={"/signup"}>Register</NavLink>
          </span>
        </form>
        <div className="social flex justify-center">
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default Login;