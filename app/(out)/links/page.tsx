// DashboardCompuesto.tsx - Botones con iconos de Lucide React
"use client";

import { useState, useRef, useEffect } from 'react';
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
      className="absolute top-full mt-2 w-full min-w-[220px] bg-gradient-to-b from-cyan-400/90 to-sky-400/90 dark:from-cyan-500/85 dark:to-sky-500/85 backdrop-blur-xl rounded-xl shadow-2xl shadow-cyan-400/20 overflow-hidden z-20 border border-cyan-300/50 dark:border-cyan-400/40"
    >
      <ul className="py-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-3 text-sm text-white font-medium hover:bg-white/20 dark:hover:bg-white/15 transition-colors duration-200"
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
// 2. COMPONENTE BotonEnlace (reemplaza CardEnlace)
// --------------------------------------------------

interface BotonEnlaceProps {
  title: string;
  link: string;
  Icon: LucideIcon;
  dropdownItems?: DropdownItem[];
  colorScheme?: string;
}

const BotonEnlace = ({ title, link, Icon, dropdownItems, colorScheme = "cyan" }: BotonEnlaceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hasDropdown = dropdownItems && dropdownItems.length > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const colorSchemes: Record<string, { bg: string; hover: string; shadow: string; text: string }> = {
    cyan: {
      bg: "bg-cyan-400/85 dark:bg-cyan-400/85",
      hover: "hover:bg-cyan-500/85 dark:hover:bg-cyan-500/85",
      shadow: "shadow-cyan-300/30",
      text: "text-white"
    },
    purple: {
      bg: "bg-purple-400/85 dark:bg-purple-400/85",
      hover: "hover:bg-purple-500/85 dark:hover:bg-purple-500/85",
      shadow: "shadow-purple-300/30",
      text: "text-white"
    },
    orange: {
      bg: "bg-orange-400/85 dark:bg-orange-400/85",
      hover: "hover:bg-orange-500/85 dark:hover:bg-orange-500/85",
      shadow: "shadow-orange-300/30",
      text: "text-white"
    },
    green: {
      bg: "bg-emerald-400/85 dark:bg-emerald-400/85",
      hover: "hover:bg-emerald-500/85 dark:hover:bg-emerald-500/85",
      shadow: "shadow-emerald-300/30",
      text: "text-white"
    },
    red: {
      bg: "bg-rose-400/85 dark:bg-rose-400/85",
      hover: "hover:bg-rose-500/85 dark:hover:bg-rose-500/85",
      shadow: "shadow-rose-300/30",
      text: "text-white"
    },
    blue: {
      bg: "bg-sky-400/85 dark:bg-sky-400/85",
      hover: "hover:bg-sky-500/85 dark:hover:bg-sky-500/85",
      shadow: "shadow-sky-300/30",
      text: "text-white"
    }
  };

  const scheme = colorSchemes[colorScheme] || colorSchemes.cyan;

  const baseButtonClass = `relative flex items-center justify-center gap-3 px-6 py-3 w-full sm:w-auto ${scheme.bg} ${scheme.hover} ${scheme.text} rounded-xl shadow-lg ${scheme.shadow} backdrop-blur-md transition-all duration-200 active:scale-95 font-semibold text-base whitespace-nowrap`;

  if (hasDropdown) {
    return (
      <div ref={dropdownRef} className="relative block w-full sm:w-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={baseButtonClass}
        >
          <Icon size={24} />
          <span>{title}</span>
          <ChevronDown size={18} className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
        </button>
        <DropdownMenu items={dropdownItems} isOpen={isOpen} />
      </div>
    );
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={baseButtonClass}>
      <Icon size={24} />
      <span>{title}</span>
    </a>
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
        <div className="absolute inset-0 overflow-hidden">
          <video
            src="/aircool.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover  dark:opacity-35 blur-md"
          />
        </div>

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

        {/* BOTONES ENLACE - Sin cards, solo botones con iconos */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full">
          <BotonEnlace
            title="Cursos"
            link={fakeLinks.cursos}
            Icon={BookOpen}
            dropdownItems={cursosItems}
            colorScheme="purple"
          />

          <BotonEnlace
            title="Clases en vivo"
            link={fakeLinks.clases}
            Icon={MonitorPlay}
            dropdownItems={clasesItems}
            colorScheme="orange"
          />

          <BotonEnlace
            title="Calendario"
            link={fakeLinks.calendario}
            Icon={Calendar}
            colorScheme="green"
          />

          <BotonEnlace
            title="Biblioteca"
            link={fakeLinks.biblioteca}
            Icon={Library}
            colorScheme="blue"
          />

          <BotonEnlace
            title="Avisos"
            link={fakeLinks.avisos}
            Icon={Bell}
            colorScheme="red"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardCompuesto;