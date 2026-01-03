'use client';

import React from "react";

const images = Array.from({ length: 25 }, (_, i) => `/TITULO/${i + 1}.jpeg`);

export default function ContinuousSlider() {
  return (
    <div className="relative w-full max-w-3xl h-[500px] overflow-hidden mx-auto rounded-[2.5rem] shadow-lg">
      
      {/* Contenedor de imágenes duplicadas para loop continuo */}
      <div className="flex flex-col space-y-6 animate-slideUp">
        {images.concat(images).map((src, idx) => (
          <div key={idx} className="w-full h-[400px] flex-shrink-0 rounded-[2.5rem] overflow-hidden">
            <img
              src={src}
              alt={`Imagen ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Animación CSS para movimiento continuo */}
      <style jsx>{`
        @keyframes slideUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); } /* mover solo la mitad porque duplicamos */
        }
        .animate-slideUp {
          animation: slideUp 120s linear infinite; /* mucho más lento y relajante */
        }
      `}</style>
    </div>
  );
}
