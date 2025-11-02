'use client';

import {
  ToolCase,
  Zap,
  Shield,
  DollarSign,
  BarChart2,
  CheckCircle,
  Wrench,
  Clock,
  Layers,
} from 'lucide-react';

const learnUnits = [
  {
    title: 'Instalación práctica de split y aire de ventana',
    description: 'Aprendé a calcular, montar y dejar funcionando los equipos correctamente.',
    icon: <ToolCase size={28} className="text-blue-400" />,
    image: '/1.jpg',
  },
  {
    title: 'Diagnóstico y reparación rápida',
    description: 'Detectá fallas y resolvelas en la primera visita de manera eficiente.',
    icon: <Zap size={28} className="text-blue-400" />,
    image: '/2.jpg',
  },
  {
    title: 'Limpieza y mantenimiento profesional',
    description: 'Conocé técnicas de mantenimiento que garantizan equipos duraderos y clientes satisfechos.',
    icon: <Wrench size={28} className="text-blue-400" />,
    image: '/3.jpg',
  },
  {
    title: 'Seguridad laboral y normativas',
    description: 'Trabajá seguro, cumpliendo todas las normas y evitando riesgos innecesarios.',
    icon: <Shield size={28} className="text-blue-400" />,
    image: '/4.jpg',
  },
  {
    title: 'Precios y tarifas por urgencia',
    description: 'Aprendé a cobrar correctamente en situaciones de emergencia y comunicar valor.',
    icon: <DollarSign size={28} className="text-blue-400" />,
    image: '/5.jpg',
  },
  {
    title: 'Modelos de ingreso recurrente',
    description: 'Descubrí cómo generar ingresos estables con contratos y servicios recurrentes.',
    icon: <BarChart2 size={28} className="text-blue-400" />,
    image: '/6.jpg',
  },
  {
    title: 'Gestión del tiempo y productividad',
    description: 'Optimiza tus tareas y lográlas en menos tiempo sin perder calidad.',
    icon: <Clock size={28} className="text-blue-400" />,
    image: '/7.jpg',
  },
  {
    title: 'Uso correcto de herramientas y materiales',
    description: 'Evitá errores costosos y ganá confianza en cada trabajo.',
    icon: <Layers size={28} className="text-blue-400" />,
    image: '/8.jpg',
  },
 
];

export default function UnitsSection() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center bg-linear-to-tl from-blue-200 via-white to-white py-8 px-6 md:px-20 ">
      <h2 className="text-3xl md:text-4xl italic font-semibold text-gray-900 text-center mb-6">
        ¿Qué vas a aprender?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 flex-1">
        {learnUnits.map((unit, index) => (
          <div
            key={index}
            className="bg-white/30 border border-white/50 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-3 flex flex-col h-full backdrop-blur-sm"
          >
            {/* Imagen */}
            <img
              src={unit.image}
              alt={unit.title}
              className="w-full h-28 object-cover rounded-xl mb-3"
            />

            {/* Icono + título */}
            <div className="flex items-center gap-2 mb-2">
              {unit.icon}
              <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-snug">
                {unit.title}
              </h3>
            </div>

            {/* Descripción */}
            <p className="text-gray-900 text-xs md:text-sm">{unit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
