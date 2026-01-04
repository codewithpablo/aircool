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

const WORDS_PER_CHUNK = 15;
const CHUNK_DELAY = 5000;

export const faqs = [
  {
    question: "¿Qué títulos o certificaciones se obtienen al finalizar cada curso?",
    answer:
      "Se entrega un Diploma con aval institucional; en modalidad virtual el certificado tiene reconocimiento del Ingeniero Orlando Miceli y del Lic. Rolando Miceli. Para Electricidad la certificación es la siguiente: Instalador Domiciliario Nivel Inicial.",
    icon: Receipt,
  },
  {
    question: "¿Los certificados que otorgan son válidos ante empresas, obras y organismos oficiales?",
    answer: "Sí, los certificados cuentan con reconocimiento institucional y profesional.",
    icon: ShieldCheck,
  },
  {
    question: "¿Necesito experiencia previa para inscribirme en los cursos (Split, heladeras, electricidad)?",
    answer:
      "Para Electricidad Domiciliaria el nivel es Sin experiencia. Los cursos de Refrigeración y Split se dictan según el nivel del estudiante (Inicial – Intermedio – Avanzado).",
    icon: AlertTriangle,
  },
  {
    question: "¿Cuál es la duración exacta de cada curso?",
    answer:
      "Electricidad Domiciliaria I: 3 meses; carga horaria total 54 horas (4,5 h semanales). Instalador de Split: 1 mes. Refrigeración Familiar (Heladeras y Freezers): 90 días.",
    icon: Clock,
  },
  {
    question: "¿Qué diferencia hay entre los niveles Inicial, Intermedio y Avanzado?",
    answer:
      "El nivel se asigna según la situación analizada por la institución, es decir la institución evalúa y determina el nivel correspondiente de cada estudiante.",
    icon: AlertTriangle,
  },
  {
    question: "¿Ofrecen clases teóricas online y prácticas presenciales en el mismo programa (b-learning)?",
    answer:
      "Sí. Las modalidades incluyen presencial y a distancia (b-learning); algunas ofertas combinan presencial y material descargable.",
    icon: Factory,
  },
  {
    question: "¿Con qué equipos y marcas vamos a practicar en los talleres?",
    answer:
      "Se practica sobre equipos reales: Aire Acondicionado Split y Mini Split, heladeras de un frío, dos fríos, sistemas No Frost y freezers.",
    icon: Factory,
  },
  {
    question: "¿Las prácticas se hacen sobre unidades de verdad y trabajos reales?",
    answer:
      "Sí: los cursos incluyen taller con unidades reales y salidas a campo para prácticas supervisadas.",
    icon: Wrench,
  },
  {
    question: "¿Incluyen formación para manipular refrigerantes (recuperación, reciclado, reemplazo)?",
    answer:
      "Sí: el programa contempla manejo seguro de refrigerantes, incluyendo recuperación, reciclado y reemplazo, y procedimientos de carga y puesta en funcionamiento.",
    icon: Wrench,
  },
  {
    question: "¿El curso prepara para certificaciones legales o reglamentarias (por ejemplo, manejo de refrigerantes)?",
    answer:
      "Se entrega certificado/diploma con aval institucional y el programa aborda documentación legal y manejo de refrigerantes conforme a normativas vigentes.",
    icon: Receipt,
  },
  {
    question: "¿Qué requisitos legales y documentación necesito para trabajar luego (factura, habilitaciones, ART)?",
    answer: "Se proporciona información sobre requisitos legales y documentación necesaria según cada curso y normativa vigente.",
    icon: Receipt,
  },
  {
    question: "¿Ofrecen formación específica sobre normativas locales (IRAM/AEA u otras) y seguridad laboral?",
    answer:
      "Sí: en Electricidad Domiciliaria se incluyen normas IRAM y reglamento AEA y módulos sobre seguridad laboral, trabajo en altura y protocolos eléctricos.",
    icon: ShieldCheck,
  },
  {
    question: "¿Hay evaluación práctica y teórica? ¿Cómo acreditan la competencia real?",
    answer:
      "Para Electricidad Domiciliaria hay evaluaciones prácticas en taller y un examen teórico-práctico final integrador; en modalidad virtual el examen final integrador se realiza en taller. Para otros cursos se realizan ejercicios de diagnóstico en equipos reales y se exige competencia práctica al finalizar.",
    icon: Wrench,
  },
  {
    question: "¿Los docentes son técnicos en actividad o con experiencia comprobable en campo?",
    answer:
      "Sí: el programa fue diseñado por profesionales con trayectoria (mención de más de 25 años en el oficio) y los certificados cuentan con reconocimiento de profesionales (Ing. Orlando Miceli y Lic. Rolando Miceli).",
    icon: ShieldCheck,
  },
  {
    question: "¿Se proveen herramientas o debo comprar un kit inicial? ¿Tienen lista de herramientas y costos estimados?",
    answer:
      "La institución informa sobre herramientas necesarias y kits opcionales según cada curso; consultar detalle de lista y costos.",
    icon: Wrench,
  },
  {
    question: "¿Ofrecen financiamiento, cuotas o planes de pago?",
    answer:
      "Sí. Se detallan formas de pago y cuotas: inscripción $10.000; ejemplos de aranceles y opciones en efectivo/transferencia y en cuotas. Pago con tarjeta: consultar valores.",
    icon: Receipt,
  },
  {
    question: "¿Tienen becas, descuentos por pago al contado o promociones por inscripción anticipada?",
    answer:
      "Sí, existen descuentos por pago al contado y promociones por inscripción anticipada; consultar disponibilidad.",
    icon: Receipt,
  },
  {
    question: "¿Cuál es el costo total aproximado de cada curso y qué está incluido/excluido?",
    answer:
      "Refrigeración I (Domicilio): Inscripción $10.000; Pago único $145.000; Pago en 2 cuotas $80.000; Pago en 3 cuotas $65.000. Instalador de Split: Inscripción $10.000; Pago único $65.000; Pago con tarjeta en 2 cuotas $35.000. Consultar condiciones exactas.",
    icon: Receipt,
  },
  {
    question: "¿Hay posibilidad de hacer prácticas rentadas o pasantías con empresas colaboradoras?",
    answer:
      "Sí, algunos cursos ofrecen prácticas supervisadas y convenios con empresas colaboradoras.",
    icon: Factory,
  },
  {
    question: "¿Ofrecen ayuda para la búsqueda de empleo o bolsa de trabajo para egresados?",
    answer:
      "Sí, se ofrece soporte post-curso, acceso a bolsa de trabajo y orientación para egresados.",
    icon: ShieldCheck,
  },
  {
    question: "¿Qué salida laboral puedo esperar: técnico a domicilio, instalación, servicio para empresas, o abrir mi propio taller?",
    answer:
      "Salidas esperables: técnico en refrigeración doméstica, técnico en instalación y puesta en marcha de Split/MiniSplit, trabajos de reparación, recargas, contratos de mantenimiento, venta de filtros y upgrades energéticos, y posibilidad de iniciar tu propio servicio/taller.",
    icon: Factory,
  },
  {
    question: "¿Cuánto puede cobrar un técnico recién formado y en cuánto tiempo podré recuperar la inversión del curso?",
    answer:
      "Los ingresos varían según zona y demanda; se enseñan modelos de ingresos y planificación para recuperar la inversión.",
    icon: Clock,
  },
  {
    question: "¿Dan formación comercial y de marketing (cómo conseguir clientes, precios, contratos de mantenimiento)?",
    answer:
      "Sí: incluye ventas orientadas al rubro, modelos de ingresos recurrentes (contratos, suscripciones) y marketing práctico, además de cotización y presentación ante clientes.",
    icon: ShieldCheck,
  },
  {
    question: "¿Enseñan a confeccionar presupuestos, contratos y garantías para los clientes?",
    answer:
      "Sí, se enseña cómo cotizar, estructurar ingresos recurrentes y documentación legal.",
    icon: Receipt,
  },
];


