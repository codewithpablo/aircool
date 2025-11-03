"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/mine/hero/Hero";
import HeroMenu from "@/components/mine/hero/HeroMenu";
import { motion } from "framer-motion";
import ScarcityBanner from "@/components/mine/hero/ScarcityBanner";
// Importaciones de componentes
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Map, MapPin, ArrowBigRight } from "lucide-react";
import ActionSection from "@/components/mine/takeAction/ActionSection";
import UnitsSection from "@/components/mine/learn/UnitsSection";
import Footer from "@/components/mine/other/Footer";
import About from "@/components/mine/about/About";
import EventSection from "@/components/event/EventSection";

export default function Home() {
  // 1. Estado para controlar si es la primera visita (true al inicio para mostrar el logo)
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  // 2. Estado para controlar si el contenido principal ya debe ser visible
  const [showContent, setShowContent] = useState(false);

  // La duración de la animación del logo (debe coincidir con la transición de 'motion.img')
  const LOGO_ANIMATION_DURATION = 5000; // 5 segundos

  useEffect(() => {
    // 1. Verificar si ya visitó el sitio
    const hasVisited = localStorage.getItem("hasVisitedSite");

    if (hasVisited) {
      // **Visita Repetida:** Omitir el logo y mostrar el contenido inmediatamente
      setIsFirstVisit(false);
      setShowContent(true);
    } else {
      // **Primera Visita:**
      // a. Iniciar el temporizador para la animación del logo.
      const timer = setTimeout(() => {
        // Después de que la animación termina:
        setShowContent(true);
        // b. **GUARDAR** en localStorage para visitas futuras
        localStorage.setItem("hasVisitedSite", "true");
      }, LOGO_ANIMATION_DURATION);

      return () => clearTimeout(timer);
    }
  }, []);

  // --- LÓGICA DE RENDERIZADO ---

  // Si NO es la primera visita, renderiza solo el contenido sin el logo.
  if (!isFirstVisit) {
    return (
      <>
        <div className="relative z-20">
          <ScarcityBanner />
          <HeroMenu />
          <Hero />
        </div>
        <ActionSection />
        <UnitsSection />
        <About />
        <EventSection />
        <Footer />
      </>
    );
  }

  // Lógica para la PRIMERA visita: Muestra el logo y luego el contenido
  return (
    <div>
      <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-white via-white to-blue-500">
        {/* LOGO: Solo se muestra si es la primera visita (isFirstVisit === true)
          Y si el contenido principal aún no es visible (!showContent).
        */}
        {isFirstVisit && !showContent && (
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
              duration: 5, // COINCIDE con LOGO_ANIMATION_DURATION
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 1],
            }}
            className="absolute inset-0 w-full h-full object-contain z-10 bg-white" // Agregué bg-white para un fade limpio
          />
        )}

        {/* HERO y HERO MENU: Solo si showContent es true */}
        {showContent && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }} // fuera de pantalla y invisible
            animate={{ x: 0, opacity: 1 }}       // llega a su posición y se hace visible
            transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }} // Pequeño delay para que el logo se haya ido
            className="relative z-20"
          >
            <ScarcityBanner />
            <HeroMenu />
            <Hero />
          </motion.div>
        )}
      </div>

      {/* CONTENIDO RESTANTE: Solo si showContent es true */}
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