"use client"
import About from "@/components/mine/about/About";
import Hero from "@/components/mine/hero/Hero";
import CoursesGallery from "@/components/mine/courses/CoursesGallery";
import HeroMenu from "@/components/mine/hero/HeroMenu";
import TestimonialSection from "@/components/mine/gallery/TestimonialSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
  <div className="h-screen relative overflow-hidden bg-linear-to-br from-white via-white to-blue-500">
  {/* Logo animado con fade y movimiento */}
  <motion.img
    src="/aircool.png"
    initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
    animate={{
      scale: [0, 1.1, 1],
      opacity: [0, 1, 1, 0], // fade al final
      y: [0, -20, 0],
      x: [0, 0, 300], // se desliza hacia la derecha
    }}
    transition={{
      duration: 5,
      ease: "easeInOut",
      times: [0, 0.3, 0.6, 1],
    }}
    className="absolute inset-0 w-full h-full object-contain z-10"
  />

  {/* HeroMenu y Hero que entran desde la izquierda */}
  <motion.div
    initial={{ x: "-100%" }} // fuera de pantalla a la izquierda
    animate={{ x: 0 }}        // llega a su posición
    transition={{ delay: 4, duration: 1, ease: "easeInOut" }} // aparece justo cuando el logo termina
    className="relative z-20"
  >
    <HeroMenu />
    <Hero />
  </motion.div>
</div>




     <div className="my-10">
     
         <CoursesGallery direction="left" />
      <CoursesGallery direction="right" />
     </div>
        <About />

    </div>
  );
}
