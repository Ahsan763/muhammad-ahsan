"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import vince from "../../public/vince.jpg"
import Mads from "../../public/Mads Thorsdal.webp"
import profile from "../../public/profile.png"
import AnselmeMotcho from "../../public/Anselme Motcho.jpeg"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: any;
}

const testimonials: Testimonial[] = [
  {
    name: "Vincent Risalvato",
    title: "CEO at Pennexx Foods",
    quote:
      "Working with Ahsan was a great experience. He built a powerful Next.js website with a sleek design. His skills, attention to detail, and clear communication made the process smooth. I’m very happy with the result and would gladly work with him again",
    image: vince,
  },
  {
    name: "Anselme Motcho",
    title: "CEO at Kooley Themes",
    quote: "Ahsan is a talented developer who really understands both design and functionality. He transformed our ideas into a responsive, user-friendly site that exceeded expectations. Professional, reliable, and a pleasure to collaborate with.",
    image: AnselmeMotcho,
  },
  {
    name: "Mads Thorsdal",
    title: "CEO at planit.eu",
    quote: "Muhammad delivers tailwind CSS & html fast and in high quality for very very reasonable price",
    image: Mads,
  },
  {
    name: "Mike Yu",
    title: "An online clinet",
    quote: "Muhammad is very skilled in css ,html, and php. He delivered tasks in a timely manner and was available for questions and project updates. I hope to work with him in the near future.",
    image: profile,
  },
  {
    name: "Ming Wong",
    title: "An online clinet",
    quote: "Ahsan has been very helpful and delivered the project succesfully earlier than the expected time. He is details oriented and understnads the requirement clearly. I would highly recommend him to anyone who is looking for html/ front end related work",
    image: profile,
  },
];

const FeedbackSlider = () => {
  const swiperRef = useRef<any>(null);
  return (
    <section className="pt-10 sm:pt-20  relative z-[3]" id="testimonial">
      <div className="absolute top-[-60px] sm:-top-[100px] h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] bg-radial from-[#07284a] to-[#04203b00] to-70% left-1/2 -translate-x-1/2"></div>
      <div className="container">
        <div className="text-center relative z-10 mb-10 sm:mb-14">
          <div className="heading absolute select-none font-black opacity-30 -top-[40%] md:-top-[30%] lg:-top-[50%] left-1/2 -translate-x-1/2 uppercase text-[57px] md:text-[120px] lg:text-[170px] -z-10 tracking-wider bg-gradient-to-t from-[#05050900] to-[#262d49] bg-clip-text text-transparent">
            feedback
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.2] font-outfit tracking-wide mb-3 bg-gradient-to-r from-[#fff] to-[#abd8fc] bg-clip-text text-transparent">
            What <span className="font-playfair italic"> Clients </span>{" "} Say  <br />
            About My <span className="font-playfair italic"> Work</span>
          </h1>
        </div>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          centeredSlides={true}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          className="sm:!px-12 lg:!px-[23%]"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="border p-6 sm:p-0 gap-y-5 sm:gap-y-0 rounded-2xl flex-col flex sm:flex-row items-center justify-between relative overflow-hidden">
                <div className="absolute bottom-[-160px] left-1/2 -translate-x-1/2 -z-30 h-[300px] w-[300px] bg-radial from-[#07284a] to-[#04203b00] to-60% opacity-60"></div>
                <div className="sm:px-8 sm:py-12 w-full sm:w-[41%] sm:text-center relative mb-5 sm:mb-0">
                  <div className="h-full hidden sm:block  absolute right-0 top-0 w-[1px] bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                  <Image
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 sm:w-[130px] sm:h-[130px] rounded-full object-cover mb-3 sm:mb-6 sm:mx-auto"
                    width={150}
                    height={150}
                  />
                  <h3 className="text-lg font-medium">{t.name}</h3>
                  <p className="text-sm ">{t.title}</p>
                </div>
                <div className="sm:px-10 sm:py-12 w-full sm:w-[59%]  h-full  ">
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                    {t.quote}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center space-x-4 mt-10 pb-20">
          <div className="custom-prev flex items-center justify-center px-6 py-2 text-xl rounded-full border cursor-pointer">
            <FaArrowLeftLong />
          </div>
          <div className="custom-next flex items-center justify-center px-6 py-2 text-xl rounded-full border cursor-pointer">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#1a78cc] to-[#016dcc] py-3.5 lg:py-6  gap-4 text-sm font-medium">
        <div className="container">
          <div className='flex flex-wrap justify-between'>
            <span className="flex items-center sm:gap-x-1 lg:gap-x-2 md:text-xs lg:text-lg text-white"><BsStars className='md:text-lg lg:text-2xl text-sky-200' /> React App Development</span>
            <span className="flex items-center sm:gap-x-1 lg:gap-x-2 md:text-xs lg:text-lg text-white"><BsStars className='md:text-lg lg:text-2xl text-sky-200' /> Web Designing</span>
            <span className="flex items-center sm:gap-x-1 lg:gap-x-2 md:text-xs lg:text-lg text-white"><BsStars className='md:text-lg lg:text-2xl text-sky-200' /> Web Development</span>
            <span className="flex items-center sm:gap-x-1 lg:gap-x-2 md:text-xs lg:text-lg text-white"><BsStars className='md:text-lg lg:text-2xl text-sky-200' /> Figma to HTML</span>
            <span className="flex items-center sm:gap-x-1 lg:gap-x-2 md:text-xs lg:text-lg text-white"><BsStars className='md:text-lg lg:text-2xl text-sky-200' /> Pixels Perfect Conversion</span>
          </div>
        </div>
      </div>
    </section >
  );
};

export default FeedbackSlider;
