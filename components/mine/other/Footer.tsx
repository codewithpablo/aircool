'use client';

import React from 'react';
import { Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="min-h-screen  from-blue-400 via-white to-white dark:bg-gray-950 py-16 px-6 md:px-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700 dark:text-gray-300">
        
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-semibold italic mb-4 text-gray-900 dark:text-white">
            Air Cool
          </h2>
          <p className="max-w-xs text-gray-500 dark:text-gray-400">
            Aprendé, facturá alto y convertite en el técnico que todos llaman.  
            Tu camino hacia la experiencia profesional comienza aquí.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Secciones
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#units" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                Qué vas a aprender
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                Acerca de mí
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Redes y contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Contacto y Redes
          </h3>

          <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
            <Mail className="w-5 h-5 text-blue-400 dark:text-blue-300" />
            info@refrigeracionpro.com
          </p>

          <div className="flex gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 dark:text-gray-500 text-sm">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </div>
    </footer>
  );
}
