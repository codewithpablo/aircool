'use client';

import { useState } from "react";
import { motion } from "framer-motion";
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
  FileText
} from "lucide-react";

// --- ARRAY COMPLETO DE CURSOS ---
const courses = [
  {
    id: 1,
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
    const phone = currentCourse.structuredContent.contact.whatsapp.replace(/\D/g,'');
    const message = `Hola, soy ${buyerName} y voy a enviar el comprobante de pago para el curso ${currentCourse.title}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const detailSlides = currentCourse ? [
    { title: "Objetivo", content: currentCourse.structuredContent.objective },
    { title: "Duración y Horarios", content: `${currentCourse.structuredContent.duration} - ${currentCourse.structuredContent.modality}` },
    { title: "Ubicación", content: currentCourse.structuredContent.location },
    { title: "Inversión", content: currentCourse.structuredContent.fees.map(f=>`${f.type}: ${f.amount}`).join(" | ") },
    { title: "Contenidos", content: currentCourse.structuredContent.contents.map(c=>`${c.title}: ${c.points.join(", ")}`).join(" | ") },
    { title: "Actividades", content: currentCourse.structuredContent.activities.join(" | ") },
    { title: "Requisitos", content: currentCourse.structuredContent.requirements.join(" | ") },
    { title: "Contacto", content: `${currentCourse.structuredContent.contact.whatsapp} | ${currentCourse.structuredContent.contact.email} | ${currentCourse.structuredContent.contact.instagram}` }
  ] : [];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <main className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 auto-rows-fr">
          {courses.map(course=>(
            <motion.div key={course.id} whileHover={{scale:1.03}} className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 flex flex-col h-full border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-blue-400 flex items-center gap-2 mb-4"><BookOpen className="w-6 h-6"/> {course.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{course.preview}</p>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {course.images.map((img, idx)=>(
                  <div key={idx} className="relative w-full h-44 lg:h-60 rounded-xl overflow-hidden">
                    <Image src={img} alt={`Imagen ${course.title}`} fill className="object-cover transition-transform duration-300 hover:scale-105"/>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <button onClick={()=>openInfoModal(course.id)} className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-1 shadow-md"><BookOpen className="w-5 h-5"/> Ver más</button>
                <button onClick={()=>openBuyModal(course.id)} className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-1 shadow-md"><CheckCircle className="w-5 h-5"/> Comprar</button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* MODAL INFO */}
      {showInfoModal && currentCourse && (
        <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50 p-4" onClick={closeModals}>
          <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[95vw] md:w-[60vw] h-[90vh] flex flex-col relative overflow-auto" initial={{scale:0.8, opacity:0}} animate={{scale:1, opacity:1}} onClick={e=>e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-gray-100 dark:bg-gray-900">
              <div className="flex items-center gap-2 text-xl font-bold"><BookOpen className="w-6 h-6"/> {currentCourse.summary.title}</div>
              <button onClick={closeModals} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"><ArrowLeft className="w-5 h-5"/></button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {!showDetails ? (
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div className="border-b pb-3 border-blue-100 dark:border-gray-700 space-y-1">
                    <p><Clock className="inline w-4 h-4 mr-1 text-blue-400"/> Duración: <strong>{currentCourse.summary.duration}</strong></p>
                    <p><FileText className="inline w-4 h-4 mr-1 text-blue-400"/> Modalidad: {currentCourse.summary.modality}</p>
                    <p className="text-sm">Nivel: {currentCourse.summary.level}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Aprenderás:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {currentCourse.summary.learnings.map((l, i)=><li key={i}>{l}</li>)}
                    </ul>
                  </div>
                  <button onClick={()=>setShowDetails(true)} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold w-full">Ver todos los detalles</button>
                </div>
              ) : (
                detailSlides.map((slide,i)=>(
                  <div key={i} className="mb-6">
                    <h3 className="font-bold text-lg mb-2 text-blue-400">{slide.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm whitespace-pre-line">{slide.content}</p>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* MODAL COMPRA */}
      {showBuyModal && currentCourse && (
        <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50 p-4" onClick={closeModals}>
          <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[90vw] md:w-[40vw] p-6 relative" initial={{scale:0.8, opacity:0}} animate={{scale:1, opacity:1}} onClick={e=>e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><CreditCard className="w-5 h-5"/> Comprar {currentCourse.title}</h3>
            <input type="text" value={buyerName} onChange={e=>setBuyerName(e.target.value)} placeholder="Tu nombre" className="w-full mb-4 p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"/>
            <button onClick={sendWhatsapp} className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2"><CheckCircle className="w-5 h-5"/> Enviar a WhatsApp</button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
