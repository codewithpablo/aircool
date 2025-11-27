'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function CarouselVertical() {
  const totalItems = 25;

  return (
    <div className="flex justify-center items-center w-full">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full max-w-3xl h-[450px]"
      >
        {Array.from({ length: totalItems }).map((_, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="w-full h-11/12 rounded-4xl overflow-hidden shadow-lg md:relative md:top-3">
              <img
                src={`/TITULO/${index + 1}.jpeg`}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
