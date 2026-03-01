"use client";

import HeroSlider from "./HeroSlider";
import { TypeAnimation } from "react-type-animation";
import HeroBrandsCarrousel from "./HeroBrandsCarrousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../other/ThemeToggle";
import { CinematicBackground } from "../about/About";
const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-gray-950">

      <CinematicBackground />

      {/* CONTENIDO CENTRADO */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">

        <div className="flex flex-col lg:flex-row items-center justify-between
                        py-14 sm:py-16 lg:py-20 gap-10 lg:gap-16">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left space-y-6">

            <h1 className="font-semibold text-gray-900 dark:text-white
              text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight">

              <span className="block">De cero a técnico</span>

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
              text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">

              Adquirí habilidades prácticas de alta demanda y escasa oferta en el mercado.
              Nuestro cuerpo docente de Ingenieros y Licenciados, con décadas de trayectoria,
              reúne más de 25 años de experiencia dedicados a la formación técnica.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4
                            justify-center lg:justify-start pt-2">

              <Link href="/links">
                <Button className="rounded-full px-8 py-6 text-base
                  bg-blue-400 hover:bg-blue-500 text-white
                  shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60
                  transition-all">
                  Ingresar al campus
                </Button>
              </Link>

              <Link href="/courses">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base
                    border-blue-400 dark:border-blue-500
                    hover:bg-blue-50 dark:hover:bg-gray-800
                    transition-all"
                >
                  Ver todos los cursos
                </Button>
              </Link>

              <div className="hidden lg:block">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl">
            <div className="relative w-full aspect-[4/3]
              rounded-3xl overflow-hidden
              shadow-xl shadow-black/25">
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 FULL WIDTH BRANDS */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 py-12 ">
        <HeroBrandsCarrousel />
      </div>

    </section>
  );
};

export default Hero;
