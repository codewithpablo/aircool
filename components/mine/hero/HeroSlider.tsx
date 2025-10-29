"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const tools = [
  { id: 1, name: "Plataforma Intuitiva", img: "/1.jpeg", description: "Accede a todos los módulos y organiza tu aprendizaje de manera fácil." },
  { id: 2, name: "Capacitación Económica", img: "/2.jpg", description: "Realiza cursos prácticos y accesibles, sin afectar tu presupuesto." },
  { id: 3, name: "Profesores Capacitados", img: "/3.jpg", description: "Recibe orientación y retroalimentación de expertos en refrigeración." },
  { id: 4, name: "Material Didáctico", img: "/4.jpg", description: "Visualiza esquemas y diagramas claros para entender los sistemas de refrigeración." },
  { id: 5, name: "Soporte Personalizado", img: "/5.jpg", description: "Resuelve tus dudas rápidamente con asesoramiento individualizado." },
  { id: 6, name: "Acceso Rápido", img: "/6.jpg", description: "Encuentra los materiales destacados y novedades del campus en segundos." },
];

const radius = 160;

const HeroSlider = () => {
  const [active, setActive] = useState<number | "start">("start");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Solo renderiza después del montaje
  }, []);

  if (!mounted) return null; // evita SSR

  return (
    <div className="w-[500px] h-[500px] flex justify-center items-center relative">
      {/* Contenedor que gira */}
      <motion.div
        className="relative w-[300px] h-[300px]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {tools.map((tool, index) => {
          const angle = (index / tools.length) * 2 * Math.PI;
          // Redondeamos para evitar errores de hidratación
          const x = Math.round(radius * Math.cos(angle) * 1000) / 1000;
          const y = Math.round(radius * Math.sin(angle) * 1000) / 1000;

          return (
            <motion.button
              key={tool.id}
              className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full overflow-hidden cursor-pointer
                ${active === tool.id ? "shadow-2xl ring-4 ring-blue-500" : "shadow-md"}`}
              style={{ x, y }}
              onClick={() => setActive(tool.id)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 150 }}
              whileHover={{ scale: 1.2, transition: { duration: 0.4 } }}
            >
              <motion.img
                src={tool.img}
                alt={tool.name}
                className="w-full h-full object-cover rounded-full"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              />
            </motion.button>
          );
        })}
      </motion.div>

      {/* Card central */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center 
                   bg-blue-500 text-white px-4 py-3 rounded-xl shadow-lg text-center w-40 h-28"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {active === "start" ? (
          <span className="text-xs text-center font-semibold pt-5">
            Haz click en los círculos para ver los beneficios de estudiar con AirCool
          </span>
        ) : (
          <>
            <span className="font-bold text-sm truncate">
              {tools.find(t => t.id === active)?.name}
            </span>
            <span className="text-xs mt-1 overflow-hidden text-ellipsis">
              {tools.find(t => t.id === active)?.description}
            </span>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default HeroSlider;
