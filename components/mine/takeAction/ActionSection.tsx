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

/* =========================
   Items
========================= */

const benefitsData = [
  {
    icon: TrendingUp,
    title: 'Previsibilidad financiera',
    text: 'Servicios de limpieza y mantenimiento se repiten cada 6 a 12 meses.',
  },
  {
    icon: Clock,
    title: 'Rentabilidad alta',
    text: 'Trabajo técnico, tiempo reducido, margen alto perfecto para maximizar tiempo y ganancia.',
  },
  {
    icon: Layers,
    title: 'Múltiples fuentes de ingreso',
    text: 'Instalaciones, cargas de refrigerante, reparaciones, limpiezas, ventas, etc.',
  },
  {
    icon: ShieldCheck,
    title: 'Resiliencia a crisis',
    text: 'En tiempos de crisis, las personas dejan de comprar muchas cosas, pero nunca dejan de alimentarse ni de buscar cómo protegerse del calor.',
  },
  {
    icon: Wrench,
    title: 'Práctica',
    text: 'No vas a “mirar cómo se hace”. Vas a hacerlo vos mismo guiado por profesionales.',
  },
  {
    icon: Star,
    title: 'Certificación',
    text: 'Certificarse con docentes profesionales universitarios respalda tu conocimiento y aumenta la credibilidad.',
  },
  {
    icon: DollarSign,
    title: 'Ventas en urgencia',
    text: 'Cada falla extrema abre una oportunidad: una venta impulsiva y un cliente eternamente agradecido.',
  },
  {
    icon: Zap,
    title: 'Salud',
    text: 'Las olas de calor/frío son una amenaza mortal, y la refrigeración salva vidas.',
  },
  {
    icon: Users,
    title: 'Sector en alza',
    text: 'La demanda de refrigeración es una de las que más crece, más equipos, más clientes todo el año.',
  },
];

/* =========================
   Component
========================= */

export default function ActionSection() {
  return (
    <section className="relative w-full overflow-visible bg-white dark:bg-gray-950 px-6 md:px-20 ">

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto space-y-20">

        {/* TÍTULO PRINCIPAL + SUBTÍTULO */}
        <div className="text-center space-y-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white leading-tight">
            El valor de ser imprescindible
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg">
            La refrigeración ha transitado de ser un lujo a una necesidad prioritaria. Durante las olas de calor, su función es salvaguardar vidas, y en invierno asegura la conservación vital de los alimentos, industrias y comercios funcionales, lo cual constituye una prioridad ineludible.
          </p>
        </div>

        {/* GRID DE ITEMS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-14 w-full">
          {benefitsData.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
                    <Icon className="relative w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>

                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-[15px] leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
