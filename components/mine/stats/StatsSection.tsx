"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 2500,
    suffix: "+",
    title: "Clientes Satisfechos",
    description: "Confían en nuestra formación y servicio técnico",
  },
  {
    value: 4200,
    suffix: "+",
    title: "Equipos Atendidos",
    description: "Aires acondicionados y sistemas de refrigeración",
  },
  {
    value: 25,
    suffix: "+",
    title: "Años de Experiencia",
    description: "En el rubro de la refrigeracion intergral",
  },
  {
    value: 100,
    suffix: "%",
    title: "de efectividad real",
    description: "En reparaciones",
  },
];

export default function StatsSection() {
  return (
    <section
      className="mb-4 sm:mb-16 relative pt-2 pb-6 sm:py-16 w-full overflow-visible
                 text-[#50A2FF] 
                 flex items-center justify-center"
    >
      {/* CÍRCULO DIFUMINADO (Celeste en Light, Verde en Dark) */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-blue-400/50 dark:bg-green-500/10 rounded-full blur-[120px] lg:blur-[160px] pointer-events-none z-0 transform translate-x-1/2 -translate-y-1/2"
      />
      {/* 📽 GRAIN */}
      <div
        className="pointer-events-none absolute inset-0
                   bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay"
      />

      {/* 📡 SCANLINES */}
      <div
        className="pointer-events-none absolute inset-0
                   bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
                   bg-size-[100%_4px] opacity-[0.06]"
      />

      <div className="relative max-w-7xl w-full px-4 sm:px-6 md:px-10">
        {/* 🎬 TITLE */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center space-y-6">
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-500 dark:to-emerald-500 rounded-full" />
          <h2 className="font-semibold tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 dark:from-white dark:via-white dark:to-gray-400 uppercase">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed
                        text-[#50A2FF]/80 /80">
            Formación técnica real, experiencia comprobada y excelencia
            profesional en refrigeración integral.
          </p>
        </div>

        {/* 🧊 STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 perspective-[1600px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group shadow-2xl rounded-4xl"
            >
              {/* 💡 HOVER AURA */}
              <div
                className="absolute inset-0 rounded-3xl
                           bg-[#50A2FF]/40 blur-2xl opacity-0
                           group-hover:opacity-100
                           transition duration-700"
              />

              <div
                className="relative h-full p-10 text-center rounded-3xl
                           backdrop-blur-2xl border border-[#50A2FF]/30 dark:border-white/10
                           bg-white/85 dark:bg-white/5 transform transition-transform
                           hover:scale-105 hover:shadow-xl"
              >
                {/* 🔢 NUMBER */}
                <div className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
                  <span className="text-[#50A2FF] ">
                    <CountUp
                      end={stat.value}
                      duration={3.2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}

                  </span>
                </div>

                {/* 🏷 TITLE */}
                <h3 className="text-xl font-semibold mb-3 ">
                  {stat.title}
                </h3>

                {/* 📝 DESCRIPTION */}
                <p className="text-sm leading-relaxed text-[#50A2FF]/80 /70">
                  {stat.description}
                </p>

                {/* ✨ LIGHT SWEEP */}
                <div className="mt-8 h-0.5 w-full
                                bg-gradient-to-r from-transparent via-[#50A2FF] to-transparent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
