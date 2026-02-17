"use client";

import HeroSlider from "./HeroSlider";
import { TypeAnimation } from "react-type-animation";
import HeroBrandsCarrousel from "./HeroBrandsCarrousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../other/ThemeToggle";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-gray-950">

      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px]
          bg-gradient-to-br from-blue-400/25 via-cyan-300/20 to-indigo-400/20
          dark:from-blue-500/20 dark:via-cyan-400/15 dark:to-indigo-500/15" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full blur-[120px]
          bg-gradient-to-tr from-sky-300/25 via-blue-300/20 to-cyan-300/20
          dark:from-sky-400/20 dark:via-blue-400/15 dark:to-cyan-400/15" />
      </div>

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
