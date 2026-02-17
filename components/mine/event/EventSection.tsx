"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import VideoPlayer from "./VideoPlayer";
import {
  Snowflake,
  Wind,
  Wrench,
  Zap,
  ShieldCheck,
  Thermometer,
  Settings,
  Building2,
  Cpu,
} from "lucide-react";

export default function AircoolSection() {
  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* 🔹 HEADER FULL WIDTH */}
        <div className="mb-20 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Soluciones Avanzadas en{" "}
            <span className="block text-blue-500">
              Climatización
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            Aircool integra tecnología, eficiencia y experiencia profesional
            para brindar confort térmico en todo tipo de espacios.
          </p>
        </div>

        {/* 🔹 CONTENIDO */}
        <div className="flex flex-col lg:flex-row items-start gap-20">

          {/* 📱 Celular */}
          <div className="w-full lg:w-[35%] flex justify-center lg:justify-start">
            <PhoneMockup>
              <VideoPlayer />
            </PhoneMockup>
          </div>

          {/* 🔹 GRID */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[65%]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              <Card icon={<Snowflake size={26} />} title="Tecnología Inverter">
                Máximo rendimiento con menor consumo energético.
              </Card>

              <Card icon={<Wind size={26} />} title="Calidad de Aire">
                Sistemas de ventilación y purificación ambiental.
              </Card>

              <Card icon={<Wrench size={26} />} title="Instalación Profesional">
                Técnicos certificados y protocolos de seguridad.
              </Card>

              <Card icon={<Zap size={26} />} title="Eficiencia Energética">
                Optimización de recursos y reducción de costos.
              </Card>

              <Card icon={<ShieldCheck size={26} />} title="Garantía Extendida">
                Respaldo técnico y soporte post-instalación.
              </Card>

              <Card icon={<Thermometer size={26} />} title="Control Inteligente">
                Regulación precisa y automatización térmica.
              </Card>

              <Card icon={<Settings size={26} />} title="Mantenimiento Preventivo">
                Planes estratégicos para mayor durabilidad.
              </Card>

              <Card icon={<Building2 size={26} />} title="Proyectos Empresariales">
                Soluciones a gran escala para industrias.
              </Card>


            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* 🔹 CARD */
function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group p-7 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg transition-all duration-300 border border-zinc-200/60 dark:border-zinc-800 hover:-translate-y-1">
      <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="font-semibold text-lg mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
