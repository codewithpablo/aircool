"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const images = Array.from({ length: 25 }, (_, i) => `/TITULO/${i + 1}.jpeg`);

const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
};

export default function VerticalSwiper() {
  const [[page, direction], setPage] = useState([0, 0]);

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
        onSlideChange={(swiper) => {
          const direction = swiper.activeIndex > page ? 1 : -1;
          setPage([swiper.activeIndex, direction]);
        }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
              <motion.img
                src={src}
                alt={`Imagen ${idx + 1}`}
                className="w-full h-full object-cover object-center select-none pointer-events-none"
                draggable={false}
                initial={{ scale: 1.1, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 4, ease: "easeOut" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}