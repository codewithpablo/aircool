"use client";

import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus,
  Minus,
  Clock,
  AlertTriangle,
  Factory,
  ShieldCheck,
  MapPin,
  Receipt,
  Wrench,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const faqs = [
  {
    question: "¿Cada cuanto tiempo se debe hacer el mantenimiento?",
    answer:
      "Se recomienda realizar mantenimiento preventivo cada 6 a 12 meses para asegurar el correcto funcionamiento del equipo.",
    icon: Clock,
  },
  {
    question: "¿Que pasa si no hago mantenimiento?",
    answer:
      "La falta de mantenimiento puede generar mayor consumo eléctrico, fallas prematuras y menor vida útil del equipo. Además, puede generar riesgos eléctricos y costos mayores a largo plazo.",
    icon: AlertTriangle,
  },
  {
    question: "¿Trabajan con equipos industriales?",
    answer:
      "Sí, realizamos mantenimiento y reparaciones en equipos comerciales e industriales.",
    icon: Factory,
  },
  {
    question: "¿Ofrecen garantía?",
    answer: "Sí, todos nuestros trabajos cuentan con garantía escrita.",
    icon: ShieldCheck,
  },
  {
    question: "¿Realizan urgencias?",
    answer:
      "Sí, contamos con servicio de urgencias según disponibilidad y tipo de trabajo.",
    icon: AlertTriangle,
  },
  {
    question: "¿En que zonas trabajan?",
    answer: "Brindamos servicio en toda la provincia y zonas aledañas.",
    icon: MapPin,
  },
  {
    question: "¿Emiten factura?",
    answer: "Sí, emitimos factura conforme a la normativa vigente.",
    icon: Receipt,
  },
  {
    question: "¿Que marcas trabajan?",
    answer:
      "Trabajamos con las principales marcas del mercado, tanto nacionales como internacionales.",
    icon: Wrench,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [canScroll, setCanScroll] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const filteredFaqs = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return faqs;
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const check = () => {
      setCanScroll(el.scrollHeight > el.clientHeight + 5);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [filteredFaqs]);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  const currentAnswer =
    openIndex !== null ? filteredFaqs[openIndex]?.answer : "";

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-semibold text-center mb-14">
        Preguntas frecuentes
      </h2>

      <div className="flex flex-col lg:flex-row gap-14">
        {/* IZQUIERDA */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Buscar una pregunta..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpenIndex(null);
            }}
            className="
              w-full mb-6 rounded-xl
              border border-white/10 bg-white/5 backdrop-blur-md
              px-4 py-3 outline-none
              focus:ring-2 focus:ring-white/20
            "
          />

          <div
            ref={listRef}
            className="relative max-h-[420px] overflow-hidden space-y-4"
          >
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const Icon = faq.icon;

              return (
                <button
                  key={index}
                  onClick={() => toggle(index)}
                  className={`
                    w-full flex items-center justify-between gap-4
                    px-6 py-5 text-left
                    rounded-xl backdrop-blur-md border border-white/10
                    transition-all duration-300
                    hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]
                    hover:-translate-y-0.5
                    ${
                      isOpen
                        ? "bg-white/15 shadow-[0_0_35px_rgba(255,255,255,0.15)]"
                        : "bg-white/5"
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      size={22}
                      className={`transition-colors ${
                        isOpen ? "text-sky-400" : "text-gray-400"
                      }`}
                    />
                    <span className="font-medium">{faq.question}</span>
                  </div>

                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>
              );
            })}
          </div>

          {/* BADGE SCROLL */}
          <AnimatePresence>
            {canScroll && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="
                  pointer-events-none
                  absolute bottom-2 left-1/2 -translate-x-1/2
                  flex items-center gap-2
                  px-4 py-1.5
                  rounded-full
                  bg-black/60 text-white text-xs
                  backdrop-blur-md
                  shadow-lg
                "
              >
                <span>Deslizá para ver más</span>
                <motion.span
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DERECHA */}
        <div className="flex-1 relative flex justify-center items-start">
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-r from-indigo-500/20 via-sky-400/20 to-cyan-300/20 rounded-full" />

            <motion.div
              animate={currentAnswer ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/realgiff.gif"
                alt="Asistente técnico"
                width={420}
                height={420}
                priority
              />
            </motion.div>

            <AnimatePresence>
              {currentAnswer && (
                <motion.div
                  key={currentAnswer}
                  initial={{ opacity: 0, scale: 0.92, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="
                    absolute -top-8 left-1/2 -translate-x-1/2
                    w-80 h-44 p-4
                    rounded-[28px]
                    bg-white/65 backdrop-blur-xl
                    shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                    border border-white/40
                  "
                >
                  <div className="pointer-events-none absolute top-1 left-3 right-3 h-6 rounded-full bg-white/70 blur-md" />

                  <div className="relative h-full pr-2 overflow-y-auto">
                    <TypeAnimation
                      sequence={["Pensando...", 500, currentAnswer]}
                      speed={32}
                      wrapper="p"
                      repeat={0}
                      className="text-gray-800 text-sm leading-relaxed"
                    />
                  </div>

                  <div
                    className="
                      absolute -bottom-2 left-1/2 -translate-x-1/2
                      w-5 h-5 bg-white/70 backdrop-blur-md
                      rotate-45 rounded-br-[12px]
                      shadow-[2px_2px_8px_rgba(0,0,0,0.18)]
                    "
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
