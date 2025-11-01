'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="min-h-screen bg-linear-to-tl from-blue-400 via-white to-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-semibold italic mb-4">Air Cool</h2>
          <p className="text-gray-400 max-w-xs">
            Aprendé, facturá alto y convertite en el técnico que todos llaman.  
            Tu camino hacia la experiencia profesional comienza aquí.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Secciones</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#units" className="hover:text-blue-400 transition-colors">Qué vas a aprender</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition-colors">Acerca de mí</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Redes y contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto y Redes</h3>
          <p className="flex items-center gap-2 text-gray-400 mb-4">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2 3h20v18H2V3zm2 2v14h16V5H4zm8 2a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            info@refrigeracionpro.com
          </p>
          <div className="flex gap-4">
            {/* Instagram SVG */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.68 3.5 4 5.18 4 7.25v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.18 18.32 3.5 16.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.25 1.12 1.12 0 010-2.25z"/>
              </svg>
            </a>
            {/* Facebook SVG */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34V21.88C18.34 21.12 22 17 22 12z"/>
              </svg>
            </a>
            {/* LinkedIn SVG */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM2 9h6v12H2V9zm8.5 0h5.5v1.71h.08c.77-1.45 2.66-2.98 5.42-2.98 5.8 0 6.88 3.82 6.88 8.78V21h-6v-7.5c0-1.78-.03-4.08-2.48-4.08-2.48 0-2.86 1.94-2.86 3.95V21h-6V9z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </div>
    </footer>
  );
}
