"use client";

import Image from "next/image";
import { testimonios } from "@/constants";

export default function TestimonialCard({
  testimonio,
}: {
  testimonio: (typeof testimonios)[0];
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-2xl shadow-md bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 flex flex-col items-center text-center">
      
      {/* Foto circular */}
      <div className="relative w-24 h-24 mb-4">
        <Image
          src={testimonio.foto}
          alt={testimonio.nombre}
          width={96}
          height={96}
          className="rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
        />
      </div>

      {/* Nombre */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        {testimonio.nombre}
      </h2>

      {/* Comentario */}
      <p className="text-gray-600 dark:text-gray-400 mt-3 line-clamp-4 leading-relaxed">
        “{testimonio.comentario}”
      </p>

      {/* Ubicación */}
      <div className="mt-4 text-sm text-gray-400">
        {testimonio.ciudad}, {testimonio.provincia}, {testimonio.pais}
      </div>
    </div>
  );
}
