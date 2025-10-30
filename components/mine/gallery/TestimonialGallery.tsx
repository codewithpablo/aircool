"use client";

import Image from "next/image";
import { images } from "@/constants";

export default function StaticMasonryGallery() {
  return (
    <section className="w-[90%] mx-auto my-20">
      <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
        Galería de nuestro equipo en acción
      </h2>

      <div className="h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 auto-rows-[200px]">
       
      </div>
    </section>
  );
}
