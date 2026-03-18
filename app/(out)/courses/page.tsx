'use client';

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle,
  ArrowLeft,
  BookOpen,
  Clock,
  Mail,
  Phone,
  Instagram,
  Target,
  MapPin,
  CreditCard,
  FileText,
  Underline,
  Snowflake,
  Wind,
  Zap
} from "lucide-react";

// --- ARRAY COMPLETO DE CURSOS ---
const courses = [
  {
    id: 1,
    Icon: Snowflake,
    title: "Refrigeracion I: Heladeras y Freezers",
    preview: "Aprende desde cero a reparar y mantener equipos, practicando directamente sobre heladeras y freezers reales.",
    summary: {
      title: "Refrigeración Familiar: Heladeras y Freezers",
      duration: "90 días",
      modality: "Presencial con material virtual",
      level: "Inicial – Intermedio – Avanzado",
      learnings: [
        "Diagnóstico y detección de fallas en sistemas No Frost y convencionales.",
        "Soldaduras, vacío profesional y carga precisa de refrigerantes (R600a/R134a).",
        "Uso de instrumentos: manifold, vacuómetro y pinza amperométrica."
      ]
    },
    structuredContent: {
      objective: "Formar técnicos capaces de analizar, diagnosticar y ejecutar intervenciones profesionales en sistemas de refrigeración doméstica.",
      modality: "Presencial y a distancia (b-learning)",
      schedule: [
        { days: "Martes y Jueves", hours: "18:00 a 19:30hs" },
        { days: "Lunes y Miércoles", hours: "18:00 a 19:30hs" }
      ],
      location: "Av. Marconi 365, Resistencia – Chaco",
      duration: "3 meses",
      fees: [
        { type: "Inscripción", amount: "$10.000 (cupos limitados)" },
        { type: "Pago único", amount: "$145.000 (efectivo, transferencia)" },
        { type: "2 cuotas", amount: "$80.000 (efectivo, transferencia)" },
        { type: "3 cuotas", amount: "$65.000 (efectivo, transferencia)" },
        { type: "Pago con tarjeta", amount: "Consultar valores" }
      ],
      contents: [
        { title: "Tema 1: Normas de seguridad", points: ["Seguridad personal", "Riesgos y procedimientos permitidos", "Gestión de residuos"] },
        { title: "Tema 2: Fundamentos de la refrigeración", points: ["Conceptos de calor y temperatura", "Estados del refrigerante", "Interpretación de diagramas presión-temperatura"] },
        { title: "Tema 3: Ciclo frigorífico aplicado", points: ["Componentes principales", "Flujo del refrigerante", "Errores comunes"] },
        { title: "Tema 4: Gases refrigerantes", points: ["Tipos de refrigerantes", "Presiones de trabajo", "Manipulación responsable"] },
        { title: "Tema 5: Electricidad aplicada", points: ["Uso del multímetro", "Motores monofásicos", "Esquemas eléctricos"] },
        { title: "Tema 6: Sistemas de refrigeración doméstica", points: ["Heladeras de un frío", "Heladeras de dos fríos", "Sistemas No Frost", "Freezers"] },
        { title: "Tema 7: Instrumentos y herramientas", points: ["Manifold", "Vacuómetro", "Detector de fugas", "Limpieza de circuito"] },
        { title: "Tema 8: Técnicas de reparación y soldaduras", points: ["Detección y reparación de fugas", "Soldaduras", "Reemplazo de componentes"] },
        { title: "Tema 9: Carga de refrigerante y puesta en funcionamiento", points: ["Procedimiento de vacío", "Carga por peso y presión", "Control de consumo eléctrico"] },
        { title: "Tema 10: Ejercicios de diagnóstico", points: ["Heladera de un frío → termostato", "Dos fríos → obstrucción capilar", "No Frost → evaporador congelado", "Freezer → fuga en evaporador"] }
      ],
      activities: [
        "Clases prácticas en equipos reales",
        "Material PDF descargable",
        "Soporte personalizado",
        "Certificado avalado por docentes"
      ],
      requirements: ["No se requiere experiencia previa"],
      contact: {
        whatsapp: "+54 362 5490089",
        email: "aircool.integral@gmail.com",
        instagram: "@aircoolrefrigeracion"
      }
    },
    images: [
      "/curso-freezers/1.jpeg",
      "/curso-freezers/2.jpeg",
      "/curso-freezers/3.jpeg",
      "/curso-freezers/4.jpeg"
    ]
  },
  {
    id: 2,
    Icon: Wind,
    title: "Refrigeracion II: Aire Acondicionado Split",
    preview: "Fórmate como técnico especializado en instalación y mantenimiento de equipos Split y Mini Split.",
    summary: {
      title: "Aire Acondicionado Split",
      duration: "30 días",
      modality: "Presencial y a distancia (b-learning)",
      level: "Inicial – Intermedio – Avanzado",
      learnings: [
        "Fijación de unidad interior y exterior",
        "Uso correcto de gases refrigerantes",
        "Acoples flare, soldaduras y vacío profesional"
      ]
    },
    structuredContent: {
      objective: "Lograr las capacidades de un técnico para el montaje e instalación de equipos Split y Mini Split.",
      modality: "Presencial y a distancia (b-learning)",
      schedule: [
        { days: "Martes y Jueves", hours: "15:30 a 17 / 20 a 21:30" },
        { days: "Lunes y Miércoles", hours: "15:30 a 17 / 20 a 21:30" }
      ],
      location: "Av. Marconi 365, Resistencia – Chaco",
      duration: "1 mes",
      fees: [
        { type: "Inscripción", amount: "$10.000" },
        { type: "Pago único", amount: "$65.000" },
        { type: "2 cuotas", amount: "$35.000" }
      ],
      contents: [
        { title: "Tema 1: Normas de seguridad", points: ["Seguridad personal", "Seguridad del entorno"] },
        { title: "Tema 2: Conceptos básicos", points: ["Calor y temperatura", "Leyes de la termodinámica", "Gases refrigerantes"] },
        { title: "Tema 3: Electricidad básica", points: ["Corriente, voltaje, resistencia", "Ley de Ohm", "Conexión de alimentación"] },
        { title: "Tema 4: Partes de un equipo Split", points: ["Tipos de cañerías", "Unidad interior y exterior", "Errores comunes"] },
        { title: "Tema 5: Ciclo de refrigeración", points: ["Ciclo básico", "Refrigerantes", "Presiones de trabajo"] },
        { title: "Tema 6: Presión y vacío", points: ["Definición", "Prueba de vacío", "Unidades de presión"] },
        { title: "Tema 7: Anclaje seguro", points: ["Normas de seguridad", "Elementos de fijación", "Simulador de anclaje"] },
        { title: "Tema 8: Montaje de unidades", points: ["Herramientas necesarias", "Insumos de sellado", "Montaje a nivel y altura"] },
        { title: "Tema 9: Conexión y puesta en marcha", points: ["Preparación del lugar", "Prueba hidráulica y de vacío", "Puesta en marcha"] }
      ],
      activities: [
        "27 clases grabadas",
        "Material PDF descargable",
        "Soporte personalizado",
        "Certificado con reconocimiento"
      ],
      requirements: ["Diploma con aval institucional"],
      contact: {
        whatsapp: "+54 362 5490089",
        email: "aircool.integral@gmail.com",
        instagram: "@aircoolrefrigeracion"
      }
    },
    images: [
      "/curso-split/1.jpeg",
      "/curso-split/2.jpeg",
      "/curso-split/3.jpeg",
      "/curso-split/4.jpeg"
    ]
  },
  {
    id: 3,
    Icon: Zap,
    title: "Electricidad I: Instalaciones Eléctricas",
    preview: "Conviértete en técnico en instalaciones eléctricas domiciliarias y obtén certificado profesional.",
    summary: {
      title: "Electricidad Domiciliaria",
      duration: "3 meses",
      modality: "Presencial y/o virtual",
      level: "Sin experiencia",
      learnings: [
        "Circuitos y conexionado profesional",
        "Montaje y configuración de tableros eléctricos",
        "Técnicas de medición con multímetro y pinza amperométrica",
        "Aplicación de normas IRAM, AEA y seguridad"
      ]
    },
    structuredContent: {
      objective: "Capacitar a personas sin experiencia previa para desempeñarse como técnicos en instalaciones eléctricas domiciliarias.",
      modality: "Presencial y/o virtual",
      schedule: [
        { days: "3 días por semana", hours: "1,5hs por día (54hs totales)" }
      ],
      location: "Av. Marconi 365, Resistencia – Chaco",
      duration: "3 meses",
      fees: [
        { type: "Inscripción", amount: "$10.000" },
        { type: "Pago único", amount: "$120.000" },
        { type: "2 cuotas", amount: "$65.000" },
        { type: "3 cuotas", amount: "$45.000" },
        { type: "Pago con tarjeta", amount: "Consultar valores" }
      ],
      contents: [
        { title: "Módulo 1: Fundamentos", points: ["Magnitudes eléctricas", "Corriente continua y alterna", "Leyes fundamentales", "Identificación de conductores", "Normas de seguridad"] },
        { title: "Módulo 2: Elementos de la instalación", points: ["Conductores y aislantes", "Cables y canalizaciones", "Dispositivos de protección", "Cálculo de secciones", "Tablero principal"] },
        { title: "Módulo 3: Instalaciones en viviendas", points: ["Distribución de circuitos", "Iluminación y tomacorrientes", "Conexión de artefactos", "Normas IRAM y AEA", "Práctica de montaje"] },
        { title: "Módulo 4: Verificación y seguridad", points: ["Uso de multímetro", "Medición de continuidad", "Detección de fallas", "Conexión a tierra", "Mantenimiento preventivo"] }
      ],
      activities: [
        "Armado de tablero domiciliario",
        "Cableado de circuito de iluminación",
        "Simulación de fallas y diagnóstico",
        "Aplicación de normas de seguridad"
      ],
      requirements: [
        "Edad mínima: 18 años",
        "Modalidad presencial: 80% asistencia",
        "Modalidad virtual: 100% descargas y trabajos online",
        "Evaluaciones presenciales y virtuales",
        "Certificación: Instalador Nivel Inicial"
      ],
      contact: {
        whatsapp: "+54 362 5490089",
        email: "electricidad@example.com",
        instagram: "@electricidadtecnica"
      }
    },
    images: [
      "/curso-electricidad/1.jpeg",
      "/curso-electricidad/2.jpeg",
      "/curso-electricidad/3.jpeg",
      "/curso-electricidad/4.jpeg"
    ]
  }
];

