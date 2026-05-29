'use client';

import { SiGmail, SiInstagram, SiWhatsapp, SiFacebook } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="relative overflow-visible">
      {/* CÍRCULO DIFUMINADO (Celeste en Light, Verde en Dark) */}
      <div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-blue-400/50 dark:bg-gray-950/10 rounded-full blur-[120px] lg:blur-[140px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-8 md:py-16">

        {/* CONTENIDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14 items-start text-gray-950 dark:text-gray-200">

          {/* LOGO + DESCRIPCIÓN */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-semibold italic tracking-tight text-gray-950 dark:text-white">Air Cool</h2>
            <p className="max-w-sm text-sm sm:text-base text-gray-900 dark:text-gray-400 leading-relaxed">
              Aprendé, facturá alto y convertite en el técnico que todos llaman.
              Tu camino hacia la experiencia profesional comienza aquí.
            </p>
          </div>

          {/* ESPACIADOR VISUAL */}
          <div className="hidden md:block" />

          {/* ICONOS DE CONTACTO */}
          <div className="flex flex-col gap-6 items-start">
            <h3 className="text-lg font-semibold text-gray-950 dark:text-white">Contacto</h3>

            <div className="flex flex-col gap-4 items-start">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aircool.integral@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-gray-700 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
                title="Enviar correo por Gmail"
              >
                <span className="p-3 rounded-full border border-gray-200 group-hover:bg-red-500/10 transition-colors">
                  <SiGmail className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">Gmail</span>
                  <span className="text-sm font-medium text-gray-950 dark:text-gray-300">aircool.integral@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/aircoolrefrigeracion/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-gray-700 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
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

              <a
                href="https://wa.me/5493625490089"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-gray-200 transition-colors duration-300"
                title="WhatsApp"
              >
                <span className="p-3 rounded-full border border-gray-200 dark:border-gray-800 group-hover:bg-green-500/10 dark:group-hover:bg-gray-950/10 transition-colors">
                  <SiWhatsapp className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-gray-200 transition-colors">WhatsApp</span>
                  <span className="text-sm font-medium text-gray-950 dark:text-gray-300">+54 9 362 549 0089</span>
                </div>
              </a>

              <a
                href="https://www.facebook.com/share/15h3asvCfj3/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
                title="Facebook"
              >
                <span className="p-3 rounded-full border border-gray-200 dark:border-gray-800 group-hover:bg-blue-600/10 transition-colors">
                  <SiFacebook className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">Facebook</span>
                  <span className="text-sm font-medium text-gray-950 dark:text-gray-300">Air Cool</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ESPACIADOR SIN BORDE */}
        <div className="my-14" />

        {/* COPYRIGHT */}
        <div className="text-center text-sm ">
          © {new Date().getFullYear()} Air Cool. Todos los derechos reservados.
        </div>
      </div>
    </footer >
  );
}
