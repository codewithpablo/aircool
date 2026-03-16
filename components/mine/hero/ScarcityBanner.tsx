"use client";

import { AlertTriangle } from "lucide-react";

export default function ScarcityBanner() {
  const text =
    "Cupos limitados para nuestros cursos. ¡Ingresa al campus como alumno e inscribite!";

  return (
    <div className="w-full overflow-hidden bg-gray-800 dark:bg-gradient-to-r dark:from-gray-950 dark:via-green-900 dark:to-gray-950 text-white py-1.5 font-semibold text-sm flex items-center">
      <AlertTriangle size={16} className="text-yellow-400 mx-3 shrink-0" />

      {/* Carrusel infinito */}
      <div className="relative overflow-hidden flex-1">
        <div
          className="flex whitespace-nowrap items-center animate-marquee"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center mx-6">
              <span>{text}</span>
              {/* Separador simbólico */}
              <span className="mx-6 text-yellow-400 text-base">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
