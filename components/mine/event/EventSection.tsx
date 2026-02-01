"use client";
import Map from "./MapComponent";
import React, { useRef, useState, useEffect } from "react";
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

// --- Cinematic background ---
const CinematicBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-visible z-0">
    <div className="absolute top-[-30%] left-[-20%] w-[800px] h-[800px] rounded-full bg-cyan-300/20 dark:bg-cyan-500/10 blur-[180px]" />
  </div>
);

const SeccionEventoMonitor = () => {
  const iconSize = 22;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = 2;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const setVideoDuration = () => setDuration(video.duration || 0);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", setVideoDuration);

    video.muted = true;
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => { });

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", setVideoDuration);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.paused ? video.play() : video.pause();
    setIsPlaying(!video.paused);
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
    video.currentTime = Math.max(
      0,
      Math.min(duration, video.currentTime + seconds)
    );
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const changePage = (direction: number) => {
    setPageIndex((prev) => {
      const next = prev + direction;
      if (next >= 0 && next < totalPages) return next;
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

      {/* MOBILE ONLY: limitar alto */}
      <div className="grow w-full rounded-xl overflow-hidden shadow-lg my-3 relative z-10 max-sm:max-h-[45vh]">
        <Map />
      </div>

      <button className="z-30 w-full bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-2xl hover:scale-[1.03]">
        Ver Ruta en Google Maps
      </button>
    </div>
  );

  return (
    <section className="relative   lg:min-h-screen flex flex-col  overflow-visible">
      <CinematicBackground />

      {/* MOBILE ONLY: orden natural */}
      <div className="flex flex-col gap-20 pt-20 max-sm:flex-col-reverse md:flex-row-reverse md:items-center md:justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 space-y-5 md:space-y-0 md:space-x-8 lg:space-x-12 grow z-10 relative">

        {/* 📱 Teléfono */}
        <div className="w-full md:w-1/2 relative mx-auto flex justify-center items-center h-full min-h-[500px] md:min-h-0">
          <div
            className="
              relative bg-gray-900 p-1 sm:p-1.5 rounded-[2rem] sm:rounded-[3rem]
              shadow-2xl border-4 border-gray-950/90
              aspect-[9/17]
              w-full
              max-w-[220px] sm:max-w-[280px]
              max-sm:max-w-[260px]
              max-h-[70vh] sm:max-h-[85vh]
              max-sm:max-h-[85vh]
              z-10
            "
          >
            <div className="relative bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden h-full w-full shadow-inner">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-7 bg-black rounded-full z-20" />

              <div
                className="flex h-full w-[200%] transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${pageIndex * 50}%)` }}
              >
                {/* VIDEO */}
                <div className="w-1/2 h-full relative">
                  <video
                    ref={videoRef}
                    src="/bienal.mp4"
                    className="w-full h-full object-cover cursor-pointer"
                    muted={isMuted}
                    playsInline
                    onClick={togglePlay}
                  />

                  {/* MOBILE ONLY: controles compactos */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-2 px-3 max-sm:py-1 max-sm:px-2 flex flex-col items-center space-y-2 max-sm:space-y-1 z-30">
                    <div className="flex items-center justify-center space-x-4 max-sm:space-x-3">
                      <SkipBack onClick={() => skip(-10)} className="text-white cursor-pointer max-sm:w-4 max-sm:h-4" size={iconSize} />
                      {isPlaying ? (
                        <Pause onClick={togglePlay} className="text-white cursor-pointer max-sm:w-4 max-sm:h-4" size={iconSize} />
                      ) : (
                        <Play onClick={togglePlay} className="text-white cursor-pointer max-sm:w-4 max-sm:h-4" size={iconSize} />
                      )}
                      <SkipForward onClick={() => skip(10)} className="text-white cursor-pointer max-sm:w-4 max-sm:h-4" size={iconSize} />
                      {isMuted ? (
                        <VolumeX onClick={toggleMute} className="text-white cursor-pointer max-sm:w-4 max-sm:h-4" size={iconSize} />
                      ) : (
                        <Volume onClick={toggleMute} className="text-white cursor-pointer max-sm:w-4 max-sm:h-4" size={iconSize} />
                      )}
                    </div>

                    <div className="flex items-center justify-between w-full text-xs text-white max-sm:text-[10px]">
                      <span>{formatTime(currentTime)}</span>
                      <div className="w-3/4 h-1 max-sm:h-0.5 bg-gray-400 rounded-full">
                        <div
                          className="h-1 max-sm:h-0.5 bg-blue-500 rounded-full"
                          style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                        />
                      </div>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                </div>

                {/* MAP */}
                <div className="w-1/2 h-full">
                  <MapPage />
                </div>
              </div>

              <div className="absolute inset-y-0 flex items-center justify-between w-full px-3 z-40">
                <ChevronLeft
                  onClick={() => changePage(-1)}
                  className="text-white cursor-pointer max-sm:w-4 max-sm:h-4"
                  size={20}
                />
                <ChevronRight
                  onClick={() => changePage(1)}
                  className="text-white cursor-pointer max-sm:w-4 max-sm:h-4"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <p className="text-center lg:text-left text-xl md:text-2xl uppercase text-gray-600">
            Próximo Evento
          </p>

          <h1 className="text-center lg:text-left  text-4xl md:text-6xl lg:text-7xl font-semibold">
            <span>Bienal</span>
            <span className="block text-blue-400">Tecnológica</span>
          </h1>

          <div className="pl-6 border-l-4  w-[1/2] mx-auto lg:w-full border-blue-500 space-y-2">
            <p className="flex items-center text-lg font-semibold">
              <MapPin className="mr-3 text-blue-500" size={24} />
              Domo del Centenario
            </p>
            <p className="ml-9 text-gray-500">
              Av. de los Inmigrantes 300
            </p>
            <p className="flex items-center text-lg font-semibold mt-3">
              <CalendarDays className="mr-3 text-blue-500" size={24} />
              14 al 17 de Noviembre 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionEventoMonitor;
