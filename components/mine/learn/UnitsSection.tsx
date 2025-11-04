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
    title: 'Instalación práctica de split y aire de ventana',
    description: 'Aprendé a calcular, montar y dejar funcionando los equipos correctamente.',
    icon: <ToolCase size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/1.jpg',
  },
  {
    title: 'Diagnóstico y reparación rápida',
    description: 'Detectá fallas y resolvelas en la primera visita de manera eficiente.',
    icon: <Zap size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/2.jpg',
  },
  {
    title: 'Limpieza y mantenimiento profesional',
    description: 'Conocé técnicas de mantenimiento que garantizan equipos duraderos y clientes satisfechos.',
    icon: <Wrench size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/3.jpg',
  },
  {
    title: 'Seguridad laboral y normativas',
    description: 'Trabajá seguro, cumpliendo todas las normas y evitando riesgos innecesarios.',
    icon: <Shield size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/4.jpg',
  },
  {
    title: 'Precios y tarifas por urgencia',
    description: 'Aprendé a cobrar correctamente en situaciones de emergencia y comunicar valor.',
    icon: <DollarSign size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/5.jpg',
  },
  {
    title: 'Modelos de ingreso recurrente',
    description: 'Descubrí cómo generar ingresos estables con contratos y servicios recurrentes.',
    icon: <BarChart2 size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/6.jpg',
  },
  {
    title: 'Gestión del tiempo y productividad',
    description: 'Optimiza tus tareas y lográlas en menos tiempo sin perder calidad.',
    icon: <Clock size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/7.jpg',
  },
  {
    title: 'Uso correcto de herramientas y materiales',
    description: 'Evitá errores costosos y ganá confianza en cada trabajo.',
    icon: <Layers size={30} className="text-blue-400 dark:text-teal-400" />,
    image: '/8.jpg',
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
    <section 
      className="w-full min-h-screen flex flex-col justify-center 
    dark:bg-gray-950 
      py-8 px-6 md:px-20"
    >
      
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl italic font-semibold text-gray-900 dark:text-white text-center mb-8"
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