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
      className="mb-20 relative lg:h-screen w-full overflow-visible
                 text-[#50A2FF] dark:text-white
                 flex items-center justify-center"
    >
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

      <div className="relative max-w-7xl w-full px-6">
        {/* 🎬 TITLE */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 dark:text-white">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed
                        text-[#50A2FF]/80 dark:text-white/80">
            Formación técnica real, experiencia comprobada y excelencia
            profesional en refrigeración integral.
          </p>
        </div>

        {/* 🧊 STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 perspective-[1600px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
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
                  <span className="text-[#50A2FF] dark:text-white">
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
                <h3 className="text-xl font-semibold mb-3 dark:text-white">
                  {stat.title}
                </h3>

                {/* 📝 DESCRIPTION */}
                <p className="text-sm leading-relaxed text-[#50A2FF]/80 dark:text-white/70">
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
