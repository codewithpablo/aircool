// DashboardCompuesto.tsx (Dropdown Pegado + Hover Robusto)
"use client";

import { useState } from 'react';
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
    <div
      className="absolute top-full mt-2 w-full min-w-[220px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden z-20 border border-gray-200 dark:border-white/10"
    >
      <ul className="py-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-white/5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --------------------------------------------------
// 2. COMPONENTE CardEnlace
// --------------------------------------------------

interface CardEnlaceProps {
  title: string;
  description: string;
  link: string;
  Icon: LucideIcon;
  dropdownItems?: DropdownItem[];
}

const CardEnlace = ({ title, description, link, Icon, dropdownItems }: CardEnlaceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = dropdownItems && dropdownItems.length > 0;

  const buttonStyle = "mt-6 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-emerald-500 hover:to-cyan-600 text-white rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95 w-full font-medium whitespace-nowrap";

  return (
    <div
      className={`flex flex-col h-full bg-white dark:bg-gray-900/40 dark:backdrop-blur-xl border border-gray-100 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg transition-all hover:shadow-2xl relative hover:-translate-y-1 ${isOpen ? "z-50" : "z-10"
        }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-emerald-50 dark:bg-white/5 p-3 rounded-xl border border-emerald-100 dark:border-white/10 text-emerald-500">
          <Icon size={28} />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 dark:text-white leading-tight">
          {title}
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-auto">
        {description}
      </p>

      {hasDropdown ? (
        <div
          className="relative inline-block w-full"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className={`${buttonStyle} cursor-pointer`}>
            <span>Acceder</span>
            <ChevronDown size={20} className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
          </div>
          <DropdownMenu items={dropdownItems} isOpen={isOpen} />
        </div>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" className={buttonStyle}>
          <span>Acceder</span>
        </a>
      )}
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
    <div className="relative min-h-screen w-full text-gray-900 dark:text-white transition-colors duration-300 pt-28 pb-32 overflow-visible">



      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pt-10">

        {/* HEADER DE LINKS */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1
            className="font-heading tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-950 dark:text-white"
          >
            Portal del estudiante
          </h1>

          <p
            className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Navegación rápida y recursos destacados. Seleccioná el portal al que deseas ingresar con tu cuenta institucional.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl px-2"
        >
          <CardEnlace
            title="Cursos"
            description="Accede a todo el material teórico, videoclases y evaluaciones de los cursos a los que estás inscripto."
            link={fakeLinks.cursos}
            Icon={BookOpen}
            dropdownItems={cursosItems}
          />

          <CardEnlace
            title="Clases en vivo"
            description="Conectate a las clases sincrónicas con los profesores e interactuá con tus compañeros del curso."
            link={fakeLinks.clases}
            Icon={MonitorPlay}
            dropdownItems={clasesItems}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardCompuesto;
