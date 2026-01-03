"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
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

/* ======================= CONFIG ======================= */
const WORDS_PER_CHUNK = 10; // palabras por bloque
const CHUNK_DELAY = 3000; // ms entre bloques

/* ======================= DATA ======================= */
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

/* ======================= COMPONENT ======================= */
export default function FaqSection() {
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<typeof faqs[0] | null>(null);
  const [chunks, setChunks] = useState<string[][]>([]);
  const [chunkIndex, setChunkIndex] = useState(0);
  const [isTalking, setIsTalking] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const [showMoreBadge, setShowMoreBadge] = useState(false);

  /* ======================= FILTER ======================= */
  const filteredFaqs = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return faqs;
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
    );
  }, [query]);

  /* ======================= SPLIT ANSWER EN BLOQUES ======================= */
  useEffect(() => {
    if (!openFaq) {
      setChunks([]);
      setChunkIndex(0);
      setIsTalking(false);
      return;
    }

    const words = openFaq.answer.split(" ");
    const grouped: string[][] = [];

    for (let i = 0; i < words.length; i += WORDS_PER_CHUNK) {
      grouped.push(words.slice(i, i + WORDS_PER_CHUNK));
    }

    setChunks(grouped);
    setChunkIndex(0);
    setIsTalking(grouped.length > 0);
  }, [openFaq]);

  /* ======================= ANIMACIÓN DE BLOQUES ======================= */
  useEffect(() => {
    if (!chunks.length) return;

    const interval = setInterval(() => {
      setChunkIndex((prev) => {
        if (prev + 1 >= chunks.length) {
          clearInterval(interval);
          setIsTalking(false); // Termina de hablar cuando se muestra el último bloque
          return prev;
        }
        return prev + 1;
      });
    }, CHUNK_DELAY);

    return () => clearInterval(interval);
  }, [chunks]);

  /* ======================= SCROLL BADGE ======================= */
  const checkScroll = () => {
    const el = listRef.current;
    if (!el) return;

    const canScroll =
      el.scrollHeight > el.clientHeight &&
      el.scrollTop + el.clientHeight < el.scrollHeight - 4;

    setShowMoreBadge(canScroll);
  };

  useEffect(() => {
    checkScroll();
  }, [filteredFaqs]);

  /* ======================= RENDER ======================= */
  return (
    <section className="h-screen overflow-hidden px-4 py-10 bg-white dark:bg-transparent">
      <div className="h-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-14">
        {/* IZQUIERDA */}
        <div className="flex-1 flex flex-col min-h-0 relative">
          <h1 className="text-center text-2xl mb-5">Preguntas frecuentes</h1>

          <input
            type="text"
            placeholder="Buscar una pregunta..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpenFaq(null);
            }}
            className="mb-6 rounded-xl border border-blue-200 dark:border-white/10
                       bg-blue-50 dark:bg-white/5
                       px-4 py-3 text-gray-900 dark:text-white
                       placeholder:text-blue-500/60 dark:placeholder:text-white/40
                       outline-none w-full"
          />

          <div
            ref={listRef}
            onScroll={checkScroll}
            className="flex-1 overflow-y-auto hideScrollbar space-y-4 pr-2"
          >
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq?.question === faq.question;
              const Icon = faq.icon;

              return (
                <button
                  key={faq.question}
                  onClick={() => setOpenFaq(isOpen ? null : faq)}
                  className={`w-full flex items-center justify-between gap-4 px-6 py-5 rounded-xl border transition
                    ${
                      isOpen
                        ? "bg-blue-200 border-blue-300 dark:bg-white/15 dark:border-white/10"
                        : "bg-blue-50 border-blue-200 dark:bg-white/5 dark:border-white/10"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      size={22}
                      className={
                        isOpen
                          ? "text-blue-700 dark:text-sky-400"
                          : "text-blue-500 dark:text-gray-400"
                      }
                    />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? <Minus /> : <Plus />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {showMoreBadge && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full
                           bg-blue-100 dark:bg-black/60
                           border border-blue-300 dark:border-white/10
                           text-blue-700 dark:text-white/80 text-sm"
              >
                Ver más{" "}
                <ChevronDown size={14} className="inline animate-bounce" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DERECHA */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col items-center gap-6">
            {/* NUBE */}
            <AnimatePresence mode="wait">
              <motion.div
                key={openFaq?.question ?? "placeholder"}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="mt-20 w-[500px] h-32 py-16 px-8 rounded-[26px] relative overflow-hidden -mb-4
                           bg-gradient-to-br from-blue-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800
                           border border-blue-200 dark:border-white/10
                           shadow-2xl flex items-center justify-center 
                           max-sm:w-64 max-sm:h-28 max-sm:p-4 max-sm:overflow-y-auto"
              >
                <AnimatePresence mode="wait">
                  {chunks[chunkIndex] ? (
                    <motion.span
                      key={chunkIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="text-gray-900 dark:text-white text-3xl max-sm:text-base"
                    >
                      {chunks[chunkIndex].join(" ")}
                    </motion.span>
                  ) : (
                    <span className="text-gray-900 dark:text-white text-sm max-sm:text-xs">
                      Seleccioná una pregunta para ver la respuesta
                    </span>
                  )}
                </AnimatePresence>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4
                                bg-blue-50 dark:bg-zinc-900 rotate-45" />
              </motion.div>
            </AnimatePresence>

            {/* ROBOT */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className="max-sm:w-64 max-sm:h-64"
            >
              <Image
                src={isTalking ? "/talking.gif" : "/game.gif"}
                alt="Asistente técnico"
                width={320}
                height={320}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
