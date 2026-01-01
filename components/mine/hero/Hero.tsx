import HeroSlider from "./HeroSlider";
import { TypeAnimation } from "react-type-animation";
import AuthButton from "../other/AuthButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* 💡 NOTA: El fondo de esta sección (Hero) lo hereda del Home.js,
          que ya aplicamos dark:bg-gradient. */}
      <div className="flex flex-col h-[900px] lg:flex-row lg:h-[90dvh]">
        {/* Texto */}
        <div className="flex-1 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-12 py-10 lg:py-0">
          <div className="max-w-[90%] sm:max-w-[80%] lg:max-w-full mx-auto flex flex-col gap-4 relative md:bottom-10">
            
            {/* Título móvil */}
            <h1 className="lg:hidden text-left text-5xl sm:text-6xl font-semibold 
              /* 🟢 DARK MODE: El texto principal es blanco/claro */
              text-gray-900 dark:text-white 
            ">
              <span>
                De cero a<span className="text-blue-400 italic">tecnico certificado</span>
              </span>
            </h1>

            {/* Título escritorio */}
            <h1 className="hidden lg:flex lg:flex-col text-4xl xl:text-7xl font-semibold my-5
              /* 🟢 DARK MODE: El texto principal es blanco/claro */
              text-gray-900 dark:text-white
            ">
              <span>
                De cero a <span className="text-blue-400 italic">tecnico certificado</span>
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-gray-600 text-sm sm:text-sm lg:text-sm leading-relaxed
              /* 🟢 DARK MODE: El texto secundario es un gris claro */
              dark:text-gray-300
            ">
              Adquirí habilidades prácticas de alta demanda y escasa oferta en el mercado. Nuestro cuerpo docente de Ingenieros y Licenciados, con décadas de trayectoria en instituciones de referencia nacional, reúne más de 25 años de experiencia, ahora dedicados a la formación de técnicos. Las clases, principalmente prácticas y orientadas a la aplicación inmediata, se desarrollan en escenarios reales donde cada estudiante construye conocimientos significativos y sólidos.
Formate con bases técnicas firmes y desarrollá las competencias necesarias para desempeñarte con seguridad y criterio profesional.
            </p>

            {/* Botones */}
            <div className="w-fit mx-auto md:w-[300px] md:mx-0 flex gap-3 mt-5">
              <Link href="/links">
                {/* Botón Principal: Ya es azul (se mantiene el color) */}
                <Button className="text-white rounded-full bg-blue-400 hover:bg-blue-400">Ingresar al campus</Button>
              </Link>
              <Link href="/courses">
                {/* 🟢 DARK MODE: Botón Secundario (Fondo Blanco -> Fondo Gris Oscuro) */}
                <Button className="bg-white rounded-full text-gray-900 hover:bg-white 
                  dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700
                ">Ver todos los cursos</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider */}
        {/* 💡 El HeroSlider también necesitaría ajustes si tiene fondos internos blancos */}
        <div className="flex-1 flex justify-center items-center relative bottom-5 md:bottom-16 px-4 sm:px-6 lg:px-0 md:mt-24 ">
          <div className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[550px] h-[300px] sm:h-[450px] md:h-[300px] lg:h-[480px] overflow-hidden rounded-4xl">
            <HeroSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;