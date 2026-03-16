"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { LogIn } from "lucide-react";

/* ===============================
   ABOVE THE FOLD (Carga inmediata)
================================= */

import Hero from "@/components/mine/hero/Hero";
import ScarcityBanner from "@/components/mine/hero/ScarcityBanner";

/* ===============================
   BELOW THE FOLD (Lazy Load)
================================= */

const ActionSection = dynamic(() =>
  import("@/components/mine/takeAction/ActionSection")
);

const UnitsSection = dynamic(() =>
  import("@/components/mine/learn/UnitsSection")
);

const About = dynamic(() =>
  import("@/components/mine/about/About")
);

const EventSection = dynamic(() =>
  import("@/components/mine/event/EventSection")
);

const StatsSection = dynamic(() =>
  import("@/components/mine/stats/StatsSection")
);

const FAQChat = dynamic(() =>
  import("@/components/mine/FAQ/FAQChat")
);

const Footer = dynamic(() =>
  import("@/components/mine/other/Footer")
);

/* ===============================
   COMPONENT
================================= */

export default function Home() {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenLogoInSession");
    setShowIntro(!hasSeenIntro);
  }, []);

  if (showIntro === null) return null;

  return showIntro ? (
    <Intro
      isFadingOut={isFadingOut}
      setIsFadingOut={setIsFadingOut}
      setShowIntro={setShowIntro}
    />
  ) : (
    <MainContent />
  );
}

/* ===============================
   INTRO COMPONENT
================================= */

function Intro({
  isFadingOut,
  setIsFadingOut,
  setShowIntro,
}: {
  isFadingOut: boolean;
  setIsFadingOut: (value: boolean) => void;
  setShowIntro: (value: boolean) => void;
}) {
  return (
    <div className="relative w-full min-h-screen bg-black">
      <video
        src="/3d.mp4"
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster="/preview.jpg"
        onTimeUpdate={(e) => {
          const video = e.currentTarget;
          if (video.duration - video.currentTime < 0.5) {
            setIsFadingOut(true);
          }
        }}
        onEnded={() => {
          sessionStorage.setItem("hasSeenLogoInSession", "true");
          setShowIntro(false);
        }}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-500
          ${isFadingOut ? "opacity-0" : "opacity-100"}
        `}
      />
    </div>
  );
}

/* ===============================
   MAIN CONTENT COMPONENT
================================= */

function MainContent() {
  return (
    <div className="w-full transition-colors duration-300">

      {/* HERO */}
      <div className="relative z-20 w-full">
        <ScarcityBanner />
        <Hero />
      </div>

      {/* SECTIONS */}
      <ActionSection />
      <UnitsSection />
      <About />
      <EventSection />
      <StatsSection />
      <FAQChat />
      <Footer />

      {/* CTA BUTTON */}
      <div className="hidden md:block fixed bottom-4 right-4 sm:right-6 z-50">
        <Link
          href="/courses"
          className="
      bg-[#00aee8] hover:bg-[#0095c6]
      text-white font-semibold
      flex items-center justify-center gap-2
      px-5 py-3
      text-sm sm:text-base
      rounded-full shadow-xl
      hover:scale-105 transition-all
    "
        >
          <LogIn className="w-5 h-5" />
          Asegurá tu lugar
        </Link>
      </div>
    </div>
  );
}