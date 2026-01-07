"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { LogIn } from "lucide-react";

import Hero from "@/components/mine/hero/Hero";
import ScarcityBanner from "@/components/mine/hero/ScarcityBanner";
import ActionSection from "@/components/mine/takeAction/ActionSection";
import UnitsSection from "@/components/mine/learn/UnitsSection";
import About from "@/components/mine/about/About";
import EventSection from "@/components/mine/event/EventSection";
import StatsSection from "@/components/mine/stats/StatsSection";
import FAQChat from "@/components/FAQ/FAQChat";
import Footer from "@/components/mine/other/Footer";

// ---------------- VARIANTES ----------------
const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const childVariants: Variants = {
  hidden: (custom: { x?: number; y?: number }) => ({
    opacity: 0,
    x: custom?.x ?? 0,
    y: custom?.y ?? 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// ---------------- COMPONENTE ----------------
export default function Home() {
  const [isFirstVisitInSession, setIsFirstVisitInSession] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("hasSeenLogoInSession");
    if (seen) {
      setIsFirstVisitInSession(false);
      setShowContent(true);
    }
  }, []);

  // ================= SIN INTRO =================
  if (!isFirstVisitInSession && showContent) {
    return (
      <motion.div
        initial={false}
        animate="visible"
        className="bg-white dark:bg-gray-950 transition-colors duration-500"
      >
        <div className="relative z-20">
          <ScarcityBanner />
          <Hero />
        </div>

        <ActionSection />
        <UnitsSection />
        <About />
        <EventSection />
        <StatsSection />
        <FAQChat />
        <Footer />

        {/* BOTÓN FIJO */}
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
              hover:scale-105 transition
            "
          >
            <LogIn className="w-5 h-5" />
            Asegurá tu lugar
          </motion.button>
        </Link>
      </motion.div>
    );
  }

  // ================= INTRO FULLSCREEN =================
  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-transparent">
      {/* VIDEO FULL VIEWPORT */}
      {isFirstVisitInSession && !showContent && (
        <motion.video
          src="/3d.mp4"
          autoPlay
          muted
          playsInline
          onTimeUpdate={(e) => {
            const video = e.currentTarget;
            if (video.duration - video.currentTime < 0.6) {
              setFadeOut(true);
            }
          }}
          onEnded={() => {
            setShowContent(true);
            sessionStorage.setItem("hasSeenLogoInSession", "true");
            setIsFirstVisitInSession(false);
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: fadeOut ? 0 : 1,
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut" },
            scale: { duration: 1.2, ease: "easeOut" },
          }}
          className="
            absolute inset-0
            w-full h-full
            object-cover
            z-10
          "
        />
      )}

      {/* CONTENIDO */}
      {showContent && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="relative z-20 bg-white dark:bg-gray-950"
        >
          <ScarcityBanner />
          <Hero />

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

          <motion.div variants={childVariants} custom={{ y: 80 }}>
            <StatsSection />
          </motion.div>

          <motion.div variants={childVariants} custom={{ y: 50 }}>
            <Footer />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