export default function FaqSection() {
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<typeof faqs[0] | null>(null);
  const [chunks, setChunks] = useState<string[]>([]);
  const [chunkIndex, setChunkIndex] = useState(0);
  const [isTalking, setIsTalking] = useState(false);
  const [currentChunk, setCurrentChunk] = useState("");
  const [showMoreBadge, setShowMoreBadge] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Detectar si es mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!openFaq) {
      setChunks([]);
      setChunkIndex(0);
      setIsTalking(false);
      setCurrentChunk("");
      return;
    }

    const words = openFaq.answer.split(" ");
    const grouped: string[] = [];
    for (let i = 0; i < words.length; i += WORDS_PER_CHUNK) {
      grouped.push(words.slice(i, i + WORDS_PER_CHUNK).join(" "));
    }

    setChunks(grouped);
    setChunkIndex(0);
    setCurrentChunk(grouped[0] || "");
    setIsTalking(true);
  }, [openFaq]);

  useEffect(() => {
    if (!isTalking || chunks.length === 0) return;

    if (chunkIndex >= chunks.length) {
      setIsTalking(false);
      setTimeout(() => {
        setOpenFaq(null);
        setChunkIndex(0);
        setCurrentChunk("");
      }, 800);
      return;
    }

    const timer = setTimeout(() => {
      const nextIndex = chunkIndex + 1;
      if (nextIndex < chunks.length) {
        setCurrentChunk(chunks[nextIndex]);
        setChunkIndex(nextIndex);
      } else {
        setIsTalking(false);
        setTimeout(() => {
          setOpenFaq(null);
          setChunkIndex(0);
          setCurrentChunk("");
        }, 800);
      }
    }, CHUNK_DELAY);

    return () => clearTimeout(timer);
  }, [chunkIndex, chunks, isTalking]);

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

  return (
    <section className="h-[900px] lg:h-screen overflow-visible px-4 pb-20 dark:bg-transparent">
      <div className="h-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-60 lg:gap-0">

        {/* IZQUIERDA */}
        <AnimatePresence>
          {(!isMobile || !isTalking) && (
            <motion.div
              className="flex-1 flex flex-col relative min-h-[550px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
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
                className="flex-1  relative z-10 overflow-y-auto hideScrollbar space-y-4 pr-2"
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
                          size={24}
                          className={`shrink-0 ${
                            isOpen ? "text-blue-700 dark:text-sky-400" : "text-blue-500 dark:text-gray-400"
                          }`}
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* DERECHA */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[400px] h-[400px] max-sm:w-64 max-sm:h-64 flex justify-center items-end">

            {/* FONDO CIRCULAR DIFUMINADO */}
              <div className="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            w-[600px] h-[600px] max-sm:w-64 max-sm:h-64
                            rounded-full
                            bg-gradient-to-br from-blue-400 to-blue-200
                            dark:bg-gradient-to-br dark:from-blue-800 dark:to-blue-400
                            filter blur-2xl
                            pointer-events-none
                            z-0" />

            {/* NUBE */}
            <AnimatePresence>
              {isTalking && chunks.length > 0 && (
                <motion.div
                  key="speechBubble"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="-top-[325px] lg:-top-[325px] 
                             py-4 px-6 rounded-[26px] relative overflow-hidden
                             bg-white/40  backdrop-blur-3xl dark:from-zinc-900 dark:to-zinc-800
                             border border-blue-200 dark:border-white/10
                             shadow-2xl  z-20"
                >
                  <span className="text-gray-700 dark:text-white text-lg sm:text-lg font-semibold">
                    {currentChunk}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* GIF idle */}
            <motion.img
              src="/game.gif"
              alt="Robot Idle"
              animate={{
                opacity: isTalking ? 0 : 1,
                scale: 1.2,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute -top-[150px] lg:top-20 left-0 w-full h-full object-contain z-10"
            />

            {/* GIF talking */}
            <motion.img
              src="/talking.gif"
              alt="Robot Talking"
              animate={{
                opacity: isTalking ? 1 : 0,
                scale: 1.2,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute  -top-[50px] lg:top-20 left-0 w-full h-full object-contain z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
