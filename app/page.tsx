"use client"
import { useState, useEffect } from "react";
import Hero from "@/components/mine/hero/Hero";
import HeroMenu from "@/components/mine/hero/HeroMenu";
import { motion } from "framer-motion";
import ScarcityBanner from "@/components/mine/hero/ScarcityBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Map, MapPin, ArrowBigRight } from "lucide-react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
const fechas = ["14", "15", "16", "17"];

  // Mostrar contenido después de 5s (duración del logo)
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 5000);
    return () => clearTimeout(timer);
  }, []);

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

        {/* HeroMenu y Hero solo si showContent es true */}
        {showContent && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }} // fuera de pantalla y invisible
            animate={{ x: 0, opacity: 1 }}       // llega a su posición y se hace visible
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative z-20"
          >
            <ScarcityBanner />
            <HeroMenu />
            <Hero />
            
          </motion.div>
        )}
      </div>

      {/* Contenido restante solo si showContent es true */}
      {showContent && (
           <div className="fixed right-0 bottom-24 z-30 group">
      <div className="relative">
        {/* Card que se desliza */}

{/* Card que se desliza con rotación */}
<div className="group relative w-full max-w-md transform translate-x-[90%] group-hover:translate-x-0 group-hover:rotate-0 rotate-6 transition-transform duration-700 ease-out origin-right">
      <Card
        className="p-5 relative overflow-hidden rounded-2xl shadow-xl backdrop-blur-md border border-white/20 bg-white/40 text-gray-900 dark:text-white transition-all duration-500 hover:scale-[1.02]"
      >
        {/* Fondo con patrón y brillo */}
        <div
          className="absolute inset opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
              radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-blue-400/10" />

        <CardContent className="relative flex flex-col items-center justify-center gap-5 py-8 text-center">
          {/* Título */}
          <h3 className="text-3xl font-extrabold tracking-tight">
            Próximo evento
          </h3>

          {/* Lugar */}
          <div className="flex flex-col items-start gap-3 text-gray-900 dark:text-gray-200 mt-1">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-blue-500" />
              <span className="text-lg font-semibold">
                Domo del Centenario
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Map size={20} className="text-blue-500" />
              <span className="text-lg font-semibold">
                Resistencia, Chaco
              </span>
            </div>
          </div>

          {/* Mes */}
          <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2 tracking-wide">
            Mes de Noviembre
          </p>

          {/* Fechas */}
          <div className="flex justify-center gap-8 mt-2">
            {fechas.map((dia) => (
              <div
                key={dia}
                className="flex flex-col items-center gap-1 hover:scale-110 transition-transform"
              >
                <Calendar size={22} className="text-blue-500" />
                <p className="text-lg font-medium">{dia}</p>
              </div>
            ))}
          </div>

          {/* Botón */}
          <Button
            variant="default"
            size="lg"
            className="mt-5 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all"
          >
            Asegurar mi lugar
          </Button>
        </CardContent>
      </Card>
    </div>
        {/* Barra visible con texto y flecha horizontal */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-28 h-20 bg-blue-500 rounded-l-md flex flex-col items-center justify-center cursor-pointer group-hover:opacity-0 transition-opacity duration-300">
          <p className="text-white text-xs text-center font-semibold">
            ¡No te pierdas nuestro
            <br />
            próximo evento!
          </p>
          {/* Flecha animada horizontal */}
          <ArrowBigRight
            size={20}
            className="text-white mt-1 animate-[slideRight_1s_ease-in-out_infinite]"
          />
        </div>
      </div>

      {/* Animación personalizada con Tailwind */}
      <style jsx>{`
        @keyframes slideRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>
    </div>
          
      
      )}
    </div>
  );
}
