"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/mine/hero/Hero";

import { motion, Variants } from "framer-motion";
import ScarcityBanner from "@/components/mine/hero/ScarcityBanner";
import ActionSection from "@/components/mine/takeAction/ActionSection";
import UnitsSection from "@/components/mine/learn/UnitsSection";
import Footer from "@/components/mine/other/Footer";
import About from "@/components/mine/about/About";
import EventSection from "@/components/mine/event/EventSection";
import { LogIn } from "lucide-react"; // ✅ Ícono agregado
import FAQChat from "@/components/FAQ/FAQChat";
import Link from "next/link";
import HeroBrandsCarrousel from "@/components/mine/hero/HeroBrandsCarrousel";

// --- VARIANTES DE ANIMACIÓN ---
const contentVariants: Variants = {
  hidden: { opacity: 0, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const childVariants: Variants = {
  hidden: (custom) => ({
    opacity: 0,
    x: custom.x,
    y: custom.y || 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

// --- COMPONENTE PRINCIPAL ---
export default function Home() {
  const [isFirstVisitInSession, setIsFirstVisitInSession] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const LOGO_ANIMATION_DURATION = 2500; // 2.5 segundos

  useEffect(() => {
    const hasSeenLogoInSession = sessionStorage.getItem("hasSeenLogoInSession");

    if (hasSeenLogoInSession) {
      setIsFirstVisitInSession(false);
      setShowContent(true);
    } else {
      const timer = setTimeout(() => {
        setShowContent(true);
        sessionStorage.setItem("hasSeenLogoInSession", "true");
        setIsFirstVisitInSession(false);
      }, LOGO_ANIMATION_DURATION);

      return () => clearTimeout(timer);
    }
  }, []);

  // --- RENDER ---
  if (!isFirstVisitInSession && showContent) {
    return (
      <motion.div
        initial={false}
        animate="visible"
        className="bg-white dark:bg-gray-950 transition-colors duration-500"
      >
        {/* Gradiente solo en modo claro */}
        <div
          className={`
            relative z-20 
           
            dark:bg-gray-950 dark:bg-none
            transition-colors duration-500
          `}
        >

          <div >
            <ScarcityBanner />
          <Hero />
          </div>
         
        </div>

        <ActionSection />
        <UnitsSection />
        <About />
        <EventSection />
          <FAQChat />

        <Footer />
              
        {/* --- BOTÓN FIJO DERECHA --- */}
        <Link href="/courses">
            <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
          className="
            fixed right-4 bottom-6 z-50
            bg-[#00aee8] hover:bg-[#0095c6]
            text-white font-semibold
            flex items-center gap-2
            px-6 py-3 rounded-full shadow-xl
            transition-all duration-300
            hover:scale-105
          "
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <LogIn className="w-5 h-5" />
          Asegurá tu lugar
        </motion.button>
        </Link>
      </motion.div>
    );
  }

  // Primera visita (animación del logo)
  return (
    <div>
      <div
        className={`
          min-h-screen relative overflow-hidden 
          bg-gradient-to-br from-white via-white to-blue-500
          dark:bg-gray-950 dark:bg-none
          transition-colors duration-500
        `}
      >
        {/* LOGO ANIMADO */}
        {isFirstVisitInSession && !showContent && (
          <motion.img
            src="/aircool.png"
            initial={{ scale: 0, opacity: 0, y: 0 }}
            animate={{
              scale: [0, 1.1, 1, 1],
              opacity: [0, 1, 1, 0],
              y: [0, -20, 0, 0],
              x: [0, 0, 0, 300],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              times: [0, 0.4, 0.8, 1],
            }}
            className="absolute inset-0 w-full h-full object-contain z-10"
          />
        )}

        {/* CONTENIDO ANIMADO */}
        {showContent && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="relative z-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ScarcityBanner />
              <Hero />
            </motion.div>

            <motion.div variants={childVariants} custom={{ x: -100 }}>
              <ActionSection />
            </motion.div>

            <motion.div variants={childVariants} custom={{ x: 100 }}>
              <UnitsSection />
            </motion.div>

            <motion.div variants={childVariants} custom={{ x: -100 }}>
              <About />
            </motion.div>

            <motion.div variants={childVariants} custom={{ x: 100 }}>
              <EventSection />
            </motion.div>

            <motion.div variants={childVariants} custom={{ x: 0, y: 50 }}>
              <Footer />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
