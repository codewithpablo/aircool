// @ts-nocheck
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { items } from '@/constants';

function Carousel() {
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carousel = useRef(null);
  const controls = useAnimation();

  const sliderItems = [...items.slice(0, 8), ...items.slice(0, 8)];

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    const loop = async () => {
      while (!isDragging && width > 0) {
        await controls.start({
          x: -width,
          transition: { duration: 50, ease: 'linear' },
        });
        controls.set({ x: 0 });
      }
    };
    loop();
  }, [width, isDragging, controls]);

  return (
    <div
      className="relative max-w-xl overflow-hidden"
      style={{
        WebkitMaskImage: `
          radial-gradient(circle at 0% 30%, transparent 0%, black 60%) ,
          linear-gradient(to right, transparent 0%, black 10%, black 100%)
        `,
        WebkitMaskComposite: 'source-over',
        maskComposite: 'intersect',
      }}
    >
      {/* Carrusel */}
      <motion.div
        ref={carousel}
        drag="x"
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -width }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        animate={controls}
        className="flex will-change-transform cursor-grab active:cursor-grabbing"
      >
        {sliderItems.map((itemData, index) => (
          <motion.div
            key={index}
            className="relative min-w-[20rem] h-[450px] shrink-0"
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={itemData.imgSrc}
              width={400}
              height={800}
              alt="img"
              className="p-3 rounded-[40px] w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Carousel;
