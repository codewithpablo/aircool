"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function ScarcityBanner() {
  const text =
    "Cupos limitados para nuestros cursos. ¡Ingresa al campus como alumno e inscribite!";

  return (
    <div className="w-full overflow-hidden bg-gray-800 text-white py-1.5 font-semibold text-sm flex items-center">
      <AlertTriangle size={16} className="text-yellow-400 mx-3 shrink-0" />

      {/* Carrusel infinito */}
      <div className="relative overflow-hidden flex-1">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center mx-6">
              <span>{text}</span>
              {/* Separador simbólico */}
              <span className="mx-6 text-yellow-400 text-base">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
