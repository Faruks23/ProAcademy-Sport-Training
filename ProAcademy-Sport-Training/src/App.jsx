import { useEffect, useState,  } from "react";

import './App.css'
import Header from './Component/Shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Shared/Footer/Footer'
import app from '../firebase.config'
import { AiOutlineArrowUp } from "react-icons/ai";
import "animate.css";
function App() {
const [isVisible, setIsVisible] = useState(false);

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop;
  const isVisible = scrollTop > 0;
  setIsVisible(isVisible);
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  useEffect(() => {
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
  return (
    <>
      {/* header */}
      <div className="Header mb-10">
        <Header></Header>
      </div>

      <div className="top">
        <span
          className={`scroll-to-top-btn ${
            isVisible ? "visible" : ""
          }  fixed z-50 right-10 bottom-10 h-10 w-10 rounded-full bg-white animate__animated animate__bounce my-element`}
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp className="w-10 h-10 text-green-500 rounded-full"></AiOutlineArrowUp>
        </span>
      </div>
      {/* main */}
      <Outlet></Outlet>

      {/* footer */}
      <div className=" w-full mt-[-40px]">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App
