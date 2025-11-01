'use client';

import React from 'react';
import Reordering from '../takeAction/Reordering';
import { TrendingUp, Wrench, Clock, Layers, ShieldCheck } from 'lucide-react';

export default function ActionSection() {
  return (
    <section className="w-full min-h-screen bg-linear-to-tr from-blue-300 via-blue-50 to-white  px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-8 overflow-hidden py-20 ">
      {/* Texto principal con scroll vertical si se excede */}
      <div className="md:w-1/2 pr-2 space-y-5">
        <h2 className="text-4xl font-bold text-gray-900 leading-snug">
          Esto es una oportunidad, <span className="text-blue-600">no una opción</span>:
        </h2>

        <p className="text-gray-700 text-base leading-relaxed">
          La refrigeración hoy dejó de ser lujo y pasó a ser supervivencia. En olas de calor la gente paga rápido, sin dudar — están protegiendo vidas y eso se prioriza.
          <br /><br />

          {/* Ingresos previsibles */}
          <span className="flex items-center gap-2 font-semibold text-gray-900">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Ingresos previsibles:
          </span>
          &nbsp; servicios de limpieza y mantenimiento se repiten cada 6–12 meses — clientes que vuelven solos, factura estable y previsibilidad financiera.
          <br /><br />

          {/* Baja barrera de entrada */}
          <span className="flex items-center gap-2 font-semibold text-gray-900">
            <Wrench className="w-5 h-5 text-blue-600" />
            Baja barrera de entrada:
          </span>
          &nbsp; con alguien que te guíe aprendés lo práctico en pocas semanas; herramientas accesibles y puesta en marcha rápida.
          <br /><br />

          {/* Alta rentabilidad por hora */}
          <span className="flex items-center gap-2 font-semibold text-gray-900">
            <Clock className="w-5 h-5 text-blue-600" />
            Alta rentabilidad por hora:
          </span>
          &nbsp; trabajo técnico, pocas horas, margen alto — perfecto para maximizar tiempo y ganancia.
          <br /><br />

          {/* Múltiples fuentes de ingreso */}
          <span className="flex items-center gap-2 font-semibold text-gray-900">
            <Layers className="w-5 h-5 text-blue-600" />
            Múltiples fuentes de ingreso:
          </span>
          &nbsp; instalación, recargas, reparaciones, contratos de mantenimiento, venta de filtros y upgrades energéticos, etc.
          <br /><br />

          {/* Resiliencia ante crisis */}
          <span className="flex items-center gap-2 font-semibold text-gray-900">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            Resiliencia ante crisis:
          </span>
          &nbsp; incluso en tiempos de crisis el mantenimiento del confort y la salud se priorizan — tu servicio se vuelve esencial.
          <br /><br />

          <span className="text-gray-900 font-semibold text-lg block mt-2">
            Aprendé rápido, facturá alto, armá cartera recurrente y convertite en el técnico al que nadie deja de llamar.
          </span>
        </p>

        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all text-base">
          Inscribite y arrancás ya
        </button>
      </div>

      {/* Componente Reordering */}
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <div className="w-full max-w-sm">
          <Reordering />
        </div>
      </div>
    </section>
  );
}
