"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";

import "swiper/css";

const images = Array.from({ length: 25 }, (_, i) => `/TITULO/${i + 1}.jpeg`);

export default function VerticalSwiper() {
  return (
    <div className="relative w-full h-[500px] mx-auto rounded-[2.5rem] overflow-hidden shadow-lg">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={24}
        speed={400}
        modules={[Mousewheel, Autoplay]}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          thresholdDelta: 50, // 👈 clave: una intención = un slide
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        className="w-full h-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-[500px] rounded-[2.5rem] overflow-hidden">
              <img
                src={src}
                alt={`Imagen ${idx + 1}`}
                className="w-full h-full object-cover select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
