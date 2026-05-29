"use client";

import HeroSlider from "./HeroSlider";
import { TypeAnimation } from "react-type-animation";
import HeroBrandsCarrousel from "./HeroBrandsCarrousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../other/ThemeToggle";

const Hero = () => {
  return (
    <section className="relative w-full overflow-visible transition-colors duration-300">

      {/* CONTENIDO CENTRADO */}
      <div className="w-full mx-auto max-w-[1400px] px-4 sm:px-8 md:px-12 lg:px-16">

        <div className="flex flex-col lg:flex-row items-center justify-between
                        py-12 sm:py-16 md:py-20 gap-10 md:gap-14 lg:gap-16">

          {/* Text */}
          <div className="flex-1 w-full text-center lg:text-left space-y-6 lg:space-y-8">

            <h1 className="font-semibold text-gray-950 dark:text-white
              text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight break-words">

              <span className="block text-gray-800 dark:text-gray-200">De cero a técnico</span>

              <TypeAnimation
                sequence={["certificado", 5000, "", 800]}
                wrapper="span"
                speed={50}
                deletionSpeed={40}
                repeat={Infinity}
                className="text-blue-400 italic block lg:inline"
              />
            </h1>

            <p className="max-w-lg mx-auto lg:mx-0
              text-base sm:text-lg text-gray-900 dark:text-gray-200 leading-relaxed">

              Adquirí habilidades prácticas de alta demanda y escasa oferta en el mercado.
              Nuestro cuerpo docente de Ingenieros y Licenciados, con décadas de trayectoria,
              reúne más de 25 años de experiencia dedicados a la formación técnica.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4
                            justify-center lg:justify-start pt-2">

              <Link href="/links">
                <Button
                  className="w-full sm:w-auto rounded-full px-8 py-6 text-base
                  bg-blue-400  text-white
                  transition-all"
                >
                  Ingresar al campus
                </Button>
              </Link>

              <Link href="/courses">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto rounded-full px-8 py-6 text-base
                  transition-all"
                >
                  Ver todos los cursos
                </Button>
              </Link>

              <div className="flex justify-center sm:justify-start">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-xl relative">

            {/* CÍRCULO DIFUMINADO PARA EL HERO (Celeste en Light, Verde en Dark) */}
            <div
              className="absolute top-1/2 left-1/2 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-blue-400/50 dark:bg-gray-950/20 rounded-full blur-[140px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2"
            />


            <div
              className="relative w-full aspect-[4/3]
              rounded-3xl overflow-hidden
              shadow-xl shadow-black/20 dark:shadow-black/40 z-10"
            >
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>

      {/* BRANDS */}
      <div className="w-full pt-6 pb-2 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-12 overflow-hidden">
        <HeroBrandsCarrousel />
      </div>

    </section>
  );
};

export default Hero;
