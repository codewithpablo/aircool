"use client"
import HeroSlider from "./HeroSlider"

import { TypeAnimation } from "react-type-animation"
import AuthButton from "../other/AuthButton"
import Link from "next/link"
const Hero = () => {
  return (
 <div className="relative">
  
 
     <div className='flex flex-col lg:flex-row  lg:h-[90dvh] '>
        <div className='flex-1 flex flex-col justify-center h-full ' >
            <div className="w-[80%] flex flex-col gap-3 mx-auto">
              <h1 className="lg:hidden text-center text-6xl  font-semibold my-10 ">
            Aprendé a dominar  la<br />  refrigeracion <br /> y potencia tu <br />{" "}
            <TypeAnimation
              sequence={[
                "carrera",
                1500,
                "exito",
                1500,
                "futuro",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="inline-block text-red-400"
            />
          </h1>
              <h1 className="hidden lg:flex lg:flex-col   text-6xl  font-semibold my-5 ">
            <span>Aprendé a dominar  la   refrigeracion  y potencia tu {" "}</span>
            <TypeAnimation
              sequence={[
                "carrera",
                1500,
                "exito",
                1500,
                "futuro",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="inline-block text-blue-500"
            />
          </h1>
                <p className="text-gray-400">Tu crecimiento profesional comienza aquí: capacitaciones técnicas teoricas virtuales y practicas obligatoriamente presenciales, para dominar la refrigeración, el aire acondicionado y la climatización moderna.</p>
                <div className="flex gap-2">
                <Link href="/admin/dashboard">
                    <AuthButton text="Ingresar al campus"/>
                </Link>
                <Link href="/courses">
                    <AuthButton text="Ver todos los cursos"/>
                </Link>
                </div>
            </div>

            
        </div>
        <div className='flex-1 flex flex-col items-start  lg:h-full relative  justify-start '>
           <div className=" rounded-2xl overflow-hidden">
             <HeroSlider />
           </div>
        </div>
    </div>


 </div>
  )
}

export default Hero