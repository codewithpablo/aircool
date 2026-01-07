'use client';

import React from 'react';
import { Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">
        
        {/* CONTENIDO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-start text-gray-700 dark:text-gray-300">
          
          {/* LOGO + DESCRIPCIÓN */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold italic tracking-tight text-gray-900 dark:text-white">
              Air Cool
            </h2>
            <p className="max-w-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Aprendé, facturá alto y convertite en el técnico que todos llaman.  
              Tu camino hacia la experiencia profesional comienza aquí.
            </p>
          </div>

          {/* ESPACIADOR VISUAL */}
          <div className="hidden md:block" />

          {/* CONTACTO + REDES */}
          <div className="flex flex-col gap-6 md:items-end">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Contacto
            </h3>

            <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
              <Mail className="w-5 h-5 text-blue-500" />
              <span>info@refrigeracionpro.com</span>
            </div>

            <div className="flex gap-5">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gray-200 dark:border-gray-800
                             hover:bg-blue-500 hover:text-white hover:border-blue-500
                             transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* DIVISOR */}
        <div className="my-14 border-t border-gray-200 dark:border-gray-800" />

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Air Cool. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
