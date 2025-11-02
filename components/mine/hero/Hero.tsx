import HeroSlider from "./HeroSlider";
import { TypeAnimation } from "react-type-animation";
import AuthButton from "../other/AuthButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col  h-[900px] lg:flex-row lg:h-[90dvh]">
        {/* Texto */}
        <div className="flex-1 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-12 py-10 lg:py-0">
          <div className="max-w-[90%] sm:max-w-[80%] lg:max-w-full mx-auto flex flex-col  gap-4 relative md:bottom-10">
            {/* Título móvil */}
            <h1 className="lg:hidden text-left text-5xl sm:text-6xl font-semibold ">
              <span>
                De cero a <span className="text-blue-400 italic">ingresos reales</span>: aprendé sobre Refrigeración Integral
              </span>
            </h1>

            {/* Título escritorio */}
            <h1 className="hidden lg:flex lg:flex-col text-4xl xl:text-6xl font-semibold my-5">
              <span>
                De cero a <span className="text-blue-400 italic">ingresos reales</span>: aprendé sobre Refrigeración Integral
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Aprendé habilidades prácticas y muy demandadas que pocos ofrecen. Con docentes matriculados, que poseen décadas de trayectoria y formación en los mejores institutos del país, condensan años de experiencia en clases 100% prácticas para que las apliques vos mismo. Aprendé rápido, prácticalo en casos reales y ganá ventaja profesional.
            </p>

            {/* Botones */}
            <div className="w-fit mx-auto md:w-[300px] md:mx-0 flex gap-3 mt-5">
              <Link href="/choose">
                <Button className="text-white rounded-full bg-blue-400 hover:bg-blue-400">Ingresar al campus</Button>
              </Link>
              <Link href="/courses">
                <Button className="bg-white rounded-full text-gray-900 hover:bg-white">Ver todos los cursos</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="flex-1 flex justify-center items-center relative bottom-5 md:bottom-16 px-4 sm:px-6 lg:px-0 md:mt-24 ">
          <div className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[550px] h-[300px] sm:h-[450px] md:h-[300px]  lg:h-[480px] overflow-hidden  rounded-4xl">
            <HeroSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
