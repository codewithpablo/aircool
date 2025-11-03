"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Play,
  Pause,
  Volume,
  VolumeX,
  SkipBack,
  SkipForward,
  Maximize,
  Minimize,
} from "lucide-react";

const SeccionEventoMonitor = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const monitorRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const iconSize = 25;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const savedTime = localStorage.getItem("bienalVideoTime");
    if (savedTime) video.currentTime = parseFloat(savedTime);

    const saveTime = () =>
      localStorage.setItem("bienalVideoTime", video.currentTime.toString());

    const updateTime = () => {
      if (!isDragging) setCurrentTime(video.currentTime);
    };

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
  }, [isDragging]);

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

  const ControlBar = () => {
    const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const bar = e.currentTarget;
      const rect = bar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      let percentage = clickX / rect.width;
      percentage = Math.max(0, Math.min(1, percentage));
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = percentage * (duration || 1);
      setCurrentTime(video.currentTime);
    };

    return (
      <motion.div className="absolute bottom-0 left-0 w-full px-3 py-2 flex items-center space-x-2 bg-black/40">
        <button onClick={togglePlay} className="text-white hover:scale-110 transition-transform">
          {isPlaying ? <Pause size={iconSize} /> : <Play size={iconSize} />}
        </button>
        <button onClick={() => skip(-10)} className="text-white hover:scale-110 transition-transform">
          <SkipBack size={iconSize} />
        </button>
        <button onClick={() => skip(10)} className="text-white hover:scale-110 transition-transform">
          <SkipForward size={iconSize} />
        </button>
        <button onClick={toggleMute} className="text-white hover:scale-110 transition-transform">
          {isMuted ? <VolumeX size={iconSize} /> : <Volume size={iconSize} />}
        </button>

        <div
          className="flex-1 h-1 bg-gray-500/50 rounded overflow-hidden relative cursor-pointer"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={(e) => isDragging && handleDrag(e)}
          onClick={handleDrag}
        >
          <div
            className="h-full bg-blue-500"
            style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
          ></div>
        </div>

        <span className="text-white text-xs tabular-nums">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="text-white hover:scale-110 transition-transform"
        >
          {isFullscreen ? <Minimize size={iconSize} /> : <Maximize size={iconSize} />}
        </button>
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-white text-gray-900">
      {/* Columna izquierda */}
      <div className="flex flex-col justify-center items-start p-8 md:p-12 lg:p-16 xl:p-24 w-full lg:w-1/2">
        <p className="text-xl md:text-2xl font-light tracking-widest uppercase text-gray-600 mb-6">
          Próximo Evento
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-gray-950">
          <span className="block">Bienal</span>
          <span className="block text-blue-500">Tecnológica</span>
        </h1>
        <div className="relative pl-6 md:pl-8 border-l-4 border-blue-500 mb-10">
          <p className="text-lg md:text-xl font-bold mb-1 text-gray-800 flex items-center">
            <MapPin className="inline-block mr-3 text-blue-500" size={24} />
            Domo del Centenario
          </p>
          <p className="text-md font-medium text-gray-600 ml-9">Resistencia, Chaco</p>
          <p className="text-lg md:text-xl font-bold mt-4 text-gray-800 flex items-center">
            <CalendarDays className="inline-block mr-3 text-blue-500" size={24} />
            14 al 17 de Diciembre
          </p>
        </div>
        <p className="text-sm uppercase tracking-[.2em] font-medium mt-8 text-gray-500">
          Cultura & Innovación
        </p>
      </div>

      {/* Columna derecha: monitor/video */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center py-12">
        <AnimatePresence>
          {!isFullscreen && (
            <motion.div
              ref={monitorRef}
              key="monitor-normal"
              layoutId="monitor"
              className="flex flex-col items-center justify-center max-w-xs mx-auto sm:max-w-full sm:mx-0 group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div
                className="
                  relative overflow-hidden shadow-2xl
                  border-8 border-gray-900 bg-gray-900
                  rounded-[3rem] sm:rounded-xl
                  aspect-9/16 sm:aspect-4/3
                  w-64 sm:w-3/4 lg:w-[500px]
                  transition-all duration-500
                "
              >
                <video
                  ref={videoRef}
                  src="/bienal.mp4"
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  playsInline
                />
                <div className="absolute inset-0 bg-black/20" />
                <ControlBar />
              </div>
              <div className="hidden sm:block relative w-2/5 h-8 bg-gray-800 rounded-b-lg mt-0 shadow-xl z-10">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-3 bg-gray-700 rounded-b-lg"></div>
              </div>
            </motion.div>
          )}

          {isFullscreen && (
            <motion.div
              key="monitor-full"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                layoutId="monitor"
                className="relative w-full max-w-[90vw] h-[80vh] bg-gray-900 rounded-xl overflow-hidden"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <video
                  ref={videoRef}
                  src="/bienal.mp4"
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  autoPlay={isPlaying}
                  playsInline
                />
                <ControlBar />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SeccionEventoMonitor;
