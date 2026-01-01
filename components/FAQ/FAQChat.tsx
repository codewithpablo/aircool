"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Plus, Minus } from "lucide-react";


export const faqs = [
  {
    question: "¿Cada cuanto tiempo se debe hacer el mantenimiento?",
    answer:
      "Se recomienda realizar mantenimiento preventivo cada 6 a 12 meses para asegurar el correcto funcionamiento del equipo.",
  },
  {
    question: "¿Que pasa si no hago mantenimiento?",
    answer:
      "La falta de mantenimiento puede generar mayor consumo electrico, fallas prematuras y menor vida util del equipo.",
  },
  {
    question: "¿Trabajan con equipos industriales?",
    answer:
      "Si, realizamos mantenimiento y reparaciones en equipos comerciales e industriales.",
  },
  {
    question: "¿Ofrecen garantia?",
    answer:
      "Si, todos nuestros trabajos cuentan con garantia escrita.",
  },
  {
    question: "¿Realizan urgencias?",
    answer:
      "Si, contamos con servicio de urgencias segun disponibilidad.",
  },
  {
    question: "¿En que zonas trabajan?",
    answer:
      "Brindamos servicio en toda la provincia y zonas aledanas.",
  },
  {
    question: "¿Emiten factura?",
    answer:
      "Si, emitimos factura conforme a la normativa vigente.",
  },
  {
    question: "¿Que marcas trabajan?",
    answer:
      "Trabajamos con las principales marcas del mercado.",
  },
];


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return faqs;

    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
    );
  }, [query]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Preguntas frecuentes
      </h2>

      {/* Buscador */}
      <div className="relative mb-6">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Buscar una pregunta..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpenIndex(null);
          }}
          className="w-full rounded-lg border border-white/10 bg-transparent pl-11 pr-4 py-3 outline-none"
        />
      </div>

      {/* Contenedor con altura maxima */}
      <div className="max-h-[420px] overflow-y-auto  space-y-4 pr-1">
        {filteredFaqs.length === 0 && (
          <p className="text-center text-sm text-gray-400">
            No se encontraron resultados
          </p>
        )}

        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium">{faq.question}</span>

                {isOpen ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
