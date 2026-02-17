"use client";
import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume,
  VolumeX,
  SkipBack,
  SkipForward,
} from "lucide-react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const setVideoDuration = () => setDuration(video.duration || 0);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", setVideoDuration);

    video.muted = true;
    video.play().then(() => setIsPlaying(true)).catch(() => {});

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", setVideoDuration);
    };
  }, []);

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

  const skip = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(
      0,
      Math.min(duration, video.currentTime + seconds)
    );
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    video.currentTime = newTime;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const formatTime = (time: number) => {
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        src="/bienal.mp4"
        className="w-full h-full object-cover"
        playsInline
        muted={isMuted}
      />

      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-3 flex flex-col space-y-2">
        <div className="flex items-center justify-center space-x-4 text-white">
          <SkipBack onClick={() => skip(-10)} className="cursor-pointer" />
          {isPlaying ? (
            <Pause onClick={togglePlay} className="cursor-pointer" />
          ) : (
            <Play onClick={togglePlay} className="cursor-pointer" />
          )}
          <SkipForward onClick={() => skip(10)} className="cursor-pointer" />
          {isMuted ? (
            <VolumeX onClick={toggleMute} className="cursor-pointer" />
          ) : (
            <Volume onClick={toggleMute} className="cursor-pointer" />
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-white">
          <span>{formatTime(currentTime)}</span>

          <div
            onClick={handleSeek}
            className="w-3/4 h-1 bg-gray-500 rounded-full cursor-pointer"
          >
            <div
              className="h-1 bg-blue-500 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
