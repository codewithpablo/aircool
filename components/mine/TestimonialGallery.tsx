"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const columns = [
  ["/1.png", "/two.jpg", "/3.jpg"],
  ["/4.png", "/five.jpg", "/3.jpg"],
  ["/1.png", "/two.jpg", "/3.jpg"],
  ["/4.png", "/five.jpg", "/3.jpg"],
];

// Genera props aleatorios de flotación
const getFloatProps = () => {
  const amplitude = 5 + Math.random() * 5; // sube entre 5 y 10px
  const duration = 3 + Math.random() * 2; // duración entre 3 y 5s
  const delay = Math.random() * 2; // delay inicial
  return { amplitude, duration, delay };
};

export default function FloatingGallery() {
  return (
    <section className="w-[90%] mx-auto my-20">
      <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
        Galeria de nuestro equipo en accion
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="grid gap-5">
            {col.map((src, i) => {
              const { amplitude, duration, delay } = getFloatProps();
              return (
                <motion.div
                  key={i}
                  animate={{ y: [0, -amplitude, 0] }} // movimiento sutil arriba-abajo
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: delay,
                  }}
                  className="overflow-hidden rounded-2xl shadow-md bg-white dark:bg-gray-900"
                >
                  <Image
                    src={src}
                    alt={`Imagen ${colIndex * 3 + i + 1}`}
                    width={500}
                    height={500}
                    className="w-full rounded-2xl object-cover h-full"
                  />
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
