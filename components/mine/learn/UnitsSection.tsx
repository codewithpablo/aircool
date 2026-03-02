'use client';

import {
  ToolCase,
  Zap,
  Shield,
  DollarSign,
  BarChart2,
  Wrench,
  Clock,
} from 'lucide-react';

/* =======================
   Data
======================= */

const learnUnits = [
  {
    title: 'Fundamentos y práctica de instalación',
    description: 'Montaje, sellado y correcta puesta en marcha de los equipos.',
    icon: <ToolCase size={28} className="text-blue-400 dark:text-teal-400" />,
    image: '/1.jpg',
  },
  {
    title: 'Diagnóstico y reparación rápida',
    description: 'Uso de manómetros y detectores de fugas para resolver fallas con eficiencia.',
    icon: <Zap size={28} className="text-blue-400 dark:text-teal-400" />,
    image: '/2.jpg',
  },
  {
    title: 'Manejo seguro de refrigerantes',
    description: 'Recuperación, reciclado y manejo responsable.',
    icon: <Shield size={28} className="text-blue-400 dark:text-teal-400" />,
    image: '/4.jpg',
  },
  {
    title: 'Limpieza y mantenimiento profesional',
    description: 'Servicios que generan recurrencia cada 6 a 12 meses.',
    icon: <Wrench size={28} className="text-blue-400 dark:text-teal-400" />,
    image: '/5.jpg',
  },
  {
    title: 'Seguridad laboral y normativas',
    description: 'Altura, electricidad y documentación legal.',
    icon: <Shield size={28} className="text-blue-400 dark:text-teal-400" />,
    image: '/6.jpg',
  },
  {
    title: 'Ventas orientadas al rubro',
    description: 'Detectar el riesgo y cerrar la solución en el momento.',
    icon: <DollarSign size={28} className="text-blue-400 dark:text-teal-400" />,
    image: '/7.jpg',
  },
  {
    title: 'Modelos de ingreso recurrente',
    description: 'Contratos, suscripciones y ventas complementarias.',
    icon: <BarChart2 size={28} className="text-blue-400 dark:text-teal-400" />,
    image: '/8.jpg',
  },
  {
    title: 'Taller práctico y salidas a campo',
    description: 'Trabajo con equipos reales, no solo teoría.',
    icon: <Clock size={28} className="text-blue-400 dark:text-teal-400" />,
    image: '/9.jpg',
  },
];

/* =======================
   Component
======================= */

export default function UnitsSection() {
  return (
    <section className=" relative w-full  overflow-visible bg-tranparent pt-8 sm:pt-10 md:pt-12 lg:pt-16 px-4 sm:px-6 md:px-12 lg:px-20">

      {/* 🎥 Fondo cinematográfico */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 60%)' }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(103, 232, 249, 0.4) 0%, transparent 60%)' }}
        />
        <div
          className="absolute bottom-[-300px] left-1/3 w-[700px] h-[700px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(129, 140, 248, 0.3) 0%, transparent 60%)' }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Título */}
        <h2 className="pt-32 uppercase text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-center text-gray-900 dark:text-white mb-8 sm:mb-10 md:mb-12 transition-opacity duration-1000">
          ¿Qué vas a aprender?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl w-full">
          {learnUnits.map((unit, index) => (
            <div
              key={index}
              className="
                group flex flex-col rounded-2xl
                bg-white/40 dark:bg-white/5
                border border-white/50 dark:border-white/10
                backdrop-blur-md
                shadow-sm hover:shadow-lg
                transition-all duration-300
                overflow-hidden
                hover:-translate-y-1
              "
            >
              {/* Imagen */}
              <div className="relative">
                <img
                  src={unit.image}
                  alt={unit.title}
                  className="w-full h-20 sm:h-24 md:h-28 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
              </div>

              {/* Texto */}
              <div className="p-3 sm:p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-0.5">
                    {unit.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-900 dark:text-white leading-snug">
                    {unit.title}
                  </h3>
                </div>

                <p className="text-gray-700 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                  {unit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
