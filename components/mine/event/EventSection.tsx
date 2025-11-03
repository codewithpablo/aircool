"use client";
import Map from "./MapComponent";
import React, { useRef, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
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




const SeccionEventoMonitor = () => {
  const iconSize = 25;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // Estado para el control realista del arrastre del video
  const [isDragging, setIsDragging] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  // ESTADO DE CARRUSEL: 0 = Video, 1 = Mapa
  const [pageIndex, setPageIndex] = useState(0); 
  const totalPages = 2; // Total de páginas para la barra de progreso

  // Observador de Intersección para animaciones
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

  // Lógica del Video y Guardado de Tiempo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Pausar el video si cambiamos al mapa
    if (pageIndex === 1 && isPlaying) {
      video.pause();
      setIsPlaying(false);
    }
    
    // Si estamos arrastrando la barra, el video no debe forzar la actualización de currentTime
    if (isDragging) return;

    const savedTime = localStorage.getItem("bienalVideoTime");
    if (savedTime) video.currentTime = parseFloat(savedTime);

    const saveTime = () =>
      localStorage.setItem("bienalVideoTime", video.currentTime.toString());
    const updateTime = () => setCurrentTime(video.currentTime);
    const setVideoDuration = () => setDuration(video.duration || 0);
    const handleEnded = () => {
      video.currentTime = 0;
      video.pause();
      setIsPlaying(false);
      setCurrentTime(0);
    };

    video.addEventListener("timeupdate", saveTime);
    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", setVideoDuration);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", saveTime);
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", setVideoDuration);
      video.removeEventListener("ended", handleEnded);
    };
  }, [isDragging, pageIndex, isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
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
    video.currentTime += seconds;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  
  const controlBarVariants: Variants = {
      visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      hidden: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  // Componente de la Barra de Control del Video (Versión Realista con Thumb)
  const ControlBar = () => {
    const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const bar = e.currentTarget.closest('.progress-bar-container') as HTMLDivElement;
      if (!bar) return;
      const rect = bar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      let percentage = clickX / rect.width;
      percentage = Math.max(0, Math.min(1, percentage));
      const video = videoRef.current;
      if (!video) return;
      
      // Aplicar el nuevo tiempo al video solo si no se está arrastrando (para evitar saltos)
      if (isDragging || e.type === 'click' || e.type === 'mousedown') {
          video.currentTime = percentage * (duration || 1);
      }
      setCurrentTime(video.currentTime);
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDragging) {
            handleDrag(e); // Aplica el último cambio
            setIsDragging(false); // Permite que el video retome el control de currentTime
        }
    };
    
    if (pageIndex !== 0) return null; 

    // La barra siempre visible
    const controlsShouldBeVisible = true; 

    const thumbPosition = (currentTime / (duration || 1)) * 100;
    
    return (
      <motion.div 
        // 🚨 CAMBIO DE ESTRUCTURA: Los controles se dividen en dos filas/niveles
        className="absolute bottom-0 left-0 w-full flex flex-col z-40"
        variants={controlBarVariants}
        initial="visible"
        animate="visible"
      >
        
        {/* NIVEL 1: BARRA DE PROGRESO (Ancha y superior) */}
        <div className="progress-bar-container w-full h-3 flex items-center relative cursor-pointer px-3"
             onMouseDown={(e) => {
                 setIsDragging(true);
                 handleDrag(e);
             }}
             onMouseUp={handleMouseUp}
             onMouseMove={(e) => isDragging && handleDrag(e)}
             onClick={handleDrag}
        >
          {/* Fondo de la barra */}
          <div className="h-0.5 bg-gray-500/50 rounded w-full relative">
            
            {/* Progreso de la barra (Color Azul) */}
            <div
              className="h-full bg-blue-500 absolute top-0 left-0 transition-width duration-75"
              style={{ width: `${thumbPosition}%` }}
            />

            {/* THUMB (Círculo Draggable) */}
            <motion.div
                animate={{ 
                    scale: 1, 
                    opacity: 1 
                }}
                transition={{ duration: 0.1 }}
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg pointer-events-none"
                style={{ 
                    left: `${thumbPosition}%`,
                    transform: `translateX(-50%) translateY(-50%)`, 
                }}
            />
          </div>
        </div>

        {/* NIVEL 2: CONTROLES INFERIORES (Botones, Tiempo, Volumen) */}
        <div className="w-full px-3 py-2 flex items-center space-x-2 bg-black/40 rounded-b-3xl backdrop-blur-sm">
            
            {/* 1. Play/Pause */}
            <button onClick={togglePlay} className="text-white hover:scale-110 transition-transform">
              {isPlaying ? <Pause size={iconSize} /> : <Play size={iconSize} />}
            </button>

            {/* 2. Skip Back/Forward (opcional, pero ayuda a la utilidad) */}
            <button onClick={() => skip(-10)} className="text-white hover:scale-110 transition-transform">
              <SkipBack size={iconSize} />
            </button>
            <button onClick={() => skip(10)} className="text-white hover:scale-110 transition-transform">
              <SkipForward size={iconSize} />
            </button>
            
            {/* 3. Indicador de Tiempo (flex-grow para empujar el volumen a la derecha) */}
            <span className="text-white text-xs tabular-nums grow">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            {/* 4. Volumen (Derecha) */}
            <button onClick={toggleMute} className="text-white hover:scale-110 transition-transform">
              {isMuted ? <VolumeX size={iconSize} /> : <Volume size={iconSize} />}
            </button>
        </div>

      </motion.div>
    );
  };
  
  // COMPONENTE DE PÁGINA DE MAPA (Fondo blanco restaurado)
  const MapPage = () => {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-white text-gray-900">
        
        {/* Usamos pt-12 para despejar el área superior (Isla Dinámica y barra de progreso) */}
        <div className="space-y-3 pt-12"> 
          <div className="flex items-center space-x-2">
            <MapPin className="text-blue-500" size={20} />
            <h3 className="text-lg font-bold">Ubicación del Evento</h3>
          </div>
          <p className="text-sm text-gray-600">
            Domo del Centenario, Resistencia, Chaco
          </p>
        </div>
        
        <div className="grow w-full rounded-xl overflow-hidden shadow-lg my-3">
            <Map/> 
        </div>

        <button 
            onClick={() => window.open('https://www.google.com/maps/place/Domo+Del+Centenario/data=!4m2!3m1!1s0x0:0xf99641a09f8495d2?sa=X&ved=1t:2428&ictx=111', '_blank')}
            className="w-full bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors"
        >
            Ver Ruta en Google Maps
        </button>
      </div>
    );
  };

  // Variantes de animación para Framer Motion
  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
    }),
  };

  // Componente de la Barra de Progreso de Historias
  const StoryProgressBar = () => (
      <div className="absolute top-0 left-0 w-full p-2 flex space-x-1 z-30 pointer-events-none">
          {Array.from({ length: totalPages }).map((_, index) => (
              <div key={index} className="h-0.5 flex-1 bg-white/50 rounded-full overflow-hidden">
                  <motion.div
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: index === pageIndex ? "100%" : "0%" }}
                      transition={{ duration: 0.3, type: "tween" }}
                  />
              </div>
          ))}
      </div>
  );
  
  // Función para cambiar de página de forma segura
  const changePage = (direction: number) => {
      setPageIndex(prev => {
          const newIndex = prev + direction;
          if (newIndex >= 0 && newIndex < totalPages) {
              return newIndex;
          }
          return prev;
      });
  };

  return (
    <>
    <section ref={sectionRef} className="min-h-screen flex flex-col bg-linear-to-tl from-blue-400 via-blue-200 to-white text-gray-900">
      
      {/* CONTENEDOR PRINCIPAL: split 50/50 y centrado en el eje Y */}
      <div 
        className="flex flex-col md:flex-row-reverse md:items-center md:justify-center p-8 md:p-12 lg:p-16 xl:p-24 space-y-5 md:space-y-0 md:space-x-12 grow"
      >
        
        {/* 📱 CONTENEDOR DEL IPHONE (SEGUNDA MITAD: 50%) */}
        <div 
          className="w-full md:w-1/2 relative transition-shadow duration-300 mx-auto flex justify-center items-center h-full" 
        > 
          
          <div 
            // ANCHO Y ALTO FIJO MÁS REALISTA PARA IPHONE
            className="relative bg-gray-900 p-1.5 rounded-[3rem] shadow-2xl shadow-gray-900/70 border-4 border-gray-950/90 aspect-9/17 w-full max-w-[280px] max-h-[85vh]"
          >
            
            {/* Detalles del Marco (Bezel) */}
            <div className="absolute top-20 -left-1 w-1 h-6 bg-gray-600 rounded-full" /> 
            <div className="absolute top-32 -left-1 w-1 h-10 bg-gray-600 rounded-full" /> 
            <div className="absolute top-48 -left-1 w-1 h-10 bg-gray-600 rounded-full" /> 
            <div className="absolute top-36 -right-1 w-1 h-16 bg-gray-600 rounded-full" />

            {/* PANTALLA INTERNA Y CARRUSEL CONTAINER */}
            <div className="relative bg-black rounded-[2.5rem] overflow-hidden h-full w-full">
              
              {/* Barra de Progreso de Historias (z-30) */}
              <StoryProgressBar />

              {/* Isla Dinámica (z-20) */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-7 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-2"/>
                  <div className="w-4 h-1 bg-gray-700 rounded-full"/>
              </div>

              {/* NAVEGACIÓN TÁCTIL DELGADA (w-1/12) */}
              <button 
                  onClick={() => changePage(-1)}
                  className={`absolute top-0 left-0 w-1/12 h-full p-2 z-20 transition-opacity flex items-center justify-start ${
                    pageIndex > 0 ? 'cursor-pointer hover:bg-black/10' : 'cursor-default pointer-events-none'
                  }`}
                  aria-label="Página anterior"
                  disabled={pageIndex === 0}
              >
                  {pageIndex > 0 && <ChevronLeft className="text-white/80 transition-opacity" size={30} />}
              </button>
              
              <button 
                  onClick={() => changePage(1)}
                  className={`absolute top-0 right-0 w-1/12 h-full p-2 z-20 transition-opacity flex items-center justify-end ${
                    pageIndex < totalPages - 1 ? 'cursor-pointer hover:bg-black/10' : 'cursor-default pointer-events-none'
                  }`}
                  aria-label="Página siguiente"
                  disabled={pageIndex === totalPages - 1}
              >
                  {pageIndex < totalPages - 1 && <ChevronRight className="text-white/80 transition-opacity" size={30} />}
              </button>


              {/* CONTENEDOR DE PÁGINAS DEL CARRUSEL (visual) */}
              <div 
                className="flex h-full w-[200%] transition-transform duration-500 ease-out" 
                style={{ transform: `translateX(-${pageIndex * 50}%)` }}
              >
                
                {/* === PÁGINA 1: VIDEO === */}
                <div className="w-1/2 h-full shrink-0 relative">
                    <video
                        ref={videoRef}
                        src="/bienal.mp4"
                        className="w-full h-full object-cover cursor-pointer" 
                        muted={isMuted}
                        playsInline
                        onClick={pageIndex === 0 ? togglePlay : undefined}
                    />
                    <ControlBar />
                    <div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 left-0 w-full h-1/4 bg-white opacity-[0.03] mix-blend-overlay"></div></div>
                    {!duration && (<div className="absolute inset-0 flex items-center justify-center bg-black/90 text-gray-500 text-xl font-mono">TECH EVENT LIVE</div>)}
                </div>

                {/* === PÁGINA 2: MAPA === */}
                <div className="w-1/2 h-full shrink-0">
                    <MapPage />
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* Info del evento (PRIMERA MITAD: 50%) */}
        <div 
            className="w-full md:w-1/2 flex flex-col justify-start items-start space-y-4 md:pt-0 grow"
        > 
          <motion.p
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={leftVariants}
            className="text-xl md:text-2xl font-light tracking-widest uppercase text-gray-600"
          >
            Próximo Evento
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={leftVariants}
            // 🚨 CLASES DE ALTO IMPACTO APLICADAS AQUÍ
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight md:tracking-wider text-gray-950"
          >
            <span className="block">Bienal</span>
            <span className="block text-blue-500">Tecnológica</span>
          </motion.h1>

          <motion.div
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={leftVariants}
            className="relative pl-6 md:pl-8 border-l-4 border-blue-500 space-y-2"
          >
            <p className="text-lg md:text-xl font-semibold text-gray-800 flex items-center">
              <MapPin className="inline-block mr-3 text-blue-500" size={24} />
              Domo del Centenario
            </p>
            <p className="text-md font-medium text-gray-600 ml-9">
              Av. de los Inmigrantes 300, Resistencia, Chaco
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-800 flex items-center mt-3">
              <CalendarDays className="inline-block mr-3 text-blue-500" size={24} />
              14 al 17 de Noviembre 2025
            </p>
          </motion.div>
          
          <motion.div
            custom={3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={leftVariants}
            className="mt-5 pt-5 border-t border-gray-300 space-y-4"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              La Bienal Tecnológica es el epicentro de la innovación en la región. Reúne a **más de 50 oradores** de renombre internacional, startups disruptivas y las últimas tendencias en IA, robótica y desarrollo sostenible. ¡No te pierdas la oportunidad de conectar con el futuro!
            </p>
            <a 
                href="#register" 
                className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-[1.02] uppercase tracking-wider"
            >
                Asegura tu Entrada Ahora
            </a>
          </motion.div>

        </div>
      </div>
      
      <div className="w-full">
        <hr className="w-full border-gray-300" />
      </div>
      
    </section>
    </>
  );
};

export default SeccionEventoMonitor;