// --- COMPONENTE PRINCIPAL ---
export default function CursosPage() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [buyerName, setBuyerName] = useState("");

  const currentCourse = courses.find(c => c.id === selectedCourse);

  const openInfoModal = (id: number) => { setSelectedCourse(id); setShowInfoModal(true); setShowDetails(false); };
  const openBuyModal = (id: number) => { setSelectedCourse(id); setShowBuyModal(true); };
  const closeModals = () => { setShowInfoModal(false); setShowBuyModal(false); setSelectedCourse(null); setBuyerName(""); setShowDetails(false); };

  const sendWhatsapp = () => {
    if (!buyerName || !currentCourse) return;
    const phone = currentCourse.structuredContent.contact.whatsapp.replace(/\D/g, '');
    const message = `Hola, soy ${buyerName} y voy a enviar el comprobante de pago para el curso ${currentCourse.title}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const detailSlides = currentCourse ? [
    { title: "Objetivo", content: currentCourse.structuredContent.objective },
    { title: "Duración y Horarios", content: `${currentCourse.structuredContent.duration} - ${currentCourse.structuredContent.modality}` },
    { title: "Ubicación", content: currentCourse.structuredContent.location },
    { title: "Inversión", content: currentCourse.structuredContent.fees.map(f => `${f.type}: ${f.amount}`).join(" | ") },
    { title: "Contenidos", content: currentCourse.structuredContent.contents.map(c => `${c.title}: ${c.points.join(", ")}`).join(" | ") },
    { title: "Actividades", content: currentCourse.structuredContent.activities.join(" | ") },
    { title: "Requisitos", content: currentCourse.structuredContent.requirements.join(" | ") },
    { title: "Contacto", content: `${currentCourse.structuredContent.contact.whatsapp} | ${currentCourse.structuredContent.contact.email} | ${currentCourse.structuredContent.contact.instagram}` }
  ] : [];

  return (
    <div className="relative min-h-screen w-full text-gray-900 dark:text-white transition-colors duration-300 pt-28 pb-16 overflow-hidden">

      {/* CÍRCULO VERDE DIFUMINADO (Celeste en Light, Verde en Dark) */}
      <div
        className="absolute top-[5%] left-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-green-500/30 dark:bg-green-400/20 rounded-full blur-[140px] md:blur-[180px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2"
      />

      <main className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

        {/* HEADER DE CURSOS */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-950 dark:text-white tracking-tight"
          >
            Nuestros Cursos
          </h1>
          <p
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Fórmate con profesionales técnicos y adquiere las habilidades prácticas y teóricas necesarias para destacarse como especialista en el rubro, asegurándote un perfil de altísima exigencia laboral.
          </p>
        </div>

        <div className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    xl:grid-cols-3 
    gap-8 
    lg:gap-10
    items-stretch
  ">

          {courses.map((course) => (

            <div
              key={course.id}
              className="
          bg-white dark:bg-gray-900/40 dark:backdrop-blur-xl
          shadow-lg hover:shadow-2xl dark:shadow-black/50
          rounded-2xl
          p-5 sm:p-6
          flex flex-col
          border border-gray-100 dark:border-white/10
          h-full
          transition-all duration-300 hover:scale-[1.03]
        "
            >
              {/* TÍTULO */}
              <div className="flex items-start gap-4 mb-4 sm:mb-5">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-2.5 rounded-xl border border-blue-100 dark:border-blue-800/30 flex-shrink-0 shadow-sm">
                  <course.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight line-clamp-3 my-auto">
                  {course.title}
                </h2>
              </div>

              {/* PREVIEW */}
              <p className="
          text-gray-700 dark:text-gray-300 
          text-sm sm:text-base
          mb-4 
          line-clamp-3
        ">
                {course.preview}
              </p>

              {/* IMÁGENES */}
              <div className="
          grid grid-cols-2 
          gap-2 sm:gap-3 
          mt-3 
          h-[180px] sm:h-[220px] lg:h-[240px]
        ">
                {course.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-full h-full rounded-xl overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`Imagen ${course.title}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* BOTONES */}
              <div className="
          mt-auto 
          pt-5 
          flex 
          flex-col sm:flex-row 
          gap-3
        ">
                <button
                  onClick={() => openInfoModal(course.id)}
                  className="
              w-full sm:w-1/2
              bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-emerald-500 hover:to-cyan-600
              text-white 
              py-2.5
              rounded-lg 
              font-semibold 
              flex items-center justify-center gap-2
              shadow-md
              transition
            "
                >
                  <BookOpen className="w-5 h-5" />
                  Ver más
                </button>

                <button
                  onClick={() => openBuyModal(course.id)}
                  className="
              w-full sm:w-1/2
              bg-green-500 hover:bg-green-600
              text-white 
              py-2.5
              rounded-lg 
              font-semibold 
              flex items-center justify-center gap-2
              shadow-md
              transition
            "
                >
                  <CheckCircle className="w-5 h-5" />
                  Comprar
                </button>
              </div>

            </div>

          ))}

        </div>

      </main>

      {/* MODAL INFO */}
      {showInfoModal && currentCourse && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={closeModals}
        >
          <div
            className="bg-white dark:bg-gray-900/90 dark:backdrop-blur-3xl rounded-3xl shadow-2xl dark:shadow-[0_0_50px_rgba(16,185,129,0.15)] w-[95vw] md:w-[60vw] h-[90vh] flex flex-col relative overflow-hidden border border-gray-200 dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-emerald-400 to-cyan-500 text-white">

              <div className="flex items-center gap-3 text-xl font-bold">
                <BookOpen className="w-6 h-6" />
                {currentCourse.summary.title}
              </div>
              <button
                onClick={closeModals}
                className="p-2 rounded-full hover:bg-white/20 transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>

            {/* CONTENIDO */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

              {!showDetails ? (
                <div className="space-y-6">

                  {/* INFO GENERAL EN CARDS */}
                  <div className="grid md:grid-cols-3 gap-4">

                    <div className="bg-slate-50 dark:bg-gray-800/40 dark:backdrop-blur-md p-5 rounded-2xl border border-gray-100 dark:border-white/5 flex items-center gap-4 shadow-sm transition-all hover:shadow-md">
                      <Clock className="w-6 h-6 text-blue-500" />
                      <div>
                        <p className="text-xs text-gray-500">Duración</p>
                        <p className="font-semibold">{currentCourse.summary.duration}</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-gray-800/40 dark:backdrop-blur-md p-5 rounded-2xl border border-gray-100 dark:border-white/5 flex items-center gap-4 shadow-sm transition-all hover:shadow-md">
                      <FileText className="w-6 h-6 text-blue-500" />
                      <div>
                        <p className="text-xs text-gray-500">Modalidad</p>
                        <p className="font-semibold">{currentCourse.summary.modality}</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-gray-800/40 dark:backdrop-blur-md p-5 rounded-2xl border border-gray-100 dark:border-white/5 flex items-center gap-4 shadow-sm transition-all hover:shadow-md">
                      <Target className="w-6 h-6 text-blue-500" />
                      <div>
                        <p className="text-xs text-gray-500">Nivel</p>
                        <p className="font-semibold">{currentCourse.summary.level}</p>
                      </div>
                    </div>

                  </div>

                  {/* APRENDERÁS */}
                  <div>
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-500">
                      <CheckCircle className="w-5 h-5" />
                      Aprenderás
                    </h4>

                    <div className="grid gap-3">
                      {currentCourse.summary.learnings.map((l, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-gray-50/80 dark:bg-gray-800/30 p-4 rounded-xl border border-gray-100 dark:border-white/5 transition hover:bg-white dark:hover:bg-gray-800/50"
                        >
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {l}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BOTÓN DETALLES */}
                  <button
                    onClick={() => setShowDetails(true)}
                    className="mt-6 bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-emerald-500 hover:to-cyan-600 text-white py-3 px-6 rounded-xl font-semibold w-full shadow-lg transition"
                  >
                    Ver todos los detalles
                  </button>

                </div>
              ) : (
                <div className="space-y-8">

                  {/* OBJETIVO */}
                  <div className="bg-slate-50 dark:bg-gray-800/40 dark:backdrop-blur-md p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                    <h3 className="font-bold text-lg mb-3 text-cyan-500 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Objetivo
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {currentCourse.structuredContent.objective}
                    </p>
                  </div>

                  {/* DURACIÓN */}
                  <div className="bg-slate-50 dark:bg-gray-800/40 dark:backdrop-blur-md p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                    <h3 className="font-bold text-lg mb-3 text-cyan-500 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Duración y Modalidad
                    </h3>
                    <p className="text-sm">{currentCourse.structuredContent.duration}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {currentCourse.structuredContent.modality}
                    </p>
                  </div>

                  {/* CONTENIDOS */}
                  <div className="bg-slate-50 dark:bg-gray-800/40 dark:backdrop-blur-md p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                    <h3 className="font-bold text-lg mb-5 text-cyan-500 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Contenidos
                    </h3>

                    <div className="space-y-4">
                      {currentCourse.structuredContent.contents.map((c, i) => (
                        <div key={i}>
                          <h4 className="font-semibold mb-2">{c.title}</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                            {c.points.map((p, j) => (
                              <li key={j}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ACTIVIDADES */}
                  <div className="bg-slate-50 dark:bg-gray-800/40 dark:backdrop-blur-md p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                    <h3 className="font-bold text-lg mb-4 text-cyan-500">
                      Actividades
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {currentCourse.structuredContent.activities.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>

                  {/* REQUISITOS */}
                  <div className="bg-slate-50 dark:bg-gray-800/40 dark:backdrop-blur-md p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                    <h3 className="font-bold text-lg mb-4 text-cyan-500">
                      Requisitos
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {currentCourse.structuredContent.requirements.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  {/* INVERSIÓN */}
                  <div className="bg-slate-50 dark:bg-gray-800/40 dark:backdrop-blur-md p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                    <h3 className="font-bold text-lg mb-4 text-cyan-500 flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Inversión
                    </h3>
                    <ul className="space-y-1 text-sm">
                      {currentCourse.structuredContent.fees.map((f, i) => (
                        <li key={i}>
                          <strong>{f.type}:</strong> {f.amount}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CONTACTO */}
                  <div className="bg-slate-50 dark:bg-gray-800/40 dark:backdrop-blur-md p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                    <h3 className="font-bold text-lg mb-4 text-cyan-500">
                      Contacto
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-green-500" />
                        {currentCourse.structuredContent.contact.whatsapp}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-500" />
                        {currentCourse.structuredContent.contact.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <Instagram className="w-4 h-4 text-pink-500" />
                        {currentCourse.structuredContent.contact.instagram}
                      </p>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* MODAL COMPRA */}
      {showBuyModal && currentCourse && (
        <div
          className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50 p-4"
          onClick={closeModals}
        >
          <div
            className="bg-white dark:bg-gray-900/95 dark:backdrop-blur-3xl rounded-3xl shadow-2xl dark:shadow-[0_0_50px_rgba(16,185,129,0.15)] w-[90vw] md:w-[40vw] p-8 relative border border-gray-200 dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeModals}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition text-gray-500 dark:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <span className="p-2.5 rounded-xl bg-blue-50 dark:bg-white/5 text-blue-500 dark:text-cyan-400">
                <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
              Inscripción
            </h3>

            {/* Alias destacado */}
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
              <p className="text-sm text-gray-700 dark:text-emerald-100 leading-relaxed mb-2">
                Transfiere el importe al siguiente alias para asegurar tu lugar:
              </p>
              <p className="text-xl font-mono font-bold text-emerald-600 dark:text-emerald-400 tracking-wide text-center py-2 bg-white dark:bg-black/20 rounded-lg">
                aircool.miceli
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                ¿A nombre de quién estará anotado el curso?
              </label>
              <input
                type="text"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                placeholder="Nombre completo"
                className="w-full px-4 py-3 border border-gray-300 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all"
              />
            </div>

            <button
              onClick={sendWhatsapp}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 
                         text-white py-4 rounded-xl font-bold 
                         text-sm sm:text-base md:text-lg 
                         flex items-center justify-center gap-2 sm:gap-3 
                         shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
            >
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /> 
              <span>Enviar comprobante a WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
