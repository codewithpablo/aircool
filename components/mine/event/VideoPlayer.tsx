"use client";

import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume,
  VolumeX,
  SkipBack,
  SkipForward,
  Maximize,
} from "lucide-react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [showControls, setShowControls] = useState(true);

  /* ---------------- LOAD VIDEO ---------------- */

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const metadata = () => setDuration(video.duration || 0);
    video.addEventListener("loadedmetadata", metadata);

    video.muted = true;

    video.play().then(() => setIsPlaying(true)).catch(() => {});

    return () => {
      video.removeEventListener("loadedmetadata", metadata);
    };
  }, []);

  /* ---------------- SMOOTH TIME ---------------- */

  useEffect(() => {
    let raf: number;

    const update = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);

    return () => cancelAnimationFrame(raf);
  }, []);

  /* ---------------- AUTO HIDE ---------------- */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentTime]);

  /* ---------------- KEYBOARD ---------------- */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!videoRef.current) return;

      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }

      if (e.code === "ArrowRight") skip(10);
      if (e.code === "ArrowLeft") skip(-10);

      if (e.code === "KeyM") toggleMute();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* ---------------- CONTROLS ---------------- */

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
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

  const changeVolume = (v: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = v;
    setVolume(v);

    if (v === 0) {
      video.muted = true;
      setIsMuted(true);
    } else {
      video.muted = false;
      setIsMuted(false);
    }
  };

  const skip = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = Math.max(
      0,
      Math.min(duration, video.currentTime + seconds)
    );
  };

  /* ---------------- SEEK ---------------- */

  const seek = (clientX: number) => {
    const video = videoRef.current;
    const progress = progressRef.current;

    if (!video || !progress) return;

    const rect = progress.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = x / rect.width;

    video.currentTime = percent * duration;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    seek(e.clientX);

    const move = (ev: MouseEvent) => seek(ev.clientX);

    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  /* ---------------- FULLSCREEN ---------------- */

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) video.requestFullscreen();
    else document.exitFullscreen();
  };

  /* ---------------- UTILS ---------------- */

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const formatTime = (time: number) => {
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  /* ---------------- UI ---------------- */

  return (
    <div
      className="relative w-full h-full bg-black group"
      onMouseMove={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        src="/bienal.mp4"
        className="w-full h-full object-cover"
        playsInline
        preload="metadata"
      />

      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-black/40 backdrop-blur-lg p-5 rounded-full hover:scale-110 transition">
            <Play size={45} className="text-white" />
          </div>
        </div>
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3 pt-10">

          {/* PROGRESS BAR */}

          <div
            ref={progressRef}
            onMouseDown={handleMouseDown}
            className="relative w-full h-1 bg-white/30 rounded-full cursor-pointer group/progress"
          >
            <div
              className="absolute top-0 left-0 h-1 bg-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
            />

            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover/progress:opacity-100 transition"
              style={{
                left: `${progress}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* CONTROLS */}

          <div className="flex flex-wrap items-center justify-between gap-y-2 mt-3 text-white text-sm">

            <div className="flex flex-wrap items-center gap-2">

              <button
                onClick={() => skip(-10)}
                className="p-1.5 rounded-full hover:bg-white/20 transition"
              >
                <SkipBack size={18} />
              </button>

              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>

              <button
                onClick={() => skip(10)}
                className="p-1.5 rounded-full hover:bg-white/20 transition"
              >
                <SkipForward size={18} />
              </button>

              <div className="flex items-center gap-1">

                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-full hover:bg-white/20 transition"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume size={18} />}
                </button>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) =>
                    changeVolume(Number(e.target.value))
                  }
                  className="w-16 accent-blue-500"
                />

              </div>

            </div>

            <div className="flex items-center gap-3">

              <span className="text-xs text-white/80 whitespace-nowrap">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <button
                onClick={toggleFullscreen}
                className="p-1.5 rounded-full hover:bg-white/20 transition"
              >
                <Maximize size={18} />
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}