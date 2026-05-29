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
    <section className="relative w-full overflow-visible px-4 sm:px-8 md:px-12 lg:px-20 pt-2 pb-6 sm:py-10 md:py-16">
      {/* CÍRCULO DIFUMINADO (Celeste en Light, Verde en Dark) */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-blue-400/50 dark:bg-gray-950/10 rounded-full blur-[120px] lg:blur-[160px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2"
      />
      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">

        {/* TÍTULO PRINCIPAL + SUBTÍTULO */}
        <div className="text-center space-y-6 max-w-4xl flex flex-col items-center mx-auto">
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-500 dark:to-emerald-500 rounded-full mb-2" />
          <h2 className="font-semibold tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 dark:from-white dark:via-white dark:to-gray-400 leading-tight uppercase">
            El valor de ser imprescindible
          </h2>

          <p className="text-gray-950 dark:text-gray-300 text-sm sm:text-base md:text-lg">
            La refrigeración ha transitado de ser un lujo a una necesidad prioritaria. Durante las olas de calor, su función es salvaguardar vidas, y en invierno asegura la conservación vital de los alimentos, industrias y comercios funcionales, lo cual constituye una prioridad ineludible.
          </p>
        </div>

        {/* GRID DE ITEMS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-x-12 md:gap-y-14 w-full">
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

                  <h3 className="font-semibold text-lg text-gray-950 dark:text-white">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-gray-900 dark:text-gray-400 text-sm md:text-[15px] leading-relaxed">
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
