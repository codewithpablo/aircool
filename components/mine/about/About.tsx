'use client'

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const teachers = [
  {
    title: "Rolando Miceli",
    badge: "Fundador",
    description: "Descubrió su vocación entre motores, herramientas y el sonido del metal. Fundó Aircool Refrigeración, dedicándose a la formación técnica y al servicio profesional.",
    image: "/3.jpg"
  },
  {
    title: "Orlando Miceli",
    badge: "Cofundador",
    description: "Ha sido un pilar de inspiración y enseñanza, guiando con paciencia y conocimiento técnico a muchas generaciones.",
    image: "/tionanocordoba.jpg"
  },
  {
    title: "Verónica Miceli",
    badge: "Cofundadora",
    description: "Es pieza clave en el proyecto y en la vida del equipo, organizando y coordinando todo con profesionalismo y constancia.",
    image: "/9.jpg"
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function TeachersSection() {
  return (
    <section className=" w-full py-16 px-6 md:px-20 dark:bg-gray-950"> {/* Opcional: Agregar un fondo oscuro a la sección si es necesario */}
      <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-12 italic dark:text-white">Fundadores</h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {teachers.map((teacher, index) => (
          <motion.div 
            key={index} 
            // CLASES MODIFICADAS: Añadido dark:bg-gray-800/60 y ajustes de sombra para el modo oscuro
            className="bg-white/30 dark:bg-gray-800/60 rounded-2xl shadow-md dark:shadow-lg dark:shadow-gray-900/50 backdrop-blur-sm overflow-hidden flex flex-col w-full max-w-sm max-h-[420px]"
            variants={cardVariants}
          >
            {/* Imagen */}
            <div className="relative w-full h-64 md:h-80">
              <Image
                src={teacher.image}
                alt={teacher.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Nombre y badge */}
            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-2">
                {/* CLASE MODIFICADA: Añadido dark:text-white */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{teacher.title}</h3>
                <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">{teacher.badge}</span>
              </div>
              {/* CLASE MODIFICADA: Añadido dark:text-gray-300 */}
              <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{teacher.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}