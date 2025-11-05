// DashboardCompuesto.tsx (Con Dropdowns al hacer Hover y tipado TS corregido)
"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { BookOpen, MonitorPlay, Calendar, Library, Bell, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// --------------------------------------------------
// 1. COMPONENTE DropdownMenu
// --------------------------------------------------

interface DropdownItem {
  name: string;
  link: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  isOpen: boolean;
}

const DropdownMenu = ({ items, isOpen }: DropdownMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full mt-2 w-full min-w-[200px] bg-gray-800 rounded-lg shadow-xl overflow-hidden z-20 border border-gray-700"
    >
      <ul className="py-1">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white transition duration-150"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// --------------------------------------------------
// 2. COMPONENTE ButtonEnlace
// --------------------------------------------------

interface ButtonEnlaceProps {
  children: React.ReactNode;
  colorClass: string;
  link: string;
  Icon: LucideIcon; // <-- Tipado específico para iconos lucide
  dropdownItems?: DropdownItem[];
}

const ButtonEnlace = ({ children, colorClass, link, Icon, dropdownItems }: ButtonEnlaceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = dropdownItems && dropdownItems.length > 0;

  if (!hasDropdown) {
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
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`flex items-center space-x-2 px-6 py-3 ${colorClass} rounded-lg shadow-lg transition hover:scale-[1.02] whitespace-nowrap cursor-pointer`}
      >
        <Icon size={20} />
        <span>{children}</span>
        <ChevronDown
          size={20}
          className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      <DropdownMenu items={dropdownItems} isOpen={isOpen} />
    </div>
  );
};

// --------------------------------------------------
// 3. COMPONENTE PRINCIPAL DashboardCompuesto
// --------------------------------------------------

const DashboardCompuesto = () => {
  const fakeLinks = {
    cursos: "https://plataforma.estudiante.com/cursos",
    clases: "https://plataforma.estudiante.com/live",
    calendario: "https://plataforma.estudiante.com/agenda",
    biblioteca: "https://plataforma.estudiante.com/biblioteca",
    avisos: "https://plataforma.estudiante.com/noticias",
  };

  const cursosItems = [
    { name: "Instalacion de Split", link: `${fakeLinks.cursos}/react-avanzado` },
    { name: "Instalaciones electricas", link: `${fakeLinks.cursos}/node-db` },
    { name: "Refrigeracion familiar", link: `${fakeLinks.cursos}/ia-fundamentos` },
  ];

  const clasesItems = [
    { name: "Instalacion de Split", link: `${fakeLinks.clases}/taller-hooks` },
    { name: "Instalaciones electricas", link: `${fakeLinks.clases}/patrones-diseno` },
    { name: "Refrigeracion familiar", link: `${fakeLinks.clases}/optimizacion` },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        src="/aircool.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-[5px] scale-[1.1]"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 lg:px-8">
        <motion.h1
          className="text-5xl lg:text-7xl font-extrabold mb-4 text-center font-poppins drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Portal del estudiante
        </motion.h1>

        <motion.p
          className="text-lg lg:text-3xl text-center font-light font-poppins opacity-90 drop-shadow-md mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Navegación rápida y recursos destacados
        </motion.p>

        <motion.div
          className="flex flex-row flex-wrap justify-center gap-4 max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, staggerChildren: 0.1, duration: 0.5 }}
        >
          <ButtonEnlace
            colorClass="bg-blue-600 hover:bg-blue-700"
            link={fakeLinks.cursos}
            Icon={BookOpen}
            dropdownItems={cursosItems}
          >
            Cursos
          </ButtonEnlace>

          <ButtonEnlace
            colorClass="bg-cyan-500 hover:bg-cyan-600"
            link={fakeLinks.clases}
            Icon={MonitorPlay}
            dropdownItems={clasesItems}
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
