'use client';

import { ToolCase, Zap, Shield, DollarSign, BarChart2, CheckCircle } from 'lucide-react';

const learnUnits = [
  {
    title: 'Instalación práctica de split y aire de ventana',
    description: 'Saber calcular, montar y dejar funcionando sin vueltas.',
    icon: <ToolCase size={24} className="text-blue-400" />,
  },
  {
    title: 'Diagnóstico y reparación rápida',
    description: 'Encontrá la falla y solucionala en la primera visita.',
    icon: <Zap size={24} className="text-blue-400" />,
  },
  {
    title: 'Limpieza y mantenimiento profesional',
    description: 'Los clientes repiten cada 6–12 meses.',
    icon: <ToolCase size={24} className="text-blue-400" />,
  },
  {
    title: 'Seguridad laboral y normativas',
    description: 'Trabajás sin quilombos legales y con seguridad real.',
    icon: <Shield size={24} className="text-blue-400" />,
  },
  {
    title: 'Precios y tarifas por urgencia',
    description: 'Aprendé a cobrar premium cuando el cliente está en emergencia.',
    icon: <DollarSign size={24} className="text-blue-400" />,
  },
  {
    title: 'Modelos de ingreso recurrente',
    description: 'Contratos, suscripciones y ventas complementarias que pagan todos los meses.',
    icon: <BarChart2 size={24} className="text-blue-400" />,
  },
  {
    title: 'Taller práctico',
    description: 'Aumentan confianza y abrí puertas con edificios y empresas, haciendo prácticas reales.',
    icon: <CheckCircle size={24} className="text-blue-400" />,
  },
];

export default function UnitsSection() {
  return (
    <section className="w-full bg-linear-to-tl from-blue-400 via-white to-white py-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-4xl italic pb-10 font-semibold text-gray-900 text-center mb-10">
        ¿Qué vas a aprender?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {learnUnits.map((unit, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col gap-4 border-l-4 border-blue-400"
          >
            <div className="flex items-center gap-3">
              <div className="text-gray-500 font-bold">Unidad {index + 1}</div>
              {unit.icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">{unit.title}</h3>
            <p className="text-gray-700 text-sm md:text-base">{unit.description}</p>
          </div>
        ))}
      </div>
     
    </section>
  );
}
