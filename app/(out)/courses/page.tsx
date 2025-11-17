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
  FileText,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// --- ARRAY DE CURSOS ---
const courses = [
  {
    id: 1,
    title: "REFRIGERACION I (Domicilio)",
    preview: `Refrigeración I: Heladeras y Freezers.
Aprende desde cero a reparar y mantener equipos, practicando directamente sobre heladeras y freezers reales, guiado por docentes expertos.

Refrigeración Familiar: Heladeras y Freezers
Duración: 90 días.
Modalidad: Presencial con material virtual.
Nivel: Inicial – Intermedio – Avanzado (según corresponda)
Lo que aprenderás:
- Desarme, diagnóstico y detección de fallas.
- Reemplazo de componentes verificados.
- Manipulación segura de los diferentes refrigerantes.`,
    structuredContent: {
      objective: "Formar técnicos capaces de analizar, diagnosticar, evaluar y ejecutar intervenciones profesionales en sistemas de refrigeración doméstica —heladeras de un frío, dos fríos, sistemas No Frost y freezers— aplicando procedimientos seguros de manipulación de refrigerantes conforme a normativas vigentes, y tomando decisiones técnicas fundamentadas para la puesta en funcionamiento óptimo de los equipos.",
      modality: "Curso presencial y a distancia (b-learning)",
      schedule: [
        { days: "Martes y Jueves", hours: "18:00 a 19:30hs (Turno tarde)" },
        { days: "Lunes y Miércoles", hours: "18:00 a 19:30hs (Turno tarde)" },
      ],
      location: "Av. Marconi 365, Resistencia – Chaco",
      duration: "3 meses",
      fees: [
        { type: "Inscripción", amount: "$10.000 (cupos limitados)" },
        { type: "Pago único", amount: "$145.000 (efectivo, transferencia)" },
        { type: "2 cuotas", amount: "$80.000 (efectivo, transferencia)" },
        { type: "3 cuotas", amount: "$65.000 (efectivo, transferencia)" },
        { type: "Pago con tarjeta", amount: "Consultar valores" },
      ],
      contents: [
        {
          title: "Tema 1: Normas de seguridad en refrigeración doméstica",
          points: [
            "Reglas de seguridad personal y del entorno de trabajo",
            "Riesgos en la manipulación de refrigerantes",
            "Prohibiciones y procedimientos permitidos",
            "Gestión de residuos y normativa ambiental vigente"
          ]
        },
        {
          title: "Tema 2: Diagnóstico y reparación de heladeras y freezers",
          points: [
            "Identificación de fallas comunes",
            "Procedimientos de reparación seguros",
            "Medición y control de temperaturas",
            "Uso de herramientas y equipamiento especializado"
          ]
        },
        {
          title: "Tema 3: Sistemas No Frost y mantenimiento preventivo",
          points: [
            "Funcionamiento del sistema No Frost",
            "Limpieza y mantenimiento de serpentines",
            "Prevención de fallas y optimización del equipo"
          ]
        }
      ],
      contact: {
        whatsapp: "+54 362 5490089",
        email: "aircool.integral@gmail.com",
        instagram: "@aircoolrefrigeracion"
      }
    },
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
  },
  {
    id: 2,
    title: "Curso de Refrigeración II – Aire Acondicionado Split",
    preview: `Formate como técnico especializado en Instalación, aprendiendo paso a paso a montar e instalar equipos Split y Mini Split.

Aire Acondicionado Split
Duración: 30 Días
Modalidad: Presencial y a distancia (b-learning).
Nivel: Inicial – Intermedio – Avanzado (según corresponda)
Lo que aprenderás:
- Fijación de unidad interior y exterior.
- Correcto uso de gases refrigerantes.
- Acoples flare, soldaduras y vacío profesional.`,
    structuredContent: {
      objective: `Lograr las capacidades y destrezas de un profesional técnico para el montaje e instalación de equipos Split y mini Split de baja potencia, sujeto a las condiciones y normativas vigentes.`,
      modality: "Presencial y a distancia (b-learning)",
      schedule: [
        { days: "Martes y Jueves", hours: "15:30 a 17hs / 20:00 a 21:30" },
        { days: "Lunes y Miércoles", hours: "15:30 a 17hs / 20:00 a 21:30" }
      ],
      location: "Av. Marconi 365, Resistencia – Chaco",
      duration: "1 mes",
      fees: [
        { type: "Inscripción", amount: "$10.000" },
        { type: "Pago único", amount: "$65.000" },
        { type: "Pago con tarjeta en 2 cuotas", amount: "$35.000" }
      ],
      contents: [
        { title: "Tema 1: Normas de seguridad y prohibiciones", points: ["Seguridad personal", "Seguridad del entorno"] },
        { title: "Tema 2: Instalación de equipos", points: ["Montaje de split", "Conexión eléctrica", "Pruebas de funcionamiento"] }
      ],
      activities: [
        "27 clases grabadas en nuestro Campus Virtual",
        "Material PDF descargable",
        "Soporte telefónico personalizado",
        "Acceso ilimitado 24/7",
        "Certificado con reconocimiento del Ingeniero Orlando Miceli y el Lic. Rolando Miceli"
      ],
      requirements: ["Diploma con aval institucional"],
      contact: {
        whatsapp: "+54 362 5490089",
        email: "aircool.integral@gmail.com",
        instagram: "@aircoolrefrigeracion"
      }
    },
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"]
  },
  {
    id: 3,
    title: "Electricidad I - Instalaciones Eléctricas",
    preview: `Conviértete en técnico en instalaciones eléctricas. Aprende a realizar instalaciones seguras, leer planos y elegir protecciones.
Obtén un certificado que avala tus habilidades. El primer paso hacia un trabajo seguro y remunerado.

Electricidad Domiciliaria
Duración: 3 meses.
Modalidad: Presencial y/o virtual.
Nivel: Sin experiencia.
Lo que aprenderás:
- Circuitos y conexionado profesional.
- Montaje y configuración de tableros eléctricos.
- Técnicas de medición (multímetro y pinza amperométrica).
- Aplicación de normas IRAM, AEA y prácticas de seguridad.`,
    structuredContent: {
      objective: `Capacitar a personas sin experiencia previa en el área, para que adquieran los conocimientos y habilidades necesarias para desempeñarse como técnicos en instalaciones eléctricas domiciliarias, conforme a las normas vigentes de seguridad y buenas prácticas.`,
      modality: "Presencial y/o virtual",
      schedule: [
        { days: "3 días por semana", hours: "1,5hs por día (4,5hs semanales, 54hs totales)" }
      ],
      location: "Av. Marconi 365, Resistencia – Chaco",
      duration: "3 meses",
      fees: [
        { type: "Inscripción", amount: "$10.000" },
        { type: "Pago único", amount: "$120.000 (efectivo, transferencia)" },
        { type: "2 cuotas", amount: "$65.000" },
        { type: "3 cuotas", amount: "$45.000" },
        { type: "Pago con tarjeta", amount: "Consultar valores" },
      ],
      contents: [
        {
          title: "Módulo 1: Fundamentos de Electricidad (2 semanas)",
          points: [
            "Magnitudes eléctricas básicas: tensión, corriente, potencia y resistencia.",
            "Corriente continua y alterna.",
            "Unidades y leyes fundamentales (Ohm, Joule, Watt).",
            "Identificación de conductores y simbología eléctrica.",
            "Normas de seguridad eléctrica."
          ]
        },
        {
          title: "Módulo 2: Instalaciones domiciliarias (4 semanas)",
          points: [
            "Interpretación de planos eléctricos",
            "Instalación de tomas y circuitos de iluminación",
            "Selección de materiales y herramientas",
            "Prácticas seguras en instalaciones reales"
          ]
        }
      ],
      activities: [
        "Armado de un tablero domiciliario básico.",
        "Cableado e instalación de un circuito de iluminación y tomas.",
        "Simulación de fallas y diagnóstico.",
        "Aplicación de normas de seguridad en taller."
      ],
      requirements: [
        "Edad mínima: 18 años.",
        "Modalidad Presencial: completar el 80% de asistencia.",
        "Modalidad Virtual: completar el 100% de descargas y 100% de trabajos online.",
        "Evaluaciones – Modalidad Presencial: prácticas en taller y examen teórico-práctico final integrador.",
        "Evaluaciones – Modalidad Virtual: examen teórico-práctico final integrador en taller.",
        "Certificación: Instalador Domiciliario Nivel Inicial."
      ],
      contact: {
        whatsapp: "+54 362 5490089",
        email: "electricidad@example.com",
        instagram: "@electricidadtecnica"
      }
    },
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"]
  }
];

