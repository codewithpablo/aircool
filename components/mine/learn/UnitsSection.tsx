'use client';

import {
  ToolCase,
  Zap,
  Shield,
  DollarSign,
  BarChart2,
  Wrench,
  Clock,
  Layers,
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const learnUnits = [
  {
    title: 'Fundamentos y práctica de instalación',
    description: 'Montaje, sellado y correcta puesta en marcha de los equipos.',
    icon: <ToolCase size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/1.jpg',
  },
  {
    title: 'Diagnóstico y reparación rápida',
    description: 'Uso de manómetros y detectores de fugas para resolver fallas con eficiencia.',
    icon: <Zap size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/2.jpg',
  },

  {
    title: 'Manejo seguro de refrigerantes',
    description: 'Recuperación, reciclado, reemplazo y manejo responsable de refrigerantes.',
    icon: <Shield size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/4.jpg',
  },
  {
    title: 'Limpieza y mantenimiento profesional',
    description: 'Servicios que hacen que los clientes repitan cada 6 a 12 meses.',
    icon: <Wrench size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/5.jpg',
  },
  {
    title: 'Seguridad laboral y normativas locales',
    description: 'Trabajo en altura, riesgos eléctricos y documentación legal para evitar problemas.',
    icon: <Shield size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/6.jpg',
  },
  {
    title: 'Ventas orientadas al rubro',
    description: 'Mostrá el riesgo, ofrecé la solución inmediata y cerrá el trabajo en el momento.',
    icon: <DollarSign size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/7.jpg',
  },
  {
    title: 'Modelos de ingreso recurrente',
    description: 'Contratos, suscripciones y ventas complementarias para ingresos estables.',
    icon: <BarChart2 size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/8.jpg',
  },
  {
    title: 'Taller práctico y salidas a campo',
    description: 'Trabajo con unidades reales para que lo hagas vos, no solo teoría.',
    icon: <Clock size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/9.jpg',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function UnitsSection() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center dark:bg-gray-950 py-8 px-6 md:px-20">
      <motion.h2
        className="uppercase text-5xl md:text-6xl font-bold text-center text-gray-800 mb-16 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ¿Qué vas a aprender?
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[1fr]"
      >
        {learnUnits.map((unit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col bg-white/30 border border-white/50 dark:bg-white/5 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-4 backdrop-blur-sm"
          >
            <img
              src={unit.image}
              alt={unit.title}
              className="w-full h-24 object-cover rounded-xl mb-3"
            />

            <div className="flex items-center gap-2 mb-2">
              {unit.icon}
              <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white leading-snug">
                {unit.title}
              </h3>
            </div>

            <p className="text-gray-800 dark:text-gray-400 text-xs md:text-sm">
              {unit.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
