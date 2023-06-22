import React from 'react';
import './Review.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Fade } from 'react-awesome-reveal';

const Review = () => {
  return (
    <div className="mt-[200px] mb-8 ">
      <div className=" pb-20 w-[95%] mx-auto">
        <h1 className="text-center text-4xl font-bold uppercase mb-10">
          <span className="text-green-500">
            {" "}
            <Fade delay={0.1e3} cascade damping={1e-1}>
              student
            </Fade>{" "}
          </span>{" "}
          review
        </h1>
        <p className="text-center  font-serif">
         
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          
        </p>
        <h1 className="text-center text-2xl font-bold font-serif italic mt-5 text-green-500">
          425+ SATISFIED STUDENTS
        </h1>
      </div>

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
        modules={[Autoplay, Pagination]}
        className="review"
      >
        <SwiperSlide>
          <div className=" flex flex-col gap-5 items-center">
            <p className=" font-serif  italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              molestiae asperiores nisi neque illum hic iure? Nisi illo dolorum
              necessitatibus, quo esse minus! Dolor cupiditate a consequatur
              distinctio numquam dolores? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Saepe, recusandae!
            </p>

            <h1 className="text-2xl font-bold uppercase">Jesy ka</h1>
            <img
              className="rounded-full w-[30px] "
              src="https://templatekit.jegtheme.com/topspin/wp-content/uploads/sites/109/2021/06/testimonial-83S5W35.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col gap-5 items-center -mt-[300px]">
            <p className=" font-serif  italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              molestiae asperiores nisi neque illum hic iure? Nisi illo dolorum
              necessitatibus, quo esse minus! Dolor cupiditate a consequatur
              distinctio numquam dolores? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Saepe, recusandae!
            </p>

            <h1 className="text-2xl font-bold uppercase">Jesy ka</h1>
            <img
              className="rounded-full w-[30px] "
              src="https://templatekit.jegtheme.com/topspin/wp-content/uploads/sites/109/2021/06/testimonial-83S5W35.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col gap-5 items-center">
            <p className=" font-serif  italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              molestiae asperiores nisi neque illum hic iure? Nisi illo dolorum
              necessitatibus, quo esse minus! Dolor cupiditate a consequatur
              distinctio numquam dolores? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Saepe, recusandae!
            </p>

            <h1 className="text-2xl font-bold uppercase">Jesy ka</h1>
            <img
              className="rounded-full w-[30px] "
              src="https://templatekit.jegtheme.com/topspin/wp-content/uploads/sites/109/2021/06/testimonial-83S5W35.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col gap-5 items-center -mt-[300px]">
            <p className=" font-serif  italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              molestiae asperiores nisi neque illum hic iure? Nisi illo dolorum
              necessitatibus, quo esse minus! Dolor cupiditate a consequatur
              distinctio numquam dolores? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Saepe, recusandae!
            </p>

            <h1 className="text-2xl font-bold uppercase">Jesy ka</h1>
            <img
              className="rounded-full w-[30px] "
              src="https://templatekit.jegtheme.com/topspin/wp-content/uploads/sites/109/2021/06/testimonial-83S5W35.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col gap-5 items-center">
            <p className=" font-serif  italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              molestiae asperiores nisi neque illum hic iure? Nisi illo dolorum
              necessitatibus, quo esse minus! Dolor cupiditate a consequatur
              distinctio numquam dolores? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Saepe, recusandae!
            </p>

            <h1 className="text-2xl font-bold uppercase">Jesy ka</h1>
            <img
              className="rounded-full w-[30px] "
              src="https://templatekit.jegtheme.com/topspin/wp-content/uploads/sites/109/2021/06/testimonial-83S5W35.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;