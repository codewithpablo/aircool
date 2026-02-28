"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";

const images = Array.from({ length: 25 }, (_, i) => `/TITULO/${i + 1}.jpeg`);

export default function VerticalSwiper() {
  return (
    // parent container inherits its height from the wrapper in Hero.tsx
    <div className="relative w-full h-full mx-auto rounded-[2.5rem] overflow-hidden shadow-lg">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={24}
        speed={500}
        loop={true}
        loopAdditionalSlides={5} // 👈 CLAVE para que no se note el reset
        modules={[Mousewheel, Autoplay]}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          thresholdDelta: 50,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, // 👈 mantiene el loop incluso si scrolleás
        }}
        className="w-full h-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
              <img
                src={src}
                alt={`Imagen ${idx + 1}`}
                className="w-full h-full object-cover object-center select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
