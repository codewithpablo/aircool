'use client';
import Map from "./MapComponent";
import React, { useRef, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Play,
  Pause,
  Volume,
  VolumeX,
  SkipBack,
  SkipForward,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- Animaciones ---
const leftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
};

const phoneVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.5, type: "spring", stiffness: 70, damping: 15 },
  },
};

const SeccionEventoMonitor = () => {
  const iconSize = 22;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = 2;

  // Detectar si la sección está en vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Control del video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const setVideoDuration = () => setDuration(video.duration || 0);
    const handleEnded = () => {
      setIsPlaying(false);
      video.currentTime = 0;
    };

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", setVideoDuration);
    video.addEventListener("ended", handleEnded);

    // Reproduce automáticamente sin sonido
    video.muted = true;
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", setVideoDuration);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const skip = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(duration, video.currentTime + seconds));
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const changePage = (direction: number) => {
    setPageIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex >= 0 && newIndex < totalPages) return newIndex;
      return prev;
    });
  };

  const MapPage = () => (
    <div className="w-full h-full p-4 flex flex-col justify-between bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative z-20">
      <div className="space-y-3 pt-12">
        <div className="flex items-center space-x-2">
          <MapPin className="text-blue-500" size={20} />
          <h3 className="text-lg font-bold">Ubicación del Evento</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Domo del Centenario, Resistencia, Chaco
        </p>
      </div>
      <div className="grow w-full rounded-xl overflow-hidden shadow-lg my-3 relative z-10">
        <Map />
      </div>
      <button
        onClick={() =>
          window.open(
            "https://www.google.com/maps?q=Domo+del+Centenario,+Resistencia,+Chaco",
            "_blank"
          )
        }
        className="z-30 w-full bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors"
      >
        Ver Ruta en Google Maps
      </button>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col bg-gradient-to-tl from-blue-400 via-blue-200 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950 text-gray-900 dark:text-gray-100"
    >
      <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-center p-8 md:p-12 lg:p-16 xl:p-24 space-y-5 md:space-y-0 md:space-x-12 grow">
        
        {/* 📱 Teléfono */}
        <motion.div
          className="w-full md:w-1/2 relative mx-auto flex justify-center items-center h-full"
          variants={phoneVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative bg-gray-900 p-1.5 rounded-[3rem] shadow-2xl border-4 border-gray-950/90 aspect-[9/17] w-full max-w-[280px] max-h-[85vh] z-10">
            
            {/* Pantalla */}
            <div className="relative bg-black rounded-[2.5rem] overflow-hidden h-full w-full">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-7 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-2" />
                <div className="w-4 h-1 bg-gray-700 rounded-full" />
              </div>

              {/* Carrusel */}
              <div
                className="flex h-full w-[200%] transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${pageIndex * 50}%)` }}
              >
                {/* Página Video */}
                <div className="w-1/2 h-full shrink-0 relative">
                  <video
                    ref={videoRef}
                    src="/bienal.mp4"
                    className="w-full h-full object-cover cursor-pointer"
                    muted={isMuted}
                    playsInline
                    onClick={togglePlay}
                  />
                  {/* Controles */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-2 px-3 flex flex-col items-center space-y-2 z-30 pointer-events-auto">
                    <div className="flex items-center justify-center space-x-4">
                      <button onClick={() => skip(-10)}>
                        <SkipBack className="text-white" size={iconSize} />
                      </button>
                      <button onClick={togglePlay}>
                        {isPlaying ? (
                          <Pause className="text-white" size={iconSize} />
                        ) : (
                          <Play className="text-white" size={iconSize} />
                        )}
                      </button>
                      <button onClick={() => skip(10)}>
                        <SkipForward className="text-white" size={iconSize} />
                      </button>
                      <button onClick={toggleMute}>
                        {isMuted ? (
                          <VolumeX className="text-white" size={iconSize} />
                        ) : (
                          <Volume className="text-white" size={iconSize} />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-between w-full text-xs text-white">
                      <span>{formatTime(currentTime)}</span>
                      <div className="w-3/4 h-1 bg-gray-400 rounded-full">
                        <div
                          className="h-1 bg-blue-500 rounded-full"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                </div>

                {/* Página Mapa */}
                <div className="w-1/2 h-full shrink-0 relative">
                  <MapPage />
                </div>
              </div>

              {/* Flechas dentro del celular */}
              <div className="absolute inset-y-0 flex items-center justify-between w-full px-3 z-40 pointer-events-none">
                <button
                  onClick={() => changePage(-1)}
                  disabled={pageIndex === 0}
                  className={`p-1 rounded-full transition pointer-events-auto ${
                    pageIndex === 0
                      ? "opacity-40 cursor-not-allowed"
                      : "bg-black/40 hover:bg-black/60"
                  }`}
                >
                  <ChevronLeft className="text-white" size={20} />
                </button>
                <button
                  onClick={() => changePage(1)}
                  disabled={pageIndex === totalPages - 1}
                  className={`p-1 rounded-full transition pointer-events-auto ${
                    pageIndex === totalPages - 1
                      ? "opacity-40 cursor-not-allowed"
                      : "bg-black/40 hover:bg-black/60"
                  }`}
                >
                  <ChevronRight className="text-white" size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ℹ️ Info del evento */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start space-y-4 md:pt-0 grow">
          <motion.p
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={leftVariants}
            className="text-xl md:text-2xl font-light tracking-widest uppercase text-gray-600 dark:text-gray-400"
          >
            Próximo Evento
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={leftVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-gray-950 dark:text-white"
          >
            <span className="block">Bienal</span>
            <span className="block text-blue-400">Tecnológica</span>
          </motion.h1>

          <motion.div
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={leftVariants}
            className="relative pl-6 md:pl-8 border-l-4 border-blue-500 space-y-2"
          >
            <p className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
              <MapPin className="inline-block mr-3 text-blue-500" size={24} />
              Domo del Centenario
            </p>
            <p className="text-md font-medium text-gray-600 dark:text-gray-400 ml-9">
              Av. de los Inmigrantes 300, Resistencia, Chaco
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center mt-3">
              <CalendarDays className="inline-block mr-3 text-blue-500" size={24} />
              14 al 17 de Noviembre 2025
            </p>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={leftVariants}
            className="mt-5 pt-5 border-t border-gray-300 dark:border-gray-700 space-y-4"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              La Bienal Tecnológica es el epicentro de la innovación en la región.
              Reúne a <strong>más de 50 oradores</strong> de renombre internacional,
              startups disruptivas y las últimas tendencias en IA, robótica y desarrollo sostenible.
            </p>
            <a
              href="#register"
              className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition-transform hover:scale-[1.02] tracking-wider"
            >
              Confirmar Asistencia
            </a>
          </motion.div>
        </div>
      </div>
      <hr className="w-full border-gray-300 dark:border-gray-700" />
    </section>
  );
};

export default SeccionEventoMonitor;
