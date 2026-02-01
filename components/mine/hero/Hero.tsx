"use client";

import HeroSlider from "./HeroSlider";
import { TypeAnimation } from "react-type-animation";
import HeroBrandsCarrousel from "./HeroBrandsCarrousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../other/ThemeToggle";

const Hero = () => {
  return (
    <div className="relative w-full overflow-y-visible bg-white dark:bg-gray-950">

      {/* FONDO GRADIENT BLUR */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-linear-to-br from-blue-400/25 via-cyan-300/20 to-indigo-400/20 dark:from-blue-500/20 dark:via-cyan-400/15 dark:to-indigo-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-linear-to-tr from-sky-300/25 via-blue-300/20 to-cyan-300/20 dark:from-sky-400/20 dark:via-blue-400/15 dark:to-cyan-400/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-300px] left-1/3 w-[700px] h-[700px] bg-linear-to-t from-indigo-400/20 via-blue-400/15 to-transparent dark:from-indigo-500/15 dark:via-blue-500/10 rounded-full blur-[140px]" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col h-auto lg:flex-row lg:h-[90dvh]">

        {/* TEXTO */}
        <div className="flex-1 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-12 py-12 lg:py-0">
          <div className="w-full mx-auto relative lg:bottom-10">

            <h1 className=" text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold mt-4 sm:mt-10 lg:mt-20 text-gray-900 dark:text-white w-[80%] lg:w-full mx-auto  lg:text-left h-auto min-h-[160px] sm:min-h-[200px] lg:h-auto">
              <span>De cero a técnico</span>
              <TypeAnimation
                sequence={["certificado", 5000, "", 800]}
                wrapper="span"
                speed={50}
                deletionSpeed={40}
                repeat={Infinity}
                className="text-blue-400 italic block lg:inline"
              />
            </h1>

            <p className="mt-4 sm:mt-6 w-full sm:w-[90%] lg:w-full mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center lg:text-left">
              Adquirí habilidades prácticas de alta demanda y escasa oferta en el mercado.
              Nuestro cuerpo docente de Ingenieros y Licenciados, con décadas de trayectoria,
              reúne más de 25 años de experiencia dedicados a la formación técnica.
            </p>

            {/* BOTONES */}
            <div className="mt-8 sm:mt-10 w-full lg:w-full mx-auto flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-center">
              <Link href="/links" className="w-full sm:w-auto">
                <Button className="rounded-full px-8 py-6 text-base w-full sm:w-auto bg-blue-400 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-shadow">
                  Ingresar al campus
                </Button>
              </Link>

              <Link href="/courses" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base w-full sm:w-auto border-blue-400 dark:border-blue-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Ver todos los cursos
                </Button>
              </Link>

              <div className="hidden lg:block">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div className="flex-1 flex justify-center items-center lg:items-end pb-12 lg:pb-0 px-4 lg:px-0 mt-8 lg:mt-0">
          <div className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] aspect-[4/3] lg:h-[430px] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/30 lg:mb-16">
            <HeroSlider />
          </div>
        </div>
      </div>

      {/* MARCAS */}
      <div className="relative z-10 py-12">
        <HeroBrandsCarrousel />
      </div>
    </div>
  );
};

export default Hero;
