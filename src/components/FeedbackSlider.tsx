"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Malik",
    title: "Marketing Manager at NovaTech",
    quote:
      "Shakil truly elevated our brand with a modern, responsive website. His design sense and professionalism are top-notch.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Ayesha Khan",
    title: "Product Lead at Innovate Solutions",
    quote:
      "Working with Shakil was a smooth process. He delivered a stunning website that exceeded our expectations.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    title: "CEO at Growth Hub",
    quote:
      "The collaboration was seamless from start to finish. The final product is a testament to Shakil's skill and dedication.",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790918?q=80&w=2071&auto=format&fit=crop",
  },
];

const FeedbackSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="bg-[#0e0e0e] text-white font-sans py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          What Clients Say
          <br className="hidden sm:block" />
          About My Work
        </h2>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        navigation
        className="max-w-5xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[#1b1b1b] border border-[#2e2e2e] rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              {/* Left: Image + name */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-bold">{t.name}</h3>
                <p className="text-sm text-gray-400">{t.title}</p>
              </div>

              {/* Right: Quote */}
              <div className="flex flex-col justify-between w-full md:w-2/3">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {/* Highlight some words in blue */}
                  {t.quote.split(" ").map((word, idx) =>
                    ["brand", "responsive", "sense", "top-notch"].includes(
                      word.replace(/[^a-zA-Z-]/g, "")
                    ) ? (
                      <span key={idx} className="text-blue-400">
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </p>

                {/* Counter */}
                <div className="text-sm text-gray-400 self-end">
                  {String(currentSlide).padStart(2, "0")}/
                  {String(testimonials.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackSlider;
