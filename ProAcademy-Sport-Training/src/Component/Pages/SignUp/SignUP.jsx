import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Social from "../Social/Social";
import cricket from "../../../assets/cricket.jfif";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";

const SignUP = () => {
  const [error, setError] = useState("");
  const { CreateUser, UpdateUser } = useContext(AuthContext);
  const  navigate=useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset ,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const passwords = data.password;
    const ConfirmPassword = data.ConfirmPassword;
    if (passwords !== ConfirmPassword) {
      toast.error("Please enter right password");
      return;
    } else if (passwords.length < 6) {
      toast.error("password must be Greater than 6 characters");
      return;
    } else if (!/[A-Z]/.test(passwords)) {
      toast.error("Error: password must  have a capital letter.");
      return;
    } else if (!/[!@#$%^&*()-=_+|;':",.<>/?]/.test(passwords)) {
      toast.error("Error: password must  have a special character.");
      return;
    }

    // create new user with new password and email
    CreateUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        
        toast.success("Registration successful");
        // update user profile
        UpdateUser(data.name, data.photoURL).then((result) => {
          console.log("Updated", result);
          toast.success("Updated profile successfully");
          //  save user profile to db
            reset();
            navigate("/");
          const saveUser = { name: data.name, email: data.email ,role:"student" };
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
         
           
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="mt-[20px] grid grid-cols-1 md:grid-cols-2 border shadow-lg">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="sidimg  bg-slate-400">
        <img className=" opacity-30 h-full" src={cricket} alt="" />
      </div>
      <div className=" bg-slate-800 flex- justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-white font-bold text-3xl  uppercase mt-6">
            {" "}
            Register
          </h1>
          <label>Name:</label>
          <input
            {...register("name", {
              required: true,
            })}
          />
          {error?.name?.type === "required" && <p>This field is required</p>}
          <label>Email:</label>
          <input
            {...register("email", {
              required: true,
            })}
          />
          {errors?.email?.type === "required" && <p>This field is required</p>}

          <label>Password:</label>
          <input {...register("password", { required: true })} />

          {error}

          <label>Confirm Password:</label>
          <input {...register("ConfirmPassword", { required: true })} />
          {error}

          <label>PhotoURL:</label>
          <input {...register("photoURL", { required: true })} />
          {error}

          <input type="submit" />
          <span className="text-blue-600 underline">
            Already have an account....<NavLink to={"/login"}>Login</NavLink>
          </span>
        </form>
        <div className="social flex justify-center">
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
