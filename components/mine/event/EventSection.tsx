"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import VideoPlayer from "./VideoPlayer";
import { Clock2Icon, MapPin, Users } from "lucide-react";

export default function EventSection() {
  return (
    <section className="relative px-6 lg:px-16 overflow-visible  h-screen py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row-reverse justify-center gap-16"
      >
        {/* left: phone/video */}
        <div className="w-full lg:w-1/3 flex items-center justify-center h-screen">
          <PhoneMockup>
            <VideoPlayer />
          </PhoneMockup>
        </div>

        {/* middle: presentation text */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center p-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            ¡No te pierdas el evento en el
            <span className="block text-blue-500">Domo del Centenario</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Una experiencia profesional de tres días que reunirá a los
            principales actores del sector técnico y de climatización.
            Charlas magistrales, talleres prácticos y networking de alto nivel
            te esperan.
          </p>
          <div className="text-left space-y-4">
            <div className="flex items-start gap-3">
              <Users className="text-blue-500 mt-1" size={20} />
              <span className="text-base text-gray-700 dark:text-gray-300">
                Más de 50 ponentes expertos presentarán sus casos de éxito.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-500 mt-1" size={20} />
              <span className="text-base text-gray-700 dark:text-gray-300">
                Ubicado estratégicamente en el corazón de Resistencia.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Clock2Icon className="text-blue-500 mt-1" size={20} />
              <span className="text-base text-gray-700 dark:text-gray-300">
                Horario de actividades: 10:00 a 18:00, con break de almuerzo.
              </span>
            </div>
            
          </div>
        </div>

      </motion.div>
    </section>
  );
}

