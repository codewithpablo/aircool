import HeroSlider from "./HeroSlider";
import { TypeAnimation } from "react-type-animation";
import HeroBrandsCarrousel from "./HeroBrandsCarrousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../other/ThemeToggle";

const Hero = () => {
  return (
    <div className="relative w-full h-full  dark:bg-gray-950">



      <div className="flex flex-col h-[900px] lg:flex-row lg:h-[90dvh]">

        {/* Texto */}
        <div className="flex-1 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-12 py-10 lg:py-0">
          <div className="max-w-[90%] sm:max-w-[80%] lg:max-w-full mx-auto flex flex-col  relative md:bottom-10">


            {/* 🟦 TÍTULO DESKTOP */}
            <h1 className=" lg:flex-col text-6xl  h-48 xl:text-7xl font-semibold mt-20 text-gray-900 dark:text-white">
              <span>De cero a </span>
              <TypeAnimation
                sequence={[
                  " técnico certificado",
                  5000,
                  "",
                  800,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={40}
                repeat={Infinity}
                className="text-blue-400 italic"
              />
            </h1>

            {/* Descripción */}
            <p className="text-gray-600 text leading-relaxed dark:text-gray-300">
              Adquirí habilidades prácticas de alta demanda y escasa oferta en el mercado. Nuestro cuerpo docente de Ingenieros y Licenciados, con décadas de trayectoria en instituciones de referencia nacional, reúne más de 25 años de experiencia, ahora dedicados a la formación de técnicos.
            </p>

            {/* Botones */}
            <div className=" md:w-[300px] md:mx-0 flex lg:flex-row  flex-col gap-3 mt-5">
              <Link href="/links">
                <Button className="text-white rounded-full bg-blue-400 hover:bg-blue-500 w-full lg:w-[200px]">
                  Ingresar al campus
                </Button>
              </Link>
              <Link href="/courses">
                <Button className="lg:w-[200px] w-full bg-white border border-blue-400 rounded-full text-gray-900 hover:bg-white dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
                  Ver todos los cursos
                </Button>
              </Link>

          <ThemeToggle />

            </div>

          </div>
        </div>

        {/* Slider */}
        <div className=" flex-1 flex justify-center items-center relative bottom-5 md:bottom-16 px-4 sm:px-6 lg:px-0 md:mt-24">
          <div className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[550px] h-[300px] sm:h-[450px] md:h-[300px] lg:h-[480px] overflow-hidden rounded-4xl">
            <HeroSlider />
          </div>
        </div>

      </div>
          <div className="py-10">
            <HeroBrandsCarrousel />
          </div>

    </div>
  );
};

export default Hero;
