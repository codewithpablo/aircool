"use client";

import Image from "next/image";
import { testimonios } from "@/constants";

export default function TestimonialCard({ testimonio }: { testimonio: typeof testimonios[0] }) {
  return (
    <div className="border rounded-2xl shadow-lg overflow-hidden break-inside-avoid">
      <div className="relative w-full flex justify-center mt-5">
        <Image
          src={testimonio.foto}
          alt={testimonio.nombre}
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="p-6">
        <h2 className="text-lg text-center font-semibold flex justify-center items-center gap-2">
          {testimonio.nombre}
        </h2>
        <p className="text-gray-500 mt-2 line-clamp-3">{testimonio.comentario}</p>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
          {testimonio.ciudad}, {testimonio.provincia}, {testimonio.pais}
        </div>
      </div>
    </div>
  );
}