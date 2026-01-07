"use client";

import HeroSlider from "./HeroSlider";
import { TypeAnimation } from "react-type-animation";
import HeroBrandsCarrousel from "./HeroBrandsCarrousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../other/ThemeToggle";
import { motion, Variants } from "framer-motion";

/* =======================
   Animaciones de texto
======================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, type: "tween", ease: "easeOut" },
  },
};

/* =======================
   Hover SOLO botones
======================= */

const buttonHover = {
  whileHover: {
    y: -3,
    scale: 1.03,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="relative w-full overflow-visible bg-white dark:bg-gray-950">

      {/* FONDO GRADIENT BLUR */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/25 via-cyan-300/20 to-indigo-400/20 dark:from-blue-500/20 dark:via-cyan-400/15 dark:to-indigo-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-sky-300/25 via-blue-300/20 to-cyan-300/20 dark:from-sky-400/20 dark:via-blue-400/15 dark:to-cyan-400/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-300px] left-1/3 w-[700px] h-[700px] bg-gradient-to-t from-indigo-400/20 via-blue-400/15 to-transparent dark:from-indigo-500/15 dark:via-blue-500/10 rounded-full blur-[140px]" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col h-[900px] lg:flex-row lg:h-[90dvh]">

        {/* TEXTO */}
        <motion.div
          className="flex-1 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-12 py-10 lg:py-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="w-full mx-auto relative md:bottom-10">

            <motion.h1
              variants={item}
              className="text-6xl h-48 w-full xl:text-7xl font-semibold mt-20 text-gray-900 dark:text-white"
            >
              <span>De cero a </span>
              <TypeAnimation
                sequence={[" técnico certificado", 5000, "", 800]}
                wrapper="span"
                speed={50}
                deletionSpeed={40}
                repeat={Infinity}
                className="text-blue-400 italic"
              />
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
            >
              Adquirí habilidades prácticas de alta demanda y escasa oferta en el mercado.
              Nuestro cuerpo docente de Ingenieros y Licenciados, con décadas de trayectoria,
              reúne más de 25 años de experiencia dedicados a la formación técnica.
            </motion.p>

            {/* BOTONES */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col lg:flex-row gap-4 items-start"
            >
              <motion.div {...buttonHover}>
                <Link href="/links">
                  <Button className="rounded-full px-8 py-6 text-base bg-blue-400 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-shadow">
                    Ingresar al campus
                  </Button>
                </Link>
              </motion.div>

              <motion.div {...buttonHover}>
                <Link href="/courses">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 text-base border-blue-400 dark:border-blue-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Ver todos los cursos
                  </Button>
                </Link>
              </motion.div>

              <motion.div {...buttonHover}>
                <ThemeToggle />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* SLIDER (SIN HOVER) */}
        <motion.div
          className="flex-1 flex justify-center items-center relative bottom-5 md:bottom-16 px-4 sm:pl-6 lg:px-0 md:mt-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-[500px] sm:w-[450px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[450px] md:h-[300px] lg:h-[430px] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/30">
            <HeroSlider />
          </div>
        </motion.div>
      </div>

      {/* MARCAS (SIN HOVER) */}
      <motion.div
        className="relative z-10 py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroBrandsCarrousel />
      </motion.div>
    </div>
  );
};

export default Hero;
