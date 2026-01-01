'use client';

import {
  TrendingUp,
  Wrench,
  Clock,
  Layers,
  ShieldCheck,
  Zap,
  DollarSign,
  Users,
  Star,
} from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // 👈 Importamos motion y Variants

// 1. Definir las variantes para el CONTENEDOR (la cuadrícula)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // 2. Usar staggerChildren para animar los hijos secuencialmente
      staggerChildren: 0.1, // Retraso de 0.1s entre cada hijo
      delayChildren: 0.2,   // Pequeño retraso antes de que empiece el primer hijo
    },
  },
};

// 3. Definir las variantes para los ITEMS (cada beneficio)
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 }, // Estado inicial: movido 20px hacia abajo y transparente
  visible: { y: 0, opacity: 1 },  // Estado visible: posición original y opaco
};

const benefitsData = [
  {
    icon: TrendingUp,
    title: 'Previsibilidad financiera',
    text: 'Previsibilidad financiera. Servicios de limpieza y mantenimiento se repiten cada 6 a 12 meses, factura estable e ingresos previsibles.'
  },
  {
    icon: Clock,
    title: 'Rentabilidad alta',
    text: 'Rentabilidad alta. Trabajo técnico, tiempo reducido, margen alto perfecto para maximizar tiempo y ganancia.'
  },
  {
    icon: Layers,
    title: 'Múltiples fuentes de ingreso',
    text: 'Múltiples fuentes de ingreso. Instalación, recargas, reparaciones, contratos de mantenimiento, venta de filtros y upgrades energéticos, etc.'
  },
  {
    icon: ShieldCheck,
    title: 'Resiliencia a crisis',
    text: 'Resiliencia a crisis. En tiempos de crisis el mantenimiento y la salud se priorizan.'
  },
  {
    icon: Wrench,
    title: 'Práctica',
    text: 'Práctica. No va a “mirar cómo se hace”. Va a hacerlo usted mismo guiado por profesionales.'
  },
  {
    icon: Star,
    title: 'Certificación',
    text: 'Certificación. Mostrar certificados y comprobantes eleva la conversión.'
  },
  {
    icon: DollarSign,
    title: 'Ventas en urgencia',
    text: 'Ventas en urgencia. Una avería en verano implica una mayor disposición de pago por parte del cliente. Frente al calor extremo el cliente antepone reparar o instalar antes que gastar en otras cosas.'
  },
  {
    icon: Zap,
    title: 'Salud',
    text: 'Salud. Las olas de calor son una amenaza mortal, y el aire acondicionado salva vidas.'
  },
  {
    icon: Users,
    title: 'Sector en alza',
    text: 'Sector en alza. La demanda de refrigeración es la que más crece en energía de edificios, más equipos, más clientes todo el año.'
  }
];



export default function ActionSection() {
  // Puedes aplicar una animación simple de 'fade-in' al título si lo deseas
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full bg-linear-to-lr from-blue-300 via-blue-50 to-white flex  items-center justify-center px-6 md:px-20 py-16 md:py-0 md:min-h-screen">
      <div className="flex flex-col items-center justify-center max-w-6xl w-full space-y-10">
        
        {/* Título principal centrado con animación */}
        <motion.div 
          className="space-y-1 w-full mb-12 text-center"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible" // 👈 Se anima al entrar a la vista
          viewport={{ once: true, amount: 0.5 }} // Se anima solo una vez, cuando el 50% del elemento está visible
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white ading-snug">
            Esto es una oportunidad,{' '}
            <span className="text-blue-600 dark:text-gray-100 ">no una opción</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            La refrigeración ha transitado de ser un lujo a una necesidad prioritaria. Durante las olas de calor, su función es salvaguardar vidas, lo cual constituye una prioridad ineludible. 
          </p>
        </motion.div>

        {/* GRID de beneficios con animación escalonada */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 w-full max-w-6xl "
          variants={containerVariants} // 4. Asignamos variantes de contenedor
          initial="hidden"
          whileInView="visible" // 5. Animación al entrar a la vista
          viewport={{ once: true, amount: 0.2 }} // Se anima solo una vez, cuando el 20% del elemento está visible
        >
          {benefitsData.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div // 6. Cada item es un motion.div
                key={index}
                className="flex flex-col"
                variants={itemVariants} // 7. Asignamos variantes de item
              >
                {/* Título de cada viñeta alineado a la izquierda */}
                <span className="flex items-center gap-3 font-semibold dark:text-white  text-gray-900 mb-2.5 text-lg md:text-xl">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                  {benefit.title}
                </span>
                <p className="dark:text-gray-400 text-gray-700 text-sm md:text-[15px] leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}