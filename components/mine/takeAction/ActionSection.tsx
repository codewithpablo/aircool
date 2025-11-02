'use client';

import {
  TrendingUp,
  Wrench,
  Clock,
  Layers,
  ShieldCheck,
  Zap,
  DollarSign,
  Users,
  Star,
} from 'lucide-react';

export default function ActionSection() {
  return (
    <section className="w-full bg-linear-to-lr from-blue-300 via-blue-50 to-white flex items-center justify-center px-6 md:px-20 py-16 md:py-0 md:min-h-screen">
      <div className="flex flex-col items-center justify-center max-w-6xl w-full space-y-10">
        {/* Título principal centrado */}
        <div className="space-y-1 w-full mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Esto es una oportunidad,{' '}
            <span className="text-blue-600">no una opción</span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            La refrigeración hoy dejó de ser lujo y pasó a ser supervivencia. En olas de calor la gente paga rápido, sin dudar. Están protegiendo vidas y eso se prioriza.
          </p>
        </div>

        {/* GRID de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 w-full max-w-6xl">
          {[
            { icon: TrendingUp, title: 'Ingresos previsibles', text: 'Servicios que se repiten cada 6–12 meses — clientes fieles, ingresos estables.' },
            { icon: Wrench, title: 'Baja barrera de entrada', text: 'Con guía práctica y herramientas simples podés arrancar rápido.' },
            { icon: Clock, title: 'Alta rentabilidad', text: 'Pocas horas, margen alto — más tiempo libre y mejor ganancia.' },
            { icon: Layers, title: 'Múltiples ingresos', text: 'Instalación, recargas, mantenimiento, repuestos y upgrades.' },
            { icon: ShieldCheck, title: 'Resiliencia ante crisis', text: 'El confort y la salud siempre se priorizan — tu servicio se vuelve esencial.' },
            { icon: Zap, title: 'Demanda todo el año', text: 'En verano por calor, en invierno por mantenimiento — el trabajo nunca frena.' },
            { icon: DollarSign, title: 'Inversión mínima', text: 'Podés empezar con herramientas básicas y hacer crecer tu equipo con el tiempo.' },
            { icon: Users, title: 'Comunidad de apoyo', text: 'Aprendé y compartí con técnicos de toda la región que ya viven de esto.' },
            { icon: Star, title: 'Reconocimiento local', text: 'Con trabajo constante, te convertís en “el técnico de confianza” de tu zona.' },
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex flex-col">
                {/* Título de cada viñeta alineado a la izquierda */}
                <span className="flex items-center gap-3 font-semibold text-gray-900 mb-2.5 text-lg md:text-xl">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                  {benefit.title}
                </span>
                <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
