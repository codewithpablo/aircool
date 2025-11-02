// DashboardCompuesto.js (Simplificado, sin Tooltips)
"use client";

import { motion } from "framer-motion";
import { BookOpen, MonitorPlay, Calendar, Library, Bell } from "lucide-react"; 
// Se eliminaron las importaciones de shadcn/ui (Tooltip)


// --------------------------------------------------
// 1. COMPONENTE ButtonEnlace (Simplificado)
// --------------------------------------------------

// Ahora es un componente de botón/enlace simple sin lógica de estado ni tooltips.
const ButtonEnlace = ({ children, colorClass, link, Icon }: any) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center space-x-2 px-6 py-3 ${colorClass} rounded-lg shadow-lg transition hover:scale-[1.02] whitespace-nowrap`} 
    >
      <Icon size={20} /> 
      <span>{children}</span>
    </a>
  );
};


// --------------------------------------------------
// 2. COMPONENTE PRINCIPAL DashboardCompuesto (Centrado con Botones Horizontales)
// --------------------------------------------------

const DashboardCompuesto = () => {
  const fakeLinks = {
    cursos: "https://plataforma.estudiante.com/cursos",
    clases: "https://plataforma.estudiante.com/live",
    calendario: "https://plataforma.estudiante.com/agenda",
    biblioteca: "https://plataforma.estudiante.com/biblioteca",
    avisos: "https://plataforma.estudiante.com/noticias",
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* --- Video de fondo --- */}
      <video
        src="/aircool.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-[5px] scale-[1.1]" 
      />

      {/* --- Contenido Centrado --- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 lg:px-8">
        
        {/* --- Títulos --- */}
        <motion.h1
          className="text-5xl lg:text-7xl font-extrabold mb-4 text-center font-poppins drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Portal del Estudiante
        </motion.h1>

        <motion.p
          className="text-lg lg:text-3xl text-center font-light font-poppins opacity-90 drop-shadow-md mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Navegación rápida y recursos destacados
        </motion.p>

        {/* --- Botones de Navegación (Horizontal) --- */}
        {/* Se elimina TooltipProvider */}
        <motion.div
          className="flex flex-row flex-wrap justify-center gap-4 max-w-4xl" 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, staggerChildren: 0.1, duration: 0.5 }}
        >
          
          {/* Los botones ahora usan el componente simple ButtonEnlace */}
          <ButtonEnlace
            colorClass="bg-blue-600 hover:bg-blue-700"
            link={fakeLinks.cursos}
            Icon={BookOpen}
          >
            Cursos
          </ButtonEnlace>

          <ButtonEnlace
            colorClass="bg-cyan-500 hover:bg-cyan-600"
            link={fakeLinks.clases}
            Icon={MonitorPlay}
          >
            Clases en Vivo
          </ButtonEnlace>

          <ButtonEnlace
            colorClass="bg-indigo-500 hover:bg-indigo-600"
            link={fakeLinks.calendario}
            Icon={Calendar}
          >
            Calendario
          </ButtonEnlace>
          
          <ButtonEnlace
            colorClass="bg-purple-600 hover:bg-purple-700"
            link={fakeLinks.biblioteca}
            Icon={Library}
          >
            Biblioteca
          </ButtonEnlace>
          
          <ButtonEnlace
            colorClass="bg-rose-500 hover:bg-rose-600"
            link={fakeLinks.avisos}
            Icon={Bell}
          >
            Avisos
          </ButtonEnlace>
        </motion.div>

      </div> 
    </div>
  );
};

export default DashboardCompuesto;