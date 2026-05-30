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
    icon: <ToolCase size={28} className="text-blue-400 dark:text-blue-400" />,
    image: '/1.jpg',
  },
  {
    title: 'Diagnóstico y reparación rápida',
    description: 'Uso de manómetros y detectores de fugas para resolver fallas con eficiencia.',
    icon: <Zap size={28} className="text-blue-400 dark:text-blue-400" />,
    image: '/2.jpg',
  },
  {
    title: 'Manejo seguro de refrigerantes',
    description: 'Recuperación, reciclado y manejo responsable.',
    icon: <Shield size={28} className="text-blue-400 dark:text-blue-400" />,
    image: '/4.jpg',
  },
  {
    title: 'Limpieza y mantenimiento profesional',
    description: 'Servicios que generan recurrencia cada 6 a 12 meses.',
    icon: <Wrench size={28} className="text-blue-400 dark:text-blue-400" />,
    image: '/5.jpg',
  },
  {
    title: 'Seguridad laboral y normativas',
    description: 'Altura, electricidad y documentación legal.',
    icon: <Shield size={28} className="text-blue-400 dark:text-blue-400" />,
    image: '/6.jpg',
  },
  {
    title: 'Ventas orientadas al rubro',
    description: 'Detectar el riesgo y cerrar la solución en el momento.',
    icon: <DollarSign size={28} className="text-blue-400 dark:text-blue-400" />,
    image: '/7.jpg',
  },
  {
    title: 'Modelos de ingreso recurrente',
    description: 'Contratos, suscripciones y ventas complementarias.',
    icon: <BarChart2 size={28} className="text-blue-400 dark:text-blue-400" />,
    image: '/8.jpg',
  },
  {
    title: 'Taller práctico y salidas a campo',
    description: 'Trabajo con equipos reales, no solo teoría.',
    icon: <Clock size={28} className="text-blue-400 dark:text-blue-400" />,
    image: '/9.jpg',
  },
];

/* =======================
   Component
 ======================= */

export default function UnitsSection() {
  return (
    <section className=" relative w-full overflow-visible bg-transparent px-4 sm:px-6 md:px-12 lg:px-20 pt-2 pb-6 sm:py-10 md:py-16">
      {/* CÍRCULO DIFUMINADO (Celeste en Light, Verde en Dark) */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-blue-400/50 dark:bg-gray-950/10 rounded-full blur-[120px] lg:blur-[160px] pointer-events-none z-0 transform translate-x-1/2 -translate-y-1/2"
      />
      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Título */}
        <div className="flex flex-col items-center text-center space-y-6 mb-8 sm:mb-10 md:mb-12">
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-500 dark:to-emerald-500 rounded-full" />
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 dark:from-white dark:via-white dark:to-gray-400"
          >
            ¿Qué vas a aprender?
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl w-full px-2 sm:px-0"
        >
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
                  className="w-full aspect-[16/16] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
              </div>

              {/* Texto */}
              <div className="p-5 sm:p-6 flex flex-col items-center text-center space-y-3 flex-1">
                <div className="p-3 bg-blue-500/10 dark:bg-blue-400/10 rounded-xl mb-1">
                  {unit.icon}
                </div>
                
                <h3 className="text-sm sm:text-base font-bold text-gray-950 dark:text-gray-50 leading-tight uppercase tracking-tight">
                  {unit.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
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
