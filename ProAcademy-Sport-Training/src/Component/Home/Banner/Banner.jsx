import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/cricket.jfif";
import BannerContent from "./BannerContent/BannerContent";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Banner.css";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerContent
            title={"Best Football School & Exclusive Club"}
            subtitle={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
            }
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq37BRJMf7uN4pN44y8x--5Roz473l6iLgFTZkuUUz5r1iUBi7K-2rMyAzEugWZr_jk9w&usqp=CAU"
            }
          ></BannerContent>
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent
            title={" Best Cricket School & Exclusive Club"}
            subtitle={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
            }
            image={
              "https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
          ></BannerContent>
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent
            title={`
                Best Cyclings School & Exclusive Club`}
            subtitle={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
            }
            image={
              "https://hips.hearstapps.com/hmg-prod/images/cyclist-on-the-col-de-la-colombiere-in-the-french-royalty-free-image-1650363392.jpg"
            }
          ></BannerContent>
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent
            title={" Best Athletic School & Exclusive Club"}
            subtitle={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
            }
            image={
              "https://img.freepik.com/free-photo/portrait-fit-athletic-afro-american-sportsman_171337-9463.jpg"
            }
          ></BannerContent>
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent
            title={" Best Marshal School & Exclusive Club"}
            subtitle={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
            }
            image={
              "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydGlhbCUyMGFydHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            }
          ></BannerContent>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
