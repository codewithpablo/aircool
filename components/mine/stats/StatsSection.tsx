"use client";

import CountUp from "react-countup";
import { motion, easeInOut } from "framer-motion";

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
    value: 18,
    suffix: "",
    title: "Años de Experiencia",
    description: "Formando técnicos profesionales",
  },
  {
    value: 1200,
    suffix: "+",
    title: "Alumnos Certificados",
    description: "Cursos presenciales y online",
  },
];

/* 🎬 CINEMATIC VARIANTS */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 140,
    rotateX: -30,
    filter: "blur(10px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.18,
      duration: 1.4,
      ease: easeInOut,
    },
  }),
};

const floatVariants = {
  animate: {
    y: [0, -14, 0],
    rotateZ: [0, 0.6, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

export default function StatsSection() {
  return (
    <section
      className="mb-20
        relative h-screen w-full overflow-visible
        bg-white text-[#50A2FF]
        dark:bg-gray-950  dark:text-white
        flex items-center justify-center
      "
    >
      
     

      {/* 📽 GRAIN */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[url('/noise.png')]
          opacity-[0.04]
          mix-blend-overlay
        "
      />

      {/* 📡 SCANLINES */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[length:100%_4px]
          opacity-[0.06]
        "
      />

      <div className="relative max-w-7xl w-full px-6">
        {/* 🎬 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2
  initial={{ opacity: 0, y: 60, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="
    text-4xl md:text-6xl font-bold mb-6
    text-slate-800 dark:text-white
  "
>
  Resultados que hablan por sí solos
</motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="
              text-lg md:text-xl max-w-3xl mx-auto leading-relaxed
              text-[#50A2FF]/80 dark:text-white/80
            "
          >
            Formación técnica real, experiencia comprobada y excelencia
            profesional en refrigeración integral.
          </motion.p>
        </motion.div>

        {/* 🧊 STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 perspective-[1600px]">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{
                scale: 1.07,
                rotateX: 10,
                rotateY: -10,
                transition: {
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                },
              }}
              className="relative group"
            >
              {/* 💡 HOVER AURA */}
              <div
                className="
                  absolute inset-0 rounded-3xl
                  bg-[#50A2FF]/40
                  blur-2xl opacity-0
                  group-hover:opacity-100
                  transition duration-700
                "
              />

              <motion.div
                variants={floatVariants}
                animate="animate"
                className="
                  relative h-full p-10 text-center rounded-3xl
                  backdrop-blur-2xl
                  border border-[#50A2FF]/30 dark:border-white/10
                  bg-white/85 dark:bg-white/5
                "
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
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="
                    mt-8 h-[2px] w-full origin-center
                    bg-gradient-to-r from-transparent
                    via-[#50A2FF]
                    to-transparent
                  "
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
