"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = Array.from({ length: 25 }, (_, i) => `/TITULO/${i + 1}.jpeg`);

const SLIDE_HEIGHT = 500;
const GAP = 24; // space-y-6 = 24px
const STEP = SLIDE_HEIGHT + GAP;

export default function ContinuousSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl h-[500px] overflow-hidden mx-auto rounded-[2.5rem] shadow-lg">
      <motion.div
        className="flex flex-col space-y-6"
        animate={{ y: -index * STEP }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-full h-[500px] flex-shrink-0 rounded-[2.5rem] overflow-hidden"
          >
            <img
              src={src}
              alt={`Imagen ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
