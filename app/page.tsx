"use client"
import { useState, useEffect } from "react";
import Hero from "@/components/mine/hero/Hero";
import HeroMenu from "@/components/mine/hero/HeroMenu";
import { motion } from "framer-motion";
import ScarcityBanner from "@/components/mine/hero/ScarcityBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Map, MapPin, ArrowBigRight } from "lucide-react";
import ActionSection from "@/components/mine/takeAction/ActionSection";
import UnitsSection from "@/components/mine/learn/UnitsSection";
import Footer from "@/components/mine/other/Footer";
import About from "@/components/mine/about/About";

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
      <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-white via-white to-blue-500">
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
           <>
            <ActionSection />
            <UnitsSection />
            <About />
            <Footer />
            
           </>
          
      
      )}
    </div>
  );
}
