import React, { useContext } from "react";
import Banner from "./Banner/Banner";
import PopularClass from "./PopularCalss/PopularClass";
import PopularInstuctor from "./PopularInstructor/PopularInstuctor";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PopularInstructor from "./PopularInstructor/PopularInstuctor";
import Advaneg from "./Advanteg/Advantage";
import Advantage from "./Advanteg/Advantage";
import About from "./About/About";
import Review from "./Review/Review";

const Home = () => {
  const { darkMode, toggleDarkMode } = useContext(AuthContext);

  const bgClass = darkMode
    ? "bg-gradient-to-r from-gray-700 from-10% via-gray-500 via-30% to-gray-900 to-90%"
    : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
  const textClass = darkMode ? "text-white" : "text-black";

  return (
    <div className={`${bgClass} ${textClass} md:mt-[73px]`}>
      {/* banner section */}
      <Banner />

      {/* Popular class section */}
      <PopularClass />

      {/* Popular instructor section */}
      <PopularInstructor />

      {/* advantage section */}
      <Advantage></Advantage>

      {/* about section */}
      <About></About>

      {/* Review */}
      
      <Review ></Review>
    </div>
  );
};

export default Home;