// --- COMPONENTE PRINCIPAL ---
export default function CursosPage() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [buyerName, setBuyerName] = useState("");

  const currentCourse = courses.find(c => c.id === selectedCourse);

  const openInfoModal = (id: number) => {
    setSelectedCourse(id);
    setShowInfoModal(true);
    setActiveSlide(0);
  };

  const openBuyModal = (id: number) => {
    setSelectedCourse(id);
    setShowBuyModal(true);
  };

  const closeModals = () => {
    setShowInfoModal(false);
    setShowBuyModal(false);
    setSelectedCourse(null);
    setActiveSlide(0);
    setBuyerName("");
  };

  const slides = currentCourse ? [
    { title: "Objetivo", icon: <Target />, content: currentCourse.structuredContent.objective },
    { title: "Duración y Modalidad", icon: <Clock />, content: (
      <div className="space-y-2">
        <div><strong>Duración:</strong> {currentCourse.structuredContent.duration}</div>
        <div><strong>Modalidad:</strong> {currentCourse.structuredContent.modality}</div>
        <div><strong>Días y horarios:</strong></div>
        <ul className="list-disc list-inside ml-5">
          {currentCourse.structuredContent.schedule.map((s, idx) => (
            <li key={idx}>{s.days} → {s.hours}</li>
          ))}
        </ul>
      </div>
    )},
    { title: "Lugar", icon: <MapPin />, content: currentCourse.structuredContent.location },
    { title: "Inversión", icon: <CreditCard />, content: (
      <ul className="list-disc list-inside ml-5 space-y-1">
        {currentCourse.structuredContent.fees.map((f, idx) => (
          <li key={idx}>{f.type}: {f.amount}</li>
        ))}
      </ul>
    )},
    { title: "Contenidos", icon: <FileText />, content: (
      <div className="space-y-2">
        {currentCourse.structuredContent.contents.map((topic, idx) => (
          <div key={idx}>
            <h4 className="font-semibold">{topic.title}</h4>
            <ul className="list-disc list-inside ml-5">
              {topic.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    )},
    { title: "Contacto", icon: <Mail />, content: (
      <ul className="space-y-1">
        <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> {currentCourse.structuredContent.contact.whatsapp}</li>
        <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> {currentCourse.structuredContent.contact.email}</li>
        <li className="flex items-center gap-2"><Instagram className="w-4 h-4" /> {currentCourse.structuredContent.contact.instagram}</li>
      </ul>
    )}
  ] : [];

  const sendWhatsapp = () => {
    if (!buyerName || !currentCourse) return;
    const message = `Hola, soy ${buyerName} y voy a enviar el comprobante de pago para el curso ${currentCourse.title}`;
    const phone = currentCourse.structuredContent.contact.whatsapp.replace(/\D/g,''); 
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <main className="py-10 px-5 md:px-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
    {courses.map((course, index) => (
      <motion.div
        key={course.id}
        whileHover={{ scale: 1.02 }}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-colors duration-300 max-w-sm w-full"
      >
        <div>
          <h2 className="text-2xl font-bold text-blue-300 flex items-center gap-2 mb-3">
            <BookOpen className="w-6 h-6" /> {course.title}
          </h2>

          {/* Descripción con títulos e iconos */}
          <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
            {index === 0 && (
              <>
                <div className="flex items-center gap-2 font-semibold">
                  <Target className="w-4 h-4 text-blue-300" /> Objetivo
                </div>
                <p>
                  Refrigeración I: Heladeras y Freezers.<br />
                  Aprende desde cero a reparar y mantener equipos, practicando directamente sobre heladeras y freezers reales, guiado por docentes expertos.
                </p>

                <div className="flex items-center gap-2 font-semibold">
                  <Clock className="w-4 h-4 text-blue-300" /> Duración y Modalidad
                </div>
                <p>
                  Refrigeración Familiar: Heladeras y Freezers<br />
                  Duración: 90 días<br />
                  Modalidad: Presencial con material virtual<br />
                  Nivel: Inicial – Intermedio – Avanzado (según corresponda)
                </p>

                <div className="flex items-center gap-2 font-semibold">
                  <FileText className="w-4 h-4 text-blue-300" /> Lo que aprenderás
                </div>
                <ul className="list-disc list-inside ml-5">
                  <li>Desarme, diagnóstico y detección de fallas</li>
                  <li>Reemplazo de componentes verificados</li>
                  <li>Manipulación segura de los diferentes refrigerantes</li>
                </ul>
              </>
            )}

            {index === 1 && (
              <>
                <div className="flex items-center gap-2 font-semibold">
                  <Target className="w-4 h-4 text-blue-300" /> Objetivo
                </div>
                <p>
                  Curso de Refrigeración II – Aire Acondicionado Split<br />
                  Fórmate como técnico especializado en Instalación, aprendiendo paso a paso a montar e instalar equipos Split y Mini Split.
                </p>

                <div className="flex items-center gap-2 font-semibold">
                  <Clock className="w-4 h-4 text-blue-300" /> Duración y Modalidad
                </div>
                <p>
                  Aire Acondicionado Split<br />
                  Duración: 30 Días<br />
                  Modalidad: Presencial y a distancia (b-learning)<br />
                  Nivel: Inicial – Intermedio – Avanzado (según corresponda)
                </p>

                <div className="flex items-center gap-2 font-semibold">
                  <FileText className="w-4 h-4 text-blue-300" /> Lo que aprenderás
                </div>
                <ul className="list-disc list-inside ml-5">
                  <li>Fijación de unidad interior y exterior</li>
                  <li>Correcto uso de gases refrigerantes</li>
                  <li>Acoples flare, soldaduras y vacío profesional</li>
                </ul>
              </>
            )}

            {index === 2 && (
              <>
                <div className="flex items-center gap-2 font-semibold">
                  <Target className="w-4 h-4 text-blue-300" /> Objetivo
                </div>
                <p>
                  Electricidad I - Instalaciones Eléctricas<br />
                  Conviértete en técnico en instalaciones eléctricas. Aprende a realizar instalaciones seguras, leer planos y elegir protecciones.
                </p>

                <div className="flex items-center gap-2 font-semibold">
                  <Clock className="w-4 h-4 text-blue-300" /> Duración y Modalidad
                </div>
                <p>
                  Electricidad Domiciliaria<br />
                  Duración: 3 meses<br />
                  Modalidad: Presencial y/o virtual<br />
                  Nivel: Sin experiencia
                </p>

                <div className="flex items-center gap-2 font-semibold">
                  <FileText className="w-4 h-4 text-blue-300" /> Lo que aprenderás
                </div>
                <ul className="list-disc list-inside ml-5">
                  <li>Circuitos y conexionado profesional</li>
                  <li>Montaje y configuración de tableros eléctricos</li>
                  <li>Técnicas de medición (multímetro y pinza amperométrica)</li>
                  <li>Aplicación de normas IRAM, AEA y prácticas de seguridad</li>
                </ul>
              </>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3">
            {course.images.map((img, idx) => (
              <div key={idx} className="relative w-full h-32 rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt={`Imagen curso ${course.title}`}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            onClick={() => openInfoModal(course.id)}
            className="w-1/2 bg-blue-300 hover:bg-blue-400 text-white py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-1"
          >
            <BookOpen className="w-5 h-5" /> Ver más
          </button>
          <button
            onClick={() => openBuyModal(course.id)}
            className="w-1/2 bg-blue-300 hover:bg-blue-400 text-white py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-1"
          >
            <CheckCircle className="w-5 h-5" /> Comprar
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</main>


     {/* MODAL INFO */}
{showInfoModal && currentCourse && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4" onClick={closeModals}>
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[40vw] h-[90vh] flex flex-col relative overflow-hidden"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 sticky top-0 z-10">
        <div className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
          <BookOpen className="w-6 h-6" /> {currentCourse.title}
        </div>
        <button onClick={closeModals} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <ArrowLeft className="w-5 h-5 text-gray-900 dark:text-white" />
        </button>
      </div>

      {/* Slides */}
      <div className="relative flex-1 flex items-center px-6 py-4 overflow-hidden">
        <button
          onClick={() => setActiveSlide((prev) => Math.max(prev - 1, 0))}
          disabled={activeSlide === 0}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-300 dark:bg-gray-700 disabled:opacity-50 z-20 shadow"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => setActiveSlide((prev) => Math.min(prev + 1, slides.length -1))}
          disabled={activeSlide === slides.length -1}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-300 dark:bg-gray-700 disabled:opacity-50 z-20 shadow"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full overflow-y-auto px-4 py-2"
        >
          <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            {slides[activeSlide].icon} {slides[activeSlide].title}
          </div>
          <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base space-y-2">
            {slides[activeSlide].content}
          </div>
        </motion.div>
      </div>

      {/* Indicador */}
      <div className="flex justify-center gap-2 p-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 sticky bottom-0">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors ${idx === activeSlide ? "bg-blue-400 dark:bg-blue-300" : "bg-gray-300 dark:bg-gray-600 dark:bg-gray-500"}`}
          ></span>
        ))}
      </div>
    </motion.div>
  </div>
)}

{/* MODAL COMPRA */}
{showBuyModal && currentCourse && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4" onClick={closeModals}>
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[40vw] p-6 flex flex-col relative overflow-hidden"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{currentCourse.title}</h2>
        <button onClick={closeModals} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <ArrowLeft className="w-5 h-5 text-gray-900 dark:text-white" />
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Tu nombre:</label>
        <input
          type="text"
          value={buyerName}
          onChange={(e) => setBuyerName(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          placeholder="Ingresa tu nombre"
        />
      </div>
      <button
        onClick={sendWhatsapp}
        className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-colors duration-200"
      >
        Enviar comprobante por WhatsApp
      </button>
    </motion.div>
  </div>
)}

    </div>
  );
}
