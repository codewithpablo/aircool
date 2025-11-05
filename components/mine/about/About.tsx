'use client'

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const teachers = [
  {
    title: "Rolando Miceli",
    badge: "Fundador",
    image: "/3.jpg"
  },
  {
    title: "Orlando Miceli",
    badge: "Cofundador",
    image: "/tionanocordoba.jpg"
  },
  {
    title: "Verónica Miceli",
    badge: "Cofundadora",
    image: "/veronica.jpg"
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TeachersSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <motion.h2
        className="uppercase text-5xl md:text-6xl font-bold text-center text-gray-800 mb-16  dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Fundadores
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {teachers.map((teacher, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-3xl shadow-lg dark:shadow-gray-900/70 w-full max-w-sm h-[420px]"
            variants={cardVariants}
          >
            {/* Imagen con zoom al hover */}
            <Image
              src={teacher.image}
              alt={teacher.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Capa oscura al hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Contenido sobre la imagen */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col items-start">
              <h3 className="text-2xl font-semibold mb-2">{teacher.title}</h3>
              <span className="bg-blue-500/90 text-white text-xs font-semibold px-4 py-1 rounded-full backdrop-blur-sm">
                {teacher.badge}
              </span>
            </div>

            {/* Animación de borde luminoso */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/50 transition-all duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
