"use client";

import PhoneMockup from "./PhoneMockup";
import VideoPlayer from "./VideoPlayer";
import { Clock2Icon, MapPin, Users } from "lucide-react";

export default function EventSection() {
  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-16 overflow-visible py-20 md:py-32 min-h-screen flex items-center justify-center">
      {/* CÍRCULO DIFUMINADO (Celeste en Light, Verde en Dark) */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-blue-400/50 dark:bg-green-500/10 rounded-full blur-[120px] lg:blur-[160px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="max-w-6xl mx-auto w-full">
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 relative z-10"
        >

          {/* middle: presentation text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading tracking-tight leading-tight text-gray-950 dark:text-white">
              ¡No te pierdas el evento en el
              <span className="block text-blue-500">Domo del Centenario</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-950 dark:text-gray-300">
              Una experiencia profesional de tres días que reunirá a los
              principales actores del sector técnico y de climatización.
              Charlas magistrales, talleres prácticos y networking de alto nivel
              te esperan.
            </p>
            <div className="text-left space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <Users className="text-blue-500 mt-1 shrink-0" size={24} />
                <span className="text-sm sm:text-base lg:text-lg text-gray-950 dark:text-gray-200">
                  Más de 50 ponentes expertos presentarán sus casos de éxito.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1 shrink-0" size={24} />
                <span className="text-sm sm:text-base lg:text-lg text-gray-950 dark:text-gray-200">
                  Ubicado estratégicamente en el corazón de Resistencia.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock2Icon className="text-blue-500 mt-1 shrink-0" size={24} />
                <span className="text-sm sm:text-base lg:text-lg text-gray-950 dark:text-gray-200">
                  Horario de actividades: 10:00 a 18:00, con break de almuerzo.
                </span>
              </div>

            </div>
          </div>

          {/* right: phone/video  */}
          <div className="w-full lg:w-5/12 flex items-center justify-center min-h-[500px] lg:h-auto">
            <PhoneMockup>
              <VideoPlayer />
            </PhoneMockup>
          </div>

        </div>
      </div>
    </section>
  );
}

