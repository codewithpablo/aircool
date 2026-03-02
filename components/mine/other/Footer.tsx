'use client';

import React from 'react';
import { SiGmail, SiInstagram, SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
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

          {/* ICONOS DE CONTACTO */}
          <div className="flex flex-col gap-6 items-start">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Contacto
            </h3>

            <div className="flex flex-col gap-4 items-start">
              {/* Gmail */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aircool.integral@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
                title="Enviar correo por Gmail"
              >
                <span className="p-3 rounded-full border border-gray-200 dark:border-gray-800 group-hover:bg-red-500/10 transition-colors">
                  <SiGmail className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">Gmail</span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">aircool.integral@gmail.com</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/aircoolrefrigeracion/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
                title="Instagram"
              >
                <span className="p-3 rounded-full border border-gray-200 dark:border-gray-800 group-hover:bg-pink-500/10 transition-colors">
                  <SiInstagram className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">Instagram</span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">@aircoolrefrigeracion</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5493625490089"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
                title="WhatsApp"
              >
                <span className="p-3 rounded-full border border-gray-200 dark:border-gray-800 group-hover:bg-green-500/10 transition-colors">
                  <SiWhatsapp className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">WhatsApp</span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">+54 9 362 549 0089</span>
                </div>
              </a>
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